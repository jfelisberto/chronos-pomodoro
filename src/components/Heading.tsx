import type React from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  console.log(styles, props);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
