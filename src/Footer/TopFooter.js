import React, { Component } from "react";
import { Link } from "react-router-dom";
import './TopFooter.css';
class TopFooter extends Component {
    render() {

        return (
            <div className="TopFooter">
                <div>
                    <h6>ՏԵՂԵԿԱՏՎԱԿԱՆ
                        <br></br>
                        <span>
                            <a href="https://www.facebook.com/GardenFlowersVanadzor" target="_blank"> <i className="fab fa-facebook-f" /> </a>
                            <a href="https://www.instagram.com/garden_flowers_vanadzor" target="_blank"> <i className="fab fa-instagram" /> </a>
                        </span>
                    </h6>
                </div>

                <div  >
                    <h6>
                        ԲԱԺԱՆՈՐԴԱԳՐՎԵՔ ԷԼ. ՓՈՍՏ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ</h6>
                </div>

                <div>
                    <form >
                        <input
                            type="text"
                            placeholder="ԷԼ. ՓՈՍՏ"
                            name="search"
                        />
                        <button type="button">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TopFooter
