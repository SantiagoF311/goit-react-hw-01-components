import PropTypes from 'prop-types'

export default function Profile({
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    followers,
    views,
    likes
}) {
    return (
        <div className='profile'>
            <div className='description'>
                <img
                    src={avatar}
                    alt='User avatar'
                    className='avatar'
                />
                <p className='name'>{ username }</p>
                <p className='tag'>@{tag}</p>
                <p className='location'>{ location }</p>
            </div>
            

            <ul className='stats'>
                <li>
                    <span className='label'>Followers</span>
                    <span className='quantity'>{ followers }</span>
                </li>
                <li>
                    <span className='label'>Views</span>
                    <span className='quantity'>{ views }</span>
                </li>
                <li>
                    <span className='label'>Likes</span>
                    <span className='quantity'>{ likes }</span>
                </li>
            </ul>
        </div>
    )
}

Profile.prototypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}
