import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => setProducts(res.data));
  }, []);

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