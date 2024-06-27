interface Root {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

interface OutputRoot {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
}

function mapFunction(input: Root): OutputRoot {
    return {
        id: input.id,
        name: input.name,
        username: input.username,
        email: input.email,
        phone: input.phone,
        website: input.website
    }
}

// WARNING: Do not edit/remove below function
function map_S_root_S_root() {
    return mapFunction(inputroot);
}
