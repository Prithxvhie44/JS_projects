// let formData = {};
// function submitForm() {
//     formData.name = document.getElementById("name").value;
//     formData.email = document.getElementById("email").value;
//     formData.phone = document.getElementById("phone").value;
//     formData.age = document.getElementById("age").value;
//     formData.Roll_no = document.getElementById("Roll_no").value;


//     document.getElementById("status").innerText = "Data Stored: " + JSON.stringify(formData);
// }
// function cancelForm() {
//     document.getElementById("userForm").reset();
//     formData = {};
//     document.getElementById("status").innerText = "Form Cleared.";
// }

let formData = {};
function submitForm() {
    formData.name = document.getElementById("name").value;
    formData.email = document.getElementById("email").value;
    formData.phone = document.getElementById("phone").value;
    formData.age = document.getElementById("age").value;
    formData.Roll_no = document.getElementById("Roll_no").value;
    document.getElementById("status").innerText = "Data Stored: "  + JSON.stringify(formData) ;
}


function cancelForm() {
    function cancelForm() {
        document.getElementById("userForm").reset();
        formData = {};
        document.getElementById("status").innerText = "Form Cleared.";
        alert("Form Cleared");
    }
}

// + JSON.stringify(formData)