import styled from "styled-components";

const MenuWrapper = styled.nav`
  font-family: "Rubik", "sans-serif";
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 17px;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px;
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.tertiary.light.color};
    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.tertiary.main.color};
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;

export default MenuWrapper;
