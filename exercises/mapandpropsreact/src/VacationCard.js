import React from 'react'

const VacationCard = (props) => {
    let price = props.price
    let place = props.place
    let timeToGo = props.timeToGo
    let backgroundColor = props.backgroundColor
    let amount = props.amount
    
    return (
        <div style={{backgroundColor }}>
            <h1>{price}</h1>
            <h2>{amount}</h2>
            <h3>{place}</h3>
            <p>{timeToGo}</p>   
        </div>
    )
}
export default VacationCard