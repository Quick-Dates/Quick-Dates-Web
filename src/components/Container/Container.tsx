import React from "react";
import "./styles.css";

interface Props {
  image: string;
  title: string;
  text: string;
  width: string;
}

export default function Container({ image, title, text, width }: Props) {
  return (
    <div className="containerComponent">
      <img
        src={image}
        alt="Image"
        style={{
          width: `${width}rem`,
        }}
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
