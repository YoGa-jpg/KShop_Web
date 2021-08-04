alert("called");

const btnStyle = {
    width: 150,
    height: 25
};

const inputStyle = {
    width: 24 + 'rem',
    textAlign: 'left'
}

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press(age, name){
        alert('Pressed!' + age + name);
    }
    render() {
        return <a style={btnStyle} class="glass-button" href="#" onClick={() => this.press(18, 'afaf')}>{this.props.name}</a>;
    }
}

class BasketButton extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press(count){
        alert("Товаров " + count);
    }
    render() {
        return <a style={btnStyle} class="glass-button" href="#" onClick={() => this.press(3)}>{this.props.name}</a>
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
        return <a style={btnStyle} class="glass-button" href={this.props.url} onClick={() => this.press()}>{this.props.name}</a>
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

class NeonText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 class="neonText">{this.props.name}</h1>
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png"/>
            </div>
            <div class="contentBx">
                <h2>Apple iPhone 11 Pro</h2>
                <div class="size">
                    <h3>Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM</h3>
                </div>
                <a href="#">Otwarty</a>
            </div>
        </div>
    </div>
    }
}

class Good{
    constructor(image, name, desc) {
        this.image = image;
        this.name = name;
        this.desc = desc;
    }
}

const elements = [
    <CategoryButton name="Telefony"/>,
    <CategoryButton name="Komputery"/>,
    <CategoryButton name="Laptopy"/>, 
];

const goods = [
    <Card/>
]

for(let i = 0; i < elements.length; i++) {
    ReactDOM.render(
        elements[i],
        document.getElementById("btnContainer" + (i + 1))
    )
}

for(let i = 1; i < 8; i++)
{
    ReactDOM.render(
        goods[0],
        document.getElementById("good"+ i)
    )
}

ReactDOM.render(
    <BasketButton name="Kosz"/>,
    document.getElementById("btnContainer4")
)

ReactDOM.render(
    <LoginButton name="wejscie" url="html\login.html"/>,
    document.getElementById("loginContainer")
)

ReactDOM.render(
    <SearchField placeholder="szukaj"/>,
    document.getElementById("searchbarContainer")
)

ReactDOM.render(
    <NeonText name="KeyShop"/>,
    document.getElementById("logoContainer")
)

Initialize();