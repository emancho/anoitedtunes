"use client";

import React from 'react';
import { Title, Paper } from '@mantine/core';

const Services = () => {
  return (
    <Paper shadow="xs" p="xl" id="services" style={{ textAlign: 'center' }}>
      <Title order={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</Title>
      <div>
        <ul>
          <li><strong>Live Performances:</strong> Engaging musical performances for weddings, corporate events, church services, and private parties.</li>
          <li><strong>Studio Recordings:</strong> Professional-grade audio recordings for albums, singles, and collaborations.</li>
          <li><strong>Music Lessons:</strong> Personalized lessons for various instruments and vocal training, catering to all skill levels.</li>
          <li><strong>Event Collaboration:</strong> Partner with us to create unique musical experiences tailored to your event's theme and audience.</li>
        </ul>
        <p>We are committed to providing high-quality musical services that meet your specific needs and exceed your expectations. Contact us today to discuss how we can bring your musical vision to life!</p>
      </div>
    </Paper>
  );
};

export default Services;
