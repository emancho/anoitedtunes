"use client";

import { useState } from 'react';
import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '#about-us', label: 'About Us' },
  { link: '#services', label: 'Services' },
  { link: '#book-us', label: 'Book Us' },
];

export function Header() {
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
        document.querySelector(link.link).scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.title}>
          <Title order={1}>Anointed Tunes</Title>
        </div>
        <div className={classes.inner}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Group gap={5} visibleFrom="xs" className={classes.menuContainer}>
            {items}
          </Group>
        </div>
      </Container>
    </header>
  );
}
