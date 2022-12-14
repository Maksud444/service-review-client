import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
        toast.warn('LogOut successfully', { autoClose: 1000 })
    }
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><h1 className='text-2xl text-purple-700'> {user?.email && <div className='mb-8'>
           
            <Link to='/addfoods'>
            
            <button className="btn btn-outline bg-green-300 sm:mt-8 sm:mr-10 ">Add Foods</button>
            </Link>
            <Link to='/myreview'>
            { user?.email ?
            <>
            
            <button className="btn btn-outline btn-primary sm:mt-8 sm:mr-10 ">My Review</button>
            </>
            :
            <></>
            }
            </Link>
        </div>}</h1></li>
</>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
        
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Kh-Food</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li tabIndex={0}>
       {menuItems}
      </li>
    </ul>
  </div>
  <div className='ml-0 navbar-end'>
                    {/* <h1 className='text-2xl text-purple-700'> {user?.email && <span><button className="btn btn-outline btn-secondary">Add Food</button> {user.email}</span>}</h1> */}
                    {
                        user?.email ?
                         
                            <button onClick={handleLogOut} className="btn btn-error hover:rounded-lg">logOut</button>
                            : <Link className='btn btn-error hover:rounded-lg"' to='/login'> LogIn</Link>
                    }
                </div>
</div>
        </div>
    );
};

export default Header;