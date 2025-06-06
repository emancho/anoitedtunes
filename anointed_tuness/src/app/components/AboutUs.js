"use client";

import React from 'react';
import { Title, Skeleton, Paper } from '@mantine/core';

const AboutUs = () => {
  return (
    <Paper shadow="xs" p="xl" id="about-us" style={{ textAlign: 'center', backgroundColor: '#C27AF9' }}>
      <div style={{ border: '5px solid white', padding: '10px', borderRadius: '5px', display: 'inline-block', marginBottom: '20px', backgroundColor: '#d4a1fb' }}>
        <Title order={2} size="2.5rem" fw={900} style={{ textAlign: 'center' }}>About Us</Title>
      </div>
      <img src="/AboutMeProfile.png" alt="About Us Profile" style={{ width: '400px', height: '400px', borderRadius: '80%', objectFit: 'cover', margin: '0 auto 20px auto' }} />
      <div>
        <p>At Anointed Tunes, we are dedicated to providing a unique musical experience that uplifts, heals, and inspires.
           Founded by Walter Tita, with live intermissions from his talented children on violin and piano, we bring heartfelt, spirit-driven music to your events.</p>
        <p>Our passion is to create unforgettable moments through conscious, uplifting music with a Christian foundation.</p>
      </div>
      <Title order={3} size="1.8rem" fw={700} style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px' }}>Why Choose Anointed Tunes?</Title>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px auto', fontSize: '1.1rem' }}>
        We bring a family-centered, spiritually uplifting energy to your events. With years of musical experience and a passion for excellence, we tailor our music to enhance the joy and meaning of your special day.
      </p>
    </Paper>
  );
};

export default AboutUs;
