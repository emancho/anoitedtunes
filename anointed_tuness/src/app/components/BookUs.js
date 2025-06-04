"use client";

import React from 'react';
import { Title, Paper, TextInput, Textarea, Button, Select, SimpleGrid, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const BookUs = () => {
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

  const handleSubmit = (values) => {
    // Determine the final event type to send
    const finalEventType = values.selectedEventType === 'other' ? values.customEventType : values.selectedEventType;

    // Process form submission, e.g., send to API
    console.log({
      name: values.name,
      email: values.email,
      eventType: finalEventType,
      preferredDate: values.preferredDate,
      message: values.message,
    });
    alert('Inquiry sent successfully!');
    form.reset(); // Clear form
  };

  return (
    <Paper shadow="xs" p="xl" id="book-us" style={{ textAlign: 'center' }}>
      <Title order={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Book Us</Title>
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
          <Button type="submit" size="md">Send Inquiry</Button>
        </Group>
      </form>
      <p style={{ marginTop: '20px' }}>We look forward to hearing from you and making your event truly special!</p>
    </Paper>
  );
};

export default BookUs;
