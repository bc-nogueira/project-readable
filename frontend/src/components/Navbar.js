import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button type="button" class="btn btn-light rounded-circle">
                    <FontAwesomeIcon icon={faPlus} className="fa-2x text-success" />
                </button>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div className="col-md-6 col-sm-10 select-navbar">
                        <span className="text-light">Categories:</span>
                        <select class="custom-select w-50 ml-3">
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-10 select-navbar">
                        <span className="text-light">Order by:</span>
                        <select class="custom-select w-50 ml-3">
                            <option selected>Vote Score</option>
                            <option value="1">Creation Date</option>
                        </select>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;