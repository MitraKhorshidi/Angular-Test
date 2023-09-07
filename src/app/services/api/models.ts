export interface Product {
    category?: string,
    description?: string,
    id?: number,
    image?: string,
    price?: number,
    rating?: Raiting,
    title?: string,
}

interface Raiting {
    rate?: number,
    count?: number,
}