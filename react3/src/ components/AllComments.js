import React, {Component} from 'react';
import CommentsService from "../DataBase/CommentsService";
import Post from "./Post";
class AllComments extends Component {
    state = {comments: []};
    commentsService = new CommentsService()

    async componentDidMount() {
        let comments = await this.commentsService.comments()
        this.setState({comments})
    }
    render() {
        let {comments}=this.state
        return (
            <div>
                {
                    comments.map(value=><Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;