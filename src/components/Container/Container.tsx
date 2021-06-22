/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
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
