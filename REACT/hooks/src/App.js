import './App.css';
import React, {useState, useEffect} from 'react';

function App(){
  //Gestion del estado (cuenta=0)
  const [cuenta,setCuenta]=useState(0);
  const [usuarios,setUsuarios]=useState([]);
  const [busqueda,setBusqueda]=useState('');

  //Efecto 
  useEffect(()=>{
    document.title=`Cuenta: ${cuenta}`;
  

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone=>respone.json())
    .then(data=>setUsuarios(data));
  },[cuenta]);

  //Filtrado para la busqueda de un usuario
  const usariosFiltrados=usuarios.filter(usuario=>usuario.name.toLowerCase().includes(busqueda.toLowerCase()));

  return(
    <div className='App'>
      <h1>Contador con useState y useEffect</h1>
      <p>Cuenta: {cuenta}</p>
      <button onClick={()=>setCuenta(cuenta+1)}>Incrementar</button>
      <button onClick={()=>setCuenta(cuenta-1)}>Decrementar</button>

      <h2>Busqueda de usuarios</h2>
      <input
        type='text'
        placeholder='Buscar usuario...'
        value={busqueda}
        onChange={e=>setBusqueda(e.target.value)}
      />
      <ul>
        {usariosFiltrados.map(usuario=>(
          <li
            key={usuario.id}
          >{usuario.name}</li>
        ))}
      </ul>    
    </div>
  );
}
export default App;
