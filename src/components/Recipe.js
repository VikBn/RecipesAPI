import React, {Component} from 'react';

export default class Recipe extends Component {
    render() {
        // console.log(this.props);
        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;

        const {handleDetails} = this.props;

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <img className='w-100' src={image_url} alt="recipe"/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-slanted">provided by {publisher}</h6>
                        </div>
                        <div className="card-footer">
                            <button
                                type="button"
                                onClick={() => handleDetails(0, recipe_id)}
                                className="btn btn-primary"
                            >
                                details
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}