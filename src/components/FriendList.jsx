import PropTypes from 'prop-types';
import { Item, ItemAvatar, Name, StatusOffline, StatusOnline, SubItem} from './friendlist-styled'

export const FriendList = ({ friends }) => {
    return ( 

    <Item className="friend-list">
            {friends.map(friend => {
                return ( 
                <SubItem key={friend.id} className='item'>
                    {friend.isOnline
                        ? <StatusOnline className='status'></StatusOnline>
                        : <StatusOffline className='status'>{friend.isOnline}</StatusOffline>}
                <ItemAvatar className='avatar' src={ friend.avatar } alt='user avatar'></ItemAvatar>
                <Name className='name'>{ friend.name }</Name>
                </SubItem>      
                )
        })}
        </Item>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};