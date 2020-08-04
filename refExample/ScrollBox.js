import React, { Component } from "react";

// 자바스크립트로 스크롤바를 내릴때는 DOM 노드가 가진 다음 값들을 사용함
// scrollTop : 세로 스크롤바 위치 (0-350)
// scrollHeight : 스크롤 박스 내부의 높이 (650)
// clientHeight : 스크롤 박스 외부의 높이 (300)

class ScrollBox extends Component {
  // 스크롤바를 맨 아래쪽으로 내리는 메서드
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 비 구조화 할당사용
       const scrollHeight = this.box.scrollHeight;
       const clientHeight = this.box.clientHeight; 
    */

    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
