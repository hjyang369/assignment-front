import styled from "styled-components";

export const S = {
  Container: styled.div<{
    $isEmpty: boolean;
  }>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.$isEmpty ? "center" : "start")};
    align-items: center;
    padding: 10px;
    gap: 1rem;
    height: 100%;
  `,
};
