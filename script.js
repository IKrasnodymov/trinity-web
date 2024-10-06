document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-button');
    let activeMenu = null;

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.dataset.menu;
            const menuContent = document.getElementById(`${menu}-menu`);

            if (activeMenu === menu) {
                menuContent.style.display = 'none';
                activeMenu = null;
            } else {
                if (activeMenu) {
                    document.getElementById(`${activeMenu}-menu`).style.display = 'none';
                }
                menuContent.style.display = 'flex';
                activeMenu = menu;
            }
        });
    });
});