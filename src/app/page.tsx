import Image from 'next/image';
import PizzaCalculator from './PizzaCalculator';

const Index = () => {
  return (
    <>
      <h1>Pizza Party Calculator</h1>
      <PizzaCalculator />
      <p>Now go and bake a great pizza!</p>
      <img
        src='https://banner2.cleanpng.com/20180811/wow/kisspng-neapolitan-pizza-neapolitan-cuisine-italian-cuisin-pizza-fest-e-shopping-il-gusto-di-piano-di-sorren-5b6fa4e876b2f5.0031116815340433684862.jpg'
        width={300}
        alt='A Gatsby astronaut'
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        Check out <a href='https://youtu.be/1-SJGQ2HLp8'>this</a> and{' '}
        <a href='https://youtu.be/8Q_9h6VKm9c'>this</a> if you are clueless how
        to do this.
      </p>
    </>
  );
};

export default Index;
