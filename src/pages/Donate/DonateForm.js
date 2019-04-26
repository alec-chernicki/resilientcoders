
import React from 'react';
var paypal = require('paypal-rest-sdk');


class DonateForm extends React.PureComponent {
    componentDidMount() {
        paypal.configure({
            mode: 'sandbox', // Sandbox or live
            client_id: 'YOUR APPLICATION CLIENT ID',
            client_secret: 'YOUR APPLICATION CLIENT SECRET'
        });
    }
    render() {
        return (
            <div>
                <p>Donate Form</p>
                <form>

                </form>
            </div>
        );
    }
}

export default DonateForm;