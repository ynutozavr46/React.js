import React, {Component} from 'react';
import UsersService from "../DataBase/UsersService";
import User from "./User";
class AllUsers extends Component {
    usersService=new UsersService()
    state={users:[]}
    async componentDidMount(){
        let users=await this.usersService.users()
        this.setState({users})
    }
    render() {
       let {users}=this.state
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
       );
    }
}

export default AllUsers;