

import { useState, useEffect } from "react";



interface TxtProps {
  txt: string[];
}


interface AuxProps {
  children: string | string[];
  rubber: boolean
  delay: number;
}


const Letter = ({ children, rubber, delay }: AuxProps) => {
  return (
    <div
      className={`${rubber ? "rubberBand" : "bounceIn"}`}
      style={
        rubber ? { animationDelay: "0s" } : { animationDelay: `${delay}s` }
      }
    >
      {children}
    </div>
  );
}

const RubberTxt = ({ txt }: TxtProps) => {

  const [rubber, setRubber] = useState(false);

  useEffect(() => {
    if (rubber) {
      setRubber(false);
    }
    const timeOut = setTimeout(() => {
      setRubber(true);
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className="animeText" style = {{margin: "20px", marginBottom: "0px"}}>
      {txt.map((letter, i) => (
        <Letter key={`row1_${i}`} delay={i * 0.15} rubber={rubber}>
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default RubberTxt