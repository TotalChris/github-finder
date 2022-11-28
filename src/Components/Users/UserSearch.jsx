import React, {useState, useContext} from 'react'
import GitHubContext from '../../Context/GitHub/GitHubContext';
import AlertContext from '../../Context/Alert/AlertContext';
import {fetchUsers} from '../../Context/GitHub/GitHubActions';

function UserSearch() {
  const [text, setText] = useState("");

  const {users, dispatch} = useContext(GitHubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(text === ''){
        setAlert('Please enter a search term', 'error');
    } else {
        dispatch({type: 'SET_LOADING'})
        const users = await fetchUsers(text);
        dispatch({type: 'GET_USERS', payload: users});
    }
  }

  const handleClear = () => {
    dispatch({type: "CLEAR_USERS"});
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 l:grid-cols-2 md:grid-cols-1 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder='Search' value={text} onChange={handleChange}/>
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button className="btn-ghost btn-lg" onClick={handleClear}>Clear</button>
            </div>
        )}
    </div>
  )
}

export default UserSearch