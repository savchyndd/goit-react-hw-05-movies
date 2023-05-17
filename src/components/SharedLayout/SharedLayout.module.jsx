import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 25px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

export const NavItem = styled.li`
  span {
    color: #ffc700;
  }

  a:hover,
  a:focus {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
