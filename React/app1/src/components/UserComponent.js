import React, {Component} from 'react';
import './component.css'
class UserComponent extends Component {
    render() {
        let{item,css}=this.props
        return (
            <div>
<div className={css}>{item.name}-{item.model}-{item.color}-{item.volume}-{item.hp}</div>
            </div>
        );
    }
}

export default UserComponent;