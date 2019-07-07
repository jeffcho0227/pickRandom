import React from 'react';
import Style from './Style/Description.scss';

const Description = () => {
  return (
    <div className={Style.description_container}>
      <h2>How Pick-aroo works</h2>
      <p>Pick-aroo alows you to input names to the selection pool, </p>
      <p>then you can plick on the "next" button to pick a random name out</p>
      <p>If you would like to delete the name from the pool</p>
      <p>simply click on the name from the list, then the name would be removed.</p>
      <p>happy selecting!!</p>
    </div>
  )
}

export default Description;