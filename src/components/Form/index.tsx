import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Button } from './Buttons';
import { Input } from './Fields/Input';
import styles from './styles.module.css';
import type React from 'react';

type FormProps = {
  numero?: React.ReactNode;
};

export function Form(numero: FormProps) {
  return (
    <form action='' method='post' className={styles.form}>
      <div className={styles.formRow}>
        <Input type='text' id='task' name='task' label={numero.numero?.toString()} placeholder='Digite aqui' />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <Button icon={<PlayCircleIcon />} color='green' />
        {/* <Button icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
