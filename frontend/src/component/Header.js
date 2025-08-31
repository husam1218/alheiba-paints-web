import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0d47a1' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          الهيبة للدهان
        </Typography>
        <Button color="inherit" component={Link} to="/">الرئيسية</Button>
        <Button color="inherit" component={Link} to="/products">المنتجات</Button>
        <Button color="inherit" component={Link} to="/contracting">المقاولات</Button>
        <Button color="inherit" component={Link} to="/contact">تواصل</Button>
      </Toolbar>
    </AppBar>
  );
}