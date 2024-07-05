import React, {Component, createRef} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {getAllUsers, getPostsOfUserById} from "../services/api.service";
import PostsComponent from "../posts-components/PostsComponent";
import styles from './UsersComponent.module.css'

class UsersComponent extends Component{

    state = {
        users: [] as IUser[],
        posts: [] as IPost[],
        loadingPosts: false,
        selectedUserId: null as number | null
    };

    postsRef = createRef<HTMLDivElement>();

    componentDidMount() {
        getAllUsers().then(users => {
            this.setState({ users });
        });
    }

    getPosts = (id: number) => {
        this.setState({ loadingPosts: true, selectedUserId: id });
        getPostsOfUserById(id)
            .then(posts => this.setState({ posts }))
            .finally(() => {
                this.setState({ loadingPosts: false });
                if (this.postsRef.current) {
                    this.postsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            });
    };

    render() {
        const { users, posts, loadingPosts, selectedUserId } = this.state;

        return (
            <div>
                <div className={styles.users_container}>
                    {users.map(user => (
                        <UserComponent key={user.id} user={user} getPosts={this.getPosts} />
                    ))}
                </div>

                <div className={styles.posts_container} ref={this.postsRef}>
                    {selectedUserId !== null && (
                        <PostsComponent posts={posts} loading={loadingPosts} />
                    )}
                </div>
            </div>
        );
    }
}

export default UsersComponent;