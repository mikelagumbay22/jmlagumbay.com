import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navigation.module.css';

const links = [
  { link: '/about', label: 'About' },
  { link: '/resume', label: 'Resume' },
  { link: '/projects', label: 'Projects' },
  { link: '/getintouch', label: 'Get in touch' },
];

function Navigation() {
  const [opened, { toggle }] = useDisclosure(false);
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
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Container className={classes.header}>
      <Container  className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </Container>
  );
}

export default Navigation;