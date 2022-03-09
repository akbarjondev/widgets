import React, { useState } from 'react';

const Accordion = ({items}) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = index => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return <React.Fragment key={item.title}>
      <div 
        className={`title ${active}`}
        onClick={() => clickHandler(index)}
      >
        <i className='dropdown icon'></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.description}</p>
      </div>
    </React.Fragment>
  })

  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
}

export default Accordion;
