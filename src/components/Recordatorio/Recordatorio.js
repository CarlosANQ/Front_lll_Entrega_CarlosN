import React, {Component} from 'react';


export default class Recordatorio extends Component{
    
    render(){
        console.log(this.props);
        const {lastOption} = this.props;
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {lastOption}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.previusOption.map((element, index)=> {
                    return <li key={index}> {element}</li>
                    })}
                </ul>
            </div>
        )
    }

}
