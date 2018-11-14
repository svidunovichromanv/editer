import React from 'react';
//import PropTypes from 'prop-types';
import EditText from './EditText';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './EditableText.css';

class EditableText extends React.PureComponent {

    state = {
        editState: false,
        text: "Header",
        size: "20",
        font: "Times New Roman",
        align: "center",
        color: "rgb(0, 0, 0)",
        position: {
            left: "10%",
            width: "80%",
            top: "10%",
            height: "10%"
        }
    };

    editText = () => {
        this.setState((prevState) => {
            return {editState: !prevState.editState}
        });
    };

    recordNewColor = (e) => {
        this.setState({color: e});
    };

    recordNewText = (e) => {
        this.setState({text: e});
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
                <div key="1" style={textStyle} onClick={this.editText}>{this.state.text}</div>
            );
        } else {
            renderData = (
                <EditText key="2" cbEditText={this.editText}
                          size={this.state.size}
                          cbRecordNewSize={this.recordNewSize}
                          font={this.state.font}
                          cbRecordNewFont={this.recordNewFont}
                          text={this.state.text}
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

        return renderData;
    };

}

export default EditableText;
