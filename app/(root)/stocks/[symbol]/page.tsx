"use client"

import React from 'react'
import {useParams} from "next/navigation";

const StockDetails = () => {
    const {symbol} = useParams()
    return (
        <div>StockDetails for {symbol}</div>
    )
}
export default StockDetails
