


interface Hprops {
  width: string;
  height: string;
  inner_fill : string;
  outer_fill : string;
  
}



const Hlogo = ({width, height, inner_fill, outer_fill} : Hprops ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width = {width} 
    height ={height}    
    // width = '74.5px' 
    // height ='86px'
    viewBox="0 0 453 517"
  >

    <path
      d="M349.92 272.42v-.03h67.65l-35.5-36.04v-.02h-35.51V.54l-35.51 24.13v211.66H142.87V24.67L107.36.54v235.79H104v.02H36.34l35.51 36.04v-.02h29.73v.05h5.78V516.21l35.51-24.14V272.37h168.18v219.7l35.51 24.14V272.42z"
      fill = {inner_fill}

    />
    <path
      d="m275.54 467.94 35.51 24.13v-24.13zM71.85 467.94l35.51 24.13v-24.13zM178.37 467.94h-35.5v24.13zM346.56 492.07l35.51-24.13h-35.51zM417.57 272.39h-67.65v.03h-3.36v195.52h35.51V307.9h70.51zM311.05 272.42v-.05H142.87v195.57h35.5V307.88h97.17v160.06h35.51V307.88zM101.58 272.42v-.05H71.85v195.57h35.51V272.42zM346.56 48.8v187.53h35.51V48.8l-35.51-24.13V48.8zM142.87 200.82v35.51h168.18V24.67L275.54 48.8v152.02h-97.17V48.8l-35.5-24.13V48.8zM104 236.33h3.36V24.67L71.85 48.8v152.04H1.34l35 35.51H104z"
      fill = {outer_fill}
    />
  </svg>
)
export default Hlogo
