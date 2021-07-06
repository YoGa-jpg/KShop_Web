const btnStyle = {
    width: 150,
    height: 25
};

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press(age, name){
        alert('Pressed!' + age + name);
    }
    render() {
        return <a style={btnStyle} class="generalbutton" href="#" onClick={() => this.press(18, 'afaf')}>{this.props.name}</a>;
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
    <CategoryButton name="Сzęści komputera"/>
];

// const goods = [
//     new Good('https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png', 'Apple iPhone 11 Pro', 'Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM'),
//     new Good('https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png', 'Apple iPhone 11 Pro', 'Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM'),
//     new Good('https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png', 'Apple iPhone 11 Pro', 'Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM'),
//     new Good('https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png', 'Apple iPhone 11 Pro', 'Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM'),
//     new Good('https://lmt.mstatic.lv/devices/images/700x980/Apple_iPhone_11_Pro_64GB90442.png', 'Apple iPhone 11 Pro', 'Apple iOS, 5,8" ekran OLED (1125x2436), Apple A13 Bionic, 4 GB RAM, 64 GB pamięci flash, aparat 12 MP, bateria 3190 mAh, 1 karta SIM'),
// ]
const goods = [
    <Card />
]

function Initialize(){
    for(var i = 0; i < goods.length; i++)
    {
        ReactDOM.render(
            goods[i],
            getElementById("good1"),
        )
    }
}

ReactDOM.render(
    elements[0],
    document.getElementById("btnContainer1")
);

ReactDOM.render(
    elements[1],
    document.getElementById("btnContainer2")
);

ReactDOM.render(
    elements[2],
    document.getElementById("btnContainer3")
);

ReactDOM.render(
    elements[3],
    document.getElementById("btnContainer4")
);

ReactDOM.render(
    goods[0],
    document.getElementById("good1")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good2")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good3")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good4")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good5")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good6")
)

ReactDOM.render(
    goods[0],
    document.getElementById("good7")
)

Initialize();