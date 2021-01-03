import React, { useState } from 'react';
import Button from '../button/button';

const SearchBar = (props) => {
  const [text, setText] = useState(''); 
 
 
   const onChange = (e) => {
     setText( e.target.value);
   };
 
  const  onSubmit = (e) => {
     e.preventDefault();
     if (!text) {
       props.setAlert('Search field can not be left blank');
     } else {
       props.searchForMovies(text);
       setText('');
     }
   };

     return (
       <div>
         <form onSubmit={onSubmit}>
           <input
             type='text'
             name='text'
             placeholder='Search Movies...'
             value={text}
             onChange={onChange}
           />
           <input className='btn--light--solid btn--full' type='submit' value='Search' />
         </form>
         
         {props.showClearButton && (
          //  <button
          //  className='btn btn-block btn-clear'
          //   onClick={props.clearMovies}>Clear</button>
            <Button 
          text={"Clear"}
          onClick={props.clearMovies}
          buttonStyle={"btn--scuba--solid"} 
          buttonSize={"btn--full"}/>
         
         )} 
      
       </div>
     );
   
         }
 
 export default SearchBar;
 