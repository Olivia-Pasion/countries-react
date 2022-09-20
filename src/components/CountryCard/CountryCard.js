import React from 'react';

export default function CountryCard({ name }) {
  return (
    <div className='country-card'>
      <div className='name'>{name}</div>
    </div>
  );
}