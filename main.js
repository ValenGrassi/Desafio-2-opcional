class Suplemento{
    constructor(nombre,precio,peso,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
        this.cantidad = cantidad
    }

    aumentarPrecio(precio){
        this.precio = this.precio + precio;
    }
    sumarIva() {
        return (this.precio * 1.21).toFixed(1);
    }
}

const creatina = new Suplemento("Creatina",5000,"150g",10);
const proteina = new Suplemento("Proteína",2500,"1kg",5);
const preWorkout = new Suplemento("Pre-entreno",3500,"200g",10);
const massGainer = new Suplemento("Ganador de masa",2000,"1.2kg",3);

const inventarioDeProductos = [];
inventarioDeProductos.push(massGainer);
inventarioDeProductos.push(proteina);
inventarioDeProductos.push(preWorkout);
inventarioDeProductos.push(creatina);

console.log(inventarioDeProductos)

function aumentarPrecio (inventarioDeProductos) {
    for ( let suplemento of inventarioDeProductos) {
        if(suplemento.nombre === "Proteína"){
            suplemento.aumentarPrecio(500);
        }
    }
}

function hayPreEntreno(inventarioDeProductos){
    if (inventarioDeProductos.includes(preWorkout)){
        alert("BIEN AHI PAPA HAY PRE ENTRENO PA LOS PI")
    } else{
        alert("LA BAJA NO HAY PRE ENTRENO :(")
    }
}

for( let suplemento of inventarioDeProductos) {
    console.log(suplemento);
}

aumentarPrecio(inventarioDeProductos)
hayPreEntreno(inventarioDeProductos);
console.log("La proteína con iva sale: " + proteina.sumarIva())

inventarioDeProductos.reverse()
console.log("Con la función reverse y con el aumento de precio, los suplementos quedarían así: ")
for( let suplemento of inventarioDeProductos) {
    console.log(suplemento);
}
