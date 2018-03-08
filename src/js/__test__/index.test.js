import CookieConsent from '../index.js';

describe('Options should combine', () => {
    test('default options and new options should combine', () => {
        let cookieConsent = new CookieConsent();

        let input = cookieConsent.combineDefaultOptions({
            anchorBottom: false
        });

        let output = {
            policyText: 'We use cookies to create your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.',
            anchorBottom: false,
            barColor: '#333',
            buttonColor: '#CCC',
            barTextColor: '#FFF',
            buttonTextColor: '#333',
            barClassName: 'c-cookie-bar',
            fontFamily: 'Arial',
            fontSize: '16px',
            barVerticalPadding: '20px',
            findOutMoreLink: ''
        };

        expect(input).toEqual(output);
    });
});
