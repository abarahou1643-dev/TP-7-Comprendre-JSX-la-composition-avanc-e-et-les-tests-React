import React from 'react';

function withTimestamp(WrappedComponent) {
    return function EnhancedComponent(props) {
        const timestamp = new Date().toLocaleTimeString();
        return (
            <div>
                <small>Rendu à : {timestamp}</small>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default withTimestamp;