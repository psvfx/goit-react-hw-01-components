import {
  StatSection,
  StatSectionTitle,
  StatSectionList,
  StatSectionListItem,
  StatSectionListTextLable,
  StatSectionListTextPerc,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatSection className="statistics">
      <StatSectionTitle className="title">Upload stats</StatSectionTitle>

      <StatSectionList className="stat-list">
        {stats.map(stat => (
          <StatSectionListItem key={stat.id} className="item">
            <StatSectionListTextLable className="label">
              {stat.label}
            </StatSectionListTextLable>
            <StatSectionListTextPerc className="percentage">
              {stat.percentage}%
            </StatSectionListTextPerc>
          </StatSectionListItem>
        ))}
      </StatSectionList>
    </StatSection>
  );
};
