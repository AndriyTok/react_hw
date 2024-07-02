import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps{
    posts:IPost[];
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <ul>
            {posts.map(value => (
                <li key={value.id}>
                    <ul>
                        <li>ID: {value.id}</li>
                        <li>Title: {value.title}</li>
                        <li>Body: {value.body}</li>
                        <li>Tags: {value.tags.join(', ')}</li>
                        <li>Reactions: Likes - {value.reactions.likes}, Dislikes - {value.reactions.dislikes}</li>
                        <li>Views: {value.views}</li>
                        <li>User ID: {value.userId}</li>
                    </ul>
                </li>
            ))}
        </ul>
    );
};
export default PostsComponent;