export const Icons =  React.createClass({
    propTypes: {
        icon: React.PropTypes.string.isRequired,
        size: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        style: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            size: 24
        };
    },
    _mergeStyles(...args) {
        // This is the m function from "CSS in JS" and can be extracted to a mixin
        return Object.assign({}, ...args);
    },
    renderGraphic() {
        switch (this.props.icon) {
            case 'my-icon':
                return (
                    <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
                );
            case 'another-icon':
                return (
                    <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
                );
            case 'accountOut':
                return (
                    <g><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1-2.1-.94-2.1-2.1.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1h-12.2v-1.1c0-.64 3.13-2.1 6.1-2.1m0-10.9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
                );
            case 'accountIn':
                return (
                    <g><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
                );
            case 'cartFull':
                return (
                    <g><path d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-6-16v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-11.58c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-14.79l-.94-2h-3.27zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
                );
            case 'cartAdd':
                return (
                    <g><path d="M11 9h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01-1.74-.96h-.01l-1.1 2-2.76 5h-7.02l-.13-.27-2.24-4.73-.95-2-.94-2h-3.27v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-11.58c-.13 0-.25-.11-.25-.25z"></path></g>
                );
            // Add more icons here
        }
    },
    render() {
        let styles = {
            fill: this.props.fill,
            verticalAlign: "middle",
            width: this.props.size, // CSS instead of the width attr to support non-pixel units
            height: this.props.size // Prevents scaling issue in IE
        };
        return (
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
                 style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
                {this.renderGraphic()}
            </svg>
        );
    }
});
