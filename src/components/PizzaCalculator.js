import React, { useState } from 'react';
import styled from 'styled-components';

const INGREDIENTS = [
  {
    name: 'flour',
    metricSmall: 'g',
    basisAmount: 500,
    metricBig: 'kg',
  },
  {
    name: 'water',
    metricSmall: 'ml',
    basisAmount: 325,
    metricBig: 'l',
  },
  {
    name: 'yeast',
    metricSmall: 'g',
    basisAmount: 7,
    metricBig: 'kg',
  },
  {
    name: 'salt',
    metricSmall: 'g',
    basisAmount: 10,
    metricBig: 'kg',
  },
];

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const unitCalc = () => {
  const doughWeight = 6 * 130;
  const pizzaWeight = 150;

  return Math.round(doughWeight / pizzaWeight);
};

const PizzaCalculator = () => {
  const [pizzaWanted, setPizzaWanted] = useState(2);

  const handleChange = e => {
    const number = e.target.value;
    setPizzaWanted(number);
    console.log(number);
  };

  const calculateNeededAmount = basisAmount =>
    Math.round((basisAmount / unitCalc()) * pizzaWanted);

  const generateText = ({ name, metricSmall, basisAmount, metricBig }) => {
    const neededAmount = calculateNeededAmount(basisAmount);
    const isBigAmount = neededAmount >= 1000;
    const finalAmount = isBigAmount ? neededAmount / 1000 : neededAmount;
    const correctMetric = isBigAmount ? metricBig : metricSmall;

    return `${name}: ${finalAmount}${correctMetric}`;
  };
  return (
    <StyledContainer>
      <h2>How many pizza you want to make?</h2>
      <input
        type="number"
        value={pizzaWanted}
        onChange={e => handleChange(e)}
      />
      <StyledList>
        <p>You need the following amount from the ingredients:</p>
        {INGREDIENTS.map(ingredient => (
          <li style={{ marginLeft: '30px' }}>{generateText(ingredient)}</li>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default PizzaCalculator;
