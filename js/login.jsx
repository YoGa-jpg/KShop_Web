// import {inputStyle, buttonStyle, NeonText, SearchField, LoginButton} from 'reg.jsx'

const inputStyle = {
    width: 100 + '%',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontFamily: 'Geneva, Arial, Helvetica, sans-serif',
    cursor: 'text'
}
const buttonStyle = {
    position: 'relative',
    width: 80 + '%',
    textAlign: 'center',
    align: 'center',
    fontFamily: 'Geneva, Arial, Helvetica, sans-serif',
    marginLeft: 10 + '%'
}

const refStyle = {
    position: 'relative',
    textAlign: 'center',
    fontSize: 12,
    marginLeft: 43   + '%',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Geneva, Arial, Helvetica, sans-serif'
}

class NeonText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 class="neonText">{this.props.name}</h1>
    }
}
class SearchField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <input style={inputStyle} class="glass-button" href="#" placeholder={this.props.placeholder} name={this.props.name}></input>
    }
}
class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press(){
        alert("PRESSED!");
    }
    render() {
        return <a style={buttonStyle} class="glass-button" href={this.props.url} onClick={() => this.press()}>{this.props.name}</a>
    }
}

ReactDOM.render(
    <NeonText name="KeyShop"/>,
    document.getElementById("logoContainer")
)

ReactDOM.render(
    <SearchField placeholder="email"/>,
    document.getElementById("emailContainer")
)

ReactDOM.render(
    <SearchField placeholder="пароль"/>,
    document.getElementById("passwordContainer")
)

ReactDOM.render(
    <LoginButton name="вход"/>,
    document.getElementById("loginButtonContainer")
)

ReactDOM.render(
    <a style={refStyle} class="simple-ref" href="reg.html">регистрация</a>,
    document.getElementById("regButtonContainer")
)