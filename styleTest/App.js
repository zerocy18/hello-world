import React, { Component } from "react";
import styles from "./App.scss";
import classNames from "classnames";
import StyledButton from "./components/StyledButton";

console.log(styles);
const cx = classNames.bind(styles);
class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div>
        <div className={cx("box", { blue: isBlue })}>
          <div className={cx("box-inside")} />
        </div>
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
