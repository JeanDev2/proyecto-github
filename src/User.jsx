import { useState } from "react";
import styled from 'styled-components'

const Avatar = styled.img`
    border: 10px solid black;
`


function User({name,  avatar}) {
    const [newName, setNewName] = useState('')
    const [counter, setCounter] = useState(0)
    const nombre = 'JEAN'
    
    function onClick() {
        setNewName (`${nombre}`)
        setCounter (counter + 1)
    }

    return (
        <div className="User" onClick={onClick}>
            <Avatar src={avatar} alt="" />
            <p>{newName} hemos dado click {counter} veces</p>
        </div>
    );
}

export default User;
