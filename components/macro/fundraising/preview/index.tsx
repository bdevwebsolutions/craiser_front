import React from 'react'
import { Container, Project } from './styles'


const Preview = ({projects}) => {

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        if(projects !== {}){
            let arr = Object.keys(projects).map(el => {
                return projects[el];
            })
            setItems(arr);
        }
    }, [projects])
    return (
        <Container>
            <Project>1</Project>
            <Project>2</Project>
            <Project>3</Project>
            <Project>1</Project>
            <Project>2</Project>
            <Project>3</Project>
        </Container>
    )
}

export default Preview;