"use client";

import React, { useState } from 'react';
import { Title, Paper, TextInput, Textarea, Button, Select } from '@mantine/core';

const BookUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEventType, setSelectedEventType] = useState(null); // New state for Select
  const [eventType, setEventType] = useState(''); // Keep for "Type of Event" text input if needed, or remove if Select replaces it entirely
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const eventTypeOptions = [
    { value: 'live_performance', label: 'Live Performance' },
    { value: 'studio_recording', label: 'Studio Recording' },
    { value: 'music_lesson', label: 'Music Lesson' },
    { value: 'event_collaboration', label: 'Event Collaboration' },
    { value: 'other', label: 'Other' }, // Added "Other" option
  ];

  const isValidEmail = (email) => {
    // Basic email regex validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;

    if (!email || !isValidEmail(email)) { // Ensure email is not empty and valid
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    // Determine the final event type to send
    const finalEventType = selectedEventType === 'other' ? eventType : selectedEventType;

    if (valid) {
      // Process form submission, e.g., send to API
      console.log({
        name,
        email,
        eventType: finalEventType, // Use the determined final event type
        preferredDate,
        message,
      });
      alert('Inquiry sent successfully!');
      // Clear form
      setName('');
      setEmail('');
      setSelectedEventType(null); // Clear selected event type
      setEventType(''); // Clear custom event type
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
        <Select
          label="Select Event Type"
          placeholder="Pick one"
          data={eventTypeOptions}
          value={selectedEventType}
          onChange={setSelectedEventType}
          style={{ marginBottom: '15px' }}
        />
        {selectedEventType === 'other' && ( // Conditionally render
          <TextInput
            label="Type of Event (Please specify)"
            placeholder="e.g., Birthday Party, Charity Gala"
            required // Make required when "Other" is selected
            value={eventType}
            onChange={(event) => setEventType(event.currentTarget.value)}
            style={{ marginBottom: '15px' }}
          />
        )}
        <TextInput
          type="date"
          label="Preferred Date"
          value={preferredDate}
          onChange={(event) => setPreferredDate(event.currentTarget.value)}
          style={{ marginBottom: '15px' }}
        />
        <Textarea
          label="Event Details"
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
