import {FaCode, FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Spinner from '../Components/Layout/Spinner';
import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import GitHubContext from '../Context/GitHub/GitHubContext'
import RepoList from '../Components/Repos/RepoList';
import {BsArrowUpRightCircleFill} from 'react-icons/bs'


function User() {

    const { fetchUserProfile, currentUser, loading, fetchUserRepos, repos } = useContext(GitHubContext);
    
    const params = useParams()
    
    useEffect(() => {
        fetchUserProfile(params.login);
        fetchUserRepos(params.login);
    }, [])

    const {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = currentUser;

    if(loading){
      return <Spinner></Spinner>
    }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className='btn btn-ghost'>Back</Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="shadow-xl card rounded-lg image-full mask mask-parallelogram-3">
              <figure>
                <img src={avatar_url} className="mask mask-parallelogram-3 w-full"></img>
              </figure>
            </div>
          </div>
          <div className="col-span-2 mt-auto">
            <div className="mb-6">
              <h1 className='text-3x card-title'>
                {name}&nbsp;&nbsp;|
                <a href={html_url} target="_blank" rel='noreferrer' className='opacity-50 hover:underline'>@{login}<BsArrowUpRightCircleFill className='inline ml-1'></BsArrowUpRightCircleFill></a>
                <div className="ml-2 mr-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <hr className='border-neutral my-2'></hr>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-neutral stats text-neutral-content">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={`${(blog.includes('https://')?'':'https://')}${blog}`} target="_blank" rel="noreferrer">{blog}</a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-neutral stats text-neutral-content">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className='text-3xl md:text-5xl'></FaUsers>
            </div>
            <div className="stat-title pr-5">
              Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className='text-3xl md:text-5xl'></FaUserFriends>
            </div>
            <div className="stat-title pr-5">
              Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCode className='text-3xl md:text-5xl'></FaCode>
            </div>
            <div className="stat-title pr-5">
              Public Repositories
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className='text-3xl md:text-5xl'></FaStore>
            </div>
            <div className="stat-title pr-5">
              Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
          </div>
        </div>
        <RepoList repos={repos}></RepoList>
      </div>
    </>
  )
}

export default User