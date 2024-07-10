import Joi from "joi";

const postValidator = Joi.object({
    title: Joi.string()
        .min(3)
        .error(errors => {
            errors.forEach(error => {
                switch (error.code) {
                    case 'string.empty':
                        error.message = 'Title cannot be empty!';
                        break;
                    case 'string.min':
                        error.message = 'Title must be at least 3 characters long!';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
    text: Joi.string()
        .min(5)
        .error(errors => {
            errors.forEach(error => {
                switch (error.code) {
                    case 'string.empty':
                        error.message = 'Text cannot be empty!';
                        break;
                    case 'string.min':
                        error.message = 'Text must be at least 5 characters long!';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
});

export default postValidator;