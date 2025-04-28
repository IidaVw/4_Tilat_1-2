import React, { useState } from 'react';

function App() {
  const [muoto, setMuoto] = useState('0px'); 
  const [vari, setVari] = useState('red');   
  const [numero, setNumero] = useState(1);  

  const painettu = () => {
    if (muoto === '0px') {
      setMuoto('100px');    
      setVari('green');     
      setNumero(2);         
    } else {
      setMuoto('0px');      
      setVari('red');       
      setNumero(1);         
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div 
        className="boksi"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: muoto,
          backgroundColor: vari,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          fontSize: '48px',
          color: 'white'
        }}
      >
        {numero}
      </div>
      <button onClick={painettu} style={{ marginTop: '20px', fontSize: '20px' }}>
        Vaihda muoto ༼ つ ◕_◕ ༽つ
      </button>
    </div>
  );
}

export default App;
