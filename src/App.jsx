import React, { useState } from 'react'
import Header from './components/Header'
import Hero_section from './components/Hero_section'

function App() {
            const [balance, set_balance] = useState(0);
            const claim_balance = () => {
                        set_balance(balance + 1000000)
            }

            return (
                        <>
                                    <Header
                                                balance={balance}
                                    >
                                    </Header>
                                    <Hero_section
                                                claim_balance={claim_balance}
                                    >
                                    </Hero_section>
                        </>
            )
}

export default App