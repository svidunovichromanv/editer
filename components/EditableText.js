import React from 'react';
//import PropTypes from 'prop-types';
import EditText from './EditText';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './EditableText.css';

import {connect} from 'react-redux';
import { text_create, textContent_edit } from '../redux/textsAC';

class EditableText extends React.PureComponent {
    state = {
        editState: false,
        //text: "Header",
        size: "20",
        font: "Times New Roman",
        align: "center",
        color: "rgb(0, 0, 0)",
        position: {
            left: "10%",
            width: "80%",
            top: "10%",
            height: "10%"
        },
        backgroundColor: "rgb(155, 175, 145)",
        border: "4px double black",
        borderRadius: "4px"//https://drive.google.com/open?id=1n6cE_3AEble0Gt1akXFBAv4_-v8RE1TJ
    };

    componentWillMount() {
        // изначально счётчика с идентификатором counterid нет
        // создадим
        console.log("this.props.text");
        this.props.dispatch( text_create(this.props.textid, this.props.text) );
    }

    editText = () => {
        this.setState((prevState) => {
            return {editState: !prevState.editState}
        });
    };

    recordNewColor = (e) => {
        console.log(e +"2");
        this.setState({color: e});
    };
    recordNewText = (e) => {
        this.props.dispatch( textContent_edit(this.props.textid,e) );
        //this.setState({text: e});
    };
    recordNewSize = (e) => {
        this.setState({size: e});
    };
    recordNewFont = (e) => {
        this.setState({font: e})
    };
    recordNewAlign = (e) => {
        this.setState({align: e})
    };
    recordNewPosition = (e) => {
        this.setState({position: e})
    };

    render() {
        const text=this.props.texts.texts[this.props.textid];
        const textStyle = {
            position: "relative",
            fontSize: this.state.size + "px",
            fontFamily: this.state.font,
            textAlign: this.state.align,
            color: this.state.color,
            top: this.state.position.top,
            width: this.state.position.width,
            height: this.state.position.height,
            marginLeft: this.state.position.left,
        };
        let renderData;
        if (!this.state.editState) {
            renderData = (
                <div key="1" style={textStyle} onClick={this.editText}>{text}</div>
            );
        } else {
            renderData = (
                <EditText key="2" cbEditText={this.editText}
                          size={this.state.size}
                          cbRecordNewSize={this.recordNewSize}
                          font={this.state.font}
                          cbRecordNewFont={this.recordNewFont}
                          text={text}
                          cbRecordNewText={this.recordNewText}
                          align={this.state.align}
                          cbRecordNewAlign={this.recordNewAlign}
                          color={this.state.color}
                          cbRecordNewColor={this.recordNewColor}
                          position={this.state.position}
                          cbRecordNewPosition={this.recordNewPosition}
                />
            );


        }

        return <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
        >
            {renderData}
        </ReactCSSTransitionGroup>;
    };

}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        texts: state.texts,
    };
};

export default connect(mapStateToProps)(EditableText);

