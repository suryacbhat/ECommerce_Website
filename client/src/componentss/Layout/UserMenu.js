import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <div className="text-center">
    <div className="list-group">
      <h4>User Panel</h4>
     <div className="list-group">
<NavLink to="/Dashboard/admin/profile/" className="list-group-item list-group-item-action">Profile</NavLink>
<NavLink to="/Dashboard/admin/orders/" className="list-group-item list-group-item-action">Orders</NavLink>
</div>

    </div>
  </div>
  )
}

export default UserMenu
