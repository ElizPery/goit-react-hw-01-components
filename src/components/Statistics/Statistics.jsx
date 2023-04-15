import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import { StatisticsSection, Title, StatsList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (<StatisticsSection style={{width: stats.length*100 }}>
        {title && (
            <Title >{title}</Title>
        )}
        <StatsList>
            {stats.map(stat => (
                <StatisticsItem stat={stat} key={stat.id}/>
            ))}
    </StatsList>
    </StatisticsSection>)
}

export default Statistics;

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}