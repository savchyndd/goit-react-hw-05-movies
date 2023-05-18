import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  margin-top: 12px;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 14px;

  background-color: #2a2a2a;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #ffc700;
    color: #111111;
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;
