// export하면 다른 파일에서도 사용 가능
import React from "react";
import "./Square.css";

const Square = ({onClick, value}) => {
    return (
        <button 
            className="square" 
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square

// const Square = () => {
//     return (
//         <button className="square" 
//             onClick={()=>{ props.onClick()}}>
//                 {props.value}
//         </button>
//     )
 
// }

// export default class Square extends React.Component {

//     constructor(props){
//         super(props);
//         this.state= {
//             value:'a',
//         }
//     }
//     render() {
//         return (
//             <button className="square" 
//                 onClick={()=>{ this.props.onClick()}}>
//                     {/* {this.state.value} */}
//                     {this.props.value}
//             </button>
//         )
//     }
// }
