import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button type="button" className="btn btn-light rounded-circle">
                    <FontAwesomeIcon icon={faPlus} className="fa-2x text-success" />
                </button>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div className="col-md-6 col-sm-10 select-navbar">
                        <span className="text-light">Categories:</span>
                        <select value={'all'} className="custom-select w-50 ml-3">
                            <option value="all">All</option>
                            {this.props.categories && this.props.categories.map(categorie => (
                                <option value={categorie.name} key={categorie.path}>{categorie.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-10 select-navbar">
                        <span className="text-light">Order by:</span>
                        <select value={'date'} className="custom-select w-50 ml-3">
                            <option value="score">Vote Score</option>
                            <option value="date">Creation Date</option>
                        </select>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;