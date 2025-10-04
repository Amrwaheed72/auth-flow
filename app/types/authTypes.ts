export interface RegisterUserData {
    name: string;
    email: string;
    mobile: string;
    password: string;
    password_confirmation: string;
    mobile_country_code: string;
}

export interface LoginUserData{
    email:string
    password:string
}
export interface VerifyUser{
    code:string
}