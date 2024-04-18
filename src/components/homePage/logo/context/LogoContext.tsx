// MyContext.tsx

import { createContext, useContext, Dispatch, SetStateAction } from 'react';

type ContextProps = {
  ready: boolean,
  setReady: Dispatch<SetStateAction<boolean>>,
  coloring: boolean,
  setColoring: Dispatch<SetStateAction<boolean>>,
}


const LogoContext = createContext<ContextProps>({ 
  ready: false,
  setReady: () => {},
  coloring: false,
  setColoring: () => {},
});


const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};


export { LogoContext, useLogo };