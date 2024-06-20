import PropTypes from 'prop-types';
function Square({value,onSquareClick}){

    return <div className="square" onClick={onSquareClick}><span>{value}</span></div>;
}

Square.propTypes={
    value:PropTypes.string,
    onSquareClick:PropTypes.func,
}
export default Square;