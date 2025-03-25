import React from 'react'
import { BsCoin } from "react-icons/bs"

function Balance() {
            return (
                        <div className="py-3 px-5 mr-5 md:mr-0 bg-base-100 border border-gray-200 rounded-md">
                                    <span className="flex flex-row gap-2 items-center justify-center">0 Coin 
                                                <BsCoin className="text-amber-500 text-xl" />
                                    </span>
                        </div>
            )
}

export default Balance