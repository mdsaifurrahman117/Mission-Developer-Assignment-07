import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero_section from './components/Hero_section'
import Players_selection from './components/selection/Players_selection';
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

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
                        if (status == "players") {
                                    set_selected({
                                                player: true,
                                                status: "players"
                                    })
                        } else {
                                    set_selected({
                                                player: false,
                                                status: "selected"
                                    })
                        }
            }

            const [bidding_price, set_bidding_price] = useState(null)

            useEffect(() => {
                        if (bidding_price !== null) {
                                    toast.success("success", {
                                                position: "top-center"
                                    });
                        }
            }, [bidding_price])

            const [selected_players, set_selected_players] = useState([]);

            const handle_players = (player) => {
                        const { biddingPrice } = player;
                        if (biddingPrice > balance) {
                                    toast.error("not enough balance", {
                                                position: "top-center"
                                    });
                        } else {
                                    set_balance(balance - biddingPrice);
                                    set_bidding_price(biddingPrice);
                        }

                        const is_exist = selected_players.find((play) => play.playerId == player.playerId);
                        if (is_exist) {
                                    toast.error("player already selected", {
                                                position: "top-center"
                                    });
                        }

                        const new_player = [...selected_players, player];
                        set_selected_players(new_player);
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
                                                handle_players={handle_players}
                                    ></Players_selection>
                        </>
            )
}

export default App