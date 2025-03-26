import React from 'react'
import { BsCoin } from "react-icons/bs"

function Balance({ balance }) {
            return (
                        <div className="py-3 px-5 mr-5 md:mr-0 bg-base-100 border border-gray-200 rounded-md">
                                    <ul className="flex flex-row gap-2 items-center justify-center">
                                                <li>{balance}</li>
                                                <li>Coin </li>
                                                <li><BsCoin className="text-amber-500 text-xl" /></li>
                                    </ul>
                        </div>
            )
}

export default Balance