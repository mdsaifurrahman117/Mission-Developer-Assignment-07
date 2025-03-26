import React from 'react'
import { FaFlag, FaUser } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify';

function Player({ player, handle_buy }) {
            const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;

            return (
                        <div className="card bg-base-100 shadow-sm">
                                    <figure className="px-5 pt-5 w-full h-[250px]">
                                                <img
                                                            src={image}
                                                            alt="player image"
                                                            className="rounded-xl object-cover"
                                                />
                                    </figure>
                                    <div className="card-body space-y-1">
                                                <div className="border-b border-gray-200 space-y-2 pb-2">
                                                            <h2 className="card-title items-center">
                                                                        <FaUser />
                                                                        {name}
                                                            </h2>
                                                            <div className="flex flex-row gap-2 items-center justify-between">
                                                                        <span className="flex flex-row items-center gap-2">
                                                                                    <FaFlag />{country}
                                                                        </span>
                                                                        <div className="badge badge-soft badge-neutral">{role}</div>
                                                            </div>
                                                </div>
                                                            <h3>Batting : {battingType}</h3>
                                                            <h3>Bowling : {bowlingType}</h3>
                                                <div className="flex flex-row justify-between items-center">
                                                            <h3>Price : ${biddingPrice}</h3>
                                                            <button 
                                                                        onClick={ () => {handle_buy(biddingPrice)}}
                                                                        className="btn border border-gray-200 shadow-none"
                                                            >           
                                                                        Choose Player
                                                            </button>
                                                </div>
                                                <ToastContainer />
                                    </div>
                        </div>
            )
}

export default Player