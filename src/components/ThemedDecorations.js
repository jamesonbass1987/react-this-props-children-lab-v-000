// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecorations extends React.Component {
    render() {
            let i = 1;
            const childrenWithExtraProp = React.Children.map(this.props.children, childElement => {
                return React.cloneElement(childElement, {
                    className: this.props.theme
                });
            });

        return (
            <div className = {this.props.theme}>
                {childrenWithExtraProp}
            </div>
        )
    }
}