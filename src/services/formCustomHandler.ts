import {IFormPost} from "../models/IFormType";
import React from "react";

const formCustomHandler = async (data: IFormPost, setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.text,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
            setSuccessMessage("Data was successfully sent to jsonplaceholder and can be checked in console!");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
};

export default formCustomHandler;