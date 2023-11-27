import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const S = {
  Container: styled.div<{
    $isEmpty: boolean;
  }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${(props) => (props.$isEmpty ? "400px" : "100px")};
  `,

  Spinner: styled.div`
    border: 4px solid #ffffff;
    border-top: 4px solid #6d6d6d;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
    margin-bottom: 20px;
  `,
};
