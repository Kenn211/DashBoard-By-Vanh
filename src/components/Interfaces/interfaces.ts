export interface Login {
    id: number,
    name?: string,
    email?: string,
    password?: string
}

export interface Register {
    id: number,
    name?: string,
    email?: string,
    password?: string
    terms?: boolean
}

export interface Product {
    id: number,
    name?: string,
    desc?: string,
    urlImg?: string,
    address?: string,
    price?: number
}