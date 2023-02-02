import React, { ReactChild, useEffect } from 'react'
import './Modal.scss'
import { CSSTransition } from 'react-transition-group'

interface Props {
  isOpened: boolean
  children: ReactChild
}

export default function Modal({ isOpened, children }: Props) {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden'
    }
    if (!isOpened) {
      document.body.style.overflow = ''
    }
  }, [isOpened])

  return (
    <CSSTransition in={isOpened} classNames="modal" timeout={300} unmountOnExit>
      <div className="modal__wrapper">{children}</div>
    </CSSTransition>
  )
}
