import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

async function getAllUsers(): Promise<IUser[]> {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users: ", error);
        throw error;
    }
}

const getPostsOfUserById = async (id: number): Promise<IPost[]> => {
    try {
        const response = await axios.get(`https://dummyjson.com/users/${id}/posts`);
        return response.data.posts;
    } catch (error) {
        console.error(`Error fetching posts for user with id ${id}: `, error);
        throw error;
    }
}

export { getAllUsers, getPostsOfUserById }