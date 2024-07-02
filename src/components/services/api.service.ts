import axios from "axios";

const getAllUsers = () => {
        return axios.get('https://dummyjson.com/users')
        .then(response => response.data.users)
        .catch(error => {
            console.error("Error fetching users: ", error);
            throw error;
        });
}

const getPostsOfUserById = (id: number) => {
    return axios.get(`https://dummyjson.com/users/${id}/posts`)
        .then(response => response.data.posts)
        .catch(error => {
            console.error(`Error fetching posts for user with id ${id}: `, error);
            throw error;
        });
}

export { getAllUsers, getPostsOfUserById }