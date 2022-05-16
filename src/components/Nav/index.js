import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
      } = props;

    return (
        <header className='sticky border-b-8 border-slate-300 py-2 header '>
      <nav>
    
    
        <ul className="flex items-center">
        <li>
      <h2 className='px-4 text-3xl'>
        <a href="/">
           Jared Pennington
        </a>
      </h2>
      </li>
         <div className="pr-3 ml-auto text-xl">
         <div className='flex flex-row'>
          <li className={`px-3 ${resumeSelected && 'opal'}`}>
            <span onClick={() => {setContactSelected(false); setResumeSelected(true)}}>About</span>
          </li>
          {categories.map((category) => (
            <li
              className={`px-3 ${
                currentCategory.name === category.name && !contactSelected && !resumeSelected && 'opal'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li> 

          ))}
          <li className={`px-3 ${contactSelected && 'opal'}`}>
            <span onClick={() => {setContactSelected(true); setResumeSelected(false)}}>Contact</span>
          </li>
          </div>
          </div>
        </ul>
      </nav>
    </header>
            
     
    )
}

export default Nav;