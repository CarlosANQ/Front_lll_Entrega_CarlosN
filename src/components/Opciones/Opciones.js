import React, {Component} from 'react';


export default class Opciones extends Component{

    
    render(){

        const {handles, opciones} = this.props;

        return (
        <div className="opciones">
            <div className="opcion">
                <button id="A" className="botones" onClick={handles.optionA}>A</button>
                <h2>{opciones.a}</h2>
           </div>
                               
            <div className="opcion">
                 <button id="B" className="botones" onClick={handles.optionB}>B</button>
                 <h2>{opciones.b}</h2>
             </div>
        </div>
        )
    }

}
