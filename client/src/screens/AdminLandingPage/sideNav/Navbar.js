import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link , } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Form, FormControl} from 'react-bootstrap'
import { useSelector } from "react-redux";

function Navbar({setSearch}) {
  const [sidebar, setSidebar] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className=''>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  onClick={showSidebar} />
          </Link>
          <div className='col d-flex justify-content-end'>
          {userInfo && (
                        <Form  inline>
                            <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 mx-5 my-auto text-center"
                            onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form>
                        )}
          </div>
        </div>
     
        <nav className= {sidebar ? 'nav-menu active sidebar' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
           
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
