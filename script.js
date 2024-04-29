document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-requirement-form');
    const input = document.getElementById('requirement-input');
    const requirementsList = document.getElementById('requirements-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const requirementText = input.value.trim();

        if (requirementText !== '') {
            addRequirement(requirementText);
            input.value = '';
        }
    });

    function addRequirement(text) {
        const requirementItem = document.createElement('div');
        requirementItem.classList.add('requirement');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = text;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            const password = prompt('Enter the password to remove this requirement:');
            if (password === 'ABC') {
                requirementsList.removeChild(requirementItem);
            } else {
                alert('Incorrect password. Requirement not removed.');
            }
        });

        requirementItem.appendChild(checkbox);
        requirementItem.appendChild(label);
        requirementItem.appendChild(removeButton);

        requirementsList.appendChild(requirementItem);
    }
});
