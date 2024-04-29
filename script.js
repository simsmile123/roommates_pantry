document.addEventListener('DOMContentLoaded', function () {
    // Retrieve all containers and their associated forms and lists
    const containers = document.querySelectorAll('.container');

    // Iterate over each container
    containers.forEach((container, index) => {
        const form = container.querySelector('.add-requirement-form');
        const input = container.querySelector('.requirement-input');
        const requirementsList = container.querySelector('.requirements-list');

        // Add event listener to the form inside each container
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const requirementText = input.value.trim();

            if (requirementText !== '') {
                addRequirement(requirementText, requirementsList);
                input.value = '';
            }
        });

        function addRequirement(text, list) {
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
                    list.removeChild(requirementItem);
                } else {
                    alert('Incorrect password. Requirement not removed.');
                }
            });

            requirementItem.appendChild(checkbox);
            requirementItem.appendChild(label);
            requirementItem.appendChild(removeButton);

            list.appendChild(requirementItem);
        }
    });
});
