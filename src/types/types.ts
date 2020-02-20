export interface IMain{
    status: boolean,
    toggleSidebar?: any
}

export interface IProduct{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export type TLoader = {
    mini: boolean
}

export type TMessage = {
    message: string
}