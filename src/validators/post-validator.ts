import Joi from "joi";
//joi allows to set a schema that describes expected data types and restrictions for each field of the object
const postValidator = Joi.object({//setting schema
    title: Joi.string()
        .min(3)
        .required()
        //much more convenient way to describe error messages:
        .messages({
            'string-empty':'Title cannot be empty!',
            'string-min':'Title must be at least 3 characters long!'
        }),
        // .error(errors => {
        //     errors.forEach(error => {
        //         switch (error.code) {
        //             case 'string.empty':
        //                 error.message = 'Title cannot be empty!';
        //                 break;
        //             case 'string.min':
        //                 error.message = 'Title must be at least 3 characters long!';
        //                 break;
        //             default:
        //                 break;
        //         }
        //     });
        //     return errors;
        // }),
    text: Joi.string()
        .min(5)
        .required()
        .messages({
            'string-empty':'Title cannot be empty!',
            'string-min':'Title must be at least 3 characters long!'
        }),
    userId:Joi.number()
        .min(1)
        .required()
        .messages({
            'number-empty':'UserID cannot be empty!',
            'number-min':'UserID should be bigger than 1!'
        })
});

export default postValidator;