import * as yup from "yup"
import { isTooShort, isTooLong ,isInvalid, isRequired } from "./errors"




export const validationSchema = yup.object().shape({
    userName: yup.string().required(isRequired("userName")),
    email : yup.string().min(3, isTooShort("Email"))
    .max(50, isTooLong("Email"))
    .email(isInvalid("Email"))
    .required(isRequired("Email")),
    password : yup.string().min(8, isTooShort("Password")).max(30, isTooLong("Password")).required(isRequired("Password")),
    repeatPassword : yup.string().min(8, isTooShort("Password")).max(30, isTooLong("Password")).required(isRequired("Password"))
})


interface IRegisterCredentials {
    userName : string
    email : string
    password : string
    repeatPassword : string

}

export default IRegisterCredentials