import React from 'react'
import './mainstyles.css'

const Main = () => {
    return(
        <>
        <h1>Choose your Web Hosting Plan!</h1>
        <div className='main-container'>Main
            <div className='second-box container'>
                <h2>Single Shared Hosting</h2>
                    <div className="pricetag">
                        <div className="price_currency">$</div>
                        <div className="price_amount">2</div>
                        <div className="price_cent">.15</div>
                    </div>
                        <div className="price_button">
                            <button>Get Started</button>
                        </div>
                        <p>1 Website</p>
                        <p>1 Email Account</p>
                        <p>100GB of Bandwith</p>
                        <p>1X Processing Power & Memory</p>
            </div>
            <div className='third-box container'>
                <h2>Premium Shared Hosting</h2>
                        <div className="pricetag2">
                            <div className="price_currency2">$</div>
                            <div className="price_amount2">4</div>
                            <div className="price_cent2">.20</div>
                        </div>
                            <div className="price_button2">
                                <button>Get Started</button>
                            </div>
                            <p>UNLIMITED Websites</p>
                            <p>UNLIMITED Email Accounts</p>
                            <p>UNLIMITED of Bandwith</p>
                            <p>2X Processing Power & Memory</p>            
            </div>

            <div className='fourth-box container'>box 2</div>
        </div>

        </>
    )
}

export default Main