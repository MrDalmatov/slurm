document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

function dropDownFunc(dropDown) {

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('active') === true) {
                
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('active');
    
            } else {
                closeDropdown();
    
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('active');
            }
        });
    }
}

window.addEventListener('click', function (e) {

    if (e.target.closest('.dropdown') === null) {
        closeDropdown();
    }
});

function closeDropdown() { 

    document.querySelectorAll('.dropdown').forEach(function (container) { 
        container.classList.remove('dropdown-open');
    });

    document.querySelectorAll('.dropdown-content').forEach(function (menu) { 
        menu.classList.remove('active');
    });
}


