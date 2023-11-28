import styled from "styled-components";

export const S = {
  Container: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  `,

  ModalBlack: styled.div`
    display: flex;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  `,

  ModalMain: styled.div`
    background: white;
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 16px;
  `,

  SelectValue: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  Title: styled.p`
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.FW600};
    line-height: 24px;
    letter-spacing: -0.05em;
    text-align: left;
  `,

  Input: styled.input`
    width: 295px;
    height: 44px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #c4c4c4;

    &::placeholder {
      color: ${({ theme }) => theme.Gray};
    }
  `,

  DateLabel: styled.label`
    width: 295px;
    height: 44px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #c4c4c4;

    &::placeholder {
      color: ${({ theme }) => theme.Gray};
    }
  `,

  Buttons: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 295px;
    height: 76px;
  `,
  CountryBtn: styled.label<{
    $isSelected: boolean;
  }>`
    background-color: ${(props) => (props.$isSelected ? "#82B0F4" : "#ffffff")};
    height: 34px;
    padding: 6px 12px 4px 12px;
    border-radius: 30px;
    border: 1px solid #f2f2f2;
    gap: 8px;

    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.FW400};
    line-height: 24px;
    letter-spacing: -0.04em;
    text-align: right;
    color: ${(props) => (props.$isSelected ? "#f2f2f2" : "#6D6D6D")};

    input {
      display: none;
    }
  `,
};
