import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0f1f4;
    display: flex;
    justify-content: center;
  `,
  Main: styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 100vh;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
  `,
};
