function Show(params) {
    if (params === 1)
        document.getElementById('show').innerHTML = "Каталог";
    if (params === 2)
        document.getElementById('show').innerHTML = "Доставка";
    if (params === 3)
        document.getElementById('show').innerHTML = "Контакти";
}
function ShowOver(params) {
    document.getElementById('show').innerHTML = " ";
}