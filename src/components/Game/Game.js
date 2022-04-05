import React, { Component } from 'react';
import List from './List';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100),
            items: [
                
            ],
        }

        
    }

    handleOnChange = e => {
        //const value = e.target.value
        const {target: {value}} = e;

        console.log(value);

        this.setState({
            number: value
        })

        //Evito que la página se recargue presionando enter
        if(e.keyCode === 13) {
            e.preventDefault();
        }

        if(value.trim() > 0) {
            this.setState({
                number: value
            });
        }
       
        /* Message vuelve a su estado inicial para dejar
         de mostrar el mensaje en pantalla al meter un nuevo */ 
         this.setState({
            message: "",
        });
    }

    handleOnSubmit = e => {
        e.preventDefault();

        if (this.state.number.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        task: this.state.number
                    }
                ]
            })
        }
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);
        const text = calculateText(number, random);
        console.log(random);

        /* Determina que si el número es diferente de random devuelve
        number a su estado inicial 
        de otro modo cuando ganas quiero que el número 
        no vuelva a su estado inicial para que en el input se muestre el número con el que ganaste*/
        if (number !== random){
            this.setState({
                number: "",
                message: text,
            });
        } else {
            this.setState({
                message: text,
            });
        }
    }
    render() {
        
        return (
            <div className="Game">
                <h2>Adivina el número que estoy pensando entre el 1 - 100</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                    />
                    <button onClick={this.handleOnSubmit}>Probar</button>
                    <h2 className={(this.state.message)&& 'flickering'}>{this.state.message}</h2>
                </form>
                <List 
                    items = {this.state.items}
                />
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random) {
    const soClose = 5;
    const diff = Math.abs(random - number);
    
    if (number === random) {
        return "Felicidades, lo has adivinado!!";
    }
    
    if (diff < soClose) {
        
        if (number < random) {
            return "Estás muy cerca!! tu número es un poco bajo."
        } else {
            return "Estás muy cerca!! tu número es un poco alto."
        }

    } else {
        if (number < random) {
            return "Tu número es muy bajo!"
        } else {
            return "Tu número es muy alto!"
        }
    }
}