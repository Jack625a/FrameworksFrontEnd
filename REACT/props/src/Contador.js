import React, { Component} from "react";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            cuenta:0
        };
    }

    //accion de incrementar
    incrementar=()=>{
        this.setState({cuenta:this.state.cuenta+1});
    };
    //accion de decrementar
    decremento=()=>{
        this.setState({cuenta: this.state.cuenta-1});
    };
    
    componentDidMount(){
        console.log('Componente montado Estado inicial: ',this.state.cuenta);
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Componente Actualizacion Estado previo: ',prevState.cuenta, 'Estado Actual: ', this.state.cuenta);
    }
    componentWillUnmount(){
        console.log('Componente desmontado Estado Final: ',this.state.cuenta)
    }
    render(){
        return(
            <div className="contador">
                <h2>Cuenta: {this.state.cuenta}</h2>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decremento}>Decrementar</button>
            </div>
        );
    }
}
export default Contador;