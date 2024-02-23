const initAgenda = []

const reducer=(state=initAgenda,action)=>{
    switch(action.type){
        case 'add' : return [...state,action.payload] 
        case 'remove' : return state.filter(evenement => evenement.id !== action.payload)
        default : return [...state]
    }
}
export default reducer