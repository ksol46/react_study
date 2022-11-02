import React from "react";
import { text } from 'dom7/dist/dom7.modular';

const IterationSample = () => {
    const [names, setNames = useState([
        {id: 1, text:'눈사람'}, 
        {id: 2, text:'얼음'},
        {id: 3, text:'눈'},
        {id: 4, text:'바람'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    //입력된 값으로 업데이트를 시켜줌
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text: inputText,
        });

        setNextId(nextId + 1);
        console.log(nextNames);
        setInputText('');
    };

    const nameList = names.map((name) =>
        <li key={name.id}>{name.text}</li>);
        
    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);    
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onclick}>추가</button>
            <ul>{nameList}</ul>;
        </>
        

  )};


export default IterationSample;
