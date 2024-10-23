document.addEventListener("DOMContentLoaded", function () {
    const addUserForm = document.getElementById("add_user_form");
    const userArea = document.getElementById("user_area");
    function handleSubmit (evt) {
        evt.preventDefault();
        const form = evt.target;

        const person = {
            name: form.fullName.value, 
            email: form.emailAddress.value, 
            phone: form.phoneNumber.value,
            gender: form.gender.value,
            dateOfBirth: form.dateOfBirth.value,
        }
        console.log(person);
        
    const div = document.createElement("div");
    div.className = "card px-4 py-1";
    div.innerHTML = `
     <h3>${person.name}</h3>
     <p>${person.email} </p>
     <p>${person.phone}</p>
     <p>${person.gender}</p>
     <p>${person.dateOfBirth} </p>
     `;

    userArea.appendChild(div);
    }

    addUserForm.addEventListener ("submit", handleSubmit);
    });