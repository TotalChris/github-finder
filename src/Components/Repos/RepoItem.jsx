import React from 'react'
import PropTypes from 'prop-types'
import {BsEye, BsLink, BsStar, BsFileEarmarkBreak, BsExclamationTriangle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function RepoItem({repo}) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return (
   <div className="mb-2 rounded-md card bg-black hover:bg-gray-900">
    <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
            <Link to={`repo/${name}`}>
                <BsLink className='inline mr-1'></BsLink>{name}
            </Link>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
            <div className="mr-2 badge badge-info badge-lg">
                <BsEye className='mr-2'></BsEye>{watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
                <BsStar className='mr-2'></BsStar>{stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
                <BsExclamationTriangle className='mr-2'></BsExclamationTriangle>{open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
                <BsFileEarmarkBreak className='mr-2'></BsFileEarmarkBreak>{forks}
            </div>
        </div>
    </div>
   </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem