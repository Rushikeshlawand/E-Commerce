// src/components/ContactForm.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Container using MUI's styled API
const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  margin: '100px',
  
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success', // 'success' | 'error'
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic Validation
    if (!name || !email || !message) {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Please fill out all fields.',
      });
      return;
    }

    // Email Regex for Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Simulate Form Submission (Replace with actual API call)
    console.log('Form submitted:', formData);

    // Reset Form
    setFormData({ name: '', email: '', message: '' });

    // Show Success Message
    setSnackbar({
      open: true,
      severity: 'success',
      message: 'Thank you for contacting us!',
    });
  };

  return (
    <FormContainer>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Box textAlign="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: '25px',
              transition: 'transform 0.3s, background-color 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* Snackbar for Feedback Messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default ContactForm;
