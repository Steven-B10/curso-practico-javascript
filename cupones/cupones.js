function calcularPrecioConCupones(precio, descuento) {
    const procentajePrecioConCupon = 100 - descuento;
    const precioConCupon = (precio * procentajePrecioConCupon) / 100;

    return precioConCupon;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const cuponValue = inputCoupon.value;

    const resultC = document.getElementById("ResultC")

    //let descuento; // Comentar en caso de usar la ultima solución
    //let precioConCupon; // Comentar en caso de usar el metodo de arrays y switch

    // Usando el condicional Switch

    // switch(true) {
    //     case cuponValue === "Suits":
    //         descuento = 15;
    //         precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //         resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}`
    //         break;
    //     case cuponValue === "GameOfThrones":
    //         descuento = 30;
    //         precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //         resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}` 
    //         break;
    //     case cuponValue === "peakyBlinders":
    //         descuento = 25;
    //         precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //         resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}`
    //         break;
    //     default:
    //         resultC.innerText = "El cupón ingresado no es valido"
    // }




    // Usando el condicional if & else if & else

    // if (cuponValue === "Suits") {
    //     descuento = 15;
    //     precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //     resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}`
    // }else if (cuponValue === "GameOfThrones") {
    //     descuento = 30;
    //     precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //     resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}` 
    // }else if (cuponValue === "peakyBlinders") {
    //     descuento = 25;
    //     precioConCupon = calcularPrecioConCupones (priceValue, descuento);
    //     resultC.innerText = `Cupón es valido el precio con descuento es de: $${precioConCupon}`
    // }else {
    //     resultC.innerText = "El cupón ingresado no es valido"
    // }




    // Usando arrays y switch 

    // const coupons = [
    //     "JuanDC_es_Batman",
    //     "pero_no_le_digas_a_nadie",
    //     "es_un_secreto",
    // ];

    // switch(cuponValue) {
    //     case coupons[0]: // "JuanDC_es_Batman"
    //       descuento = 15;
    //       precioConCupon = calcularPrecioConCupones(priceValue, descuento);
    //       resultC.innerText = "El precio con descuento del cupon son: $" + precioConCupon;
    //     break;
    //     case coupons[1]: // "pero_no_le_digas_a_nadie"
    //       descuento = 30;
    //       precioConCupon = calcularPrecioConCupones(priceValue, descuento);
    //       resultC.innerText = "El precio con descuento del cupon son: $" + precioConCupon;
    //     break;
    //     case coupons[2]: // "es_un_secreto"
    //       descuento = 25;
    //       precioConCupon = calcularPrecioConCupones(priceValue, descuento);
    //       resultC.innerText = "El precio con descuento del cupon son: $" + precioConCupon;
    //     break;
    //     default:
    //         resultC.innerText = "El cupon ingresado no existe o es incorrecto";
    // }



    //  legibilidad, error first y muerte al switch

    // const coupons = [
    //     "JuanDC_es_Batman",
    //     "pero_no_le_digas_a_nadie",
    //     "es_un_secreto",
    // ];

    // if (!coupons.includes(cuponValue)) {
    //     alert("El cupón " + cuponValue + "no es válido");
    //  } else if (cuponValue === "JuanDC_es_Batman") {
    //     descuento = 15;
    //  } else if (cuponValue === "pero_no_le_digas_a_nadie") {
    //     descuento = 30;
    //  } else if (cuponValue === "es_un_secreto") {
    //     descuento = 25;
    //  }
     

    // arrays y condicionales mucho más inteligentes

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === cuponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + cuponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConCupon = calcularPrecioConCupones(priceValue, descuento);
    
        resultC.innerText = "El precio con descuento son: $" + precioConCupon;
    }


}