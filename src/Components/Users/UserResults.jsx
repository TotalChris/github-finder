import React, {useContext} from 'react'
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GitHubContext from '../../Context/GitHub/GitHubContext';

function UserResults() {

    const {users, loading} = useContext(GitHubContext)


    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => {
                    return <UserItem key={user.id} user={user}></UserItem>
                })}
            </div>
          )
    } else {
        return <Spinner></Spinner>
    }
}

export default UserResults