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

function componentDidMount(object) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
    };
    fetch('http://localhost:7109/api/sign/signup', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            alert(error.ToString());
            console.error('There was an error!', error);
        });
}

class NeonText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 class="neonText">{this.props.name}</h1>
    }
}
class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press() {
        alert("PRESSED!");
    }
    render() {
        return <input style={buttonStyle} class="glass-button" href={this.props.url} onClick={() => this.press()}>{this.props.name}</input>
    }
}
class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            surname: "", 
            patronymic: "", 
            street: "", 
            house: "", 
            flat: "", 
            email: "", 
            pass: "", 
            passRepeat: "" 
        }

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = async (event) => {
        var requestData = JSON.stringify({
            Name: this.state.name,
            Surname: this.state.surname,
            Patronymic: this.state.patronymic,
            Adress: {
                Street: this.state.street,
                House: parseInt(this.state.house, 10),
                Flat: parseInt(this.state.flat, 10)
            },
            Email: this.state.email,
            Password: this.state.pass
        })
        alert(requestData);
        // var request = XMLHttpRequest();
        // request.open("POST", "http://localhost:7109/api/sign/signup");
        // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // request.onreadystatechange = function() {
        //     alert("slava");
        // }
        // request.send(requestData);
        componentDidMount({
            Name: this.state.name,
            Surname: this.state.surname,
            Patronymic: this.state.patronymic,
            Adress: {
                Street: this.state.street,
                House: parseInt(this.state.house, 10),
                Flat: parseInt(this.state.flat, 10)
            },
            Email: this.state.email,
            Password: this.state.pass
        })
    }
    render() {
        return <form name="regForm" onSubmit={this.handleSubmit}>
            <div id="personContainer">
                <div id="nameContainer" class="inputContainer" style={{ marginTop: 245 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="name" type="text" placeholder="имя" onChange={this.myChangeHandler}/>
                </div>
                <div id="surnameContainer" class="inputContainer" style={{ marginTop: 312 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="surname" type="text" placeholder="фамилия" onChange={this.myChangeHandler}/>
                </div>
                <div id="lastnameContainer" class="inputContainer" style={{ marginTop: 379 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="patronymic" type="text" placeholder="пароль" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="contactContainer">
                <div id="streetContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 252 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="street" type="text" placeholder="улица" onChange={this.myChangeHandler}/>
                </div>
                <div id="houseContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 4.6 + '%', marginLeft: 52.7 + '%' }}>
                    <input style={inputStyle} class="glass-button" name="house" type="number" placeholder="дом" onChange={this.myChangeHandler}/>
                </div>
                <div id="flatContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 4.6 + '%', marginLeft: 58.6 + '%' }}>
                    <input style={inputStyle} class="glass-button" name="flat" type="number" placeholder="кв" onChange={this.myChangeHandler}/>
                </div>
                <div id="emailContainer" class="inputContainer" style={{ marginTop: 535 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="email" type="email" placeholder="email" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="securityContainer">
                <div id="passwordContainer" class="inputContainer" style={{ marginTop: 624 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="pass" type="password" placeholder="пароль" onChange={this.myChangeHandler}/>
                </div>
                <div id="passwordRepeatContainer" class="inputContainer" style={{ marginTop: 691 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="passRepeat" type="password" placeholder="повторите пароль" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="regButtonContainer" class="inputContainer" style={{ marginTop: 841 + 'px', marginLeft: 33 + '%' }}>
                <input style={buttonStyle} class="glass-button" type="submit" value="регистрация"/>
            </div>
        </form>
    }
}
ReactDOM.render(
    <NeonText name="KeyShop" />,
    document.getElementById("logoContainer")
)
ReactDOM.render(
    <a style={inputStyle} href="login.html">вход</a>,
    document.getElementById("loginButtonContainer")
)
ReactDOM.render(
    <SignUpForm />,
    document.getElementById("formContainer")
)