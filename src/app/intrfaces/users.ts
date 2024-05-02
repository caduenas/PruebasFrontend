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
}

export interface MoldeUsers{
    name: string;
    password: string;
    correo: string;
}

export interface MoldeLogin{
    correo: string;
    password: string;
}