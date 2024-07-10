import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import postValidator from "../../validators/post-validator";
import {IFormPost} from "../../models/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import formCustomHandler from "../../services/formCustomHandler";

const FormComponent = () => {
    // const [showErrors, setShowErrors] = useState(false);

    //useState is used to dynamically save the state (if the form is submitted) and show the message below the form
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
//formState has the form-object's properties
    const {
        formState: { errors, isValid, touchedFields },
        register, //it is necessary for react-hook-form to save the state of each field
        handleSubmit, //performs exact function after every valid sumbition
    } = useForm<IFormPost>({
        mode: 'all',
        resolver: joiResolver(postValidator),
    });
//is performed after submitting. It uses custom function we wrote before to send the data to server and check the
    //status of request
    const onSubmitCustom = async (data: IFormPost) => {
        try {
            await formCustomHandler(data, setSuccessMessage);
            setSuccessMessage("Data was successfully sent to jsonplaceholder and can be checked in console!");
        } catch (error) {
            setSuccessMessage("Error submitting form:");
        }
    };
    return (
        <div>

                <>
                    {errors.title && <div>Title errors: {errors.title?.message}</div>}
                    {errors.text && <div>Text errors: {errors.text?.message}</div>}
                </>

            <form onSubmit={handleSubmit(onSubmitCustom)}>
                <input type="text" {...register('title')} /> <br />
                <textarea
                    id="post_body"
                    rows={5}
                    cols={33}
                    {...register('text')}
                />0
                <button type="submit">Submit</button>
            </form>
            {successMessage && <div>{successMessage}</div>}
        </div>
    );
};

export default FormComponent;