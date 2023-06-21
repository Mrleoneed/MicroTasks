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