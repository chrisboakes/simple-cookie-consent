/**
 * User consent functionality
 * @author CB
 */
export default {
    /**
     * Has the user consented?
     * @return Boolean
     */
    checkConsent() {
        let isConsentSet = localStorage.getItem('consent');
        return (isConsentSet && isConsentSet === 'true');
    },

    /**
     * Sets consent variable indefinitely via localStorage
     */
    setConsent(options) {
        localStorage.setItem('consent', true);
        this.removeCookieBar(options);
    },

    /**
     * Remove the cookie bar from the DOM after the user has accepted cookies
     */
    removeCookieBar(options) {
        let cookieBar = document.querySelector(`.${options.barClassName}`);
        if (cookieBar) {
            cookieBar.parentNode.removeChild(cookieBar);
        }
    },

    /**
     * Click listener for accept button
     */
    setAcceptListener(options) {
        let acceptButton = document.querySelector(`.${options.barClassName}__button--accept`);
        if (acceptButton) {
            acceptButton.addEventListener('click', () => {
                this.setConsent(options);
            });
        }
    }
};
