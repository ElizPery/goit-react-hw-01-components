import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

const FriendList = ({friends}) => {
    return (<FriendsList>
        {friends.map(friend => (
            <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        ))}
    </FriendsList>)
}

export default FriendList;

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}