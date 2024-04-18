
import {  useSpring,  animated} from "react-spring";

import Main from "./Main";
import Ouroboros from "../../assets/icons/Ouroboros";

const Loading = () =>{

  const spring1 = useSpring({
    from: {
      transform: "rotate(0deg)"
    },
    to:{transform: "rotate(-360)"},
    loop: true,
    config : {duration : 1900}
  });

  return (
    <>
      <Main>
        <div className = 'load_wrapper'>
          <animated.div style = {spring1}>
            <Ouroboros/>
          </animated.div>
          <span className="smallText" style = {{color: 'black'}}>
            Loading... 
          </span>
        </div>
      </Main>
    </>
  );
}

export default Loading;




