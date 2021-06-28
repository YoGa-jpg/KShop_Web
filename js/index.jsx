const firstButton = {
    width: 150,
    height: 25,
    marginLeft: 150
};
const secondButton = {
    width: 150,
    height: 25,
    marginLeft: 450
};
ReactDOM.render(
    <a style={firstButton} class="generalbutton" href="#">1</a>,
    document.getElementById("btnContainer")
);
ReactDOM.render(
    <a style={secondButton} class="generalbutton" href="#">2</a>,
    document.getElementById("btnContainer")
);
// ReactDOM.render(
//     <a style={thirdButton} class="generalbutton" href="#">3</a>,
//     document.getElementById("btnContainer")
// );
// ReactDOM.render(
//     <a style={fourthButton} class="generalbutton" href="#">4</a>,
//     document.getElementById("btnContainer")
// );