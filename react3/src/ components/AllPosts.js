import React, {Component} from 'react';
import PostsService from "../DataBase/PostsService";
import Post from './Post'
class AllPosts extends Component {
    state={posts:[]}
    postsService=new PostsService()
    async componentDidMount(){
        let posts=await this.postsService.posts()
        this.setState({posts})
    }
    render() {
        let{posts}=this.state
        return (
            <div>
                {
                    posts.map(value => <Post item={value} ket={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;