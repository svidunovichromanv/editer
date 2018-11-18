import React from 'react';
import EditableText from '../components/EditableText.js';

class Page_About extends React.PureComponent {

    render() {

        return (
                <div style={{width:"100%", height:"50vh", backgroundColor:"rgba(55,55,55,.7)"}}>
                    <EditableText
                        textid={123}
                        text="Header"
                    />
                </div>

        );

    }

}

export default Page_About;
    