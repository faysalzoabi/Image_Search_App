import axios from 'axios';

export const ADD_IMAGES = 'addImages'
export const CLEAR_IMAGES = 'clearImages'

export const addImages = (imagesList) =>{
    return{
        type: ADD_IMAGES,
        payload:imagesList
    }
}

export const clearImages = () =>{
    return{
        type: CLEAR_IMAGES,
        payload:[]
    }
}



export const fetchData = (searchImage) => (dispatch, getState) => {
        const state= getState()
        axios.get(`${state.apiUrl}/?key=${state.apiKey}&q=${searchImage}&image_type=photo&per_page=${state.amount}&safesearch=true`)
        .then(res => {
            dispatch(addImages(res.data.hits))
        })
        .catch(err => console.log(err))

}