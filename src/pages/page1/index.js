import React, { useState, useEffect } from 'react'
import './index.css'
const Page = () => {

    const [state, setState] = useState(null)

    useEffect(() => {

    }, [])

    return (
        <div>
            <p>Page</p>
            <button className='btn'>btn</button>
            <button className='btn2'>btn2</button>
            <button className='btn3'>btn3</button>
            <div className='card'>card</div>
            <div className='alert'>alert</div>
            <div className='alert2'>alert2</div>
            <div className='card2'>card2</div>
            <div className='card3'>card3</div>
            <div className='card4'>card4</div>
        </div>  
    )
}

export default Page