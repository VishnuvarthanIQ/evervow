document.addEventListener('DOMContentLoaded', () => {
    // Service filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    const searchInput = document.getElementById('serviceSearch');

    function filterServices() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';

        serviceCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
            
            const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active', 'bg-brand-sage', 'text-white'));
                e.target.classList.add('active', 'bg-brand-sage', 'text-white');
                filterServices();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterServices);
    }
});
