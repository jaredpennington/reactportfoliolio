import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {

  const [categories] = useState([
    {
      name: 'Projects',
    },
    {
      name: 'Resume',
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  return   (
    <div className='bg-darksienna-100'>
        <Nav categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}></Nav>
        <main>
          {!contactSelected && aboutSelected ? (
            <>
              <About></About>
            </>
          ) : !contactSelected && !aboutSelected ? (
              <Projects></Projects>
              
            ): (
              <Contact></Contact>
            )}
        </main>
      </div>
    );
}

export default App;
