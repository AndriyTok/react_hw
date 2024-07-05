import React, { Component, createRef } from 'react';
import { IPost } from "../models/IPost";
import styles from './PostsComponent.module.css';
import PostComponent from "../PostComponent/PostComponent";

interface IProps {
    posts: IPost[];
    loading: boolean;
}

class PostsComponent extends Component<IProps> {
    postsRef = createRef<HTMLDivElement>();

    componentDidUpdate(prevProps: IProps) {
        if (this.props.posts !== prevProps.posts && this.props.posts.length > 0 && this.postsRef.current) {
            this.postsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        const { posts, loading } = this.props;

        if (loading) {
            return <div>Loading posts...</div>;
        }

        if (posts.length === 0) {
            return <div>This user has no posts</div>;
        }

        return (
            <div ref={this.postsRef}>
                <ul className={styles.posts_ul}>
                    {posts.map(post => (
                        <PostComponent key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostsComponent;
