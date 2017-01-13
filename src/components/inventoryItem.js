import React, { Component } from 'react'

export default class InventoryItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        };
    }

    render() {
        return (<li className="list-group-item">
            <div className="row">
                <div className="col-xs-3">
                    <input type="checkbox" selected={this.state.isChecked}
                           onChange={this.toggleCheckboxChange.bind(this)}/>
                </div>
                <div className="col-xs-3">{this.props.name}</div>
                <div className="col-xs-3">${this.props.price}</div>
                <div className="col-xs-3">{this.props.quantity}</div>
            </div>
        </li>);
    }

    toggleCheckboxChange() {
        this.setState({
            isChecked: !this.state.isChecked
        });
        this.props.onSelectItem(this.props.id);
    }
}