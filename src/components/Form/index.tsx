import { Cycles } from '../Cycles';
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
        <button>Enviar</button>
      </div>
    </form>
  );
}
