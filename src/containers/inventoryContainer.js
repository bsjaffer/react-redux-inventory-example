import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInventory,incrementQuantity, decrementQuantity } from '../actions/inventory'
import Inventory from '../components/inventory'


const mapStateToProps = (state) => {
    return {
        inventory: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addInventory, incrementQuantity, decrementQuantity}, dispatch)
}

const InventoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Inventory)

export default InventoryContainer
