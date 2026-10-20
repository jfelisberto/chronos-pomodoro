import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Button } from './Buttons';
import { Input } from './Fields/Input';
import styles from './styles.module.css';

export function Form() {
  return (
    <form action='' method='post' className={styles.form}>
      <div className={styles.formRow}>
        <Input type='text' id='task' name='task' label='Task' placeholder='Digite aqui' />
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
