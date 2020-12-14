import React, {Component} from 'react';

class User extends Component {

    render() {
        let {item, onSelectOne} = this.props;//todo 7) in props we take item and onSelectOne
        return (
            <div>
                {item.name} - {item.id};//todo 8) show item name and id in UI
                <button onClick={() => onSelectOne(item.id)}>Choose</button>;//todo 10) create button with event onClick and call onSelectOne with inner item id in it
            </div>
        );
    }
}

export default User;
