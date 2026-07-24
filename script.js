let carrito = [];

let total = 0;


// AGREGAR CAMISA

function agregar(nombre, precio){


    let producto = carrito.find(
        p => p.nombre === nombre
    );


    if(producto){


        producto.cantidad++;


    }else{


        carrito.push({

            nombre:nombre,

            precio:precio,

            cantidad:1

        });


    }


    mostrarCarrito();


}





// MOSTRAR COMPRA

function mostrarCarrito(){


    let lista = document.getElementById("lista");


    lista.innerHTML = "";


    total = 0;



    if(carrito.length === 0){


        lista.innerHTML="🛒 No hay productos";


    }



    carrito.forEach((producto,index)=>{


        let subtotal =
        producto.precio * producto.cantidad;


        total += subtotal;




        lista.innerHTML += `


        <div>


        🦂 <b>${producto.nombre}</b>


        <br>


        Cantidad: ${producto.cantidad}


        <br>


        Precio: $${producto.precio}


        <br>


        Subtotal: $${subtotal}


        <br><br>



        <button onclick="eliminar(${index})">

        ❌ Eliminar

        </button>



        <hr>


        </div>


        `;


    });




    document.getElementById("total").innerHTML =

    total.toFixed(2);



}







// ELIMINAR PRODUCTO


function eliminar(index){


    carrito.splice(index,1);


    mostrarCarrito();


}








// COMPRAR POR WHATSAPP


function comprarWhatsApp(){



    if(carrito.length === 0){


        alert("Tu carrito está vacío");


        return;


    }




    let mensaje =

    "🦂🔥 PEDIDO CAMISAS INFRAMEN 🔥🦂%0A%0A";





    carrito.forEach(producto=>{


        mensaje +=


        "👕 "+producto.nombre+

        "%0A📦 Cantidad: "+producto.cantidad+

        "%0A💰 Precio: $"+producto.precio+

        "%0A%0A";


    });





    mensaje +=


    "🔥 TOTAL DE COMPRA: $"+total.toFixed(2);





    window.open(

    "https://wa.me/50369323088?text="+mensaje,

    "_blank"

    );


}