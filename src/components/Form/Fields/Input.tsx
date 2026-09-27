import type React from 'react';
import styles from './../styles.module.css';

type InputProps = {
  id: string;
  name: string;
  label?: string;
} & React.ComponentProps<'input'>;
export function Input({ type, id, name, label, ...rest }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} name={name} id={id} {...rest} className={styles.input} />
    </>
  );
}
