import styled from 'styled-components';

export const ProfileStyledDiv = styled.div`
  margin: 50px auto;
  width: 600px;
  background-color: #d3d3d3;
`;

export const ProfileUserDiv = styled.div`
  margin: 50px auto 20px;
  padding: 10px;
  width: 300px;
  border-radius: 20px;
  background-color: white;
`;

export const ProfileUserNameText = styled.p`
  margin: 0;
  text-align: center;
  color: blue;
  font-size: 35px;
  font-weight: 700;
`;

export const ProfileUserTagText = styled.p`
  margin: 0;
  text-align: center;
  color: #555555;
  font-size: 20px;
  font-weight: 400;
`;

export const ProfileUserLocationText = styled.p`
  margin: 0;
  text-align: center;
  color: #555555;
  font-size: 28px;
  font-weight: 400;
`;

export const ProfileUserStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const ProfileUserStatsList = styled.li`
  display: flex;
  flex-direction: column;
  width: 85px;
  gap: 3px;
  justify-content: center;
`;

export const ProfileUserStatsTitleText = styled.span`
  text-align: center;
  color: #555555;
  font-size: 20px;
  font-weight: 400;
`;

export const ProfileUserStatsDataText = styled.span`
  margin-bottom: 20px;
  text-align: center;
  color: black;
  font-size: 25px;
  font-weight: 700;
`;
