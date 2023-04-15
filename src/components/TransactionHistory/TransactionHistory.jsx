import PropTypes from 'prop-types';
import { Table, NameColumn, TableInfo } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (<Table>
    <thead>
        <tr>
        <NameColumn>Type</NameColumn>
        <NameColumn>Amount</NameColumn>
        <NameColumn>Currency</NameColumn>
        </tr>
    </thead>

    <tbody>
        {items.map(item => (
        <tr key={item.id}>
            <TableInfo>{item.type}</TableInfo>
            <TableInfo>{item.amount}</TableInfo>
            <TableInfo>{item.currency}</TableInfo>
        </tr>
        ))}
    </tbody>
    </Table>)
}

export default TransactionHistory;

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}