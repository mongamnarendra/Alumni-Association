function toggleEditForm() {
    const form = document.getElementById('editForm');
    form.classList.toggle('hidden');
}

function updateProfile(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;
    const gradYear = document.getElementById('editGradYear').value;
    const field = document.getElementById('editField').value;
    const college = document.getElementById('editCollege').value;
    const aboutMe = document.getElementById('editAboutMe').value;

    // Update profile information
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('gradYear').textContent = gradYear;
    document.getElementById('field').textContent = field;
    document.getElementById('college').textContent = college;
    document.getElementById('aboutMe').textContent = aboutMe;

    // Hide the edit form after saving changes
    toggleEditForm();
}
