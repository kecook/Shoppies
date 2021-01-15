import React, { useState } from 'react';
import Button from '../button/button';

const SearchBar = ({
  setAlert,
  searchForMovies,
  showClearButton,
  clearMovies,
}) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      setAlert('Search field can not be left blank');
    } else {
      searchForMovies(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className='search'
          type='text'
          name='text'
          placeholder='Search Movies...'
          value={text}
          onChange={onChange}
        />
        <input
          className='btn--light--solid btn--full'
          type='submit'
          value='Search'
        />
      </form>

      {showClearButton && (
        <Button
          text={'Clear'}
          onClick={clearMovies}
          buttonStyle={'btn--scuba--solid'}
          buttonSize={'btn--full'}
        />
      )}
    </div>
  );
};

export default SearchBar;
