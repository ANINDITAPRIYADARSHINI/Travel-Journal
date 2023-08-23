import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  })
  return (
    <div>
      <Navbar logo="logo.png"
              title="  My Travel Journal" />
      <section>{cards}</section>
    </div>
  );
}
