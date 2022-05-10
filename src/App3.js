import React from "react";
import { useState, useEffect } from "react";

function App3 () {

    // state를 담아줄 array
    
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        setToDo(event.target.value);
    }
    
    const onSumit = (event) => {
        event.preventDefault();
        if(toDo === '') {
            return;
        }
        setToDo(''); // 직접 수정하는 방법
        setToDos(currentArray => [toDo, ...currentArray]) // 함수를 넣어 수정하는 방법
        /*
        const aaa = e
        const bbb = [a,b,c,d]
        |no|
        console.log([aaa,bbb]) -> [e, Array[4]] -> [e, [a,b,c,d]]
        |yes|
        console.log([aaa, ...bbb]) -> [e,a,b,c,d]
        -> ...array ========== '...' 이게 중요함!! =============
        */
        /*
        state를 직접 수정할 수 없다.
        array에 담긴 state를 수정하고 싶다면 
        수정하는 함수를 사용할 것
        */
    }
    console.log(toDos);

    return (
        <>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSumit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="write your to do......"
                />
                <button>Add To Do</button>
            </form>
        </>
    )
}

export default App3;