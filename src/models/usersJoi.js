import joi from "joi";

export const signUpSchema = joi.object({
    name:joi.string().max(30).required(),
    email:joi.string().email().max(30).required(),
    password:joi.string().required(),
    confirmPassowrd:joi
    .any()
    .equal(foi.ref("password"))
    .required()
    .label("password")
    })