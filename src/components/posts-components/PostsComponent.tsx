import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    posts: IPost[];
    loading: boolean;
}

const PostsComponent:FC<IProps> = ({posts, loading}) => {
    if (loading) {
        return <div>Loading posts...</div>;
    }

    if (posts.length === 0) {
        return <div>This user has no posts</div>;
    }

    return (
        <ul>
            {posts.map(value => (
                <ul key={value.id}>
                    <li>ID: {value.id}</li>
                    <li>Title: {value.title}</li>
                    <li>Body: {value.body}</li>
                    <li>Tags: {value.tags.join(', ')}</li>
                    <li>Reactions: Likes - {value.reactions.likes}, Dislikes - {value.reactions.dislikes}</li>
                    <li>Views: {value.views}</li>
                    <li>User ID: {value.userId}</li>
                </ul>
            ))}
        </ul>
    );
};

export default PostsComponent;