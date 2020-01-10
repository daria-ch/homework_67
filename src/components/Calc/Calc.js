import React, {Component} from 'react';
import './Calc.css';
import Button from "../UI/Button/Button";
import {connect} from 'react-redux';

class Calc extends Component {
    render() {
        return (
            <div>
                <textarea id="value" className='value' readOnly value={this.props.total}/>
                <div className='keyboard'>
                    <Button onClick={this.props.textOne}>1</Button>
                    <Button onClick={this.props.textTwo}>2</Button>
                    <Button onClick={this.props.textThree}>3</Button>
                    <Button onClick={this.props.textPlus}>+</Button>
                    <Button onClick={this.props.textFour}>4</Button>
                    <Button onClick={this.props.textFive}>5</Button>
                    <Button onClick={this.props.textSix}>6</Button>
                    <Button onClick={this.props.textMinus}>-</Button>
                    <Button onClick={this.props.textSeven}>7</Button>
                    <Button onClick={this.props.textEight}>8</Button>
                    <Button onClick={this.props.textNine}>9</Button>
                    <Button onClick={this.props.textMultiply}>*</Button>
                    <Button onClick={this.props.deleteExpression}>C</Button>
                    <Button onClick={this.props.textZero}>0</Button>
                    <Button onClick={this.props.equally}>=</Button>
                    <Button onClick={this.props.textDivide}>/</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        total: state.total,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        textOne: () => dispatch({type: 'TEXT', value: 1}),
        textTwo: () => dispatch({type: 'TEXT', value: 2}),
        textThree: () => dispatch({type: 'TEXT', value: 3}),
        textFour: () => dispatch({type: 'TEXT', value: 4}),
        textFive: () => dispatch({type: 'TEXT', value: 5}),
        textSix: () => dispatch({type: 'TEXT', value: 6}),
        textSeven: () => dispatch({type: 'TEXT', value: 7}),
        textEight: () => dispatch({type: 'TEXT', value: 8}),
        textNine: () => dispatch({type: 'TEXT', value: 9}),
        textZero: () => dispatch({type: 'TEXT', value: 0}),
        textMinus: () => dispatch({type: 'TEXT', value: '-'}),
        textPlus: () => dispatch({type: 'TEXT', value: '+'}),
        textMultiply: () => dispatch({type: 'TEXT', value: '*'}),
        textDivide: () => dispatch({type: 'TEXT', value: '/'}),
        deleteExpression: () => dispatch({type: 'DELETE'}),
        equally: () => dispatch({type: 'EQUAL'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);