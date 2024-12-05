
export interface AddressDetails {
    label: string
    line: string
    city: string
    state: string
    country: string
    postalCode: string
}

export interface Address {
    id: number
    details: AddressDetails
}