import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          تواصل معنا
        </Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/966XXXXXXXXX"
          sx={{ m: 1 }}
        >
          واتساب
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PhoneIcon />}
          href="tel:+966XXXXXXXXX"
          sx={{ m: 1 }}
        >
          اتصال
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          العنوان: شارع الأمير سلطان، جدة
        </Typography>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.926569571421!2d39.1835!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI5JzA5LjAiTiAzOcKwMTEnMDEuMCJF!5e0!3m2!1sar!2ssa!4v1650000000000"
          width="100%"
          height="300"
          style={{ border: 0, marginTop: 16 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
}