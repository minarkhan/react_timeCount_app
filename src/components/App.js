import React, { Component } from 'react';
import './App.css';
import Controller from './controller/Controller';
import Countdown from './countdown/Countdown';
import Laps from './laps/Laps';
import Title from './title/Title';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
        time: {
          min: 0,
          sec: 0,
          mili: 0
        },
        laps: []
    }
  }
  getStart (){
    this.interID = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;
      if(mili>9){
        sec += 1;
        mili = 0;
      }
      if(sec>59){
        sec = 0;
        min += 1;
      }
      this.setState({
        ...this.state,
            time: {
              min: min,
              sec: sec,
              mili: mili + 1
            }
      });
      
    }, 100);
  }
  getPush(){
    clearInterval(this.interID);
  }
  getReset(){
    this.setState({
          time: {
            min: 0,
            sec: 0,
            mili: 0
          }
    });
  }
  lapClick(){
    let time = {
      ...this.state.time
    };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
});

console.log(this.state.laps);
  }
  render(){
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <Title />
            <Countdown 
            time={this.state.time}
            />
            <Controller 
            start={ this.getStart.bind(this) } 
            stop={ this.getPush.bind(this) } 
            reset={ this.getReset.bind(this) } 
            lap={ this.lapClick.bind(this) } 
            />
            <Laps className="my-5" laps={this.state.laps} />
          </div>
        </div>
      </div>
    </div>
  );
}
}