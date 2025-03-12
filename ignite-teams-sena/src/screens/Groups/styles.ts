import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  border: 1px solid black;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
