import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.css';

class EditColor extends React.PureComponent {
    static propTypes = {
        cbEditColor: PropTypes.func.isRequired,
        color: PropTypes.string.isRequired,
    };
    rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    colorArr = this.props.color.match(this.rgbRegex);
    state = {
        color: this.colorArr[0],
        red: this.colorArr[1],
        green: this.colorArr[2],
        blue: this.colorArr[3]
    };

    recordNewRed = (e) => {
        let red = e.target.value;//"rgb(255, 99, 71)"
        this.setState({color: "rgb(" + red + ", " + this.state.green + ", " + this.state.blue + ")", red: red + ""});
    };

    recordNewGreen = (e) => {
        let green = e.target.value;//"rgb(255, 99, 71)"
        this.setState({
            color: "rgb(" + this.state.red + ", " + green + ", " + this.state.blue + ")",
            green: green + ""
        });
    };

    recordNewBlue = (e) => {
        let blue = e.target.value;//"rgb(255, 99, 71)"
        this.setState({color: "rgb(" + this.state.red + ", " + this.state.green + ", " + blue + ")", blue: blue + ""});
    };
    editColor = (e) => {
        e.preventDefault();
        this.props.cbEditColor(this.state.color);
    };

    render() {
        const colorStyle = {
            marginLeft: "35%",
            border: "solid black 1px",
            width: "30%",
            height: "150px",
            backgroundColor: this.state.color
        };
        const formStyle = {
            marginLeft: "5%",
            width: "85%"
        };
        console.log(this.state.red, this.state.green, this.state.blue);
        return <div className="ModalWindow">
            <div className="Modal">
                <div style={colorStyle}/>
                <form style={formStyle}>
                    <label>red
                        <input style={formStyle} name="red" type="range" min="0" max="255" defaultValue={this.state.red}
                               onChange={this.recordNewRed}/>
                        {this.state.red}
                    </label><br/>
                    <label>green
                        <input style={formStyle} name="green" type="range" min="0" max="255"
                               defaultValue={this.state.green} onChange={this.recordNewGreen}/>
                        {this.state.green}
                    </label><br/>
                    <label>blue
                        <input style={formStyle} name="blue" type="range" min="0" max="255"
                               defaultValue={this.state.blue} onChange={this.recordNewBlue}/>
                        {this.state.blue}
                    </label><br/>
                    <button onClick={this.editColor}>Set</button>
                </form>
            </div>
        </div>
    }
}

export default EditColor;