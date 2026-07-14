const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("Email");

const searchbar = document.getElementById("searchbar");

const contactList = document.getElementById("contactList");
const totalCount = document.getElementById("totalCount");

let contacts = [];

function addContact() {

    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value
    };


    contacts.push(contact);
    displayContacts(contacts);

    contactForm.reset();
}
function displayContacts(contactsArray) {
    contactList.innerHTML = "";
    totalCount.textContent = contacts.length;

    for (let i = 0; i < contactsArray.length; i++) {

        const card = document.createElement("div");
        card.classList.add("contact");
        card.innerHTML = `
            <h3>${contactsArray[i].firstName} ${contactsArray[i].lastName}</h3>

            <p>Phone : ${contactsArray[i].phone}</p>
            <p>Email : ${contactsArray[i].email}</p>
            <button onclick="deleteContact(${i})">Delete</button>`;

        contactList.appendChild(card);


    }
}
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts(contacts);
}
searchbar.addEventListener("input", function () {

    const searchText = searchbar.value.toLowerCase();
    const filteredContacts = contacts.filter(function (contact) {
        return contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText);

    });

    displayContacts(filteredContacts);
})
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addContact();

});