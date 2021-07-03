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
const elements = [<CategoryButton name="Telefony"/>, <CategoryButton name="Komputery"/>,
    <CategoryButton name="Laptopy"/>, <CategoryButton name="Сzęści komputera"/>];

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