import React, {Component} from 'react';
import {recipe} from "../tempDetails";

export default class RecipeDetails extends Component {

    state = {
        recipe: recipe
    };

    async componentDidMount() {

        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=
                    df8bc46d820dda366303d945de7dbd2d&q&rId=${id}`;

        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState((state, props) => {
                return {recipe:jsonData.recipe}
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;

        const {handleIndex} = this.props;

        // console.log(this.state.recipe);

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button
                                onClick={() => handleIndex(1)}
                                type="button"
                                className="btn btn-warning mb-5 text-capitalize"
                            >
                                back to recipe list
                            </button>
                            <img src={image_url} className="d-block w-100" alt="recipe"/>
                        </div>
                        {/*{ details }*/}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize">provided by {publisher}</h6>
                            <a className="btn btn-primary mt-2 text-capitalize" href={publisher_url} rel="noopener noreferrer" target="_blank">
                                publisher webpage
                            </a>
                            <a className="btn btn-success mt-2 mx-3 text-capitalize" href={source_url} rel="noopener noreferrer" target="_blank">
                                recipe url
                            </a>
                            <ul className="list-group mt-4">
                                {
                                    ingredients.map((recipe, index) => {
                                        return (
                                            <li key={index} className="list-group-item text-slanted">{recipe}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}