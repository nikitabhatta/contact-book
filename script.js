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
            <button onclick="deleteContact(${i})">Delete</button>`;

        contactList.appendChild(card);


    }
}
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}
searchbar.addEventListener("input", () => {

    displayContacts();
})
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addContact();

});