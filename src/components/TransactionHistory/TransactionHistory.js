import {
  TransTable,
  TransTableThead,
  TransTableTr,
  TransTableTrTh,
  TransTableTbody,
  TransTableTbodyTr,
  TransTableTbodyTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransTable className="transaction-history">
      <TransTableThead>
        <TransTableTr>
          <TransTableTrTh>Type</TransTableTrTh>
          <TransTableTrTh>Amount</TransTableTrTh>
          <TransTableTrTh>Currency</TransTableTrTh>
        </TransTableTr>
      </TransTableThead>

      <TransTableTbody>
        {items.map(item => (
          <TransTableTbodyTr key={item.id}>
            <TransTableTbodyTd>{item.type}</TransTableTbodyTd>
            <TransTableTbodyTd>{item.amount}</TransTableTbodyTd>
            <TransTableTbodyTd>{item.currency}</TransTableTbodyTd>
          </TransTableTbodyTr>
        ))}
      </TransTableTbody>
    </TransTable>
  );
};
