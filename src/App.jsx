import React from 'react';
import Caixa from './Components/Card/index';
import Header from './Components/Header';
import img from './Utils/Images/imgCard.jpg';

export default function App() {
  return (
    <div>
      <Header title="Pitang" rotas={['HOME', 'CONTEUDO', 'CONTATO']} />

      <Caixa title="Pitang" srcImg={img} />

    </div>
  );
}
