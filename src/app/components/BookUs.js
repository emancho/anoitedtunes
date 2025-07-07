"use client";

import React, { useState } from 'react';
import { Title, Paper, TextInput, Textarea, Button, Select, SimpleGrid, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const BookUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const eventTypeOptions = [
    { value: 'live_performance', label: 'Live Performance' },
    { value: 'studio_recording', label: 'Studio Recording' },
    { value: 'music_lesson', label: 'Music Lesson' },
    { value: 'event_collaboration', label: 'Event Collaboration' },
    { value: 'other', label: 'Other' },
  ];

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      selectedEventType: null,
      customEventType: '', // For "Other" option
      preferredDate: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (!/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : null),
      selectedEventType: (value) => (value === null ? 'Please select an event type' : null),
      customEventType: (value, values) =>
        values.selectedEventType === 'other' && value.trim().length === 0
          ? 'Please specify the event type'
          : null,
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null); // Clear previous errors

    const finalEventType = values.selectedEventType === 'other' ? values.customEventType : values.selectedEventType;

    const payload = {
      name: values.name,
      email: values.email,
      eventType: finalEventType,
      preferredDate: values.preferredDate,
      message: values.message,
    };

    // Use the environment variable for your AWS API Gateway endpoint
    const apiGatewayEndpoint = process.env.NEXT_PUBLIC_API_URL; 

    try {
      const response = await fetch(apiGatewayEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send inquiry');
      }

      alert('Inquiry sent successfully!');
      form.reset(); // Clear form
    } catch (err) {
      console.error('Error sending inquiry:', err);
      setError(err.message || 'An unexpected error occurred.');
      alert(`Error: ${err.message || 'An unexpected error occurred.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper shadow="xs" p="xl" id="book-us" style={{ textAlign: 'center', backgroundColor: '#C27AF9' }}>
      <div style={{ border: '5px solid white', padding: '10px', borderRadius: '5px', display: 'inline-block', marginBottom: '20px', backgroundColor: '#d4a1fb' }}>
        <Title order={2} size="2.5rem" fw={900} style={{ textAlign: 'center' }}>Book Us</Title>
      </div>
      <p>Ready to experience the magic of Anointed Tunes at your next event? We would love to be a part of your special occasion! Please fill out the form below or contact us directly to discuss your needs and check our availability.</p>
      <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }} onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your Name"
            required
            {...form.getInputProps('name')}
          />
          <TextInput
            type="email"
            label="Email"
            placeholder="Your Email"
            required
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <Select
          label="Select Event Type"
          placeholder="Pick one"
          data={eventTypeOptions}
          required
          {...form.getInputProps('selectedEventType')}
          onChange={(value) => {
            form.setFieldValue('selectedEventType', value);
            if (value !== 'other') {
              form.setFieldValue('customEventType', ''); // Clear custom type if "Other" is deselected
            }
          }}
          style={{ marginBottom: '15px' }}
        />
        {form.values.selectedEventType === 'other' && (
          <TextInput
            label="Type of Event (Please specify)"
            placeholder="e.g., Birthday Party, Charity Gala"
            required
            {...form.getInputProps('customEventType')}
            style={{ marginBottom: '15px' }}
          />
        )}
        <TextInput
          type="date"
          label="Preferred Date"
          {...form.getInputProps('preferredDate')}
          style={{ marginBottom: '15px' }}
        />
        <Textarea
          label="Message"
          placeholder="Tell us more about your event"
          rows={5}
          {...form.getInputProps('message')}
          style={{ marginBottom: '20px' }}
        />
        <Group justify="center" mt="xl">
          <Button type="submit" size="md" loading={loading}>
            Send Inquiry
          </Button>
        </Group>
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
      </form>
      <p style={{ marginTop: '20px' }}>We look forward to hearing from you and making your event truly special!</p>
    </Paper>
  );
};

export default BookUs;
