import React, { useEffect, useState } from 'react'
import Player from "./Player"

function Players() {
            const [players, set_players] = useState([])
            useEffect(() => {
                        fetch("players.json")
                                    .then(response => response.json())
                                    .then(data => set_players(data))
            }, [])

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <div className="flex flex-row justify-between items-center">
                                                <h1 className="text-2xl">Available Players</h1>
                                                <div className="join">
                                                            <button className="btn join-item bg-amber-500">Available</button>
                                                            <button className="btn join-item">Selected</button>
                                                </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
                                                {
                                                            players.map(player =>
                                                                        <Player
                                                                                    key={player.playerId}
                                                                                    player={player}
                                                                        ></Player>
                                                            )
                                                }
                                    </div>
                        </section>
            )
}

export default Players