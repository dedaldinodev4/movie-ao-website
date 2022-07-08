

export interface IUserRequestDTO {
    id?: string;
    name: string;
    email: string;
    avatar_url?: string; 
}

export interface IUserRequestList {
    size: number;
    results: IUserRequestDTO[];
}

export interface IUserRequestUpdateDTO {
    name: string;
    email?: string;
    avatar_url?: string;
    password?: string;
}