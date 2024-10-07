document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const menuType = button.dataset.menu;
            const modal = document.getElementById(`${menuType}-modal`);
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else {
                const menuOverlay = button.nextElementSibling;
                if (menuOverlay && menuOverlay.tagName === 'A') {
                    window.open(menuOverlay.href, '_blank');
                }
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Остальной код остается без изменений
});