import React, {Component} from 'react';

class Users extends Component {
    constructor() {
        super();
       this.users=[]
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromApi => {
this.users=usersFromApi
            })
        console.log(this.users)
    }


    render() {
        return (
            <div>
                
            </div>
        );
            componentDidMount(){
                console.log('component did mount')
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(usersFromApi => {
                        this.setState({usersFromApi})
                    })
    }
}

export default Users;