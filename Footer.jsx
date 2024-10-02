import React from 'react';
import { Grid, Box, Typography, Button, TextField, Container } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Map from './Map'; // Assuming you have a Google Map component

const FooterContainer = styled(Box)`
  background-color: #222;
  color: white;
  padding: 2rem 0;
`;

const FooterGrid = styled(Grid)`
  text-align: left;
  padding: 1rem;
`;

const LogoBox = styled(Box)`
  margin-bottom: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* First Grid - Logo and Company Information */}
          <FooterGrid item xs={12} md={4}>
            <LogoBox>
              <Typography variant="h5" component="div" gutterBottom>
                Company Logo
              </Typography>
              <Typography variant="body1" color="white">
                About our company. We provide high-quality services to our clients, delivering great value and satisfaction.
              </Typography>
            </LogoBox>
            <Typography variant="h6" color="white" gutterBottom>
              <LocationOnIcon fontSize="small" /> Location
            </Typography>
            <Typography variant="body1" color="white">
              1234 Main St
            </Typography>
            <Typography variant="body1" color="white">
              City, Country
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
              <PhoneIcon fontSize="small" /> Call Us
            </Typography>
            <Typography variant="body1" color="white">
              +123 456 7890
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
              <EmailIcon fontSize="small" /> Email
            </Typography>
            <Typography variant="body1" color="white">
              info@example.com
            </Typography>
          </FooterGrid>

          {/* Second Grid - Useful Links */}
          <FooterGrid item xs={12} md={4}>
            <Typography variant="h5" color="white" gutterBottom>
              Work With Our Best Team
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
              Useful Links
            </Typography>
            <Typography variant="body1" color="white">
              Homepage
            </Typography>
            <Typography variant="body1" color="white">
              About Us
            </Typography>
            <Typography variant="body1" color="white">
              Services
            </Typography>
            <Typography variant="body1" color="white">
              Clients
            </Typography>
            <Typography variant="body1" color="white">
              Contact Us
            </Typography>
          </FooterGrid>

          {/* Third Grid - Join Us and Google Map */}
          <FooterGrid item xs={12} md={4}>
            <Typography variant="h5" color="white" gutterBottom>
              Join Us
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <TextField
                label="Your Email"
                variant="outlined"
                size="small"
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" color="primary">
                Join Us
              </Button>
            </Box>

            <Box mt={4}>
              <Typography variant="h5" color="white" gutterBottom>
                Our Location
              </Typography>
              {/* Assuming you have a Map component */}
              <Box
                width="100%"
                height="200px"
                sx={{
                  backgroundColor: 'gray', // Placeholder for Google Map
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Map /> {/* You can replace this with an actual Google Map */}
              </Box>
            </Box>
          </FooterGrid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
