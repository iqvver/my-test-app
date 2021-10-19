import React, { Component } from 'react'

import { Button, } from 'antd';

export default class NewNote extends Component {
    handleClick = (e) => {
        let {onClick} = this.props;
        onClick && onClick(e);
    }
    render() {
        return (
            <div onClick={this.handleClick}> 
                <Button type="primary" className='new_note_text'>New Note</Button>
            </div>
        )
    }
}
