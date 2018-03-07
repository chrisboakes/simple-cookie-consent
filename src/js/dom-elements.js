import style from './style';

export default {
    /**
     * Build a DOM Element for the cookie bar
     * @return String
     */
    createCookieBar(options) {
        let cookieBar = this.createDOMElement('div', style.getWrapper(options), options.barClassName);
        cookieBar.appendChild(this.createPolicyNode(options));
        return cookieBar.outerHTML;
    },

    /**
     * @return DOMElement
     */
    createPolicyNode(options) {
        let policyNode = this.createDOMElement('p', style.getPolicy(options), `${options.barClass}__policy`);
        policyNode.innerHTML = options.policyWording;
        return policyNode;
    },

    /**
     * Create a DOM element and apply styles
     * @param String type - element type e.g. 'div' 'p'
     * @param Array styles - list of styles to iterate through and apply
     * @param String className
     * @return DOMElement
     */
    createDOMElement(type, styles, className = '') {
        let element = document.createElement(type);
        style.setStyles(element, styles);
        if (className) {
            element.setAttribute('class', className);
        }
        return element;
    }
};
