import './style.css';
import icon from './todo-icon.png';
import sidebarToggler from './nav';

const todoIcon = document.createElement('link');
todoIcon.rel = 'icon';
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', sidebarToggler);