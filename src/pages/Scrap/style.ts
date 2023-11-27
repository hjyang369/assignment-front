import styled from "styled-components";

export const S = {
  Container: styled.div<{
    $isEmpty: boolean;
  }>`
    display: flex;
    justify-content: center;
    padding: 20px;
    height: ${(props) => (props.$isEmpty ? "100%" : "")};
    min-height: 100%;
    overflow: scroll;
    padding-bottom: 105px;
  `,

  Cards: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 100%;
    width: 100%;
  `,
};
