"use client";

import React, { useState } from 'react';
import { Title, Paper, TextInput, Textarea, Button } from '@mantine/core';

const BookUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const isValidEmail = (email) => {
    // Basic email regex validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;

    if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (valid) {
      // Process form submission, e.g., send to API
      console.log({
        name,
        email,
        eventType,
        preferredDate,
        message,
      });
      alert('Inquiry sent successfully!');
      // Clear form
      setName('');
      setEmail('');
      setEventType('');
      setPreferredDate('');
      setMessage('');
    }
  };

  return (
    <Paper shadow="xs" p="xl" id="book-us" style={{ textAlign: 'center' }}>
      <Title order={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Book Us</Title>
      <p>Ready to experience the magic of Anointed Tunes at your next event? We would love to be a part of your special occasion! Please fill out the form below or contact us directly to discuss your needs and check our availability.</p>
      <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }} onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          placeholder="Your Name"
          required
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          style={{ marginBottom: '15px' }}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          error={emailError}
          style={{ marginBottom: '15px' }}
        />
        <TextInput
          label="Type of Event"
          placeholder="e.g., Wedding, Party"
          value={eventType}
          onChange={(event) => setEventType(event.currentTarget.value)}
          style={{ marginBottom: '15px' }}
        />
        <TextInput
          type="date"
          label="Preferred Date"
          value={preferredDate}
          onChange={(event) => setPreferredDate(event.currentTarget.value)}
          style={{ marginBottom: '15px' }}
        />
        <Textarea
          label="Message"
          placeholder="Tell us more about your event"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button type="submit" fullWidth>Send Inquiry</Button>
      </form>
      <p style={{ marginTop: '20px' }}>We look forward to hearing from you and making your event truly special!</p>
    </Paper>
  );
};

export default BookUs;
