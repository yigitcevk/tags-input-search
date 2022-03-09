import React, { useState } from 'react';


const TagsInput = ({ label, id, name, placeholder, error, onChange, defaultTags }) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState(defaultTags ? defaultTags : []);
  const [isActive, setIsActive] = useState(false);


  const changeHandler = (e) => {
    setValue(e.target.value);
    onChange(name, tags);
  }

  /**
   * Remove tags 
   * Update array
   */
  const removeTag = (tag) => {
    const arr = tags.filter(t => t !== tag);
    setTags(arr);
    onChange(name, arr);
  }

  /**
   * Add tags with enter 
   * Update tags array
   */
  const updateTagsHandler = (e) => {
    e.preventDefault();

    // Add tags if input is not empty
    if(e.target.value !== '' && e.target.value !== ',') {

      if(e.key === 'Enter') {
      
          const newTag = value.trim();
          
          if(!tags.includes(newTag) && newTag !== '') {
            const arr = [...tags, newTag];
            setTags(arr);
            onChange(name, arr);
          }
        
        setValue('');

      }

    }
    /*
    // Remove tags if backspace is pressed
    if(e.key === 'Backspace' && tags.length > 0) {
      const copyOfTags = [...tags];
      copyOfTags.pop();
      setTags(copyOfTags);
      onChange(name, copyOfTags);
    }
    */
  }

  
  const focusHandler = () => {
    setIsActive(true);
  }

  const blurHandler = () => {
    setIsActive(false);
  }

  return(
    <div className={!isActive ? "tags-input" : "tags-input active"}>
      {label && <label htmlFor={id ? id : name}>{label}</label>}
      <div className="tags-input__wrapper">
        <div className="tags-input__tags">
          {tags.map((tag, i) => 
            <div key={i} className="tag">
              {tag} <span onClick={() => removeTag(tag)}><i className="fas fa-times-circle"></i></span>
            </div>
          )}
          <input 
            type="text"
            placeholder={placeholder}
            name={name}
            id={id ? id : name}
            value={value}
            onChange={changeHandler}
            autoComplete="off"
            onKeyUp={updateTagsHandler}
            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TagsInput;