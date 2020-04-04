import React from 'react';
import EmailComponent from './Email';
import AdComponent from './Ads';
import './index.css';

export default class MailComponent extends React.Component {
    render() {
        return (
            <div className="twoComponents">
                <EmailComponent />
                <AdComponent />
            </div>
        );
    }
}
