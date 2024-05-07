export interface User{
    id: string;
    name: string;
    password: string;
    correo: string;
}

export interface ResultUsers{
    usuarios: User[];
}

export interface Mensaje{
    mensaje: string
    token: string
}


export interface MoldeUsers{
    username: string;
    email: string;
    password: string;
}

export interface MoldeLogin{
    email: string;
    password: string;
}