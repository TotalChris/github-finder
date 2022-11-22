import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({user: {login, avatar_url}}) {

  return (
    <div className='card shadow-md compact side bg-neutral text-neutral-content'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div>
                <div className='avatar'>
                    <div className="mask mask-parallelogram-3 shadow w-14 h-14">
                        <img src={avatar_url} alt="profile" className='mask mask-parallelogram-3'/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">@{login}</h2>
                <Link className="text-neutral-content text-opacity-40" to={`/user/${login}`}>
                    View Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem