import { List, IsOnlineSpan, ListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <ListItem key={friend.id} className="item">
          <IsOnlineSpan className="status">{friend.isOnline}</IsOnlineSpan>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="100px"
          />
          <p className="name">{friend.name}</p>
        </ListItem>
      ))}
    </List>
  );
};
