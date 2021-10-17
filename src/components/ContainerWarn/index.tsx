import React from "react";
import './styles.css';
import { FaExclamationTriangle } from "react-icons/fa";

export default function ContainerWarn({ warn }: any) {
  return (
    <div className="containerWarn">
      <h1 className="title-warn"> <FaExclamationTriangle />  {warn}</h1>
    </div>
  );
}
