import styled from "styled-components";

export const S = {
  Container: styled.button`
    background-color: #ffffff;
    height: 34px;
    padding: 6px 12px 4px 12px;
    border-radius: 30px;
    border: 1px solid #c4c4c4;
    display: flex;
    align-items: center;
    color: #6d6d6d;
    gap: 4px;
  `,

  Text: styled.p`
    font-size: 1.4rem;
    max-width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `,
};
