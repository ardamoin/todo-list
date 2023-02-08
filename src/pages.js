import { parseISO, isToday, isThisWeek } from 'date-fns';
import { itemComponentGenerator } from './items';

export function Page(todoItems, pageName) {
    this.todoItems = todoItems;
    const mainContent = document.querySelector(".main-content");

    const filter = (pageName) => {
        return this.todoItems.filter(item => {
            const isoDateString = item.date.split('-').join('');
            const dateObject = parseISO(isoDateString);

            switch (pageName) {
                case "Today":
                    return isToday(dateObject);
                    break;
                case "This Week":
                    return isThisWeek(dateObject);
                    break;
                default:
                    return true;
            }
        })
    }

    this.appendItems = function() {
        filter(pageName).forEach(element => {
            mainContent.appendChild(itemComponentGenerator(element));
        })
    }

    this.clearItems = function() {
        mainContent.innerHTML = '';
    }
}
