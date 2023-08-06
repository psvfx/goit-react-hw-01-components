import { Profile } from './Profile/Profile';
import user from './json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './json/data.json';
import { FriendList } from './FrendList/FriendList';
import friends from './json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';
import { GlobalStyled } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyled />
    </Layout>
  );
};
