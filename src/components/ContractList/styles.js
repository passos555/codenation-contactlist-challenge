import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    width: 960px;
  }
`;

export const TableHeader = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 1.2rem;
  overflow: hidden;
  margin-bottom: 5px;
  padding: 5px;
  font-weight: bold;

  span {
    width: calc(100% / 6);
  }

  span {
    &:first-of-type {
      width: 35px;
      margin-right: 10px;
    }
  }
`;