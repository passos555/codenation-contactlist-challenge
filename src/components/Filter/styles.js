import styled, { css } from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
  color: #9FA9BC;
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.3rem;
  font-weight: normal;
  justify-content: center;
  margin: 0 8px;
  padding: 10px;
  white-space: nowrap;

  & i {
    color: #9FA9BC;
    margin-top: -5px;
    margin-left: 8px;
  }

  ${(props) => props.isSelected &&
    css`
      background-color: #4C84FF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #fff;

      & i {
        color: #fff;
      }
    `}
`