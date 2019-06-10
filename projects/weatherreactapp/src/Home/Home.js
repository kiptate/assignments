import React from 'react'
import './styleshome.css'
import Weather from '../Weather'
import Weather2 from '../Weather2/Weather2'
import { withTheme } from '../GlobalProvider';
import Form from '../Form/Form'

const Home = (props) => {
    return (
        <>
        <div className={props.temp === '' ? '' : 'main'}>
            <div className='main2'>
                <div className={props.weather === 'Rain' ? 'main3-rain': props.weather === 'Clouds' ? 'main3-clouds' : props.weather === 'Clear' ? 'main3-clear' : props.weather ==='Snow' ? 'main3-snow' : props.weather ==='Thunderstorm' ? 'main3-thunder' : props.weather ==='Drizzle' ? 'main3-thizzle' : props.weather ==='Haze' ? 'main3-haze' : props.weather ==='Mist' ? 'main3-mist' : 'main3'}>
                    <div className={props.weather === '' ? '' : 'main3-city'}><Weather /></div>
                    <div className='main3-input'><Form /></div>
                </div>
                <div className={props.temp === '' ? '' : 'main4'}>
                    <div className={props.temp === '' ? '' : 'main4-results'}><Weather2 /></div>
                </div>
                <div className={props.temp === '' ? '' : 'main5'}>
                    <div className={props.temp === '' ? '' : 'main4-activities'}>
                        { props.weather === 'Clear' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Clear' && <p className='actresult1'> Go hiking, Ride a bike, Take a walk, Explore the city, Feed the birds, Skateboarding, Rollerblading, Draw on the sidewalk with chalk, Have a picnic, Go to the park, Play soccer, try Geocaching!</p> }
                        { props.weather === 'Rain' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Rain' && <p className='actresult1'> Have a water gun fight, Make a mud pie, Take pictures, Race paper boats or leaves, Rain art, Make rain music, or Go for a nature walk.</p> }
                        { props.weather === 'Clouds' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Clouds' && <p className='actresult1'> Sit under a tree, Write in a journal, Paint a picture, Read a book, Go hiking, Ride a bike, Take a walk, Explore the city, Feed the birds, Skateboarding, Go for a run, or Fly a kite.</p> }
                        { props.weather === 'Thunderstorm' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Thunderstorm' && <p className='actresult1'> Take pictures, Try to chase the storm in your car, Be safe don't do anything that would get you struck by lightning!</p> }
                        { props.weather === 'Drizzle' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Drizzle' && <p className='actresult1'> Have a water gun fight, Make a mud pie, Take pictures, Race paper boats or leaves, Rain art, Make rain music, or Go for a nature walk.</p> }
                        { props.weather === 'Mist' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Mist' && <p className='actresult1'> Have a water gun fight, Make a mud pie, Take pictures, Race paper boats or leaves, Rain art, Make rain music, or Go for a nature walk.</p> }
                        { props.weather === 'Haze' && <p className='acttitle'>OUTDOOR ACTIVITIES IN YOUR AREA</p> }{ props.weather === 'Haze' && <p className='actresult1'> Sit under a tree, Write in a journal, Paint a picture, Read a book, Go hiking, Ride a bike, Take a walk, Explore the city, Feed the birds, Skateboarding, Go for a run, or Fly a kite.</p> }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default withTheme(Home)