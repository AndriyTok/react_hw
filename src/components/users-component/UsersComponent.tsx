import React, { useState, useEffect}  from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {getAllUsers, getPostsOfUserById} from "../services/api.service";
import PostsComponent from "../posts-components/PostsComponent";

const UsersComponent = () => {

    const[users, setUsers] = useState<IUser[]>([])
    const[posts, setPosts] = useState<IPost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

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
            .finally(() => setLoadingPosts(false));
    }

    return (
        <div>
            <hr/>
            <div>
                {users.map((user) => (<UserComponent key={user.id} user={user} getPosts={getPosts}/>))}
            </div>
            <hr/>
            <div>
                {selectedUserId !== null && (
                    <PostsComponent posts={posts} loading={loadingPosts} />
                )}
            </div>
        </div>
    );
};

export default UsersComponent;