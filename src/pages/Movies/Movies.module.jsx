import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: rgba(255, 255, 255, 0.2);

  background: #2b2b2b;
  border-radius: 10px;

  :active,
  :focus,
  :hover {
    color: white;
  }
`;
export const FilmsList = styled.ul`
  margin-top: 12px;
`;
export const FilmsItem = styled.li`
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
