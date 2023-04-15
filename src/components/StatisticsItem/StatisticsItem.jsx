import PropTypes from 'prop-types';
import { StatsItem, Label, Percentage } from './StatisticsItem.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const StatisticsItem = ({stat}) => {
    return (<StatsItem style={{ backgroundColor: getRandomHexColor()}}>
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
        </StatsItem>)
}

export default StatisticsItem;

StatisticsItem.protoTypes = {
    stat: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}