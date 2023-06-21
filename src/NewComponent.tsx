import {useState} from "react";

type NewComponentType = {
    students: StudentType []
}

type StudentType = {
    id: number
    name: string
    age: number
}

type TopCarsType = {
    manufacturer: string
    model: string

}

export const NewComponent = (props: NewComponentType) => {

    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )


    const topCars: Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'GLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <>
            <ul>
                {props.students.map(el => {
                        return (
                            <li key={el.id}>
                                <span>{el.name}</span>
                                <span>  - age: {el.age}</span>
                            </li>
                        )
                    }
                )}
            </ul>


            {topCars.map((el, index) => {
                return (
                    <table key={index}>
                        <thead>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                        </thead>
                    </table>
                )
            })}

        </>
    )
}