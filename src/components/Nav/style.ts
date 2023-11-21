import styled from "styled-components";

export const S = {
  Container: styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 375px;
    height: 60px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 12px 20px;
  `,
  ModalBlack: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  `,
};
