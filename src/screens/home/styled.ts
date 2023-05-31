import { Dimensions } from "react-native";

import styled, { css } from "styled-components/native";

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 50px 15px 5px 15px;
    background: #fff;
  `}
`;

export const Tab = styled.View`
  ${({ theme }) => css`
    padding: 00px 10px 10px 0px;
    margin: 10px 10px 10px 0px;
  `}
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    padding: 20px 10px 0px 20px;
    font-size: 28px;
  `}
`;
export const Activities = styled.View`
  ${({ theme }) => css`
    padding: 15px 20px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
