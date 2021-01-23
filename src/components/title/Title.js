import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
    constructor(){
        super();

        this.state ={
            title: 'custom heading mina',
            isInput : false,
        }
    }

    actIcon(){
        this.setState({
            ...this.state,
            isInput : true,
        });
    }
    onChangeHandeler(e){
        this.setState({
            ...this.state,
            title : e.target.value

        })
    }

    onValueChange(e){
        if(e.key === "Enter"){
            this.setState({
                ...this.state,
                isInput: false

            });
        }

    }
    onBlurHand(e){
            this.setState({
                ...this.state,
                isInput: false
            });
    }


    render() {

        let output = null;
        if(this.state.isInput){
            output = (
            <div className="title">
                <input 
                className="form-control" 
                onKeyPress={ e => this.onValueChange(e) }  
                onChange={ (e) => this.onChangeHandeler(e) } 
                onBlur={ e => this.onBlurHand(e) }
                type="text " 
                value={ this.state.title }/>
            </div>
            )
        } else {
            output =  (
                <div className="d-flex title">
                    <h1>{this.state.title}</h1>
                    <span onClick={ () => this.actIcon() } className="icon ml-auto"><i className="fa fa-pencil pencilIcon"></i></span>
                </div>
            );
        }


        return (
            <div>
                {output}
               
            </div>
        )
    }
}
