import { createContext, useContext} from 'react'


//TODO: Maybe later.. try to bring all properties from the dock to here so it can be a sidebarContext instead of a dock context... 

type DockApi = {
  hovered: boolean
  height: number

}

const initialState = {
  hovered: false,
  height: 0,
}

export const DockContext = createContext<DockApi>(initialState);


export const useDock = () => {
  return useContext(DockContext)
}


