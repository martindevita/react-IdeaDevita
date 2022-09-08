import { React, useState, useEffect } from 'react';
import "../app/style.css"

const productos = [
    { id: 1, nombre: "Sintetico Negro Brillante", marca: "Tersuave", precio: 4900, stock: 20 },
    { id: 2, nombre: "Latex Interior Exterior", marca: "Victoria", precio: 12000, stock: 25 },
    { id: 3, nombre: "Masilla Plástica", marca: "Polacrin", precio: 8980, stock: 30 },
    { id: 4, nombre: "Fijador al agua", marca: "Eco Latex", precio: 6300, stock: 22 }
]

function consultarPromesa(conf) {

    return new Promise((result, reject) => {
        if (conf) {
            result(productos)
        } else {
            reject("Acceso denegado")
        }
    })

}

const Productos = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then(data => {
                const divProductos = data.map((producto, i) =>
                    <div className='card border-primary mb-3' key={i} style={{ maxWidth: '15rem', margin: '30px' }}>
                        <div className='card-header'>{producto.nombre}</div>
                        <div className='card-body'>
                            <p className='card-text'>Marca: {producto.marca}</p>
                            <p className='card-text'>Precio: ${producto.precio}</p>
                            <p className='card-text'>Stock: {producto.stock}</p>
                        </div>
                    </div>
                )

                console.log(divProductos)

                setProductos(divProductos)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);


    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Productos;