import styled from "styled-components";

export const S = {
  Container: styled.button<{
    $hasValue: boolean;
  }>`
    background-color: #ffffff;
    height: 34px;
    padding: 6px 12px 4px 12px;
    border-radius: 30px;
    border: 1px solid ${(props) => (props.$hasValue ? "#82B0F4" : "#c4c4c4")};
    display: flex;
    align-items: center;
    color: ${(props) => (props.$hasValue ? "#3478F6" : "#6D6D6D")};
    gap: 4px;
  `,

  Text: styled.p<{
    $hasValue: boolean;
  }>`
    color: ${(props) => (props.$hasValue ? "#3478F6" : "#6D6D6D")};
    font-size: 1.4rem;
    max-width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `,
};
