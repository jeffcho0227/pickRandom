import React from 'react';
import Style from './Style/Description.scss';

const Description = () => {
  return (
    <div className={Style.description_container}>
      <h2>How Pick-aroo works</h2>
      <div>Pick-aroo alows you to input names to the selection pool, </div>
      <div>then you can plick on the "next" button to pick a random name out</div>
      <div>If you would like to delete the name from the pool</div>
      <div>simply click on the name from the list, then the name would be removed.</div>
      <div>happy selecting!!</div>
    </div>
  )
}

export default Description;