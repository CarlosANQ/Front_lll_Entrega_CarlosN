import React, {Component} from 'react';
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import datos from '../data.json'


export default class Historia extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            cont: 1,
            id: "1",
            previusOption: [],
        }
    };

    componentDidUpdate = (prevProps, prevState ) => {
        const {cont, id, previusOption} = this.state;
        if (prevState.cont !== cont && cont <= 5) {
            previusOption.push(id.substring(1).toUpperCase());            
        } 
    };

    handleOptionA = () => {
        const {cont} = this.state;
        if (cont < 5) {
            this.setState(
                {
                    cont: cont + 1,
                    id: cont + 1 + 'a',
                }
            )            
        }else if (cont === 5) {
            alert('FIN DE LA HISTORIA')   
        }        
    };
    handleOptionB = () => {
        const {cont} = this.state;
        if (cont < 5) {
            this.setState(
                {
                    cont: cont + 1,
                    id: cont + 1 + 'b',        
                }
            )  
        }else if (cont === 5) {
            alert('FIN DE LA HISTORIA')   
        }
    };

    render(){
        const { id,  previusOption} = this.state;
        const filterData = datos.find((objeto) => objeto.id.includes(id))
        let handles = {
            optionA: this.handleOptionA,
            optionB: this.handleOptionB,
        }   
        return (
            <div className="layout">
                <h1 className="historia">{filterData.historia}</h1>

                <Opciones handles={handles} opciones={filterData.opciones}/>
                <Recordatorio lastOption={id.substring(1).toUpperCase()} 
                previusOption={previusOption}/>
            </div>
        )
    }

}
