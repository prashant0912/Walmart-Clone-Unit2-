document.getElementById('adminform').addEventListener("submit",addProducts);
let arr = JSON.parse(localStorage.getItem("addProduct"))||[];
function addProducts(event){
    event.preventDefault();

    var addItem ={
        deal:adminform.dil.value,
        img_url:adminform.url.value,
        price: adminform.price.value,
        actual:adminform.actual.value,
        describe: adminform.des.value,
        feature:adminform.feature.value,
        shipping:adminform.ship.value,
    }

    arr.push(addItem);

    localStorage.setItem("addProduct",JSON.stringify(arr))

}

function clearEntry()
{
    let azx =JSON.parse(localStorage.getItem("addProduct"))
}