import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          أهلاً بك في محلات الهيبة للدهان
        </Typography>
        <Typography variant="h6" color="text.secondary">
          نوفر أجود أنواع الدهانات وخدمات المقاولات تحت إشراف المهندس عبدالله الهيبة
        </Typography>
      </Box>
    </Container>
  );
}