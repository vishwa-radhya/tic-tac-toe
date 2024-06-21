import PropTypes from 'prop-types';

function Square({value,onSquareClick}){

    return <div className="square" onClick={onSquareClick}><span style={{color:value==='X' ? 'rgb(255, 213, 0)' : 'rgb(30, 255, 0)'}}>{value}</span></div>;
}

Square.propTypes={
    value:PropTypes.string,
    onSquareClick:PropTypes.func,
}

export default Square;