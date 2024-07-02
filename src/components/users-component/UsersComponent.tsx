import React, { useState, useEffect, useRef}  from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {getAllUsers, getPostsOfUserById} from "../services/api.service";
import PostsComponent from "../posts-components/PostsComponent";
import styles from './UsersComponent.module.css'

const UsersComponent = () => {

    const[users, setUsers] = useState<IUser[]>([])
    const[posts, setPosts] = useState<IPost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const postsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    const getPosts = (id:number) => {
        setLoadingPosts(true);
        setSelectedUserId(id);
        getPostsOfUserById(id)
            .then(posts => setPosts([...posts]))
            .finally(() => {
                setLoadingPosts(false);
                if (postsRef.current) {
                    postsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            });
    }

    return (
        <div>

            <div className={styles.users_container}>
                {users.map((user) => (<UserComponent key={user.id} user={user} getPosts={getPosts}/>))}
            </div>

            <div className={styles.posts_container} ref={postsRef}>
                {selectedUserId !== null && (
                    <PostsComponent posts={posts} loading={loadingPosts} />
                )}
            </div>
        </div>
    );
};

export default UsersComponent;