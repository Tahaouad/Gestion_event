import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEvent } from "../reducer/actions"

const Acceuil=()=>{
    const [data,setData] = useState([])
    
    const agenda = useSelector(state=>state)

    const total = agenda.reduce((t)=>t+=1,0)
    // const total = agenda.length
    useEffect(()=>{
        const getData=async()=>{
            const myData = await axios.get('https://raw.githubusercontent.com/Tahaouad/Api_Data/master/users')
            setData(myData.data)
        }
        getData()
    })

    const [resultofSearch,setResultofSearch] = useState([])

    const categories = ['Conférences','Ateliers','Sports']
    const [search,setSearch] = useState(categories[0])

    useEffect(()=>{
        setResultofSearch(data.filter(evenement=>evenement.categorie==search))
    })
    const dispatch = useDispatch()

    const ajouter=(ev)=>{
        dispatch(addEvent(ev))
    }
    return(
        <>
           <select onChange={(e)=>setSearch(e.target.value)}>
                {categories.map(categorie=>
                    <option value={categorie}>{categorie}</option>
                    )}
           </select>
           <hr />
            <table border={1} width={'100%'}>
                 <tr>
                     <th>Nom</th>
                     <th>Date</th>
                     <th>Lieu</th>
                     <th>Action</th>
                 </tr>
                 {resultofSearch.map(evenement=>
                     <tr>
                         <td>{evenement.nom}</td>
                         <td>{evenement.date}</td>
                         <td>{evenement.lieu}</td>
                         <td>
                             <button className="btn btn-success" onClick={()=>ajouter(evenement)}>
                                 Ajouter a l'agenda
                             </button>
                         </td>
                     </tr>
                 )}
            </table>
            <hr />
            <ul>
                {agenda.map(ev=>
                    <li>{ev.nom} {ev.date} <button className="btn btn-warning">Retirer de l'agenda</button></li>
                    )}
            </ul>
            <h6>
                Total : {total}
            </h6>
            </>
    )
}
export default Acceuil;
