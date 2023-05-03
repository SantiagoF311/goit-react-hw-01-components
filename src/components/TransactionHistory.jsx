import PropTypes from 'prop-types';
import { Table, Tableh, Tabletd, Tbodytr } from './transaction-styled';

export const TransactionHistory = ({ items }) => {
    return ( 

    <Table className='transaction-history'>
        <thead>
            <tr>
                <Tableh>Type</Tableh>
                <Tableh>Amount</Tableh>
                <Tableh>Currency</Tableh>
            </tr>
        </thead>
            
            <tbody>
                
                {items.map(item => {
                return ( 
            <Tbodytr key={item.id}>
                <Tabletd>{item.type}</Tabletd>
                <Tabletd>{item.amount}</Tabletd>
                <Tabletd>{item.currency}</Tabletd>
            </Tbodytr>
            )
        })}
        </tbody>    
    </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

