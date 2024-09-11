import React, {useMemo, useState} from 'react';

const getLista = dados => {
  console.log(`Entrou em getLista : ${x.id}`)
  return (
    <ul>
      {dados.map(x => <li key={x.id}>{x.texto}</li>)}
    </ul>
  );
};

function App() {
  const [texto, setTexto] = useState('');
  const [dados, setDados] = useState([]);

  const lista = useMemo(() => getLista(dados), [dados]) ;

  return (
    <div>
      <input type="text" value={texto} onChange={e => setTexto(e.target.value)}/>
      <button onClick={() => setDados([...dados, {id:Number(Date.now()) , texto }])}>+</button>
      { lista }
    </div>
  );
}

export default App;
