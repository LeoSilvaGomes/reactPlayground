class IndicisionApp extends React.Component {
    render () {
        const title = 'Indicision'
        const subtitle = 'Put your life in tha hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action/>
                <Options
                    options={options}
                />
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render () {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
          <div>
                {
                    this.props.options.map((option, id) => (
                        <Option 
                            optionText={option}
                            key={id}
                        />
                    ))
                }
          </div>  
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p key={this.props.key}>{this.props.optionText}</p>
        )
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                LeoLeo
            </div>
        )
    }
}


ReactDOM.render(<IndicisionApp/>, document.getElementById('app'))