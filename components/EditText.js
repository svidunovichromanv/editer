import React from 'react';
import PropTypes from 'prop-types';
import EditColor from './EditColor';
import EditPosition from './EditPosition';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './EditColor.css';
import './EditText.css';

class EditText extends React.PureComponent {
    static propTypes = {
        cbEditText: PropTypes.func.isRequired,
        size: PropTypes.string.isRequired,
        cbRecordNewSize: PropTypes.func.isRequired,
        font: PropTypes.string.isRequired,
        cbRecordNewFont: PropTypes.func.isRequired,
        text: PropTypes.array.isRequired,
        cbRecordNewText: PropTypes.func.isRequired,
        align: PropTypes.string.isRequired,
        cbRecordNewAlign: PropTypes.func.isRequired,
        color: PropTypes.string.isRequired,
        cbRecordNewColor: PropTypes.func.isRequired,
        position: PropTypes.object.isRequired,
        cbRecordNewPosition:PropTypes.func.isRequired,
    };

    state={
        editColor:false,
        editPosition:false
    };

    editText = () => {
        this.props.cbEditText();
    };

    setColor =(color) => {
        if (color) {
            console.log(color +"1");
            this.props.cbRecordNewColor(color);
        }
        this.editColor();
    };

    editColor =() => {
        this.setState((prevState) => {
            return {editColor: !prevState.editColor}
        });
    };

    setPosition =(position) => {
        if (position.top!==this.props.position.top||position.left!==this.props.position.left||position.width!==this.props.position.width||position.height!==this.props.position.height) {
            this.props.cbRecordNewPosition(position);
        }
        this.editPosition();
    };

    editPosition =() => {
        this.setState((prevState) => {
            return {editPosition: !prevState.editPosition}
        });
    };

    recordNewSize = (e) => {
        this.props.cbRecordNewSize(e.target.value);
    };

    recordNewFont = (e) => {
        this.props.cbRecordNewFont(e.target.value);
    };

    recordNewText = (e) => {
        this.props.cbRecordNewText(e.target.value);
    };

    recordNewAlign = (e) => {
        this.props.cbRecordNewAlign(e.target.value);
    };

    render() {
        const position={
            position: "relative",
            top: this.props.position.top,
            width: this.props.position.width,
            height: this.props.position.height,
            marginLeft: this.props.position.left,
        };
        const textStyle = {
            fontSize: this.props.size + "px",
            fontFamily: this.props.font,
            width: "100%",
            textAlign: this.props.align,
            color:this.props.color
        };
        return <div style={position}>
            <div style={{width: "100%"}}>
                <button onClick={this.editText}>
                    edit
                </button>
                <select defaultValue={this.props.size} onChange={this.recordNewSize}>
                    <option value="11">8pt</option>
                    <option value="13">10pt</option>
                    <option value="16">12pt</option>
                    <option value="19">14pt</option>
                    <option value="21">16pt</option>
                    <option value="24">18pt</option>
                    <option value="27">20pt</option>
                    <option value="29">22pt</option>
                    <option value="32">24pt</option>
                    <option value="35">26pt</option>
                    <option value="37">28pt</option>
                    <option value="48">36pt</option>
                    <option value="64">48pt</option>
                    <option value="96">72pt</option>
                </select>
                <select defaultValue={this.props.font} onChange={this.recordNewFont}>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Bodoni">Bodoni</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Futura">Futura</option>
                    <option value="Frutiger">Frutiger</option>
                    <option value="Garamond">Garamond</option>
                    <option value="Avenir Next">Avenir Next</option>
                    <option value="Circe">Circe</option>
                </select>
                <select defaultValue={this.props.align} onChange={this.recordNewAlign}>
                    <option value="center">center</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="justify">justify</option>
                    <option value="inherit">inherit</option>
                </select>
            </div>
            <button onClick={this.editColor}>Edit color</button>
            <button onClick={this.editPosition}>Edit position</button>
            <input style={textStyle} defaultValue={this.props.text} onChange={this.recordNewText}/>

            <ReactCSSTransitionGroup
                transitionName="scale"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}
            >
                {this.state.editColor?<EditColor key="3" cbEditColor={this.setColor} color={this.props.color}/>:null}

                {this.state.editPosition?<EditPosition key="4" cbEditPosition={this.setPosition} position={this.props.position}/>:null}

            </ReactCSSTransitionGroup>


        </div>
    }
}

export default EditText;