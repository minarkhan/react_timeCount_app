import React, { Component } from 'react';
import { Button } from './button/Button';

export default class Controller extends Component {
    constructor(props){
        super(props);
        this.state={
            start: true,
            push: false,
            lap: false,
            reset:false,
            data: []

        }
    }
    
    startHandeler(){
        this.setState({
            ...this.state,
            start: false,
            push: true,
            lap: true,
        });
        this.props.start()
    }

    lapHandeler(){
        this.setState({
            ...this.state,
            data: this.state.data + 'lap,',
        });
        this.props.lap();
        console.log('minar');
    }

    pushHandeler(){
        this.setState({
            ...this.state,
            start: true,
            push: false,
            lap: false,
            reset: true,
        });
        console.log('minar');
        this.props.stop();
    }
    resetHandeler(){
        this.setState({
            ...this.state,
            start: true,
            push: false,
            lap: false,
            reset:false
        });
        console.log('minar');
        this.props.reset();
    }

    render() {

        let output = null;
        if(this.state.push && this.state.lap){
            output= (
                <div>
                    <Button class="btn btn-success btn-lg px-5 mx-3" click={ event => this.pushHandeler()} value="push"/>
                    <Button class="btn btn-warning btn-lg px-5 mx-3 " click={ event => this.lapHandeler()} value="lap"/>
                    
                </div>
            );

        }else if (this.state.start && this.state.reset){
            output= (
                <div>
                    <Button class="btn btn-warning btn-lg px-5 mx-3" click={ event => this.startHandeler()} value="Resume"/>
                    <Button class="btn btn-danger btn-lg px-5 mx-3" click={ event => this.resetHandeler()} value="Reset"/>
                </div>
            );
        } else{
            output= (
                <div>
                    <Button class="btn btn-success btn-lg px-5 mx-3" click={ event => this.startHandeler()} value="start"/>
                    {/* <Button class="btn btn-success btn-lg px-5" click={this.startHandeler} value="push"/>
                    <Button class="btn btn-success btn-lg px-5" click={this.startHandeler} value="lap"/>
                    <Button class="btn btn-success btn-lg px-5" click={this.startHandeler} value="reset"/> */}
                </div>
            );
        }
        return (
            <div>
               {output}
               <div>{this.state.data}</div>
            </div>
        )
    }
}
