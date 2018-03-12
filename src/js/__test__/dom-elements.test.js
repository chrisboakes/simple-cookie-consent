/* eslint-disable */
import DOMElements from '../dom-elements.js';

describe('Cookie Bar Markup', () => {
    test('createCookieBar()', () => {
        let input = DOMElements.createCookieBar({
            policyText: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
            barClassName: 'c-cookie-bar'
        });

        let output = `<div class=\"c-cookie-bar\"><div class=\"c-cookie-bar__inner\"><p class=\"c-cookie-bar__policy\">We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.</p><div class=\"c-cookie-bar__buttons-wrap\"><button class=\"c-cookie-bar__button c-cookie-bar__button--accept\" aria-label=\"Accept consent to set cookies\"><span class=\"c-cookie-bar__button-text\">Accept <span class=\"c-cookie-bar__accessible-text\">consent to set cookies</span></span></button></div></div></div>`;

        expect(input).toBe(output);
    });

    test('createCookieBar() with additional link', () => {
        let input = DOMElements.createCookieBar({
            policyText: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
            barClassName: 'c-cookie-bar',
            additionalLink: '#',
            additionalLinkText: 'Find out more'
        });

        let output = `<div class=\"c-cookie-bar c-cookie-bar--has-additional\"><div class=\"c-cookie-bar__inner\"><p class=\"c-cookie-bar__policy\">We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.</p><div class=\"c-cookie-bar__buttons-wrap\"><button class=\"c-cookie-bar__button c-cookie-bar__button--accept\" aria-label=\"Accept consent to set cookies\"><span class=\"c-cookie-bar__button-text\">Accept <span class=\"c-cookie-bar__accessible-text\">consent to set cookies</span></span></button><a class=\"c-cookie-bar__button c-cookie-bar__button--additional\" href=\"#\"><span class=\"c-cookie-bar__button-text\">Find out more</span></a></div></div></div>`;

        expect(input).toBe(output);
    });

    test('createCookieBar() with different class name', () => {
        let input = DOMElements.createCookieBar({
            policyText: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
            barClassName: 'custom-class-name'
        });

        let output = `<div class=\"custom-class-name\"><div class=\"custom-class-name__inner\"><p class=\"custom-class-name__policy\">We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.</p><div class=\"custom-class-name__buttons-wrap\"><button class=\"custom-class-name__button custom-class-name__button--accept\" aria-label=\"Accept consent to set cookies\"><span class=\"custom-class-name__button-text\">Accept <span class=\"custom-class-name__accessible-text\">consent to set cookies</span></span></button></div></div></div>`;

        expect(input).toBe(output);
    });
});
