import styles from './styles.module.css';

type MenuItem = {
  url: string;
  icon: React.ReactNode;
};

type MenuProps = {
  items: MenuItem[];
};

export function Menu({ items }: MenuProps) {
  console.log(items);
  return (
    <nav className={styles.menu}>
      {items.map((menu, index) => (
        <a key={index} href={menu.url} className={styles.menuLink}>
          {menu.icon}
        </a>
      ))}
    </nav>
  );
}
