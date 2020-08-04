import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    value: 0,
  };
  // 이 함수 조금 이해 안되어서 더 찾아볼 것
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value,
      };
    }
    return null; // 변화 없을때
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log("value 값이 바뀌었다!", this.props.value);
    }
  }

  componentWillUnmount() {
    console.log("Good Bye");
  }

  render() {
    return (
      <div>
        {/*this.props.missing.something*/}
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
