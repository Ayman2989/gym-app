import React from "react";
import { TypographyProps } from "./type";

const Typography: React.FC<TypographyProps> = ({
  tag = "p",
  text,
  classes,
  children,
  href,
  onClick,
}) => {
  return React.createElement(
    tag,
    tag === "a"
      ? { className: classes, href, onClick }
      : { className: classes, onClick },
    <>
      {text}
      {children}
    </>
  );
};

export default Typography;
