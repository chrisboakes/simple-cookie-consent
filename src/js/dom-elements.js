/**
 * Build the DOM for the cookie consent bar
 * @author CB
 */
export default {
    /**
     * Build a DOM Element for the cookie bar
     * @return String
     */
    createCookieBar(options) {
        // Wrapper
        let cookieBarClassNames = (options.additionalLink && options.additionalLinkText) ? ` ${options.barClassName}--has-additional` : '';
        let cookieBar = this.createDOMElement('div', '', options.barClassName + cookieBarClassNames);

        // Inner wrap
        let cookieBarInner = this.createDOMElement('div', '', `${options.barClassName}__inner`);
        cookieBar.appendChild(cookieBarInner);

        // Policy text
        cookieBarInner.appendChild(this.createDOMElement('p', options.policyText, `${options.barClassName}__policy`));

        // Buttons
        cookieBarInner.appendChild(this.createButtons(options));

        return cookieBar.outerHTML;
    },

    /**
     * @return DOMElement
     */
    createButtons(options) {
        // Buttons
        let buttonsWrap = this.createDOMElement('div', '', `${options.barClassName}__buttons-wrap`);

        // Accept button
        buttonsWrap.appendChild(this.createAcceptButton(options));

        // Additional link
        if (options.additionalLink && options.additionalLinkText) {
            let buttonContent = this.createDOMElement('span', options.additionalLinkText, `${options.barClassName}__button-text`);
            let additionalButton = this.createDOMElement('a', buttonContent.outerHTML, `${options.barClassName}__button ${options.barClassName}__button--additional`);
            additionalButton.setAttribute('href', options.additionalLink);
            buttonsWrap.appendChild(additionalButton);
        }

        return buttonsWrap;
    },

    /**
     * @return DOMElement
     */
    createAcceptButton(options) {
        let buttonContent = this.createDOMElement(
            'span',
            `Accept ${this.getAccessiblityText(options)}`,
            `${options.barClassName}__button-text`
        );

        let button = this.createDOMElement(
            'button',
            buttonContent.outerHTML,
            `${options.barClassName}__button ${options.barClassName}__button--accept`
        );

        button.setAttribute('aria-label', 'Accept consent to set cookies');
        return button;
    },

    /**
     * @return DOMElement
     */
    getAccessiblityText(options) {
        return this.createDOMElement('span', 'consent to set cookies', `${options.barClassName}__accessible-text`).outerHTML;
    },

    /**
     * Create a DOM element and apply styles
     * @param String type - element type e.g. 'div' 'p'
     * @param Array styles - list of styles to iterate through and apply
     * @param String className
     * @param String content
     * @return DOMElement
     */
    createDOMElement(type, content = '', className = '') {
        let element = document.createElement(type);
        if (className) {
            element.setAttribute('class', className);
        }
        element.innerHTML = content;
        return element;
    }
};
