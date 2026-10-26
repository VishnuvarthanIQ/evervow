/**
 * EverVow Blog Details Dynamic Renderer
 * Reads article ID from URL parameter and populates article hero, image, metadata, and full contents
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine which article to display from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const requestedId = urlParams.get('id');

    // Default to 'personal-vows-guide' if id is missing or not found
    let articleId = 'personal-vows-guide';
    if (requestedId && window.blogData && window.blogData[requestedId]) {
        articleId = requestedId;
    }

    const article = window.blogData ? window.blogData[articleId] : null;

    if (!article) {
        console.warn('Article data not found for id:', articleId);
        return;
    }

    // 2. Update page title
    document.title = `${article.title} - EverVow Journal`;

    // 3. Update Hero Section background image
    const heroSection = document.getElementById('articleHeroSection');
    if (heroSection && article.image) {
        heroSection.style.backgroundImage = `url('${article.image}')`;
    }

    // 4. Update In-Article Featured Image Showcase (if present)
    const featuredImg = document.getElementById('articleFeaturedImg');
    if (featuredImg && article.image) {
        featuredImg.src = article.image;
        featuredImg.alt = article.title;
    }

    // 5. Update Breadcrumb Category & Badge
    const breadcrumbCategory = document.getElementById('articleBreadcrumbCategory');
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = article.category;
    }

    const badge = document.getElementById('articleBadge');
    if (badge) {
        badge.textContent = article.badge || article.category;
    }

    // 6. Update Article Title & Subtitle
    const titleEl = document.getElementById('articleTitle');
    if (titleEl) {
        titleEl.textContent = article.title;
    }

    const subtitleEl = document.getElementById('articleSubtitle');
    if (subtitleEl) {
        subtitleEl.textContent = article.subtitle;
    }

    // 7. Update Reading Time
    const readTimeEl = document.getElementById('articleReadTime');
    if (readTimeEl) {
        readTimeEl.textContent = `Reading Time: ${article.readTime}`;
    }

    // 8. Update Key Takeaways
    const takeawaysEl = document.getElementById('articleTakeaways');
    if (takeawaysEl && article.takeaways && article.takeaways.length > 0) {
        takeawaysEl.innerHTML = article.takeaways.map((item, idx) => `
            <div class="col-md-4">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-gray-800 h-100 border border-gray-100 dark:border-gray-700 shadow-xs">
                    <div class="font-bold text-brand-charcoal dark:text-white mb-1.5 text-xs sm:text-sm">0${idx + 1}. ${item.title}</div>
                    <p class="text-xs text-gray-600 dark:text-gray-300 mb-0 leading-relaxed">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 9. Update Editorial Lead Quote
    const leadQuoteEl = document.getElementById('articleLeadQuote');
    if (leadQuoteEl) {
        leadQuoteEl.textContent = `"${article.leadQuote}"`;
    }

    // 10. Update Intro Paragraphs
    const introEl = document.getElementById('articleIntro');
    if (introEl && article.intro && article.intro.length > 0) {
        introEl.innerHTML = article.intro.map(p => `<p class="mb-5 leading-relaxed">${p}</p>`).join('');
    }

    // 11. Render Full Chapters Content
    const chaptersEl = document.getElementById('articleChapters');
    if (chaptersEl && article.chapters && article.chapters.length > 0) {
        chaptersEl.innerHTML = article.chapters.map((ch, idx) => `
            <section id="${ch.id}" class="pt-4 scroll-mt-24">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-full bg-brand-sage text-white text-xs font-bold d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        0${idx + 1}
                    </span>
                    <h3 class="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal dark:text-white mb-0">
                        ${ch.title}
                    </h3>
                </div>
                <div class="font-sans text-gray-700 dark:text-gray-300 space-y-4 ps-1 sm:ps-11 leading-relaxed text-base">
                    ${ch.content}
                </div>
            </section>
        `).join('');
    }

    // 12. Render Table of Contents in Sidebar
    const tocEl = document.getElementById('articleToc');
    if (tocEl && article.chapters && article.chapters.length > 0) {
        tocEl.innerHTML = article.chapters.map((ch, idx) => `
            <li>
                <a href="#${ch.id}" class="text-gray-600 dark:text-gray-300 hover:text-brand-sage text-decoration-none d-flex align-items-center gap-3 font-semibold transition-colors">
                    <span class="w-6 h-6 rounded-circle bg-brand-ivory dark:bg-gray-700 text-brand-sage dark:text-brand-champagne text-xs font-bold d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        0${idx + 1}
                    </span>
                    <span>${ch.title}</span>
                </a>
            </li>
        `).join('');
    }

    // 13. Update Quick Reference Metrics Cheat Sheet
    const cheatSheetEl = document.getElementById('articleCheatSheet');
    if (cheatSheetEl && article.metrics && article.metrics.length > 0) {
        cheatSheetEl.innerHTML = article.metrics.map((m, idx) => `
            <div class="d-flex justify-content-between align-items-center py-1.5 ${idx < article.metrics.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}">
                <span class="text-gray-500 dark:text-gray-400">${m.label}</span>
                <span class="font-bold ${idx === article.metrics.length - 1 ? 'text-brand-sage dark:text-brand-champagne' : 'text-brand-charcoal dark:text-white'}">${m.value}</span>
            </div>
        `).join('');
    }

    // 14. Update Author Card
    if (article.author) {
        const authorImg = document.getElementById('authorImg');
        const authorName = document.getElementById('authorName');
        const authorRole = document.getElementById('authorRole');
        const authorBio = document.getElementById('authorBio');

        if (authorImg) {
            authorImg.src = article.author.img;
            authorImg.alt = article.author.name;
        }
        if (authorName) authorName.textContent = article.author.name;
        if (authorRole) authorRole.textContent = `Written By ${article.author.role}`;
        if (authorBio) authorBio.textContent = article.author.bio;
    }

    // 15. Update Article Tags
    const tagsEl = document.getElementById('articleTags');
    if (tagsEl && article.tags && article.tags.length > 0) {
        tagsEl.innerHTML = article.tags.map(t => `
            <a href="blog.html" class="badge bg-brand-ivory text-brand-charcoal dark:bg-gray-700 dark:text-gray-200 text-decoration-none font-semibold px-3 py-1.5 rounded-pill hover:bg-brand-sage hover:text-white transition-colors">${t}</a>
        `).join('');
    }

    // 16. Update Previous & Next Article Navigation
    const allKeys = Object.keys(window.blogData);
    const currentIndex = allKeys.indexOf(articleId);
    const prevKey = currentIndex > 0 ? allKeys[currentIndex - 1] : allKeys[allKeys.length - 1];
    const nextKey = currentIndex < allKeys.length - 1 ? allKeys[currentIndex + 1] : allKeys[0];

    const prevArticle = window.blogData[prevKey];
    const nextArticle = window.blogData[nextKey];

    const prevLink = document.getElementById('prevArticleLink');
    const prevTitle = document.getElementById('prevArticleTitle');
    if (prevLink && prevArticle) {
        prevLink.href = `blog-details.html?id=${prevKey}`;
        if (prevTitle) prevTitle.textContent = prevArticle.title;
    }

    const nextLink = document.getElementById('nextArticleLink');
    const nextTitle = document.getElementById('nextArticleTitle');
    if (nextLink && nextArticle) {
        nextLink.href = `blog-details.html?id=${nextKey}`;
        if (nextTitle) nextTitle.textContent = nextArticle.title;
    }

    // 17. Update Sidebar Trending Articles
    const trendingContainer = document.getElementById('articleTrendingStories');
    if (trendingContainer) {
        // Pick 3 other articles
        const otherKeys = allKeys.filter(k => k !== articleId).slice(0, 3);
        trendingContainer.innerHTML = otherKeys.map(k => {
            const art = window.blogData[k];
            return `
                <a href="blog-details.html?id=${art.id}" class="d-flex gap-3 text-decoration-none group align-items-center">
                    <img src="${art.image}" alt="${art.title}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <div>
                        <span class="text-brand-sage text-xs uppercase tracking-wider block font-bold">${art.category}</span>
                        <h6 class="font-serif text-brand-charcoal dark:text-white group-hover:text-brand-sage transition-colors text-sm mb-1 leading-snug">${art.title}</h6>
                        <span class="text-xs text-gray-400">${art.readTime}</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    // 18. Handle Comment Submission Form
    const commentForm = document.getElementById('blogCommentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (commentForm.checkValidity()) {
                const successMsg = document.getElementById('blogCommentSuccess');
                if (successMsg) {
                    successMsg.classList.remove('d-none');
                }
                commentForm.reset();
            } else {
                commentForm.classList.add('was-validated');
            }
        });
    }
});
