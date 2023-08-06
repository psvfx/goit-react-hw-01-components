import {
  ProfileStyledDiv,
  ProfileUserDiv,
  ProfileUserNameText,
  ProfileUserLocationText,
  ProfileUserTagText,
  ProfileUserStats,
  ProfileUserStatsList,
  ProfileUserStatsTitleText,
  ProfileUserStatsDataText,
} from './Profile.styled';

export const Profile = ({
  items: { avatar, username, tag, location, stats },
}) => {
  return (
    <ProfileStyledDiv className="profile">
      <ProfileUserDiv className="description">
        <img src={avatar} alt="User avatar" width="300" className="avatar" />
        <ProfileUserNameText className="name">{username}</ProfileUserNameText>
        <ProfileUserTagText className="tag">@{tag}</ProfileUserTagText>
        <ProfileUserLocationText className="location">
          {location}
        </ProfileUserLocationText>
      </ProfileUserDiv>

      <ProfileUserStats className="stats">
        <ProfileUserStatsList>
          <ProfileUserStatsTitleText className="label">
            Followers
          </ProfileUserStatsTitleText>
          <ProfileUserStatsDataText className="quantity">
            {stats.followers}
          </ProfileUserStatsDataText>
        </ProfileUserStatsList>
        <ProfileUserStatsList>
          <ProfileUserStatsTitleText className="label">
            Views
          </ProfileUserStatsTitleText>
          <ProfileUserStatsDataText className="quantity">
            {stats.views}
          </ProfileUserStatsDataText>
        </ProfileUserStatsList>
        <ProfileUserStatsList>
          <ProfileUserStatsTitleText className="label">
            Likes
          </ProfileUserStatsTitleText>
          <ProfileUserStatsDataText className="quantity">
            {stats.likes}
          </ProfileUserStatsDataText>
        </ProfileUserStatsList>
      </ProfileUserStats>
    </ProfileStyledDiv>
  );
};
