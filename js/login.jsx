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

var personChildren = document.getElementById("personContainer").children;
var contactChildren = document.getElementById("contactContainer").children;
var securityChildren = document.getElementById("securityContainer").children;

var personFields = [
    <SearchField placeholder="имя"/>,
    <SearchField placeholder="фамилия"/>,
    <SearchField placeholder="отчество"/>
];
var contactFields = [
    <SearchField placeholder="улица"/>,
    <SearchField placeholder="дом"/>,
    <SearchField placeholder="квартира"/>,
    <SearchField placeholder="e-mail"/>
]
var securityFields = [
    <SearchField placeholder="пароль"/>,
    <SearchField placeholder="повторите пароль"/>
]

ReactDOM.render(
    <NeonText name="KeyShop"/>,
    document.getElementById("logoContainer")
)
ReactDOM.render(
    <LoginButton name="регистрация"/>,
    document.getElementById("regButtonContainer")
)

for(let i = 0; i < personChildren.length; i++) {
    ReactDOM.render(
        personFields[i],
        personChildren[i]
    )
}
for(let i = 0; i < contactFields.length; i++) {
    ReactDOM.render(
        contactFields[i],
        contactChildren[i]
    )
}
for(let i = 0; i < securityFields.length; i++) {
    ReactDOM.render(
        securityFields[i],
        securityChildren[i]
    )
}