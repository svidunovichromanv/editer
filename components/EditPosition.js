import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.css';

class EditPosition extends React.PureComponent {
    static propTypes = {
        cbEditPosition: PropTypes.func.isRequired,
        position: PropTypes.string.isRequired,
    };
    state = {
        top: this.props.top,
        left: this.props.left,
        width: this.props.width,
        height: this.props.height
    };

    recordNewTop = (e) => {
        let top = e.target.value;
        this.setState({top: top});
    };
    recordNewWidth = (e) => {
        let width = e.target.value;
        this.setState({width: width});
    };
    recordNewHeight = (e) => {
        let height = e.target.value;
        this.setState({height: height});
    };
    recordNewLeft = (e) => {
        let left = e.target.value;
        this.setState({left: left});
    };
    editPositio = (e) => {
        e.preventDefault();
        const position={
            left: this.state.left,
            width: this.state.width,
            top: this.state.top,
            height: this.state.height
        };
        this.props.cbEditPosition(position);
    };

    render() {
        const containerStyle = {
            marginLeft: "35%",
            border: "solid black 1px",
            width: "60%",
            height: "300px",
        };
        const elementStyle = {
            marginLeft: this.state.left,
            marginTop: this.state.top,
            width: this.state.width,
            height: this.state.height,
            backgroundColor: "grey",
            border: "solid black 1px",
            borderRadius: "5px"
        };
        const formStyle = {
            marginLeft: "5%",
            width: "85%"
        };
        console.log(this.state.red, this.state.green, this.state.blue);
        return <div className="ModalWindow">
            <div className="Modal">
                <div style={containerStyle}>
                    <div style={elementStyle}/>
                </div>
                <form style={formStyle}>
                    <label>
                        top margin
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100%"
                               defaultValue={this.state.top}
                               onChange={this.recordNewTop}/>
                        {this.state.top}
                    </label><br/>
                    <label>
                        left margin
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100%"
                               defaultValue={this.state.left}
                               onChange={this.recordNewLeft}/>
                        {this.state.left}
                    </label><br/>
                    <label>
                        width
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100%"
                               defaultValue={this.state.width}
                               onChange={this.recordNewWidth}/>
                        {this.state.width}
                    </label><br/>
                    <label>
                        height
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100%"
                               defaultValue={this.state.height}
                               onChange={this.recordNewHeight}/>
                        {this.state.height}
                    </label><br/>
                    <button onClick={this.editPosition}>Set</button>
                </form>
            </div>
        </div>
    }
}

export default EditPosition;