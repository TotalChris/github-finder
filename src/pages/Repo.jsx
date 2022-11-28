import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Layout/Spinner';
import GitHubContext from '../Context/GitHub/GitHubContext'; 
import { Link } from 'react-router-dom';
import {BsArrowUpRightCircleFill, BsStarFill, BsEyeFill, BsExclamationTriangleFill} from 'react-icons/bs';
import {fetchRepo} from '../Context/GitHub/GitHubActions';
import {BsFileBreakFill} from 'react-icons/bs'


function Repo() {

  const params = useParams();

  const {currentRepo, loading, dispatch} = useContext(GitHubContext);

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});
    const getData = async () => {
      const repo = await fetchRepo(params.login, params.rname);
      dispatch({type: 'GET_REPO', payload: repo});
    }
    getData();
  }, [dispatch, params.login, params.rname]);

  const {
    name,
    owner,
    forks,
    open_issues_count,
    stargazers_count,
    watchers_count,
    html_url,
    description
  } = currentRepo;

  console.log(owner, loading);


  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <>
        <p className="text-3xl opacity-60 font-normal inline mb-12">@<Link to={`/user/${(owner && owner.login)}`} className="hover:underline">{(owner && owner.login)}</Link> | </p>
        <p className="text-3xl my-4 font-bold inline mb-12"><a href={html_url} target="_blank" rel='noreferrer' className="hover:underline">{name} <BsArrowUpRightCircleFill className='inline'></BsArrowUpRightCircleFill></a></p>
        <hr className='border-neutral my-3'></hr><p className='text-xl mb-2'>{description}</p>
        <div>
        <div className="w-full rounded-lg shadow-md bg-neutral stats text-neutral-content mt-4">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <BsEyeFill className='text-3xl md:text-5xl'></BsEyeFill>
                  </div>
                  <div className="stat-title text-md">Watchers</div>
                  <div className="stat-value pr-5 text-3xl md:text-4xl">{watchers_count}</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <BsStarFill className='text-3xl md:text-5xl'></BsStarFill>
                  </div>
                  <div className="stat-title text-md">Stars</div>
                  <div className="stat-value pr-5 text-3xl md:text-4xl">{stargazers_count}</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <BsExclamationTriangleFill className='text-3xl md:text-5xl'></BsExclamationTriangleFill>
                  </div>
                  <div className="stat-title text-md">Issues</div>
                  <div className="stat-value pr-5 text-3xl md:text-4xl">{open_issues_count}</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <BsFileBreakFill className='text-3xl md:text-5xl'></BsFileBreakFill>
                  </div>
                  <div className="stat-title text-md">Forks</div>
                  <div className="stat-value pr-5 text-3xl md:text-4xl">{forks}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Repo