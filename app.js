'use strict'
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling;
        label.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            label.classList.toggle('checked', checkbox.checked);
        });
    });
});