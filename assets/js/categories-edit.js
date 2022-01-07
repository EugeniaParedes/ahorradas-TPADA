var param = new URLSearchParams(window.location.search);
var formEditCategory = document.getElementById('form-edit-category');
var inputName = document.getElementById('edit-cat-name');
var btnEditCat = document.getElementById('btnEditCategory');
var catToEdit = function () {
    var lstorage = getStorage();
    lstorage.categories.forEach(function (element) {
        if (element.id == param.get("id")) {
            inputName.value = element.name;
        }
    });
};
catToEdit();
// //
// const deleteCat = (e) =>{
//     let lstorage: LocalStorage = getStorage();
//     const form = e.target;
//     const catToDelete: string = form.name.value;
//     lstorage.categories.forEach(element => {
//         if(element.id == param.get("id")){
//             localStorage.removeItem("ahorradas-data", JSON.stringify(catToEdit))
//         }
//     })
// }
var editCategory = function (e) {
    var lstorage = getStorage();
    var form = e.target;
    var newCategoryName = form.name.value;
    lstorage.categories.forEach(function (element) {
        if (element.id == param.get("id")) {
            element.name = newCategoryName;
        }
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
};
formEditCategory.addEventListener('submit', editCategory);
