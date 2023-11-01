// Card.jsx
import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Hola {input1}!</h2>
      <p>Sabemos que tu color favorito es: <span style={{color: input2}}>{input2}</span></p>
    </div>
  );
};

export default Card;