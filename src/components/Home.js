import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import withAuth from '../hocs/withAuth'

const Home = props => {
  return (
  <div className='container'>
    Here is your super interesting profile
  </div>
  );
};

export default withAuth(Home)
