import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faEdit, faTrashAlt, faComments } from '@fortawesome/free-regular-svg-icons';
import { formatDate } from './../utils/helper';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div key={post.id} className="col-xl-4 col-lg-5 col-md-8 col-sm-10 col-10 mx-3 p-3 post-box">
                <div className="post-box-category w-30 mx-auto">{post.category}</div>
                <div className="row mt-2">
                    <div className="col-md-1 order-sm-first col-5 d-flex flex-column justify-content-around align-items-center">
                        <FontAwesomeIcon icon={faCaretUp} className="fa-3x" />
                        {post.voteScore}
                        <FontAwesomeIcon icon={faCaretDown} className="fa-3x" />
                    </div>
                    <div className="col-md-8 order-first col-12 d-flex flex-column justify-content-around align-items-center">
                        <h5>{post.title}</h5>
                        <h6>
                        <FontAwesomeIcon icon={faUser} className="mr-2 fa-lg" />
                        {post.author}
                        </h6>
                        <h6>
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 fa-lg" />
                        {formatDate(post.timestamp)}
                        </h6>
                    </div>
                    <div className="col-md-3 col-5 d-flex flex-column justify-content-around align-items-center">
                        <div className="align-middle">
                        <FontAwesomeIcon icon={faComments} className="fa-lg mr-2" />
                        {post.commentCount}
                        </div>
                        <div className="btn-group-vertical" role="group">
                        <button type="button" className="btn btn-outline-primary text-left">
                            <FontAwesomeIcon icon={faEdit} className="mr-2" />
                            Edit
                        </button>
                        <button type="button" className="btn btn-outline-danger text-left">
                            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                            Delete
                        </button>  
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Post;