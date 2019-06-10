import React from 'react'
import {withProvider} from './GlobalProvider'


const Team = (props) => {

    const mappedFriends = props.team.map( (item, i) => {
        return (
            <>
                <div key={i+10}>{item}</div>
            </>
        )
    })
    return (
        <div className='content'>
            {mappedFriends}
        </div>
    )
}

export default withProvider(Team)
