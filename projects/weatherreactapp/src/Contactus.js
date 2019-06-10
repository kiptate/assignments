import React from 'react'
import './stylescontactus.css'
import Weather from './Weather'
import Weather2 from './Weather2/Weather2'
import { withTheme } from './GlobalProvider';
import Form from './Form/Form'

const Contactus = (props) => {
    return (
        <>
        <div className='tabmain'>
            <div className='tabmain2'>
                <div className='tabmain3'>
                    <div className='tabmain3-city'>
                        <div className='tabacttitle'>
                            <p>Contact Us</p>
                        </div>
                        <div className='taboutus'>
                            <div className='tsection1'>
                                <form>
                                    <input className="textbox" type="text" name="" placeholder="Please send us meme's! Our customer service is tired of all the complaints!"/>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus