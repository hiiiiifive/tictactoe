
import Square from './Square';
import "./Board.css";

const Board = ({squares, onClick}) => {
    
    // square 에게 value라는 props를 데이터 전달중
    const renderSquare = (i) => {
        return <Square value={squares[i]} 
        onClick={() =>onClick(i)}
        />
    }
    
    return (
        <div className='board-wrapper'>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board

// export default class Board extends Component {
//     //자식 컴포넌트읜 Square의 state를 부모 컴포넌트로 올려서 정의.
//     constructor(props){
//         super(props);
//         this.state = {
//             squares : Array(9).fill(null),
            
//         }
//     }

//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         squares[i] = 'X';
//         this.setState( {squares : squares} );
//     }

//     // square 에게 value라는 props를 데이터 전달중
//     renderSquare(i) {
//         return <Square value={this.state.squares[i]} 
//         onClick={() =>this.handleClick(i)}
//         />
//     }
  
//     render() {
//         return (
//             <div>
//                 <div className="status">Next Player: X, O</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//   }
// }
// //snip ex7 extension 이용해서  rcc만해서 추가함