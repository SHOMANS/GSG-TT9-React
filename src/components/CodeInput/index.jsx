import React, { createRef, useEffect, useRef, useState } from 'react';
import './style.css';

const CodeInput = () => {
  // const inputRef1 = useRef(null);
  // const inputRef2 = useRef(null);
  // const inputRef3 = useRef(null);
  // const inputRef4 = useRef(null);
  const [refs, setRefs] = useState([]);

  const ref = useRef({});

  const arr = [1, 2, 3, 4];

  const handleChangeInput = (e) => {
    console.log(ref.current);
    // if (e.target.value.length === 1) {
    //   const obj = {
    //     1: inputRef1,
    //     2: inputRef2,
    //     3: inputRef3,
    //     4: inputRef4,
    //   };

    //   obj[+e.target.name + 1].current.focus();
    // }
  };

  useEffect(() => {
    setRefs(arr.map((item) => createRef(null)));
  }, []);

  console.log(refs);
  return (
    <div className='code__input'>
      <input ref={refs[0]} name={1} type='text' onChange={handleChangeInput} />
      <input ref={refs[1]} name={2} type='text' onChange={handleChangeInput} />
      <input ref={refs[2]} name={3} type='text' onChange={handleChangeInput} />
      <input ref={refs[3]} name={4} type='text' />
      {/* <button onClick={handleClick}>input focus</button> */}
    </div>
  );
};

export default CodeInput;
