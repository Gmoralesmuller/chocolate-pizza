'use strict';
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            let checkedTexts = [];

            checkedCheckboxes.forEach(function(cb) {
                const label = cb.nextElementSibling; 
                checkedTexts.push(label.textContent.trim()); 
            });
            
            console.log('Textos de checkboxes marcados:', checkedTexts);
        });
    });
});