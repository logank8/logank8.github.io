import React, {useEffect, useState}  from 'react';

const Blog = () => {
    const [message, setMessage] = useState('');
    useEffect(() => { // eventually will have to change this to permanent server host endpoint
    fetch('http://localhost:3306/education')
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((err) => console.log(err));
  }, []);
    return (
        <div 
            style={{
                fontFamily: 'serif'
            }}
        >
            No blog here yet :( one day
        </div>
    );
    // TODO:
    // add admin login ? idk
    // connect db to this display :)
};

export default Blog;