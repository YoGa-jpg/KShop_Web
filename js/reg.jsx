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
// class SearchField extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <input style={inputStyle} class="glass-button" href="#" placeholder={this.props.placeholder} name={this.props.name}></input>
//     }
// }
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
    handleSubmit = (event) => {
        alert("pressed");
        var requestData = JSON.stringify({
            Name: this.state.name,
            Surname: this.state.surname,
            Patronymic: this.state.patronymic,
            Aress: {
                Street: this.state.street,
                House: this.state.house,
                Flat: this.state.flat
            },
            Email: this.state.email,
            Password: this.state.pass
        })
        var request = XMLHttpRequest();
        request.open("POST", "https://localhost:44309/api/sign/signup");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.onreadystatechange = function() {
            alert("slava");
        }
        request.send(requestData);
    }
    render() {
        return <form name="regForm" onSubmit={this.handleSubmit}>
            <div id="personContainer">
                <div id="nameContainer" class="inputContainer" style={{ marginTop: 245 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="nameText" type="text" placeholder="имя" onChange={this.myChangeHandler}/>
                </div>
                <div id="surnameContainer" class="inputContainer" style={{ marginTop: 312 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="surnameText" type="text" placeholder="фамилия" onChange={this.myChangeHandler}/>
                </div>
                <div id="lastnameContainer" class="inputContainer" style={{ marginTop: 379 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="patronymicText" type="text" placeholder="пароль" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="contactContainer">
                <div id="streetContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 252 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="streetText" type="text" placeholder="улица" onChange={this.myChangeHandler}/>
                </div>
                <div id="houseContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 4.6 + '%', marginLeft: 52.7 + '%' }}>
                    <input style={inputStyle} class="glass-button" name="houseNumer" type="number" placeholder="дом" onChange={this.myChangeHandler}/>
                </div>
                <div id="flatContainer" class="inputContainer" style={{ marginTop: 468 + 'px', width: 4.6 + '%', marginLeft: 58.6 + '%' }}>
                    <input style={inputStyle} class="glass-button" name="flatNumer" type="number" placeholder="кв" onChange={this.myChangeHandler}/>
                </div>
                <div id="emailContainer" class="inputContainer" style={{ marginTop: 535 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="emailText" type="email" placeholder="email" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="securityContainer">
                <div id="passwordContainer" class="inputContainer" style={{ marginTop: 624 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="passText" type="password" placeholder="пароль" onChange={this.myChangeHandler}/>
                </div>
                <div id="passwordRepeatContainer" class="inputContainer" style={{ marginTop: 691 + 'px' }}>
                    <input style={inputStyle} class="glass-button" name="repeatText" type="password" placeholder="повторите пароль" onChange={this.myChangeHandler}/>
                </div>
            </div>
            <div id="regButtonContainer" class="inputContainer" style={{ marginTop: 841 + 'px', marginLeft: 33 + '%' }}>
                <input style={buttonStyle} class="glass-button" type="submit" value="регистрация"/>
            </div>
        </form>
    }
}

// var personChildren = document.getElementById("personContainer").children;
// var contactChildren = document.getElementById("contactContainer").children;
// var securityChildren = document.getElementById("securityContainer").children;

// var personFields = [
//     <SearchField placeholder="имя"/>,
//     <SearchField placeholder="фамилия"/>,
//     <SearchField placeholder="отчество"/>
// ]
// var contactFields = [
//     <SearchField placeholder="улица"/>,
//     <SearchField placeholder="дом"/>,
//     <SearchField placeholder="квартира"/>,
//     <SearchField placeholder="e-mail"/>
// ]
// var securityFields = [
//     <SearchField placeholder="пароль"/>,
//     <SearchField placeholder="повторите пароль"/>
// ]

ReactDOM.render(
    <NeonText name="KeyShop" />,
    document.getElementById("logoContainer")
)
// ReactDOM.render(
//     <LoginButton name="регистрация"/>,
//     document.getElementById("regButtonContainer")
// )
ReactDOM.render(
    <a style={inputStyle} href="login.html">вход</a>,
    document.getElementById("loginButtonContainer")
)
ReactDOM.render(
    <SignUpForm />,
    document.getElementById("formContainer")
)
// for(let i = 0; i < personChildren.length; i++) {
//     ReactDOM.render(
//         personFields[i],
//         personChildren[i]
//     )
// }
// for(let i = 0; i < contactFields.length; i++) {
//     ReactDOM.render(
//         contactFields[i],
//         contactChildren[i]
//     )
// }
// for(let i = 0; i < securityFields.length; i++) {
//     ReactDOM.render(
//         securityFields[i],
//         securityChildren[i]
//     )
// }