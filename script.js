const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("Email");


const contactList = document.getElementById("contactList");

let contacts = [];

function addContact() {
    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value
    };
    console.log("total counts:" + contacts.length);

    contacts.push(contact);
    displayContacts();

    contactForm.reset();
}
function displayContacts() {
    contactList.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {

        const card = document.createElement("div");
        card.classList.add("contact");
        card.innerHTML = `
            <h3>${contacts[i].firstName} ${contacts[i].lastName}</h3>

            <p>Phone : ${contacts[i].phone}</p>
            <p>Email : ${contacts[i].email}</p>
            <button onclick="deleteContact(${i})">Delete</button>`;

        contactList.appendChild(card);


    }
}
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addContact();

});