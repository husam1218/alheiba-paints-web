import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const products = [
  { id: 1, name: 'دهان داخلي', price: 25, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'دهان خارجي', price: 30, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'دهان الهيبة', price: 35, image: 'https://via.placeholder.com/300' },
];

export default function Products() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        منتجاتنا
      </Typography>
      <Grid container spacing={4}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card>
              <CardMedia component="img" height="200" image={p.image} alt={p.name} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.price} ريال
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}