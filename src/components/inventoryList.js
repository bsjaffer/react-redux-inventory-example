import React, { Component } from 'react'
import InventoryItem from './inventoryItem'

export default class InventoryList extends Component {
    render() {
        const { inventory } = this.props;
        var inventoryRenderItems = inventory.map((inventoryItem, index) => {
            return (
                <InventoryItem key={inventoryItem.id} {...inventoryItem}
                               onSelectItem={this.props.onSelectItem}
                />)
        }, this);

        return ( <div className="inventoryItemList">
            <ul className="list-group">
                {inventoryRenderItems}
            </ul>
        </div>);
    }
}