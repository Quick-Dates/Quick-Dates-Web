import React from 'react';
import './styles.css';

interface IProps{
  placeholder?: string
}

export default function Input({ placeholder }: IProps) {
  return (
    <input type="text" name="input" placeholder={placeholder} className="input" />
  );
}
