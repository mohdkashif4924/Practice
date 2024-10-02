import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const OuterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  padding: 2rem;
`;

const ContentContainer = styled(Box)`
  background-color: white;
  padding: 2rem;
  text-align: center;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StyledForm = styled(Box)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const InfoBox = styled(Grid)`
  margin-top: 1.5rem;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can integrate an API to submit the form here
  };

  return (
    <OuterContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        {/* First half: "Contact Us", Paragraph, and Horizontal Contact Info */}
        <Grid item xs={12} md={6}>
          <ContentContainer>
            <Typography variant="h3" color="black" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" color="black" paragraph>
              If you have any questions, feel free to reach out to us by filling out the form below.
              We’ll get back to you as soon as possible.
            </Typography>

            {/* Horizontal Contact Information */}
            <InfoBox container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="black">
                  <LocationOnIcon fontSize="small" /> Location
                </Typography>
                <Typography variant="body1" color="black">
                  1234 Main St, City, Country
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="black">
                  <PhoneIcon fontSize="small" /> Call
                </Typography>
                <Typography variant="body1" color="black">
                  +123 456 7890
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="black">
                  <EmailIcon fontSize="small" /> Email
                </Typography>
                <Typography variant="body1" color="black">
                  info@example.com
                </Typography>
              </Grid>
            </InfoBox>
          </ContentContainer>
        </Grid>

        {/* Second half: Form */}
        <Grid item xs={12} md={6}>
          <StyledForm component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" color="black" textAlign="center" gutterBottom>
              <EmailIcon /> Get In Touch
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              sx={{ mt: 2 }}
              fullWidth
            >
              Submit
            </Button>
          </StyledForm>
        </Grid>
      </Grid>
    </OuterContainer>
  );
};

export default ContactUs;