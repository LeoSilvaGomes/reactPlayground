let visibilty = false

const toggleVisibility = () => {
    visibilty = !visibilty
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibilty ? 'Hide details' : 'Show details'}
            </button>
            {visibilty && (
                <div>
                    <p>Hey, These  are some details you can now see!</p>
                </div>
            ) }
        </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'))
}

render ()