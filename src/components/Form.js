import React, { useState } from 'react';
import TagsInput from './TagsInput';

const Form = () => {
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});

  const changeHandler = (name, value) => {
    if(name === 'tags') {
      setTags(value);
      if(value.length > 0 && errors.tags) {
        setErrors(prev => {
          const prevErrors = {...prev};
          delete prevErrors.tags;
          return prevErrors;
        });
      }
    }
  }

  /**
   * Handling what happens on submit click
   */
  const submitHandler = e => {
    e.preventDefault();

    if(tags.length === 0) {
      setErrors(prev => ({
        ...prev,
        tags: 'Please add at least one tag'
      }));
    }

    if(tags.length > 0) {
      console.log(tags);
      // Submit form
    }
  }

  return (
    <div className='form-div'>
        <header className="header">
            <h1 className='form-destegi'>Form Desteği</h1>
            <h4 className='under-form-destegi'>Cevaplanmış destek sorularına göz atın ya da kendi sorunuzu sorun.</h4>      
        </header>

        <form className='keyword-form' onSubmit={submitHandler}>
            <TagsInput 
            label="Tags"
            id="tags"
            name="tags"
            placeholder="Add tag"
            onChange={changeHandler}
            error={errors.tags}
            defaultTags={tags}
            />
            <button className='search-button' type="submit">Ara</button>
        </form>
    
    </div>
  );
}

export default Form;