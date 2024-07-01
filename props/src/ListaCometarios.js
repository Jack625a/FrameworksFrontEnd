//
import React, {Component} from 'react';
import Comentario from './Comentario';

//Creacion de la clase ListaComentarios
class ListaComentarios extends Component{
    render(){
        const {comentarios}=this.props;
        return(
            <div className='lista-comentarios'>
                {comentarios.map(comentario=>(
                    <Comentario
                        key={comentario.id}
                        autor={comentario.autor}
                        texto={comentario.texto}
                    />
                ))}
            </div>
        );
    }
}

export default ListaComentarios;