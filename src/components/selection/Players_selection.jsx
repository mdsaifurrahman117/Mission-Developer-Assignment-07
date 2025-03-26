import React from 'react'
import Players from './../players/Players';
import Selected_players from './Selected_players';

function Players_selection({ handle_selected, selected }) {
            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <div className="flex flex-row justify-between items-center">
                                                <h1 className="text-2xl">Available Players</h1>
                                                <div className="join">
                                                            <button
                                                                        onClick={() => { handle_selected("players") }}
                                                                        className={`
                                                                                    ${selected.player ? "join-item bg-amber-500 px-3" : "btn join-item"}
                                                                        `}
                                                            >
                                                                        Available
                                                            </button>
                                                            <button
                                                                        onClick={() => { handle_selected("selected") }}
                                                                        className={`
                                                                                    ${selected.player ? "btn join-item" : "join-item bg-amber-500 px-3"}
                                                                        `}
                                                            >
                                                                        Selected
                                                            </button>
                                                </div>
                                    </div>
                                    {
                                                selected.player ? <Players></Players> : <Selected_players></Selected_players>
                                    }
                        </section>
            )
}

export default Players_selection