import React,  {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
            nombre:'',
            email:'',
            mensaje:'',
            enviado:false
        };
    }

    //Acciones
    manejoCambios=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    };

    manejoEnvio=(event)=>{
        event.preventDefault();
        this.setState({enviado:true});
    };

    render(){
        if(this.state.enviado){
            return alert('Mensaje Recibido Correctamente!, Gracias por tu mensaje {this.state.nombre}');
        }
        return(
            <form className='formulario-contacto'
            onSubmit={this.manejoEnvio}>
            <div>
            <label>Nombre: </label>
            <input
                type='text'
                name='nombre'
                value={this.state.nombre}
                required
                onChange={this.manejoCambios}
            />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type='email'
                    name='email'
                    value={this.state.email}
                    required
                    onChange={this.manejoCambios}
                />
            </div>
            <div>
                <label>Mensaje: </label>
                <textarea
                    value={this.state.mensaje}
                    name='mensaje'
                    onChange={this.manejoCambios}
                    required
                >
                </textarea>
            </div>
            <button 
                type='submit'
            >Enviar Mensaje</button>
            </form>
        );
    }
}

export default Formulario;

