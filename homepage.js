// src/components/HomePage.js
import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #000000, #6A1B9A)', color: '#fff' }}>
        <Toolbar>
          {/* Logo */}
          <img src="AutoPenLogo.png" alt="AutoPen Logo" style={{ marginRight: '10px', width: '100px', height: '100px' }} />

          {/* AutoPen Title */}
          <Typography variant="h1" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold' }}>
            AutoPen
          </Typography>

          {/* Navigation Buttons */}
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>About</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Box component="section" id="features" sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Key Features
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 4 }}>
            {/* Replace the image paths with your actual icons */}
            <div>
              <img src="EnhancedSecurityIcon.png" alt="Security Icon" width="200" height="200" />
              <Typography variant="h6">Enhanced Security</Typography>
              <Typography variant="body2">Identify and rectify vulnerabilities in your networks and systems.</Typography>
            </div>
            <div>
              <img src="SpeedIcon.png" alt="Speed Icon" width="200" height="200" />
              <Typography variant="h6">Quick and Efficient</Typography>
              <Typography variant="body2">Rapidly scan and analyze large volumes of data for faster results.</Typography>
            </div>
            <div>
              <img src="adaptIcon.png" alt="Adapt Icon" width="200" height="200" />
              <Typography variant="h6">Adaptive Testing</Typography>
              <Typography variant="body2">Stay ahead of evolving threats with machine learning.</Typography>
            </div>
          </Box>
          <Button variant="contained" color="primary" href="#features">
            Learn More
          </Button>
        </Container>
      </Box>

      <Box component="section" id="about" sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            AutoPen is a leading provider of AI-powered penetration testing solutions, dedicated to helping businesses secure their digital assets.
          </Typography>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or inquiries, please feel free to contact our team.
          </Typography>
          <Button variant="contained" color="primary" href="contact.html">
            Contact Us
          </Button>
        </Container>
      </Box>

      <Box component="footer" sx={{ backgroundColor: '#333', color: 'white', py: 2 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2023 AutoPen. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
