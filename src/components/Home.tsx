/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export const Home = (): JSX.Element => {
  //   const setClass = (isActive: boolean): string => isActive ? 'is-active navbar' : 'navbar';

  return (
        <div className='container'>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div
                    className='navbar-start'
                >
                    <NavLink
                        role="button"
                        aria-label="menu"
                        to="/"
                        className={'navbar-item'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        role="button"
                        aria-label="menu"
                        to="docs"
                        className={'navbar-item'}
                    >
                        Docs
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
  );
};
