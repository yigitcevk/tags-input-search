import React from 'react';
import Form from './Form';
import Header from './Header';

const Page = ({data}) => {
  return (
    <div>
      <Header/>
      <Form 
      data={data}
      />
    </div>
  );
}

export default Page;