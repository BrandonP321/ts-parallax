import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Header(): ReactElement {
    return (
        <header>
            <Link to='/fixed-para'>Fixed Parallax</Link>
        </header>
    )
}
