function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =
    (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrecio");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDescuento");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const result = document.getElementById("result");
    result.innerText = `El precio es de: ${precioConDescuento}`;
}

function clearData(){
  result.innerText = "";
}