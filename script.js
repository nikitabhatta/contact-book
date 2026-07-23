const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("Email");

const searchbar = document.getElementById("searchbar");

const contactList = document.getElementById("contactList");
const totalCount = document.getElementById("totalCount");

let contacts = [];
let editingContactId = null;

function addContact() {
    if (editingContactId === null) {
        const contact = {
            id: Date.now(),
            firstName: firstName.value,
            lastName: lastName.value,
            phone: phone.value,
            email: email.value
        };

        contacts.push(contact);
    } else {
        const index = contacts.findIndex(contact => contact.id === editingContactId);
        contacts[index] = {
            id: editingContactId,
            firstName: firstName.value,
            lastName: lastName.value,
            phone: phone.value,
            email: email.value
        };
        editingContactId = null;
    }
    displayContacts();
    contactForm.reset();
}
function displayContacts() {
    contactList.innerHTML = "";
    totalCount.textContent = contacts.length;

    const searchText = searchbar.value.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
        return contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText);

    });

    for (let i = 0; i < filteredContacts.length; i++) {

        const card = document.createElement("div");
        card.classList.add("contact");
        card.innerHTML = `
            <h3>${filteredContacts[i].firstName} ${filteredContacts[i].lastName}</h3>

            <p>Phone : ${filteredContacts[i].phone}</p>
            <p>Email : ${filteredContacts[i].email}</p>
            <button class="edit-button" data-id="${filteredContacts[i].id}"> Edit </button>
            <button class="delete-button" data-id="${filteredContacts[i].id}"> Delete</button>`;

        contactList.appendChild(card);


    }
}
contactList.addEventListener("click", (event) => {

    const button = event.target.closest("button");
    if (!button) {
        return;
    }
    const id = Number(button.dataset.id);
    if (button.classList.contains("edit-button")) {
        const contact = contacts.find(contact => contact.id === id);
        editingContactId = id;
        firstName.value = contact.firstName;
        lastName.value = contact.lastName;
        phone.value = contact.phone;
        email.value = contact.email;
    } else {
        deleteContact(id);
    }

});
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    console.log(contacts);
    displayContacts();

}
searchbar.addEventListener("input", () => {

    displayContacts();
})
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addContact();

});