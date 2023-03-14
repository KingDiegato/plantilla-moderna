import {FC, ReactNode, useReducer, useState} from 'react'
import { useRouter } from 'next/router'
import { UiContext } from './UiContext'
import { uiReducer } from './uiReducer';


export interface UIState {
    sidemenuOpen: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

interface Props {
    children: ReactNode
}


export const UiProvider: FC<Props> = ({children}) => {
    
    const {pathname} = useRouter()
    
    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )
    
    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }
    
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })
    
    const [ modeTheme, setModeTheme ] = useState(false)
    
    const handleModeTheme = () => {
        setModeTheme(!modeTheme)
    }

    return (
        <UiContext.Provider
            value={{
                pathname,
                ...state,
                modeTheme,

                // Methods
                closeSideMenu,
                openSideMenu,
                handleModeTheme,
            }}
        >
            {children}
        </UiContext.Provider>
    )
}