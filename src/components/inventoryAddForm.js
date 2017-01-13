import React, { Component } from 'react'

export default class InventoryAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0
        }
    }

    render() {

        var isAllowedToInsert = this.state.name === "" || this.state.price === 0 ? "disabled" : ""
        return (<div className="form-inline">
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.name} id="exampleInputName2"
                       onChange={this.nameChangeHandler.bind(this)} placeholder="Apple iphone"/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" value={this.state.price} id="exampleInputName2"
                       onChange={this.priceChangeHandler.bind(this)} placeholder="450"/>
            </div>
            <button className="btn btn-default" disabled={isAllowedToInsert}
                    onClick={this.addInventory.bind(this)}>Add
            </button>
        </div>);
    }

    addInventory() {
        this.props.onAddInventory({
            name: this.state.name,
            price: this.state.price,
            quantity: 1
        });

        this.setState({
            name: "",
            price: 0
        })
    }


    nameChangeHandler(event) {
        this.setState({
            name: event.target.value
        });
    }

    priceChangeHandler(event) {
        this.setState({
            price: event.target.value
        });
    }
}