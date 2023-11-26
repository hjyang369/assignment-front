import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
  `,

  Cards: styled.div<{
    $isEmpty: boolean;
  }>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.$isEmpty ? "center" : "start")};
    padding: 10px;
    gap: 1rem;
    height: 100%;
  `,
};
