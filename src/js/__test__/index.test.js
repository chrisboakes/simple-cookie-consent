import CookieConsent from '../index.js';

describe('Options should combine', () => {
    test('default options and new options should combine', () => {
        let cookieConsent = new CookieConsent();

        let input = cookieConsent.combineDefaultOptions({
            anchorBottom: false
        });

        let output = {
            anchorBottom: false,
            backgroundColour: '#000',
            textColour: '#FFF',
            policyWording: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.'
        };

        expect(input).toEqual(output);
    });
});
