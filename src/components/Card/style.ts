import { Link } from "react-router-dom";
import styled from "styled-components";

export const S = {
  Container: styled.div`
    background-color: #fefefe;
    width: 335px;
    height: 104px;
    padding: 10px 20px 10px 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  `,

  Top: styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    svg {
      width: 1.6rem;
      height: 1.6rem;
      padding-top: 0.5rem;
      path {
        cursor: pointer;
      }
    }
  `,

  Link: styled(Link)`
    color: black;
    text-decoration: none;
    width: 270px;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  `,

  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  NameContainer: styled.div`
    display: flex;
    gap: 5px;
  `,

  NameData: styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `,

  DateData: styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #6d6d6d;
  `,
};
