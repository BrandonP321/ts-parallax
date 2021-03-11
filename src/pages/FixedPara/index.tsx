import React, { ReactElement } from 'react'
import './index.css'

export default function FixedPara(): ReactElement {
    return (
        <div className='fixed-para-page'>
            <section className='one'>
                <div className='section-content'>
                    <h1>Welcome</h1>
                </div>
            </section>
            <div className='divider'></div>
            <section className='two'>
                <div className='section-content'>
                    <h1>Goodbye</h1>
                </div>
            </section>
        </div>
    )
}
