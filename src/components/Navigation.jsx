import { useState } from 'react';
import { Container, Group, Burger, Image, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import JmLogo from '../assets/JmlLogo.png';
import classes from './Navigation.module.css';

const links = [
  { link: '#about', label: 'About' },
  { link: '#resume', label: 'Resume' },
  { link: '#projects', label: 'Projects' },
];

function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);

        const section = document.querySelector(link.link);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }

        close(); 
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={JmLogo} alt="JM Lagumbay" className={classes.logo} />
        <Group className={classes.linksGroup} gap={5}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>


      <Drawer
        opened={opened}
        onClose={close}
      
        size="100%"
        className={classes.drawer}
      >
        <ScrollArea style={{ height: '100vh', width:'100%', backgroundColor: 'white' } }>
          <div className={classes.mobileLinks}>{items}</div>
        </ScrollArea>
      </Drawer>
    </header>
  );
}

export default Navigation;
