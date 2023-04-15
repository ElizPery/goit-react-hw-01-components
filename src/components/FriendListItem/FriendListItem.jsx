import PropTypes from 'prop-types';
import { FriendItem, Status, Name } from './FriendListItem.styled';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (<FriendItem >
        <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }} ></Status>
        <img src={avatar} alt="User avatar" width={48} height={48}/>
        <Name>{name}</Name>
        </FriendItem>
    )
}

export default FriendListItem;

FriendListItem.protoTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
