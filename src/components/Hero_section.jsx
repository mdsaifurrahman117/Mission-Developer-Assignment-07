import React from 'react'
import Banner from "../assets/banner-main.png"

function Hero_section({claim_balance}) {
            return (
                        <section 
                                    className="hero w-11/12 mx-auto mt-28 py-16 px-3  flex flex-col gap-8 items-center justify-center 
                                    bg-black  my-10 rounded-xl text-white text-center" 
                        >
                                    <img src={Banner} alt="banner logo" />
                                    <h1 className="text-xl md:text-3xl font-semibold">
                                                Assemble Your Ultimate Dream 11 Cricket Team
                                    </h1>
                                    <p className="text-xl">Beyond Boundaries Beyond Limits</p>
                                    <button 
                                                onClick={claim_balance}
                                                className="btn bg-amber-500 border-0 shadow-none"
                                    >
                                                Claim Free Credit
                                    </button>
                        </section>
            )
}

export default Hero_section