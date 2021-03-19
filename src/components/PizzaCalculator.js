import React, { useState } from 'react'

const INGREDIENTS = [
  {
    name: 'flour',
    measure: 'g',
    amount: 500,
  },
  {
    name: 'water',
    measure: 'ml',
    amount: 325,
  },
  {
    name: 'yeast',
    measure: 'g',
    amount: 7,
  },
  {
    name: 'salt',
    measure: 'g',
    amount: 10,
  },
]

const unitCalc = () => {
  const doughWeight = 6 * 130
  const pizzaWeight = 150

  return Math.round(doughWeight / pizzaWeight)
}

const PizzaCalculator = () => {
  const [pizzaWanted, setPizzaWanted] = useState(2)

  const handleChange = e => {
    const number = e.target.value
    setPizzaWanted(number)
    console.log(number)
  }

  const calculateNeededAmount = amount =>
    Math.round((amount / unitCalc()) * pizzaWanted)
  return (
    <div>
      <h2>How many pizza you'd like to make?</h2>
      <input
        type="number"
        value={pizzaWanted}
        onChange={e => handleChange(e)}
      />
      <ul>
        You need the following amount from the ingredients:
        {INGREDIENTS.map(({ name, measure, amount }) => (
          <li style={{ marginLeft: '30px' }}>{`${name}: ${calculateNeededAmount(
            amount
          )}${measure}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default PizzaCalculator
