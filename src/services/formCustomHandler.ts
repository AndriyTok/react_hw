import {IFormPost} from "../models/IFormType";

const formCustomHandler = (data:IFormPost) => {
    // console.log(data);
    //creating post to be sent
    const post = {
        title: data.title,
        body: data.text,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export default formCustomHandler;