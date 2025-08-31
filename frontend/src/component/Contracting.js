import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Contracting() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          خدمات المقاولات
        </Typography>
        <Typography variant="body1" paragraph>
          نقدم خدمات المقاولات المتكاملة تحت إشراف المهندس عبدالله الهيبة.
          شاهد أعمالنا السابقة واطلب استشارتك المجانية.
        </Typography>
        <img
          src="https://via.placeholder.com/800x400"
          alt="مشاريع"
          style={{ width: '100%', borderRadius: 8 }}
        />
      </Box>
    </Container>
  );
}