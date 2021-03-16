import React, { FC } from 'react';
import './styles.css';

interface IProps{
  placeholder?: string
}

const InputLogin: FC<IProps> = ({ placeholder }: IProps) => (
  <input type="text" name="input" placeholder={placeholder} className="input" />
);

export default InputLogin;
