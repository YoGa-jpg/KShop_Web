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
    marginLeft: 43 + '%',
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
class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""
        }

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        alert("pressed");
        var requestData = JSON.stringify({
            Email: this.state.email,
            Password: this.state.pass
        })
        var request = XMLHttpRequest();
        request.open("POST", "https://localhost:44309/api/sign/signin");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.onreadystatechange = function () {
            alert("slava");
        }
        request.send(requestData);
    }
    render() {
        return <form name="loginForm" onSubmit={this.handleSubmit}>
            <div id="emailContainer" class="inputContainer" style={{ marginTop: 245 + 'px' }}>
                <input style={inputStyle} class="glass-button" name="streetText" type="text" placeholder="улица" onChange={this.myChangeHandler} />
            </div>
            <div id="passwordContainer" class="inputContainer" style={{ marginTop: 312 + 'px' }}>
                <input style={inputStyle} class="glass-button" name="streetText" type="text" placeholder="улица" onChange={this.myChangeHandler} />
            </div>
            <div id="loginButtonContainer" class="inputContainer" style={{ marginTop: 600 + 'px', marginLeft: 33 + '%' }}>
                <input style={buttonStyle} class="glass-button" type="submit" value="регистрация" />
            </div>
        </form>
    }
}

ReactDOM.render(
    <NeonText name="KeyShop" />,
    document.getElementById("logoContainer")
)
ReactDOM.render(
    <SignInForm/>,
    document.getElementById("formContainer")
)
ReactDOM.render(
    <a style={refStyle} class="simple-ref" href="reg.html">регистрация</a>,
    document.getElementById("regButtonContainer")
)