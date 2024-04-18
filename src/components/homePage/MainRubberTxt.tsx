import {useState, useEffect} from 'react';
import Hlogo from '../../assets/icons/Hlogo';
import useScreenWidth from '../../hooks/useScreenWidth';


// TODO: Later maybe, adjust and remake this component as a global component.

const txt_str1 = "Hi,"
const txt_str2 = "I'm  enry,"
const txt_str3 = "Web Developer."
const arr_str1 = [...txt_str1]
const arr_str2 = [...txt_str2]
const arr_str3 = [...txt_str3]


interface AnimeProps {
  children: string | string[];
  loaded : boolean
  delay : number
}


const Letter = ({ children, loaded, delay } : AnimeProps) => {
  return (
    <div
      className={`${loaded ? "rubberBand" : "bounceIn"}`}
      style={loaded ? {animationDelay : '0s'} : { animationDelay: `${delay}s`}}
    >
      {children}
    </div>
  );
};



const AnimeTxt = () =>  {

  const [loaded, setLoaded] = useState(false)
  const screenWidth = useScreenWidth();
  const hsize = screenWidth > 900 ?   {width : "5.5vw", height : "6.5vw" } : {width : "13vw", height : "15vw" };


  useEffect(() => {
    if(loaded) {setLoaded(false)}
    const timeOut = setTimeout(() => {
      setLoaded(true);
    }, 3800)
    return () =>{clearTimeout(timeOut);}
  }, [])

  return (
    <>

      <div className="animeText" style = {{paddingLeft :"20px"}}>
        {arr_str1.map((letter, i) => (
          <Letter 
            key={`row1_${i}`}
            delay = {i * 0.15 }
            loaded = {loaded}
          >
            {letter}
            
          </Letter> 

        ))}
      </div>


      <div className="animeText" style = {{paddingLeft :"20px"}}>
        {arr_str2.map((letter, i) => {
          const shouldRenderH = i === 4
          
          return shouldRenderH ? (
            <div 
            key={'H'}
            className={`${loaded ? "rubberBand" : "bounceIn"}`}
            
            style= {loaded ? 
              {animationDelay : '0s', paddingBottom: '15px', paddingLeft: '1px' } : 
              {animationDelay: `${i * 0.10 + 0.5}s`, paddingBottom: '15px', paddingLeft: '1px'}}
            >
              

              <Hlogo
                width = {hsize.width}
                height = {hsize.height}
                inner_fill = '#400000'
                outer_fill='black'

              /> 
            </div>
          ):(
            <Letter 
              key={`row1_${i}`}
              delay = {i * 0.10 + 0.5}
              loaded = {loaded}
              >
                {letter}
            </Letter>
          )
        })}

      </div>


      <div className="animeText" style = {{paddingLeft :"20px"}}>
        {arr_str3.map((letter, i) => {
          return (
            <Letter 
              key={`row2_${i}`}
              delay = {i * 0.10 + 1.7}
              loaded = {loaded}
            >
              {letter}
            </Letter>
          )
        })}
      </div>
    </>
  )
}


export default AnimeTxt;


// <div className="animeText">
// {arr_str3.map((letter, i) => {
  
//   const shouldRenderF = i === 13


//   return shouldRenderF ? (
//     <div
//       key={'F'}
//       className={`${loaded ? "rubberBand" : "bounceIn"}`}
//       style= {loaded ? 
//         {animationDelay : '0s', paddingTop: '2px', paddingLeft: '2px' } : 
//         {animationDelay: `${i * 0.10 + 1.7}s`, paddingTop: '2px', paddingLeft: '2px'}}
//     >
//       <LilFire/> 
//     </div>
    
//   ):(
//     <Letter 
//       key={`row2_${i}`}
//       delay = {i * 0.10 + 1.7}
//       loaded = {loaded}
//     >
//       {letter}
//     </Letter>
//   )
// })}
// </div>