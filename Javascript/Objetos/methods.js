const pantallaDeCarga = {
    //shorthand sintaxis
    introducirNombreDeUsuario(nombre) {
        console.log('Nombre ingresado correctamente');
    },
    //arrow function
    ingresar: () => {
        console.log('Usted inició sesión');
    },

};

pantallaDeCarga.introducirNombreDeUsuario('Pepe');
pantallaDeCarga.ingresar();