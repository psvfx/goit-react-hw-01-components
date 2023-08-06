import styled from 'styled-components';

export const TransTable = styled.table`
  margin: 0 auto 50px;
  border-collapse: collapse;
  width: 1200px;
`;

export const TransTableThead = styled.thead`
  color: white;
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #00ced1;
`;

export const TransTableTr = styled.tr``;

export const TransTableTrTh = styled.th`
  width: 400px;
  padding: 10px;
  border: 1px solid #2a2a2a;
`;

export const TransTableTbody = styled.tbody`
  tr:nth-child(2n) {
    background-color: #d3d3d3;
  }
`;

export const TransTableTbodyTr = styled.tr`
  text-transform: capitalize;
`;

export const TransTableTbodyTd = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
  color: black;
  font-size: 35px;
`;
