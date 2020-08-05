import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0,
    },
  };
  state = {
    editting: false,
    name: "",
    phone: "",
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { editting } = this.state;
    this.setState({ editting: !editting });
  };

  handleChange = (e) => {
    //input에서 onChnage이벤트가 발생 될 때 호출되는 함수
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    //editting 값이 바뀔 때 처리할 로직
    // 수정을 눌렀을때, 기존의 값이 input에 나타나고,
    // 수정을 적용할땐, input의 값들을 부모에게 전달해줌
    const { info, onUpdate } = this.props;
    if (!prevState.editting && this.state.editting) {
      // editting false-> true
      // info 값을 state에 넣어준다
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    if (prevState.editting && !this.state.editting) {
      // editting true->false
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //수정 상태가 아니고, info값이 같다면 리렌더링 안함
    if (!this.state.editting && !nextState.editting && nextProps.info === this.props.info) {
      return false;
    }
    //나머지 경우 리렌더링
    return true;
  }

  render() {
    console.log("render PhoneInfo " + this.props.info.id);
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };
    const { editting } = this.state;

    if (editting) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    const { name, phone, id } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
