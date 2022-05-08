import Joi from 'joi';

const transactionSchema = Joi.object({

    type: Joi.string().valid('entrance', 'withdraw'),
    value: Joi.number().required(),
    description: Joi.string().min(3).required()

});

export default transactionSchema;