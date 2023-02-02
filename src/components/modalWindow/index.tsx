import React, { useState, useEffect, ReactChild } from "react";

import "./modalWindow.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  component: ReactChild;
}

export default function ModalWindow({
  open = false,
  onClose,
  component,
}: Props) {
  const [isOpen, setIsOpen] = useState(open);
  const [animation, setAnimation] = useState(open);

  const overlayClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const modal = document.querySelector(".modal");
    if (modal && !modal.contains(e.currentTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setIsOpen(open);
      }, 200);
    } else {
      setIsOpen(open);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setAnimation(open);
      }, 200);
    } else {
      setAnimation(open);
    }
  }, [open]);

  // if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  // } else {
  //     document.body.style.overflow = 'scroll';
  // }

  return (
    <div
      className={`overlay ${animation ? "show" : ""} ${isOpen ? "open" : ""}`}
      onClick={(e) => overlayClose(e)}
    >
      <div className="modal">
        {component}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
