const param = new URLSearchParams(window.location.search);
const formEditCategory = document.getElementById('form-edit-category');
const inputName = document.getElementById('edit-cat-name');
const btnEditCat = document.getElementById('btnEditCategory')


const catToEdit = () => {
    let lstorage: LocalStorage = getStorage();
    lstorage.categories.forEach(element => {
        if(element.id == param.get("id")){
            (<HTMLInputElement>inputName).value= element.name;
        }
    });
}
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

const editCategory = (e) => {
    let lstorage: LocalStorage = getStorage();
    const form = e.target;
    const newCategoryName: string = form.name.value;

    lstorage.categories.forEach(element => {
        if(element.id == param.get("id")){
            element.name = newCategoryName;
        }
    });
   localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
}

formEditCategory.addEventListener('submit', editCategory);


