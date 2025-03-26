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
            
            const [bidding_price, set_bidding_price] = useState(null)

            useEffect( () => {
                        if ( bidding_price !== null) {
                                    toast.success("success", {
                                                position : "top-center"
                                    });
                        }
            }, [bidding_price])

            const handle_buy = (price) => {
                        if (price > balance) {
                                    toast.error("not enough money", {
                                                position : "top-center"
                                    });
                        } else {
                                    set_balance(balance - price);
                                    set_bidding_price(price);
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
                                                handle_buy={handle_buy}
                                    ></Players_selection>
                        </>
            )
}

export default App