import styled from "styled-components";

export const S = {
  Container: styled.div<{
    $isEmpty: boolean;
  }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    height: ${(props) => (props.$isEmpty ? "100%" : "")};
    min-height: 100%;
    overflow: scroll;
  `,
};
