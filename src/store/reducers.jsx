import {ADD_IMAGES, CLEAR_IMAGES} from './actions'

const initState = {
    amount:15,
    apiUrl:'https://pixabay.com/api',
    apiKey:'10719673-96a765bfec3365b312bfe2d33',
    images:[]
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case ADD_IMAGES:
            return{
                ...state,
                images:[...action.payload]
            }

            case CLEAR_IMAGES:
            return{
                ...state,
                images:[]
            }
        default:
            return state
    }
}

export default reducer