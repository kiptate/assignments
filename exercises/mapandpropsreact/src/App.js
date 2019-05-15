import React from 'react';
import VacationCard from './VacationCard'
    
  const vacationSpots = [
      {
        place: "Meridian, Idaho",
        price: 40,
        amount: "$",
        timeToGo: "Spring",
        backgroundColor: 'lightgreen'
      },{
        place: "Cancun",
        price: 900,
        amount: "$$",
        timeToGo: "Winter",
        backgroundColor: 'lightblue'
      },{
        place: "China",
        price: 1200,
        amount: "$$$",
        timeToGo: "Fall",
        backgroundColor: 'palegoldenrod'
      },{
        place: "Russia",
        price: 1100,
        amount: "$$$",
        timeToGo: "Summer",
        backgroundColor: 'yellow'
      },{
        place: "Lebanon",
        price: 400,
        amount: "$",
        timeToGo: "Spring",
        backgroundColor: 'lightgreen'
      }
    ]   

const App = () => {
  const mappedvacationSpots = vacationSpots.map(item => {
    return <VacationCard place={item.place} price={item.price} timeToGo={item.timeToGo} backgroundColor={item.backgroundColor} amount={item.amount} />
  })
  return (
    <div>
        {mappedvacationSpots}
    </div>
  )
}

export default App