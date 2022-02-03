import React from 'react';
import AssistedServices from './AssistedServices';
import ReturnFilingServices from './ReturnFilingServices';
import Tools from './Tools';
import Calculators from './Calculators';

function Allcards() {
  return <div>
      <AssistedServices/>
      <ReturnFilingServices/>
      <Tools/>
      <Calculators/>
  </div>;
}

export default Allcards;
