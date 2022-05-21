import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  const [categories] = useState([
    {
      name: 'Projects',
    },

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  return   (
    <div>
        <Nav categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}></Nav>
        <main>
          
          {!contactSelected && aboutSelected ? (
            <div>
              <About></About>
            </div>
          ) : !contactSelected && !aboutSelected ? (
              <Projects currentCategory={currentCategory}></Projects>
              
            ) : (
              <Contact></Contact>
            )}
            
        </main>
      </div>
    );
}

export default App;
