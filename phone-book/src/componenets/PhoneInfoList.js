import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  };

  shouldComponentUpdate(nextProps, nextState) {
    //리스트 내부의 아이템이 수 없이 많아진다면
    // 가상돔에 렌더링 하는 자원을 아끼기 위해
    // 다음 받아올 data가 현재 data와 다른 배열일 때 true 리턴
    // 불변성을 지켰기 때문에 가능함
    return nextProps.data !== this.props.data;
  }

  render() {
    //App이 리렌더링 됨에 따라 PhoneInfoList도 리렌더링이 됨을 알아보기위한 콘솔로그
    //실제로 변화가 일어나진 않으니 가상돔에만 리렌더링
    console.log("render PhoneInfoList");
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map((info) => (
      <PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
