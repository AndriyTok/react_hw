import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import postValidator from "../../validators/post-validator";
import {IFormPost} from "../../models/IFormType";
import {joiResolver} from "@hookform/resolvers/joi";
import formCustomHandler from "../../services/formCustomHandler";

const FormComponent = () => {
    const [showErrors, setShowErrors] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        formState: { errors, isValid, touchedFields },
        register,
        handleSubmit,
    } = useForm<IFormPost>({
        mode: 'all',
        resolver: joiResolver(postValidator),
    });

    const combinedSubmitHandler = async (data: IFormPost) => {
        setShowErrors(true);
        await formCustomHandler(data, setSuccessMessage);
    };

    return (
        <div>
            {showErrors && (
                <>
                    {errors.title && <div>Title errors: {errors.title?.message}</div>}
                    {errors.text && <div>Text errors: {errors.text?.message}</div>}
                </>
            )}
            <form onSubmit={handleSubmit(combinedSubmitHandler)}>
                <input type="text" {...register('title')} /> <br />
                <textarea
                    id="post_body"
                    rows={5}
                    cols={33}
                    {...register('text')}
                />
                <button type="submit" disabled={!isValid}>Submit</button>
            </form>
            {successMessage && <div>{successMessage}</div>}
        </div>
    );
};

export default FormComponent;