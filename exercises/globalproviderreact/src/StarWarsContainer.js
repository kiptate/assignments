import React from 'react'
import {withProvider} from './GlobalProvider'

const StarWarsContainer = (props) => {

    const mappedFriends = props.starWarFriends.map( person => {
        return (
            <>
                <div key={person+1}>{person}</div>
                <button onClick={() => props.addToTeam(person)}>Add</button>
            </>
        )
    })
    return (
        <div className='content'>
            {mappedFriends}
        </div>
    )
}

export default withProvider(StarWarsContainer)