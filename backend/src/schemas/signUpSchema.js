import Joi from 'joi';

const signUpSchema = Joi.object({

    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirm: Joi.string().min(3).required()

});

export default signUpSchema;