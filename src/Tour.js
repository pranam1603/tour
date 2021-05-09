import React, { useState } from 'react';
import Tours from './Tours';

const Tour = ({ id, name, info, image, price, remove }) => {
  const [isReadMore, setReadMore] = useState(false)


  return (
    <article className='single-tour'>
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{isReadMore ? info : info.substring(0, 200)}...
          <button onClick={() => setReadMore(!isReadMore)}>{isReadMore ? 'Show Less' : 'Read More'}</button>
        </p>
        <button className='delete-btn' onClick={() => remove(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
