import React, {MouseEvent, useState} from 'react';
import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponent} from "./NewComponent";
// import {log} from "util";
// import {Button} from "./components/Button";

function App() {
    // const [students, setStudents] = useState([
    //         {id: 1, name: "James", age: 8},
    //         {id: 2, name: "Robert", age: 18},
    //         {id: 3, name: "John", age: 28},
    //         {id: 4, name: "Michael", age: 38},
    //         {id: 5, name: "William", age: 48},
    //         {id: 6, name: "David", age: 58},
    //         {id: 7, name: "Richard", age: 68},
    //         {id: 8, name: "Joseph", age: 78},
    //         {id: 9, name: "Thomas", age: 88},
    //         {id: 10, name: "Charles", age: 98},
    //         {id: 11, name: "Christopher", age: 100},
    //     ]
    // )

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     return (
    //         console.log("Hello Im Vasya")
    //
    //     )
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     return (
    //         console.log('Hello Im Ivan')
    //     )
    // }
    //
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }


    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    // const Button1Foo = (subscriber: string, age: number, address: string) => {
    //     console.log(subscriber, age, address)
    // }
    //
    // const Button2Foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    //
    // const Button3Foo = (title: string) => {
    //     console.log(title)
    // }

    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickHandler2 = () => {
        setA(0)
    }
    return (
        <>
            {/*<Header title={'New header'}/>*/}
            {/*<Body titleForBody={'New body'}/>*/}
            {/*<Footer titleForFooter = {'New Footer'}/>*/}
            {/*<NewComponent students={students}/>*/}

            {/*<button onClick={(event) => onClickHandler('Vasya')}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Ivan')}>MyYoutubeChanel-2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}

            {/*<Button name={'MyYoutubeChanel-1'} callBack={() => Button1Foo('Vasya', 21, 'live in Moscow')}/>*/}
            {/*<Button name={'MyYoutubeChanel-2'} callBack={() => Button2Foo('Artem')}/>*/}
            {/*<Button name={'Stupid Button'} callBack={() => Button3Foo('Im stupid button')}/>*/}
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandler2}>0</button>
        </>
    )
}

export default App;
