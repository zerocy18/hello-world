import React, { Component } from "react";

class IterationSample extends Component {
  state = {
    names: ["눈사람", "얼음", "눈", "바람"],
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: "",
    });
  };

  handleRemove = (index) => {
    const { names } = this.state;

    this.setState({
      names: [...names.slice(0, index), ...names.slice(index + 1, names.length)],
    });
    // this.setState({
    //   names: names.filter((item, i) => i !== index),
    // });
  };

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {name}
      </li>
    ));
    return (
      <div>
        {/* input 태그에서 value가 뭐하는 앤가 싶었는데
        확인 해보니 클릭 했을때 setState로 name을 비워주는데 그것을 인풋창에 반영시켜줌 */}
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample;
