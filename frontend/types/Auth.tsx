export interface User {
    name: string;
    email: string;
    id: string;
    password: string;
}


export interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}