import React from "react";
import "./video.scss";

export default function Video({ modalClose }: { modalClose: () => void }) {
  return (
    <div className="video">
      <div onClick={modalClose} className="video__close">
        &#10006;
      </div>
      <div className="video__wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zjbPzewshbY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
