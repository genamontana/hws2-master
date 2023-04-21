type initStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ChangeThemeIdActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
                return {...state,
                    themeId: action.id
                }
        default:
            return state
    }
}

export type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): {type: string, id: number} => ({ type: 'SET_THEME_ID', id } as const) // fix any
