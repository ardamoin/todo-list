import './style.css';

const toggler = document.querySelector('.navbar-toggler');
const sidebar = document.querySelector('.sidebar');


function hideSidebar() {
    sidebar.style.display = 'none';
    sidebar.classList.add('hidden');
}

function showSidebar() {
    sidebar.style.display = 'visible';
    sidebar.classList.remove('hidden');
}

//Determines whether to hide or show sidebar.
function sidebarToggler() {

}

toggler.addEventListener('click', hideSidebar);