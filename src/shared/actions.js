import { add_reminder, del_reminder, clear_reminder } from "./types";

export const adding = (text, date) => {
    const action = {
        type: add_reminder,
        text,
        date
    }
    return action
}

export const removing = (id) => {
    const action = {
        type: del_reminder,
        id
    }
    return action
}

export const clearing = () => {
    const action = {
        type: clear_reminder,
    }
    return action
}