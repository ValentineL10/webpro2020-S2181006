import React, {useState, useEffect} from 'react';
const Counter = (props) =>{

    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Counter")

    useEffect(() =>{
        console.log("Komponen telah dimount")
    }, [])
    
    const tambah = (params) =>{
        setNumber(number+params)
    }
    const kurang = () =>{
        number < 1 ? setNumber(0) : setNumber(number - 1)
    }
    
    return(
        <div>
            <p>{title}</p>
            <p>Komponen ini diklik sebanyak {number} kali</p>
            <button onClick = {()=>tambah(1)}>Tambah</button>
            <button onClick = {kurang}>Kurang</button>
        </div>
    )
}

export default Counter;