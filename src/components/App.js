import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'React nima?',
    description: 'React javascript kutubxona'
  },
  {
    title: 'Nima uchun React ishlatish kk?',
    description: 'React ko`pchilik dasturchilar tomonidan sevib foydalaniladi'
  },
  {
    title: 'JSX nima?',
    description: 'JavaScript uchun sintaks'
  }
]

const App = () => {

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
