import React from 'react';
import './NotificationBar.scss';
import close from 'images/close.svg';

class NotificationBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
        };
    
        this.storageKey = 'NOTIFICATIONBAR';
        window.sessionStorage.setItem(this.storageKey, true);
    }
    componentDidMount() {
        setTimeout(() => {
            this.open();
        }, 475);
    }
    open() {    
        this.setState({
            open: true,
        });
    }
    close = e => {
        if (e) e.preventDefault();
    
        this.setState({
            open: false,
        });
        window.sessionStorage.removeItem(this.storageKey);
    };

    render() {
        const { children } = this.props;
        const isOpen = window.sessionStorage.getItem(this.storageKey);
        
        if (isOpen == null || isOpen == undefined) {
            return null;
        }
        return (
            <div className={`notification-bar${this.state.open ? ' open' : ' closed'}`}>
                {children}
                <img onClick={this.close} src={close} />
            </div>
        );
    }
}

export default NotificationBar;