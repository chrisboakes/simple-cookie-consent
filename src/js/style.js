export default {
    /**
     * Loop through an array of styles and append them to an element
     * @param DOMElement element
     * @param Array styles
     */
    setStyles(element, styles) {
        if (styles.length > 0) {
            styles.forEach((styleOption) => {
                element.style.cssText += styleOption;
            });
        }
    },

    /**
     * @return Array
     */
    getWrapper(options) {
        return [
            `${options.anchorBottom ? 'bottom: 0' : 'top: 0'}`,
            `background-color: ${options.barColor}`,
            `color: ${options.barTextColor}`,
            `font-family: ${options.fontFamily}`,
            `font-size: ${options.fontSize}`,
            `padding: ${options.barVerticalPadding} 30px`,
            'line-height: 1.5',
            'position: fixed',
            'width: 100%',
            'left: 0',
            'z-index: 100'
        ];
    },

    /**
     * @return Array
     */
    getPolicy(options) {
        return [
            'width: 80%'
        ];
    },

    /**
     * @return Array
     */
    getButton(options) {
        return this.resetButton().concat([
            `background-color: ${options.buttonColor}`,
            `color: ${options.buttonTextColor}`,
            `font-family: ${options.fontFamily}`,
            `font-size: ${options.fontSize}`,
            'width: auto'
        ]);
    },

    /**
     * @return Array
     */
    getAccessiblity() {
        return [
            'height: 1px',
            'width: 1px',
            'position: absolute',
            'overflow: hidden',
            'top: -10px'
        ];
    },

    resetButton() {
        return [
            '-webkit-box-sizing: content-box',
            '-moz-box-sizing: content-box',
            'box-sizing: content-box',
            'background: none',
            'border: 0'
        ];
    }
};
