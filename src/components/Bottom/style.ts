import styled from "styled-components";

export const S = {
  Container: styled.div`
    position: fixed;
    bottom: 0;
    z-index: 1;
    background-color: #000000;
    max-width: 560px;
    width: 100%;
    height: 85px;
    padding: 20px 80px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
  `,
  Btn: styled.button<{
    $currentTab: boolean;
  }>`
    background-color: #000000;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 12px;
    text-align: center;
    color: ${(props) => (props.$currentTab ? "#ffffff" : "#6D6D6D")};
    svg {
      font-size: 2.4rem;
    }
  `,
};
