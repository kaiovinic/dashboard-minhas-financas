import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
    margin: 0 auto;
  }

  .tag-filter-eventual::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
    margin: 0 auto;
  }
`;
