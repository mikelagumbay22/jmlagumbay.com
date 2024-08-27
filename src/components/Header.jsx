// Header.jsx
import { Title } from '@mantine/core';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  return (
    <div className={styles.header}>
      <Title 
        order={1} 
        className={styles.mainTitle}
      >
        JM LAGUMBAY
      </Title>
      <Title order={6} className={styles.subTitle}>
        I am a Full Stack Web Developer
      </Title>
    </div>
  );
}

export default Header;
