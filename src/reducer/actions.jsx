export const addEvent=(evenement)=>{
    return{
        type : 'add',
        payload : evenement
    }
}
export const removeEvent=(id)=>{
    return{
        type : 'remove',
        payload : id
    }
}