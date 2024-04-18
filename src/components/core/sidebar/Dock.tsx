import { useState, useRef} from 'react';
import { animated } from 'react-spring'
import { useWindowResize } from '../../../hooks/useWindowResize'
import { DockContext } from './context/DockContext'

// import {D_head, D_arm, D_leg, D_tail} from './Dragon'

interface DockProps {
  children: React.ReactNode
}

export const Dock = ({ children }: DockProps) => {
  const [hovered, setHovered] = useState(false)
  const [height, setHeight] = useState(0)
  const dockRef = useRef<HTMLDivElement>(null!)

  useWindowResize(() => {
    setHeight(dockRef.current.clientHeight)
  })

  return (
    <DockContext.Provider value={{ hovered,  height }}>
      <animated.div
        ref={dockRef}
        className={'dock'}
        onMouseOver={() => {setHovered(true)}}
        onMouseOut={() => {setHovered(false)}}
        style = {{y : "-50%"}}
      >
        {/* <D_head/>
        <D_arm/>
        <D_leg/>
        <D_tail/>  */}
        {children}
      </animated.div>
    </DockContext.Provider>
  )
}
