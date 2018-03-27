import '../scss/simple-cookie-consent.scss';
import domElement from './dom-elements';
import consent from './consent';

export default class {
    constructor(options) {
        if (!consent.checkConsent()) {
            // Combine our default parameters with those passed in
            this.options = this.combineDefaultOptions(options);
            // Initialise the markup of the cookie bar
            this.initCookieBar();
            // Accept button listener
            consent.setAcceptListener(this.options);
        }
    }

    /**
     * Default parameters with passed in parameter
     * @return Object
     */
    combineDefaultOptions(options) {
        return {
            ...{
                policyText: 'We use cookies to make your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
                barClassName: 'c-simple-cookie-consent',
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
