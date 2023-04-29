import PropTypes from 'prop-types'
import { Container, ItemTitle1, ItemTitle2, List, ListItem, Title } from './statistics-styled';

export const Statistics = ({ title, stats }) => {
    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    return (

        <Container className='statistics'>
            {title && <Title className='title'>{title}</Title>}
            <List className='start-list'>
                {stats.map(stat => (
                    <ListItem key={stat.label} className='item' style={{ backgroundColor: randomColor() }}>
                        <ItemTitle1 className='label'>{stat.label}</ItemTitle1>
                        <ItemTitle2 className='percentage'>{stat.percentage} %</ItemTitle2>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}