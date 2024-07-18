import React from 'react'
import Search from './Search'

function Header({ title }) {
    return (
        <nav className="navbar bg-primary-subtle">
            <div className='container-fluid d-flex w-100 justify-content-between'>
                <strong className="navbar-brand text-primary">
                    {title}
                </strong>
                <Search />
            </div>
        </nav>
    )
}

export default Header