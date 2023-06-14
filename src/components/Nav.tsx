import React from 'react'
import logo from '../assets/img/Logo_blue.png'

const Nav = () => {
    return (
        <nav className='bg-white'>
            <div className='px-7'>
                <div>
                    <div>
                        <img src={logo} alt="scissor's logo" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav