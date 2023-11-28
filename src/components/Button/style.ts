import styled from "styled-components";

export const S = {
  Buttons: styled.button`
    background-color: ${({ theme }) => theme.Blue_Main};
    width: 295px;
    height: 60px;
    border: 0;
    border-radius: 16px;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.FW600};
    line-height: 24px;
    letter-spacing: -0.05em;
    text-align: center;
  `,
};
