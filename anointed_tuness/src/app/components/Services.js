"use client";

import React from 'react';
import { Title, Paper, SimpleGrid, Text } from '@mantine/core';

const Services = () => {
  return (
    <Paper shadow="xs" p="xl" id="services" style={{ textAlign: 'center', backgroundColor: '#C27AF9' }}>
      <div style={{ border: '5px solid white', padding: '10px', borderRadius: '5px', display: 'inline-block', marginBottom: '20px', backgroundColor: '#d4a1fb' }}>
        <Title order={2} size="2.5rem" fw={900} style={{ textAlign: 'center' }}>Our Services</Title>
      </div>
      <div>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl"> {/* Increased spacing */}
          <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <Text fw={700} td="underline">Live Performances:</Text>
            <Text>Engaging musical performances for weddings, corporate events, church services, and private parties.</Text>
          </Paper>
          <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <Text fw={700} td="underline">Studio Recordings:</Text>
            <Text>Professional-grade audio recordings for albums, singles, and collaborations.</Text>
          </Paper>
          <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <Text fw={700} td="underline">Music Lessons:</Text>
            <Text>Personalized lessons for various instruments and vocal training, catering to all skill levels.</Text>
          </Paper>
          <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <Text fw={700} td="underline">Event Collaboration:</Text>
            <Text>Partner with us to create unique musical experiences tailored to your event's theme and audience.</Text>
          </Paper>
        </SimpleGrid>
        <p style={{ marginTop: '20px' }}>We are committed to providing high-quality musical services that meet your specific needs and exceed your expectations. Contact us today to discuss how we can bring your musical vision to life!</p>
      </div>
    </Paper>
  );
};

export default Services;
