import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: 640px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 3px solid #212121;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  font-size: 40px;
  font-weight: 700;
`;

export const IsOnlineSpan = styled.span`
  margin: auto 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;
