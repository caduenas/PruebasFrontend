export interface User{
    id: string;
    name: string;
    password: string;
    correo: string;
}

export interface ResultUsers{
    usuarios: User[];
}

export interface MoldeUsers{
    name: string;
    password: string;
    correo: string;
}