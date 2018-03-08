import domElement from './dom-elements';

export default class {
    constructor(options) {
        // Combine our default parameters with those passed in
        this.options = this.combineDefaultOptions(options);
        // Initialise the markup of the cookie bar
        this.initCookieBar();
    }

    /**
     * Default parameters with passed in parameter
     * @return Object
     */
    combineDefaultOptions(options) {
        return {
            ...{
                policyText: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
                barClassName: 'c-cookie-bar',
                additionalLink: '',
                additionalLinkText: ''
            },
            ...options
        };
    }

    /**
     * Initialise the markup of the cookie bar
     */
    initCookieBar() {
        const cookieBar = domElement.createCookieBar(this.options);
        document.body.insertAdjacentHTML('afterbegin', cookieBar);
    }
}
