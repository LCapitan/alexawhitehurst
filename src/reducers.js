const initialState = {
    menuIsOpen: false,
    lightModeOn: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                menuIsOpen: !state.menuIsOpen
            }
        case 'TOGGLE_LIGHT':
            return {
                ...state,
                lightModeOn: !state.lightModeOn
            }
        default:
            return state
    }
}