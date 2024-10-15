import React from "react";
import { MediaProps } from "./type";

const Media: React.FC<MediaProps> = ({
  mediaType,
  src,
  alt,
  containerClasses,
  mediaClasses,
}) => {
  if (mediaType == "img") {
    return (
      <div className={containerClasses}>
        <img src={src} alt={alt} className={mediaClasses} />
      </div>
    );
  } else {
    return;
    <div>
      <video src={src} />;
    </div>;
  }
};

export default Media;
