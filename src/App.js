import React from 'react';
import { useState, useEffect } from 'react';
// import Button from './Button'  // 컴포넌트 렌더링
// import styles from './App.module.css'

function App() {

  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue( (prev) => prev + 1 );
  }

  const [keyword, setKeyword] = useState('');
  const onChange = (event) => {
    setKeyword(event.target.value);
  }


  useEffect(() => {  // useEffect : API와 같이 한 번만 호출할 수 있도록 해줌
    console.log('I run only once');
  }, []);

  useEffect( () => {
    console.log("I run when 'keyword' changes");
  }, [keyword]) // [특정키워드] 를 작성하면 해당 것만 작동한다.

  useEffect( () => {
    console.log("I run when 'counter' changes");
  }, [counter])

  useEffect( () => {
    console.log("I run when 'keyword' & 'counter' changes");
  }, [keyword ,counter])

  return (
    <>
      <input 
        type="text"
        value={keyword}
        placeholder="Search here..."
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </>
  );
}
/* function App() {
  return (
    <>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={'Continue'} />
    </>
  );
} */

export default App;
