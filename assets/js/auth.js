/**
 * EverVow Authentication & User Management Module
 * Handles local user registration, credential verification, persistent session state,
 * responsive header UI synchronization (Sign In / Username | Logout), and responsive popup messaging.
 */
(function (window) {
    'use strict';

    const USERS_STORAGE_KEY = 'evervow_users';
    const CURRENT_USER_KEY = 'evervow_current_user';

    // Modal SVG Icons and Theme Wrappers
    const ICONS = {
        success: {
            wrapClass: 'w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm',
            svg: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>'
        },
        warning: {
            wrapClass: 'w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm',
            svg: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
        },
        error: {
            wrapClass: 'w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm',
            svg: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        }
    };

    /**
     * Retrieve all registered users from localStorage
     * @returns {Array} List of user objects
     */
    function getUsers() {
        try {
            const raw = localStorage.getItem(USERS_STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('Error accessing localStorage:', e);
            return [];
        }
    }

    /**
     * Save users array to localStorage
     * @param {Array} users
     */
    function saveUsers(users) {
        try {
            localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
            return true;
        } catch (e) {
            console.error('Failed to write users to localStorage:', e);
            return false;
        }
    }

    /**
     * Extract display username dynamically from user object
     * @param {Object} user
     * @returns {string}
     */
    function getUsername(user) {
        if (!user) return '';
        if (user.username && String(user.username).trim()) {
            return String(user.username).trim();
        }
        if (user.fullName && String(user.fullName).trim()) {
            return String(user.fullName).trim();
        }
        if (user.email && String(user.email).trim()) {
            return String(user.email).trim().split('@')[0];
        }
        return 'Member';
    }

    /**
     * Case-insensitive search for a registered user by email, username, or fullName
     * @param {string} identifier
     * @returns {Object|null}
     */
    function findUser(identifier) {
        if (!identifier) return null;
        const normalized = String(identifier).trim().toLowerCase();
        const users = getUsers();
        return users.find(u => {
            if (!u) return false;
            const uEmail = (u.email || '').trim().toLowerCase();
            const uUsername = (u.username || '').trim().toLowerCase();
            const uFullName = (u.fullName || '').trim().toLowerCase();
            return uEmail === normalized || uUsername === normalized || uFullName === normalized;
        }) || null;
    }

    /**
     * Backward-compatible alias
     * @param {string} email
     * @returns {Object|null}
     */
    function findUserByEmail(email) {
        return findUser(email);
    }

    /**
     * Retrieve currently authenticated user session
     * @returns {Object|null}
     */
    function getCurrentUser() {
        try {
            const raw = localStorage.getItem(CURRENT_USER_KEY);
            if (!raw) return null;
            const user = JSON.parse(raw);
            if (!user || (!user.email && !user.username && !user.fullName)) {
                return null;
            }
            return user;
        } catch (e) {
            return null;
        }
    }

    /**
     * Register a new user
     * @param {Object} userData
     * @returns {Object} result
     */
    function register(userData) {
        const email = (userData.email || '').trim().toLowerCase();
        const fullName = (userData.fullName || '').trim();
        const phone = (userData.phone || '').trim();
        const password = userData.password || '';
        const customUsername = (userData.username || '').trim();

        if (!email) {
            return {
                success: false,
                reason: 'EMPTY_EMAIL',
                message: 'Please enter a valid email address.'
            };
        }

        const existing = findUser(email);
        if (existing) {
            return {
                success: false,
                reason: 'ALREADY_EXISTS',
                message: 'An account with this email already exists. Please sign in instead.'
            };
        }

        const username = customUsername || fullName || email.split('@')[0];

        const newUser = {
            fullName: fullName,
            username: username,
            email: email,
            phone: phone,
            password: password,
            registeredAt: new Date().toISOString()
        };

        const users = getUsers();
        users.push(newUser);
        saveUsers(users);

        return {
            success: true,
            user: newUser,
            message: 'Registration successful! You can now sign in.'
        };
    }

    /**
     * Authenticate an existing user
     * @param {string} identifier (email or username)
     * @param {string} password
     * @returns {Object} result
     */
    function login(identifier, password) {
        const normalized = (identifier || '').trim();
        if (!normalized) {
            return {
                success: false,
                reason: 'EMPTY_EMAIL',
                message: 'Please enter your email address or username.'
            };
        }

        const user = findUser(normalized);
        if (!user) {
            return {
                success: false,
                reason: 'NOT_FOUND',
                message: 'Account not found. Please sign up first.'
            };
        }

        if (user.password !== password) {
            return {
                success: false,
                reason: 'INCORRECT_PASSWORD',
                message: 'Incorrect password. Please try again.'
            };
        }

        const sessionUser = {
            email: user.email,
            fullName: user.fullName || '',
            username: getUsername(user),
            loginTime: new Date().toISOString()
        };

        try {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
        } catch (e) {
            console.error('Error saving session:', e);
        }

        // Immediately update all header elements on the page
        updateHeaderUI();

        return {
            success: true,
            user: sessionUser,
            message: 'Login successful! Welcome back.'
        };
    }

    /**
     * Clear active session, update header back to Sign In, and display logout popup
     */
    function logout() {
        try {
            localStorage.removeItem(CURRENT_USER_KEY);
        } catch (e) {}

        // Immediately update all header elements on the page
        updateHeaderUI();

        // Show logout success popup modal
        showPopup({
            type: 'success',
            title: 'Logged Out',
            message: 'You have logged out successfully!',
            buttonText: 'OK'
        });
    }

    /**
     * Synchronize header UI across the website based on current login status:
     * - Before Login: Display only one Sign In button. Hide username and Logout button.
     * - After Login: Hide Sign In button. Display dynamic username and Logout button ("Username | Logout").
     * - After Logout: Hide username and Logout. Display only Sign In button.
     */
    function updateHeaderUI() {
        const user = getCurrentUser();
        const username = user ? getUsername(user) : '';

        // Select all header auth elements (classes and IDs for multi-instance support)
        const signinBtns = document.querySelectorAll('.header-signin-btn, #headerSignInBtn');
        const userMenus = document.querySelectorAll('.header-user-menu, #headerUserMenu');
        const usernameEls = document.querySelectorAll('.header-username, #headerUserName');
        const userAvatars = document.querySelectorAll('.header-user-avatar, #headerUserAvatar');

        if (user && username) {
            // User is logged in: Hide Sign In button, show Username | Logout
            signinBtns.forEach(btn => {
                btn.classList.add('d-none');
                btn.style.setProperty('display', 'none', 'important');
                btn.hidden = true;
            });
            userMenus.forEach(menu => {
                menu.classList.remove('d-none');
                menu.classList.add('d-flex');
                menu.style.removeProperty('display');
                menu.hidden = false;
            });
            usernameEls.forEach(el => {
                el.textContent = username;
                el.setAttribute('title', username);
            });
            userAvatars.forEach(av => {
                av.textContent = username.charAt(0).toUpperCase();
            });

            // If dashboard greeting banner exists, personalize it
            const dashboardGreeting = document.getElementById('dashboardGreeting');
            if (dashboardGreeting) {
                dashboardGreeting.textContent = 'Welcome, ' + username + '!';
            }

            // Dashboard Sidebar Profile Card
            const sidebarUser = document.getElementById('dashboardSidebarUser');
            if (sidebarUser) {
                sidebarUser.textContent = username;
            }
            const sidebarAvatar = document.getElementById('dashboardUserAvatar');
            if (sidebarAvatar) {
                sidebarAvatar.textContent = username.charAt(0).toUpperCase();
            }
        } else {
            // User is logged out: Show only Sign In button, hide Username | Logout
            signinBtns.forEach(btn => {
                btn.classList.remove('d-none');
                btn.style.removeProperty('display');
                btn.hidden = false;
            });
            userMenus.forEach(menu => {
                menu.classList.remove('d-flex');
                menu.classList.add('d-none');
                menu.style.setProperty('display', 'none', 'important');
                menu.hidden = true;
            });
            usernameEls.forEach(el => {
                el.textContent = '';
                el.removeAttribute('title');
            });
            userAvatars.forEach(av => {
                av.textContent = 'G';
            });

            // Set dashboard greeting back to "Welcome, Guest!"
            const dashboardGreeting = document.getElementById('dashboardGreeting');
            if (dashboardGreeting) {
                dashboardGreeting.textContent = 'Welcome, Guest!';
            }

            // Dashboard Sidebar Profile Card for Guest
            const sidebarUser = document.getElementById('dashboardSidebarUser');
            if (sidebarUser) {
                sidebarUser.textContent = 'Guest';
            }
            const sidebarAvatar = document.getElementById('dashboardUserAvatar');
            if (sidebarAvatar) {
                sidebarAvatar.textContent = 'G';
            }
        }
    }

    /**
     * Ensure modal element exists in the DOM; creates it dynamically if missing
     * @returns {HTMLElement}
     */
    function ensureAuthModal() {
        let modalEl = document.getElementById('authModal') || document.getElementById('authSuccessModal');
        if (modalEl) return modalEl;

        modalEl = document.createElement('div');
        modalEl.className = 'modal fade';
        modalEl.id = 'authModal';
        modalEl.setAttribute('tabindex', '-1');
        modalEl.setAttribute('aria-labelledby', 'authModalLabel');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-3xl border-0 shadow-2xl bg-white dark:bg-gray-800 text-brand-charcoal dark:text-gray-100 p-6 text-center">
                    <div class="modal-body p-4">
                        <div id="authModalIconWrap" class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="font-serif text-2xl font-bold text-brand-charcoal dark:text-white mb-2" id="authModalLabel">Notice</h3>
                        <p class="text-gray-600 dark:text-gray-300 font-sans text-sm mb-6" id="authModalMsg"></p>
                        <div id="authModalActions" class="d-flex flex-column gap-2">
                            <button type="button" class="btn btn-primary-custom rounded-pill px-6 py-2.5 font-semibold text-sm w-100 shadow-sm" data-bs-dismiss="modal" id="authModalBtn">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalEl);
        return modalEl;
    }

    /**
     * Display the authentication feedback popup modal without redirecting
     * @param {Object} options
     */
    function showPopup(options) {
        options = options || {};
        const type = options.type || 'success';
        const title = options.title || (type === 'success' ? 'Success' : 'Notice');
        const message = options.message || '';
        const buttonText = options.buttonText || 'OK';

        const modalEl = ensureAuthModal();
        if (!modalEl) {
            alert(message);
            return;
        }

        // Apply Icon and Container Colors
        const iconConfig = ICONS[type] || ICONS.success;
        const iconWrap = modalEl.querySelector('#authModalIconWrap') || modalEl.querySelector('.modal-body > div:first-child');
        if (iconWrap) {
            iconWrap.className = iconConfig.wrapClass;
            iconWrap.innerHTML = iconConfig.svg;
        }

        // Apply Title
        const titleEl = modalEl.querySelector('#authModalLabel') || modalEl.querySelector('#authSuccessModalLabel') || modalEl.querySelector('h3');
        if (titleEl) {
            titleEl.textContent = title;
        }

        // Apply Message
        const msgEl = modalEl.querySelector('#authModalMsg') || modalEl.querySelector('#authSuccessModalMsg') || modalEl.querySelector('p');
        if (msgEl) {
            msgEl.textContent = message;
        }

        // Apply Primary Button Text
        const btnEl = modalEl.querySelector('#authModalBtn') || modalEl.querySelector('button[data-bs-dismiss="modal"]');
        if (btnEl) {
            btnEl.textContent = buttonText;
        }

        // Optional Secondary Action Link (e.g. "Sign Up Now" or "Sign In")
        const actionsWrap = modalEl.querySelector('#authModalActions');
        if (actionsWrap && options.secondaryAction) {
            let secLink = actionsWrap.querySelector('#authModalSecondaryBtn');
            if (!secLink) {
                secLink = document.createElement('a');
                secLink.id = 'authModalSecondaryBtn';
                secLink.className = 'btn btn-outline-secondary rounded-pill px-6 py-2.5 font-semibold text-sm w-100 shadow-sm text-decoration-none transition';
                actionsWrap.appendChild(secLink);
            }
            secLink.href = options.secondaryAction.url;
            secLink.textContent = options.secondaryAction.text;
            secLink.style.display = 'inline-block';
        } else if (actionsWrap) {
            const secLink = actionsWrap.querySelector('#authModalSecondaryBtn');
            if (secLink) {
                secLink.style.display = 'none';
            }
        }

        // Trigger Bootstrap Modal without navigating or redirecting
        if (window.bootstrap && window.bootstrap.Modal) {
            const bsModal = typeof bootstrap.Modal.getOrCreateInstance === 'function'
                ? bootstrap.Modal.getOrCreateInstance(modalEl, { backdrop: true, keyboard: true })
                : (bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true }));
            bsModal.show();
        } else {
            // Fallback if bootstrap is not yet ready
            alert(message);
        }
    }

    /**
     * Handle social sign-in/sign-up (Google / Apple)
     * @param {string} provider
     * @param {boolean} isRegister
     */
    function handleSocialAuth(provider, isRegister) {
        const demoEmail = provider.toLowerCase() + '.user@evervow.com';
        const demoName = provider + ' Member';
        let user = findUser(demoEmail);

        if (!user) {
            user = {
                fullName: demoName,
                username: provider + 'Member',
                email: demoEmail,
                phone: '+1 555-0199',
                password: 'social-account',
                registeredAt: new Date().toISOString()
            };
            const users = getUsers();
            users.push(user);
            saveUsers(users);
        }

        if (isRegister) {
            showPopup({
                type: 'success',
                title: 'Registration Successful!',
                message: 'Registration successful via ' + provider + '! You can now sign in.',
                buttonText: 'OK'
            });
        } else {
            const sessionUser = {
                email: user.email,
                fullName: user.fullName || '',
                username: getUsername(user),
                loginTime: new Date().toISOString()
            };
            try {
                localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
            } catch (e) {}
            updateHeaderUI();
            showPopup({
                type: 'success',
                title: 'Login Successful!',
                message: 'Login successful via ' + provider + '! Welcome back.',
                buttonText: 'OK'
            });
        }
    }

    // Global click delegation for all Logout buttons across the entire website
    document.addEventListener('click', function (e) {
        const logoutBtn = e.target.closest('.header-logout-btn, #headerLogoutBtn');
        if (logoutBtn) {
            e.preventDefault();
            logout();
        }
    });

    // Sync header on DOM load, immediately if document ready, and on storage events (multi-tab sync)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateHeaderUI);
    } else {
        updateHeaderUI();
    }
    window.addEventListener('storage', function (e) {
        if (e.key === CURRENT_USER_KEY || e.key === null) {
            updateHeaderUI();
        }
    });

    // Expose Global EverVowAuth API
    window.EverVowAuth = {
        getUsers: getUsers,
        saveUsers: saveUsers,
        findUser: findUser,
        findUserByEmail: findUserByEmail,
        getCurrentUser: getCurrentUser,
        getUsername: getUsername,
        register: register,
        login: login,
        logout: logout,
        updateHeaderUI: updateHeaderUI,
        showPopup: showPopup,
        handleSocialAuth: handleSocialAuth
    };
    window.handleSocialAuth = handleSocialAuth;

})(window);
