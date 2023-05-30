import React, { useState } from 'react';

function ButtonStyleToggle() {
  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled(prevState => !prevState);
  };

  const buttonStyle = {
    backgroundColor: isStyled ? 'blue' : 'red',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      <button onClick={toggleStyle} style={buttonStyle}>
        Toggle Style
      </button>
    </div>
  );
}

export default ButtonStyleToggle;
