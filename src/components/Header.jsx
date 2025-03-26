import React from 'react'
import logo from "../assets/logo.png"
import Balance from './Balance'

function Header({balance}) {
            return (
                        <header className="bg-base-100 shadow-sm">
                                    <nav className="navbar w-11/12 mx-auto px-0">
                                                <div className="navbar-start">
                                                            <a className="w-14">
                                                                        <img src={logo} alt="logo" />
                                                            </a>
                                                </div>
                                                <div className="navbar-end">
                                                            <div className="hidden lg:flex">
                                                                        <ul className="menu menu-horizontal px-5 gap-6">
                                                                                    <li><a>Home</a></li>
                                                                                    <li><a>Fixture</a></li>
                                                                                    <li><a>Teams</a></li>
                                                                                    <li><a>Schedules</a></li>
                                                                        </ul>
                                                            </div>
                                                            <Balance
                                                                        balance={balance}
                                                            >
                                                            </Balance>
                                                            <div className="dropdown dropdown-end">
                                                                        <div tabIndex={0} role="button" className="lg:hidden">
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                className="h-5 w-5" fill="none"
                                                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                                                <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"
                                                                                                />
                                                                                    </svg>
                                                                        </div>
                                                                        <ul
                                                                                    tabIndex={0}
                                                                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
                                                                                    <li><a>Home</a></li>
                                                                                    <li><a>Fixture</a></li>
                                                                                    <li><a>Teams</a></li>
                                                                                    <li><a>Schedules</a></li>
                                                                        </ul>
                                                            </div>
                                                </div>
                                    </nav>
                        </header>
            )
}

export default Header