import {combaineReducers} from 'redux'
import todos from './todos';
import visbilityfilter from './visiblityfilter'

export default combaineReducers({
    todos,
    visbilityfilter
})