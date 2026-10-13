document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggles (Header, Sidebar, Mobile)
    const themeToggleBtns = document.querySelectorAll('#themeToggle, #themeToggleSidebar, #themeToggleMobile, .theme-toggle-btn');
    const htmlElement = document.documentElement;
    
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
    
    if (shouldBeDark) {
        htmlElement.classList.add('dark');
        htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            htmlElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });

    // Direction (RTL/LTR) Toggles
    const dirToggleBtns = document.querySelectorAll('#dirToggle, #dirToggleSidebar, #dirToggleMobile, .dir-toggle-btn');
    const storedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', storedDir);
    
    dirToggleBtns.forEach(btn => {
        btn.textContent = storedDir === 'ltr' ? 'RTL' : 'LTR';
        btn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            dirToggleBtns.forEach(b => b.textContent = newDir === 'ltr' ? 'RTL' : 'LTR');
        });
    });
});
