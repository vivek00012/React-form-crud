import React, { useState } from 'react';
import './style.css';
import Table from './components/table';
import Form from './components/formContent';
import { useGlobalContext } from './globalContextProvider';

export default function App() {
  return (
    <div>
      <Table />
      <Form />
    </div>
  );
}
