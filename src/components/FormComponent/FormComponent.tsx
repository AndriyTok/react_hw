import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import postValidator from "../../validators/post-validator";
import {IFormPost} from "../../models/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import formCustomHandler from "../../services/formCustomHandler";

const FormComponent = () => {

    // const [isSumbitted, setIsSumbitted] = useState(false);

    const {
        formState:{
            errors,
            isValid,
            touchedFields},
        register,
        handleSubmit
    } = useForm<IFormPost>({
        mode:'all',
        resolver: joiResolver(postValidator)
    });

    return (
        <div>
            {touchedFields.title &&errors.title && <div>title errors: {errors.title?.message}</div>}
            {touchedFields.text && errors.text && <div>title errors: {errors.text?.message}</div>}
            <form onSubmit={handleSubmit(formCustomHandler)}>
                <input type="text" {...register('title')}/> <br/>
                <textarea id="post_body" rows={5} cols={33} {...register('text')}></textarea>
                <button disabled={!isValid}>Submit</button>

            </form>

        </div>
    );
};

export default FormComponent;