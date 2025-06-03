"use client";

import React from 'react';
import { Title, Skeleton, Paper } from '@mantine/core';

const AboutUs = () => {
  return (
    <Paper shadow="xs" p="xl" id="about-us" style={{ textAlign: 'center' }}>
      <Title order={2} style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</Title>
      <Skeleton height={200} width="80%" style={{ margin: '0 auto 20px auto' }} radius="md" />
      <div>
        <p>Welcome to Anointed Tunes! We are a passionate group dedicated to delivering uplifting and inspiring music for all occasions. Our mission is to spread joy and positivity through our harmonious melodies and heartfelt performances.</p>
        <p>With years of experience, our team of talented musicians brings a unique blend of traditional and contemporary sounds, ensuring a memorable experience for every audience. We believe in the power of music to connect, heal, and uplift spirits.</p>
      </div>
    </Paper>
  );
};

export default AboutUs;
