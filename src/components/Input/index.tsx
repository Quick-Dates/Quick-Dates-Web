import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef(null);
  const {
    fieldName, defaultValue, registerField,
  } = useField(name as string);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);
  return <input ref={inputRef} defaultValue={defaultValue} {...rest} className="input" />;
}
