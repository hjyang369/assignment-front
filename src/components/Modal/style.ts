import styled from "styled-components";

export const S = {
  Container: styled.div`
    background-color: #ffffff;
    position: absolute;
    width: 335px;
    height: 480px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,

  SelectValue: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  Title: styled.p`
    font-size: 16px;
    font-weight: 600;
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
    gap: 181px;
  `,

  Buttons: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 295px;
    height: 76px;
  `,
  CountryBtn: styled.button`
    background-color: #ffffff;
    /* #82B0F4 */
    height: 34px;
    padding: 6px 12px 4px 12px;
    border-radius: 30px;
    border: 1px solid #f2f2f2;
    gap: 4px;
  `,
};
