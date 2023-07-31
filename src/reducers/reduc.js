import { add_reminder, clear_reminder, del_reminder } from "../shared/types";
import { bake_cookie, read_cookie } from 'sfcookies'
const reducer = (state = [], action) => {
    let reminders = []
    state = read_cookie('reminders')
    if (action.type === add_reminder) {
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        bake_cookie('reminders', reminders)
        return reminders
    }else if(action.type === del_reminder){
        reminders = state.filter((e) => e.id !== action.id)
        bake_cookie('reminders', reminders)
        return reminders
    }else if(action.type === clear_reminder){
        reminders = []
        bake_cookie('reminders', reminders)
        return reminders
    }else{
      return state  
    }
}

export default reducer