'use strict';

var visibilty = false;

var toggleVisibility = function toggleVisibility() {
    visibilty = !visibilty;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibilty ? 'Hide details' : 'Show details'
        ),
        visibilty && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, These  are some details you can now see!'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
