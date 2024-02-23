import axios from "axios"
import { useEffect, useState } from "react"

const Details=()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData=async()=>{
            const myData = await axios.get('https://raw.githubusercontent.com/Tahaouad/Api_Data/master/users')
            setData(myData.data)
        }
        getData()
    })
    return(
        <>
        <table width={'100%'} border={1}>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Lieu</th>
                <th>Categorie</th>
            </tr>
            {data.map(e=>
                <tr>
                    <td>{e.id}</td>
                    <td>{e.nom}</td>
                    <td>{e.date}</td>
                    <td>{e.lieu}</td>
                    <td>{e.categorie}</td>
                </tr>
            )}
        </table>
        </>
    )
}
export default Details