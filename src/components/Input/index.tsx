import React, { FC } from 'react';
import './styles.css';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  placeholder?: string
}

const Input: FC<IProps> = ({ placeholder }: IProps) => (
  <input type="text" name="input" placeholder={placeholder} className="input" />
);

export default Input;