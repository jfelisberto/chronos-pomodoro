import styles from './styles.module.css';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='#'>Entenda como funciona a técnica pomodoro</a>
        <h6>Chronos Pomodoro @ {new Date().getFullYear()} - Feito com 💚</h6>
      </footer>
    </>
  );
}
