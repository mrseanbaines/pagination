import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e0e3e7;
  border-radius: 4px;

  &,
  *,
  *::before,
  *::after {
    @import url('https://fonts.googleapis.com/css?family=Barlow:100,200,300,400,500,600,700,800,900&display=swap');
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #535c68;
    line-height: 1;
  }
`;

export const PageButton = styled.button.attrs({ type: 'button' })`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  padding: 0;

  & + & {
    border-left: 1px solid #e0e3e7;
  }

  :hover,
  :focus,
  :active {
    :not(:disabled) {
      background: #f6f7f9;
    }
  }

  :disabled {
    color: #e0e3e7;
    cursor: default;
  }
`;

export const DirectionArrow = styled.img`
  width: 1em;
  height: 1em;
`;
