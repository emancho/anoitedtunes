"use client";

import { useState } from 'react';
import { Burger, Container, Group, Title, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '#about-us', label: 'About Us' },
  { link: '#services', label: 'Services' },
  { link: '#book-us', label: 'Book Us' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        document.querySelector(link.link).scrollIntoView({ behavior: 'smooth' });
        close(); // Close drawer on link click
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.title}>
          <Title order={1} size="5rem" fw={900} style={{ color: '#5b079b' }}>Anointed Tunes</Title>
        </div>
        <div className={classes.inner}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
          <Group gap={20} visibleFrom="xs" className={classes.menuContainer}>
            {items}
          </Group>

          <Drawer opened={opened} onClose={close} size="xs" hiddenFrom="xs" title="Navigation">
            <Stack gap="md"> {/* Added gap for spacing between links in mobile menu */}
              {items}
            </Stack>
          </Drawer>
        </div>
      </Container>
    </header>
  );
}
