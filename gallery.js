document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.gallery-project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active highlight state from all button elements
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Assign active look onto targeted node button
            button.classList.add('active');

            const filterTarget = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterTarget === 'all' || cardCategory === filterTarget) {
                    // Show standard flex display blocks
                    card.style.display = 'flex';
                } else {
                    // Hide non-matching dataset objects completely
                    card.style.display = 'none';
                }
            });
        });
    });
});