import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state // need to fix
        }
        case 'check': {

            return state // need to fix
        }
        default:
            return state
    }
}
