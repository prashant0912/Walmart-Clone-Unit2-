document.getElementById('adminform').addEventListener("submit",addProducts);
let arr =[];
function addProducts(event){
    event.preventDefault();

    var addItem ={
        cat: adminform.cat.value,
        Prod_name: adminform.name.value,
        description:adminform.des.value,
        price:adminform.price.value,
    }

    arr.push(addItem);

    localStorage.setItem("addProduct",JSON.stringify(arr))

}

function clearEntry()
{
    // event.preventDefault();
    window.location.href="walmart_admi.html";
}