import React from 'react'
import Layout from '../../componentss/Layout/Layout'
import AdminMenu from '../../componentss/Layout/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout>
       <div className='container-flui p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <h1>Create Categories</h1>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory
