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
            )
}

export default Players