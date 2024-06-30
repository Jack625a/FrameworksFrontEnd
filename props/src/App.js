import React from 'react';
import ComponenteHijo from './componenteHijo';
import ListaTareas from './ListaTareas';
import Galeria from './Galeria';
import Contador from './Contador';
import './App.css';


//Gestor de Comentarios


function App(){
  //Productos
  const producto={
    nombre:'Producto 1',
    precio: 20,
    descripcion:'Descripcion 1'
  };

  //Lista de Tareas
  const tareas=[
    {id:1,titulo:'Tarea 1',completada:false},
    {id:2,titulo:'Tarea 2',completada:true},
    {id:3,titulo:'Tarea 3',completada:false},
  ];

    //Galeria de Imagenes
    const imagenes=[
      {id:1,url:'https://sigdeletras.com/images/blog/202004_react_leaflet/react.png', titulo:'Titulo 1'},
      {id:2,url:'https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg', titulo:'Titulo 2'},
      {id:3,url:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png', titulo:'Titulo 3'},
      {id:4,url:'https://www.tithink.com/wp-content/uploads/2018/11/React-Native-large.jpg', titulo:'Titulo 4'},
    ];


  return(
    <div className='App'>
      <h1>Lista de Productos</h1>
      <ComponenteHijo
        nombre={producto.nombre}
        precio={producto.precio}
        descripcion={producto.descripcion}
      />
       <h2>Lista de Tareas</h2>
      <ListaTareas
      tareas={tareas}
      />

      <h2>Galeria de Imagenes</h2>
      <Galeria
      imagenes={imagenes}
      />


      <h2>Contador - Componente de Clase</h2>
      <Contador/>
     
    </div>
  );
}

export default App;
