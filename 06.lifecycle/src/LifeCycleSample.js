import React, {Component} from 'react';
import ColorBox from './../../../02.React/15/context-tutorial/src/components/ColorBox';

const LifeCycleSample extends Component {
    state= {
        number: 0,
        Color: null,
    };

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //16.3이후
    //props로 받아온 값을 state에 동가화를 시킬 수 있음
    //컴포넌트가 마운트 될 때 업데이트 될 때 호풀
    static getDerivedStateFromProps(nextProps, precadatste) {
        console.log('getDerivedStateFromProps..');
        console.log(nextProps);
        console.log(prevState);
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color};
        }
    }

    return null; //state를 변경할 필요가 없다면 null을 변환
    
    shouldVo

    render() {
        console.log('render');
        
        const style = {
            color: this.props.color,
        };
    }

    return (
        <div>
            <h1 style={style} ref={(ref) => (this.myRef = ref)}>

            </h1>
        </div>
    );
}

export default LifeCycleSample;
