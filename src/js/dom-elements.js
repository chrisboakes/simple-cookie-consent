import style from './style';

export default {
    /**
     * Build a DOM Element for the cookie bar
     * @return String
     */
    createCookieBar(options) {
        // Wrapper
        let cookieBar = this.createDOMElement('div', style.getWrapper(options), options.barClassNameName);
        // Policy text
        cookieBar.appendChild(this.createDOMElement('p', style.getPolicy(options), options.policyText, `${options.barClassName}__policy`));
        // Accept button
        cookieBar.appendChild(this.createAcceptButton(options));
        // Additional link
        if (options.additionalLink && options.additionalLinkText) {
            cookieBar.appendChild(this.createDOMElement('a', [], options.additionalLinkText, `${options.barClassName}__button ${options.barClassName}__button--additional`));
        }
        return cookieBar.outerHTML;
    },

    /**
     * @return DOMElement
     */
    createAcceptButton(options) {
        let acceptButton = this.createDOMElement(
            'button',
            style.getButton(options),
            `Accept ${this.getAccessiblityText(options)}`,
            `${options.barClassName}__button ${options.barClassName}__button--accept`
        );
        acceptButton.setAttribute('aria-label', 'Accept consent to set cookies');
        return acceptButton;
    },

    /**
     * @return DOMElement
     */
    getAccessiblityText(options) {
        return this.createDOMElement('span', style.getAccessiblity(), 'consent to set cookies', `${options.barClassName}__accessible-text`).outerHTML;
    },

    /**
     * Create a DOM element and apply styles
     * @param String type - element type e.g. 'div' 'p'
     * @param Array styles - list of styles to iterate through and apply
     * @param String className
     * @param String content
     * @return DOMElement
     */
    createDOMElement(type, styles, content = '', className = '') {
        let element = document.createElement(type);
        style.setStyles(element, styles);
        if (className) {
            element.setAttribute('class', className);
        }
        element.innerHTML = content;
        return element;
    }
};
