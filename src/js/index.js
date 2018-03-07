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
                policyWording: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
                anchorBottom: true,
                barColor: '#333',
                buttonColor: '#CCC',
                barTextColor: '#FFF',
                buttonTextColor: '#333',
                barClassName: 'c-cookie-bar',
                fontFamily: 'Arial',
                fontSize: '16px',
                barVerticalPadding: '20px',
                findOutMoreLink: ''
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
