import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
//styles
import { Wrapper } from './assets/styles/App.styles';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const getProducts = async () => 
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  return (
    <div className="App">
      <p>Something is here</p>
    </div>
  );
}

export default App;
