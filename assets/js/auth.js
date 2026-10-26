/**
 * EverVow Authentication & User Management Module
 * Handles local user registration, credential verification, and responsive popup messaging.
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
     * Case-insensitive search for a registered user by email
     * @param {string} email 
     * @returns {Object|null}
     */
    function findUserByEmail(email) {
        if (!email) return null;
        const normalized = email.trim().toLowerCase();
        const users = getUsers();
        return users.find(u => u && u.email && u.email.trim().toLowerCase() === normalized) || null;
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

        if (!email) {
            return {
                success: false,
                reason: 'EMPTY_EMAIL',
                message: 'Please enter a valid email address.'
            };
        }

        const existing = findUserByEmail(email);
        if (existing) {
            return {
                success: false,
                reason: 'ALREADY_EXISTS',
                message: 'An account with this email already exists. Please sign in instead.'
            };
        }

        const newUser = {
            fullName: fullName,
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
     * @param {string} email 
     * @param {string} password 
     * @returns {Object} result
     */
    function login(email, password) {
        const normalizedEmail = (email || '').trim().toLowerCase();
        if (!normalizedEmail) {
            return {
                success: false,
                reason: 'EMPTY_EMAIL',
                message: 'Please enter your email address.'
            };
        }

        const user = findUserByEmail(normalizedEmail);
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

        try {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
                email: user.email,
                fullName: user.fullName,
                loginTime: new Date().toISOString()
            }));
        } catch (e) {}

        return {
            success: true,
            user: user,
            message: 'Login successful! Welcome back.'
        };
    }

    /**
     * Display the authentication feedback popup modal without redirecting
     * @param {Object} options 
     */
        /**
     * Handle social sign-in/sign-up (Google / Apple)
     * @param {string} provider 
     * @param {boolean} isRegister 
     */
    function handleSocialAuth(provider, isRegister) {
        if (isRegister) {
            showPopup({
                type: 'success',
                title: 'Registration Successful!',
                message: 'Registration successful via ' + provider + '! You can now sign in.',
                buttonText: 'OK'
            });
        } else {
            showPopup({
                type: 'success',
                title: 'Login Successful!',
                message: 'Login successful via ' + provider + '! Welcome back.',
                buttonText: 'OK'
            });
        }
    }

    function showPopup(options) {
        const type = options.type || 'success';
        const title = options.title || (type === 'success' ? 'Success' : 'Notice');
        const message = options.message || '';
        const buttonText = options.buttonText || 'OK';

        const modalEl = document.getElementById('authModal') || document.getElementById('authSuccessModal');
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
        }
    }

    // Expose Global API
    window.EverVowAuth = {
        getUsers: getUsers,
        saveUsers: saveUsers,
        findUserByEmail: findUserByEmail,
        register: register,
        login: login,
        showPopup: showPopup,
        handleSocialAuth: handleSocialAuth
    };
    window.handleSocialAuth = handleSocialAuth;

})(window);
