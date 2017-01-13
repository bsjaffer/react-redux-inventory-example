import React, { Component } from 'react'
import InventoryAddForm from './inventoryAddForm'
import InventoryList from './inventoryList'


export default class Inventory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedItems: []
        }
    }

    componentWillReceiveProps(newprops) {
        const { inventory } = newprops;
        var allIds = inventory.map(item => item.id);
        var selectedItems = this.state.selectedItems.filter(id=> allIds.indexOf(id) !== -1);
        this.setState({
            selectedItems: selectedItems
        });
    }

    render = () => {
        const { inventory } = this.props;
        var isDisabled = (this.state.selectedItems.length > 0) ? "" : "disabled";

        return (
            <div className="container">
                <h1 className="page-header">Inventory Management</h1>
                <InventoryAddForm onAddInventory={this.props.addInventory}/>
                <div className="form-group">
                    <button className="btn btn-primary" disabled={isDisabled}
                            onClick={this.addQuantity.bind(this)}>Add
                        Quantity
                    </button>
                    <button className="btn btn-danger" disabled={isDisabled}
                            onClick={this.removeQuantity.bind(this)}>Remove
                        Quantity
                    </button>
                </div>
                <div className="row">
                    {inventory.length > 0 ? "Showing " + inventory.length + " entries" : "No items to display"}
                </div>
                <InventoryList inventory={this.props.inventory} onSelectItem={this.onSelectItem.bind(this)}/>
            </div>)
    }

    onSelectItem = (id) => {
        var selectedItems = [];
        var index = this.state.selectedItems.indexOf(id);
        if (index !== -1) {
            selectedItems = [
                ...this.state.selectedItems.slice(0, index),
                ...this.state.selectedItems.slice(index + 1)
            ];
        } else {
            selectedItems = [...this.state.selectedItems, id];
        }
        this.setState({
            selectedItems: selectedItems
        })
    }

    addQuantity = () => {
        this.props.incrementQuantity({
            ids: this.state.selectedItems
        });
    }

    removeQuantity = () => {
        this.props.decrementQuantity({
            ids: this.state.selectedItems
        });
    }
}