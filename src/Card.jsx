import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card" >
      <h2>Hola {input1}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <p style={{backgroundColor: input2, color: 'white', width: 100, height: 50,}}>{input2}</p>
    </div>
  );
};

export default Card;