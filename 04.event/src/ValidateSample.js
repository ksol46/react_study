import React, { Component } from "react";
import "./ValidateSample.css";
// ref: 돔을 직접 건드려야 할 때 (id하고 비슷함)
//ref를 써야한는 경우 (dom에 접근가능)
//1.측정 input
class ValidateSample extends Component {
  render() {
    state = {
      password: "",
      clicked: false,
      validated: false,
    };

    handleChange = (e) => {
      this.setState({ password: e.target.value });
    };

    handleButtonClick = () => {
      this.setState({
        clicked: true,
        validated: this.state.password === "0000",
      });
    };

    return (
      <div>
        <input
          ref={()=>{

          }
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.valibated ? 
            'success' : 'failure')

        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidateSample;
