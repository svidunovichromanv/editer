import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.css';

class EditPosition extends React.PureComponent {
    static propTypes = {
        cbEditPosition: PropTypes.func.isRequired,
        position: PropTypes.object.isRequired,
    };
    state = {
        top: this.props.position.top,
        left: this.props.position.left,
        width: this.props.position.width,
        height: this.props.position.height
    };

    recordNewTop = (e) => {
        let top = +e.target.value;
        let height = +this.state.height.slice(0,-1);
        if (top+height<=100){
            this.setState({top: top+"%"});
        }
    };
    recordNewWidth = (e) => {
        let width = +e.target.value;
        let left = +this.state.left.slice(0,-1);
        if (width+left<=100){
            this.setState({width: width+"%"});
        }
    };
    recordNewHeight = (e) => {
        let height = +e.target.value;
        let top = +this.state.top.slice(0,-1);
        if (height+top<=100){
            this.setState({height: height+"%"});
        }
    };
    recordNewLeft = (e) => {
        let left = +e.target.value;
        let width = +this.state.width.slice(0,-1);
        if (left+width<=100){
            this.setState({left: left+"%"});
        }
    };
    editPosition = (e) => {
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
            marginLeft: "20%",
            border: "solid black 1px",
            width: "60%",
            height: "300px",
        };
        const elementStyle = {
            position: "relative",
            marginLeft: this.state.left,
            top: this.state.top,
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
                               max="100"
                               defaultValue={this.state.top.slice(0,-1)}
                               onChange={this.recordNewTop}/>
                        {this.state.top}
                    </label><br/>
                    <label>
                        left margin
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100"
                               defaultValue={this.state.left.slice(0,-1)}
                               onChange={this.recordNewLeft}/>
                        {this.state.left}
                    </label><br/>
                    <label>
                        width
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100"
                               defaultValue={this.state.width.slice(0,-1)}
                               onChange={this.recordNewWidth}/>
                        {this.state.width}
                    </label><br/>
                    <label>
                        height
                        <input style={formStyle}
                               type="range"
                               min="0"
                               max="100"
                               defaultValue={this.state.height.slice(0,-1)}
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