import React from 'react'
import Layout from '../../componentss/Layout/Layout'
import UserMenu from '../../componentss/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout>
      <div className='container-flui p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
                <h1>Your profilee</h1>
            </div>
        </div>
      </div>  
    </Layout>
  )
}

export default Profile
