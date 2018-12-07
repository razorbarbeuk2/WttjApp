import { SHOW_VIDEO, HIDE_VIDEO } from '../actionType'

const defaultState = {
    isShow: false,
    title: '',
    subtitle: '',
    url: ''
}

export default (state = defaultState, action) => {
    switch (action.type){
        case SHOW_VIDEO:
            return {...state, isShow: true, title: action.title, subtitle: action.subtitle, url: action.url}
        case HIDE_VIDEO: 
            return {...state, isShow: false}
        default: 
            return state
    }
}
