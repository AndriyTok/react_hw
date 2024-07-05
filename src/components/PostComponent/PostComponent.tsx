import React, { Component } from 'react';
import { IPost } from "../models/IPost";

interface IProps {
    post: IPost;
}

class PostComponent extends Component<IProps> {
    render() {
        const { post } = this.props;

        return (
            <ul key={post.id}>
                <li>ID: {post.id}</li>
                <li>Title: {post.title}</li>
                <li>Body: {post.body}</li>
                <li>Tags: {post.tags.join(', ')}</li>
                <li>Reactions: Likes - {post.reactions.likes}, Dislikes - {post.reactions.dislikes}</li>
                <li>Views: {post.views}</li>
                <li>User ID: {post.userId}</li>
            </ul>
        );
    }
}

export default PostComponent;
