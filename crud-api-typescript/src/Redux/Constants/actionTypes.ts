


export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_SINGLE_USER = "GET_SINGLE_USER";

export interface usersType {
    id: number,
    name: string,
    location: string,
    email: string,
    contact: number,
}

export type ApiUser = {
    users: usersType[]
}

export interface GetUsers {
    type: string,
    payload: usersType[]
}

export interface DeleteUser {
    type: typeof DELETE_USER 
}

export interface AddUser {
    type: typeof ADD_USER 
}

export interface UpdateUser{
    type: typeof UPDATE_USER
}

export interface GetSingleUser{
    type: typeof GET_SINGLE_USER
}

export type UserDispatchTypes = GetUsers | DeleteUser | AddUser | UpdateUser | GetSingleUser