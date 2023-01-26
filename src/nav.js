import './style.css';

const sidebar = document.querySelector('.sidebar');


function hideSidebar() {
    sidebar.style.minWidth = '0';
    sidebar.style.width = '0';
    sidebar.classList.add('hidden');
}

function showSidebar() {
    sidebar.style.minWidth = '200px';
    sidebar.style.width = '200px';
    sidebar.classList.remove('hidden');
}

//Determines whether to hide or show sidebar.
export default function sidebarToggler() {
    if (sidebar.classList.contains('hidden')) {
        showSidebar();
    } else {
        hideSidebar();
    }
}