import React, { Component } from 'react'
import { Layout } from 'antd';
import Ccomponent from '../Content/Ccomponent';


const { Content } = Layout;



export default class Listitem extends Component {

    constructor(props) {
        super(props)
        this.init = {
            input: "",
            items: []
        };

        this.state = this.init
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            ...this.state,
            input: this.state.input,
            items: [...this.state.items, {
                name: this.state.input,
                date: new Date(),
                id: this.state.items.length
            }]
        });
    }

    reset() { this.setState(this.init) }

    handleDelete(deletedId) {
        let newItems = [...this.state.items]
        let idx = newItems.findIndex(item => deletedId === item.id)

        if (idx > -1) {
            newItems.splice(idx, 1)
        }

        this.setState({ ...this.state, items: newItems })
    }

    render() {
        return (
            <div>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                <Ccomponent />
                </Content>
            </div>
        )
    }
}
