import {IFormPost} from "../models/IFormType";
import React from "react";

//an async function that sends a POST-request to 'jsonplaceholder.typicode.com' using data that was filled by user
const formCustomHandler = async (data: IFormPost, setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
    try {
        //sending POST-request on the URL:
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            //sending converted data in .json format:
            body: JSON.stringify({
                title: data.title,
                body: data.text,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        //getting the response in .json format
        const result = await response.json();
        console.log(result);

        if (response.ok) {
            setSuccessMessage("Data was successfully sent to jsonplaceholder and can be checked in console!");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
};
//'fetch' part can be checked out at: 'https://jsonplaceholder.typicode.com/guide/'

export default formCustomHandler;