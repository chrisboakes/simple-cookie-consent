export default class {
    constructor(options) {
        // Combine our default parameters with those passed in
        this.options = this.combineDefaultOptions(options);
    }

    /**
     * Default parameters
     * @return Object
     */
    combineDefaultOptions(options) {
        return {
            ...{
                anchorBottom: true,
                backgroundColour: '#000',
                textColour: '#FFF',
                policyWording: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.'
            },
            ...options
        };
    }
}
