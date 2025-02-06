import React from "react";

const HangmanSVG = ({ numberOfIncorrectGuesses }) => {
  const HANGMANSTEPS = [
    <line className="" key={1} x1="1%" y1="95%" x2="99%" y2="95%"></line>,
    <line className="" key={2} x1="30%" y1="95%" x2="30%" y2="5%"></line>,
    <line className="" key={3} x1="30%" y1="5%" x2="70%" y2="5%"></line>,
    <line className="" key={4} x1="70%" y1="5%" x2="70%" y2="25%"></line>,
    <circle className="" key={5} cx="70%" cy="30%" r="2%"></circle>,
    <line className="" key={6} x1="70%" y1="35%" x2="70%" y2="45%"></line>,
    <line className="" key={7} x1="70%" y1="45%" x2="68%" y2="55%"></line>,
    <line className="" key={8} x1="70%" y1="45%" x2="72%" y2="55%"></line>,
    <line className="" key={9} x1="70%" y1="38%" x2="68%" y2="46%"></line>,
    <line className="draw" key={10} x1="70%" y1="38%" x2="72%" y2="46%"></line>,
  ];

  return (
    <div className="hangmanGraphic">
      <svg xmlns="http://www.w3.org/2000/svg">
        {HANGMANSTEPS.slice(0, numberOfIncorrectGuesses)}
      </svg>
    </div>
  );
};

export default HangmanSVG;
