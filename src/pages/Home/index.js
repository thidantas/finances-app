import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';

import api from '../../services/api';

import Header from '../../components/Header';

import { Background } from './styles.js';

export default function Home() {
  const [listBalance, setListBalance] = useState([]);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy');

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => (isActive = false);
  }, []);

  return (
    <Background>
      <Header title="Minhas movimentações" />
    </Background>
  );
}
