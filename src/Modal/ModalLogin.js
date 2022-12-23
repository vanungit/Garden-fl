import React from 'react';
import { connect } from 'react-redux';
import { switchLogin, checkLogIn } from '../actions';
import axios from 'axios';
import './modalListView.css';
import { Switch, Route, Link } from 'react-router-dom';


class ModalLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            product: [],
            checkLogIn: false,
        }
    }
    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            alert("Độ dài " + n + " trong khoảng " +
                min + " đến " + max + ".");
            return false;
        } else {
            return true;
        }
    }
    checkRegexp = (o, regexp, n) => {
        if (!(regexp.test(o))) {
            alert(" " + n);
            return false;
        } else {
            return true;
        }
    }
    getUser = (e) => {
        var valid = true;
        e.preventDefault();
        var state = this.state;
        var self = this;
        valid = valid && self.checkLength(state.username, "tên đăng nhập", 6, 25);
        valid = valid && self.checkLength(state.pw, "mật khẩu ", 6, 16);
        if (valid) {
            axios.get(`https://5ca5c51d3a08260014278a74.mockapi.io/usersShop`)
                .then((res) => {
                    var user = res.data.filter(function (element) {
                        return (element.username === state.username && element.pw === state.pw && valid)
                    })
                    console.log("user login :", user);
                    if (user.length) {
                        alert("Đăng nhập thành công");
                        self.setState({
                            checkLogIn: true,
                            name: user[0].name,
                            product: user[0].cart
                        })
                        window.location.reload();
                        let cartUser = Object.values(JSON.parse(user[0].cart));
                        let orderUser = Object.values(JSON.parse(user[0].order));
                        localStorage.setItem("id", JSON.stringify(user[0].id));
                        localStorage.setItem("status", JSON.stringify(self.state.checkLogIn));
                        localStorage.setItem("name", JSON.stringify(self.state.name));
                        localStorage.setItem("cartUser", JSON.stringify(cartUser));
                        localStorage.setItem("address", JSON.stringify(user[0].address));
                        localStorage.setItem("email", JSON.stringify(user[0].email));
                        localStorage.setItem("phone", JSON.stringify(user[0].phone));
                        localStorage.setItem("username", JSON.stringify(self.state.username));
                        localStorage.setItem("pw", JSON.stringify(user[0].pw));
                        localStorage.setItem("orderUser", JSON.stringify(orderUser));
                        localStorage.setItem("statusOrder", JSON.stringify(user[0].statusOrder));
                        localStorage.setItem("dateOrder", JSON.stringify(user[0].dateOrder));
                        const id = JSON.parse(localStorage.getItem("id"));
                        const status = JSON.parse(localStorage.getItem("status"));
                        const name = JSON.parse(localStorage.getItem("name"));
                        const cart = JSON.parse(localStorage.getItem("cartUser"));
                        const addr = JSON.parse(localStorage.getItem("address"));
                        const mail = JSON.parse(localStorage.getItem("email"));
                        const phone = JSON.parse(localStorage.getItem("phone"));
                        const username = JSON.parse(localStorage.getItem("username"));
                        const pw = JSON.parse(localStorage.getItem("pw"));
                        const order = JSON.parse(localStorage.getItem("orderUser"));
                        const statusOrder = JSON.parse(localStorage.getItem("statusOrder"));
                        const dateOrder = JSON.parse(localStorage.getItem("dateOrder"));

                        this.props.checkLogIn(id, status, name, cart, addr, mail, phone, username, pw, order, dateOrder, statusOrder);
                    }
                    else alert("Օգտվողի անունը կամ գաղտնաբառը սխալ է");
                })
        }

    }

    getInputUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getInputPw = (e) => {
        // console.log(e.target.value)
        this.setState({
            pw: e.target.value
        })
    }
    render() {
        return (
            <div className="modal_box">
                <div className="modal_header">
                    <p>Բարի գալուստ Շարունակելու համար խնդրում ենք մուտք գործել</p>
                    <div>
                        Դուք գրանցված չե՞ք:
                        {/* <button type="button" onClick={() => this.props.switchLogin(false)}>Գրանցում</button> */}
                        <Link to="/regis">Գրանցում</Link>
                    </div>
                </div>
                <div className="modal_body">
                    <div className="modal_input">
                        <div className="login_input">
                            <label  >Օգտագործողի անունը*</label>
                            <input onChange={this.getInputUser} className="input-with-status__input" type="text" placeholder="Խնդրում ենք մուտքագրել ձեր օգտանունը" />
                        </div>
                        <div className="login_input">
                            <label  >Գաղտնաբառ*
                            </label>
                            <input className="input-with-status__input" type="password" placeholder="Խնդրում ենք մուտքագրել ձեր գաղտնաբառը" onChange={this.getInputPw} />
                        </div>
                        <div className="login_forgot">
                            <button>Մոռացել եք գաղտնաբառը?</button>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button type="button" className="mod-button" onClick={this.getUser} >Մուտք գործեք</button>
                        <p>Կամ մուտք գործեք
                        </p>
                        <button type="button" className="mod-button mod-login-fb " onClick={() => alert("Գործառույթն ընթացքի մեջ է")}> <i className="fab fa-facebook-f"></i> &emsp; Facebook</button>
                        <button type="button" className="mod-button mod-login-google" onClick={() => alert("Գործառույթն ընթացքի մեջ է")}> <i className="fab fa-google-plus-g"></i> &emsp; Google</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchLogin: (name) => dispatch(switchLogin(name)),
        checkLogIn: (id, status, name, cart, address, email, phone) => dispatch(checkLogIn(id, status, name, cart, address, email, phone))
    }
}

export default connect(null, mapDispatchToProps)(ModalLogin);
