import Profile from './Profile'
import user from 'json/user.json'

import { Statistics } from './Statistics';
import data from 'json/data.json';

export function App() {  
  return (
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          views={user.stats.views}
          followers={user.stats.followers}
          likes={user.stats.likes}
        />  
        
        <Statistics title="Upload stats" stats={data} />
      </>
    )
};


