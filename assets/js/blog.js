document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blogSearch');
    const blogCards = document.querySelectorAll('.blog-card');
    const categoryPills = document.querySelectorAll('#blogCategoryPills [data-filter]');
    const categoryLinks = document.querySelectorAll('[data-cat-link]');
    const resultsCount = document.getElementById('blogResultsCount');
    let activeCategory = 'all';

    function updatePillStyles(selectedCat) {
        categoryPills.forEach(btn => {
            const isSelected = btn.dataset.filter === selectedCat;
            if (isSelected) {
                btn.className = 'btn btn-sm rounded-pill px-4 py-2 font-bold text-xs uppercase tracking-wider bg-brand-sage text-white border-0 shadow-xs';
            } else {
                btn.className = 'btn btn-sm rounded-pill px-4 py-2 font-bold text-xs uppercase tracking-wider bg-brand-ivory dark:bg-gray-700 text-brand-charcoal dark:text-gray-200 border border-gray-200 dark:border-gray-600';
            }
        });
    }

    function filterBlog() {
        const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
        let visibleCount = 0;

        blogCards.forEach(card => {
            const title = card.querySelector('h2, h3')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
            const category = card.dataset.category || '';

            const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm) || category.toLowerCase().includes(searchTerm);
            const matchesCat = activeCategory === 'all' || category === activeCategory;

            const wrapper = card.parentElement.classList.contains('col-md-6') ? card.parentElement : card;

            if (matchesSearch && matchesCat) {
                wrapper.style.display = '';
                visibleCount++;
            } else {
                wrapper.style.display = 'none';
            }
        });

        if (resultsCount) {
            resultsCount.textContent = `Showing ${visibleCount} curated ${visibleCount === 1 ? 'article' : 'articles'}`;
        }
    }

    categoryPills.forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.filter;
            updatePillStyles(activeCategory);
            filterBlog();
        });
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            activeCategory = link.dataset.catLink;
            updatePillStyles(activeCategory);
            filterBlog();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterBlog);
    }
});

