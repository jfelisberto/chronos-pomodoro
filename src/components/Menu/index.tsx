import styles from './styles.module.css';
import { HouseIcon, RotateCcwClockIcon, SettingsIcon, SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <RotateCcwClockIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
