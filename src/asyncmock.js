//base de datos utilizada en el curso de JS

const productos = [
    {
        "id": 1,
        "nombre": "9000", 
        "tipo": "zapatillas",
        "colores": [
            "negro",
            "suela",
            "blanco",
            "rojo",
            "animalprint"
        ],
        "talles": [
            35,
            36,
            37,
            39,
            40
        ],
        "foto": "/9000.jpeg",
        "precio":70000,
        "stock": 20
    },
    {
        "id": 2,
        "nombre": "3000",
        "tipo": "zapatillas",
        "colores": [
            "negro",
            "suela",
            "blanco"
        ],
        "talles": [
            36,
            37,
            38,
            39,
            40
        ],
        "foto": "/3000.jpeg",
        "precio":80000,
        "stock": 20
    },
    {
        "id": 3,
        "nombre": "b200",
        "tipo": "botas",
        "colores": [
            "negro",
            "suela",
            "blanco",
            "rojo"
        ],
        "talles": [
            35,
            36,
            38
        ],
        "foto": "/b200.jpeg",
        "precio":80000,
        "stock": 20
    },
    {
        "id": 4,
        "nombre": "1000",
        "tipo": "sandalias",
        "colores": [
            "negro",
            "suela",
            "blanco"
        ],
        "talles": [
            35,
            40
        ],
        "foto": "/1000.webp",
        "precio":50000,
        "stock": 20
    },
    {
        "id": 5,
        "nombre": "1030",
        "tipo": "sandalias",
        "colores": [
            "negro",
            "suela",
            "verde",
            "rojo"
        ],
        "talles": [
            36,
            37,
            38,
            39,
            40
        ],
        "foto": "/1030.webp",
        "precio":50000,
        "stock": 20
    },
    {
        "id": 6,
        "nombre": "1050",
        "tipo": "sandalias",
        "colores": [
            "negro",
            "suela",
            "blanco",
            "plata"
        ],
        "talles": [
            35,
            36,
            37,
            38,
            39,
            40
        ],
        "foto": "/1050.webp",
        "precio":60000,
        "stock": 20
    },
    {
        "id": 7,
        "nombre": "9050",
        "tipo": "zapatillas",
        "colores": [
            "negro",
            "suela",
            "blanco"
        ],
        "talles": [
            38,
            39,
            40
        ],
        "foto": "/9050.webp",
        "precio":75000,
        "stock": 20
    },
    {
        "id": 8,
        "nombre": "9060",
        "tipo": "zapatillas",
        "colores": [
            "negro",
            "suela",
            "blanco",
            "rojo"
        ],
        "talles": [
            35,
            36,
            37,
            38,
            39,
            40
        ],
        "foto": "/9060.webp",
        "precio":85000,
        "stock": 20
    },
    {
        "id": 9,
        "nombre": "b300",
        "tipo": "botas",
        "colores": [
            "negro",
            "suela"
        ],
        "talles": [
            35,
            36
        ],
        "foto": "/b300.webp",
        "precio":95000,
        "stock": 20
    },
    {
        "id": 10,
        "nombre": "2900",
        "tipo": "borcegos",
        "colores": [
            "negro",
            "suela",
            "blanco"
        ],
        "talles": [
            35,
            36,
            37,
            38,
            40
        ],
        "foto": "/2900.jpeg",
        "precio":90000,
        "stock": 20
    }
]


//Funcion para lista
export const getProductos = () => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos);
        }, 20); //minimice los timepos de carga por facilidad
    })
}

//Funcion para producto individual

export const getUnProducto = (nombre) => {
    return new Promise (resolve => {
        setTimeout (()=> { 
            const productoBuscado = productos.find(id => id.nombre === nombre);
            resolve (productoBuscado);
        }, 20)
    })
}

//Funcion para categoria

export const getCategoria = (categoria) => {
    return new Promise (resolve => {
        setTimeout (()=> {
            const categoriaBuscada = productos.filter (id => id.tipo === categoria);
            resolve (categoriaBuscada);
        }, 20)
    })
}


//lista colores
