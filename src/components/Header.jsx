// Header.jsx
import { Title } from '@mantine/core';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  return (
    <div className={styles.header}>
      <Title 
        order={1} 
        size="5rem" 
        style={{ color: 'lime', position: 'relative' }}
      >
        JM LAGUMBAY
      </Title>
      <Title order={6}>I am a Full Stack Web Developer</Title>
    </div>
  );
}

export default Header;
