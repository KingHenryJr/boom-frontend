import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: {},
      seconds: 0,
    }
    this.timer = 0;
  }

  componentDidMount() {

    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({
      time: timeLeftVar,
      seconds: this.props.time
    });

  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };

    return obj;
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      this.props.handleTimeOut();
      clearInterval(this.timer);
    }
  }


  startTimer = () => {
    if (this.timer === 0) {
     this.timer = setInterval(this.countDown, 1000);
   }
  }

  render() {
    return (
      <div>
        {this.startTimer()}
        {this.state.time.m}:{this.state.time.s}
      </div>
    )

  }

}