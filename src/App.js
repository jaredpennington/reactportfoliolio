import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    {
      name: 'projects',
    },
    {
      name: 'resume',
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return   (
    
    <div className='bg-darksienna-100'>
      <Nav categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Nav>
    </div>

  );
}

export default App;
