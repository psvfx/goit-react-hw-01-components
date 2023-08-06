import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 0 auto;

  width: 800px;
  background-color: #d3d3d3;
`;

export const StatSectionTitle = styled.h2`
  margin: 80px auto 0;
  padding: 30px 0;
  width: 600px;
  text-align: center;
  color: black;
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: white;
`;

export const StatSectionList = styled.ul`
  margin: 0 0 80px;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1px;
`;

export const StatSectionListItem = styled.li`
  display: flex;
  padding: 15px;
  flex-direction: column;
  width: 119px;
  gap: 10px;
  justify-content: center;
  background-color: #00ced1;
`;

export const StatSectionListTextLable = styled.span`
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: 400;
`;

export const StatSectionListTextPerc = styled.span`
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 600;
`;
