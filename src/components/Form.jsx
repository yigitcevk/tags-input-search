import React, { useState, useEffect, useRef } from 'react';
import TagsInput from './TagsInput';

const Form = ({data}) => {
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const sortedData = useRef(null);
  const [listResults, setListResults] = useState([]);

  useEffect(() => {
    sortedData.current = (data.filter(t => 
        {
            let isValid = true;
            for (let i = 0; i < tags.length; i++) {
            if (!t.question.toLowerCase().includes(tags[i])) {
                isValid = false;
            }
            }
            if (isValid) {
            return t;
            }
        }      
    ));
    console.log(sortedData);

  });
  

  const changeHandler = (value) => {
      setTags(value);
      if(value.length > 0 && errors.tags) {
        setErrors(prev => {
          const prevErrors = {...prev};
          delete prevErrors.tags;
          return prevErrors;
        }); 
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
        }else{
            if(tags.length > 0) {
                console.log(tags);
            }
        
            setListResults(sortedData.current.map((result) => 
                <li className='corelist' key={result.question} >
                    <div className='dc-f-replies'>
                        {result.repliesNum}
                        <span>REPLIES</span> 
                    </div>
                    <div className='dc-f-question'>
                        <a href={result.url} >
                            {result.question}
                        </a>
                    </div>
                </li>
            ));

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
            id="tags"
            placeholder="Add tag"
            onChange={changeHandler}
            error={errors.tags}
            defaultTags={tags}
            />
            <button className='search-button' type="submit" >Ara</button>
        </form>

        <div className='result-container'>
            <h1 className='en-son-sorulanlar'>En Son Sorulanlar</h1>
          <ul className='result-list'>{listResults}</ul>
        </div>

    </div>
  );
}

export default Form;
