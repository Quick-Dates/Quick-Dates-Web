import React from 'react';
import './styles.css';

export interface IProps {
  progress: string;
}

export default function ProgressBar({ progress }: IProps) {
  function colorProgress(): string {
    if (+progress <= 30) {
      return '#F53C30';
    }
    if (+progress <= 70) {
      return '#1DC3C4';
    }
    return '#0CCD09';
  }
  return (
    <>
      <div className="container-progress">
        <div className="container-progress-bar">
          <div className="progress-bar" style={{ width: `${progress}%`, background: colorProgress() }} />
        </div>
        <span className="progress-number" style={{ color: colorProgress() }}> { progress }% </span>
      </div>
    </>
  );
}
