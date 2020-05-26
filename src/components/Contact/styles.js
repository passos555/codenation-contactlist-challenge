import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 1.2rem;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 5px;

  span {
    width: calc(100% / 6);

    &:first-of-type {
      color: #4C84FF;
    }
  }

  img {
    border-radius: 50%;
    height: 35px;
    overflow: hidden;
    width: 35px;
    border: 2px solid #9FA9BC;
    margin-right: 10px;
  }
`;