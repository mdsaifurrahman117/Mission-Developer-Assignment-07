import React, { useState } from 'react'
import Header from './components/Header'
import Hero_section from './components/Hero_section'
import Players from './components/players/Players'
import Players_selection from './components/selection/Players_selection';

function App() {
            const [balance, set_balance] = useState(0);
            const claim_balance = () => {
                        set_balance(balance + 1000000)
            }

            const [selected, set_selected] = useState({
                        player: true,
                        status: "players"
            })

            const handle_selected = (status) => {
                        if(status == "players") {
                                    set_selected({
                                                player : true,
                                                status : "players"
                                    })
                        } else {
                                    set_selected({
                                                player : false,
                                                status : "selected"
                                    })
                        }
            }
            
            return (
                        <>
                                    <Header
                                                balance={balance}
                                    ></Header>
                                    <Hero_section
                                                claim_balance={claim_balance}
                                    ></Hero_section>
                                    <Players_selection
                                                handle_selected={handle_selected}
                                                selected={selected}
                                    ></Players_selection>
                        </>
            )
}

export default App