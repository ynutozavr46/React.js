export class Service {

    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        return (
            fetch(this.url)//todo 1) get users from jsonpalceholder
                .then(value => value.json())
                .then(value => value)
        )
    }
    getUserById(id){
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)
    }
    findUserById(users=[],id){
        return fetch(users.find(value => value.id===id))
    }
    async get2Users(startId){
        let userById1=await this.getUserById(startId)
        let userById2=await this.findUserById(++startId)
        return{userById1,userById2}
    }
}

