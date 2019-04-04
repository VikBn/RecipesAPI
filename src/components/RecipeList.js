import React, {Component} from 'react';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
    render() {
        const {
            recipes,
            handleDetails,
            value,
            handleSubmit,
            handleChange,
            error
        } = this.props;
        // console.log('h',this.props,handleDetails);
        return (
            <React.Fragment>
                <RecipeSearch
                    value={value}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-uppercase text-center">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                        <div className="row">
                            {error
                                ? <h2 className="text-danger text-center">{error}</h2>
                                : recipes.map((recipe) => {
                                    return(
                                        <Recipe
                                            key={recipe.recipe_id}
                                            recipe={recipe}
                                            handleDetails={handleDetails}
                                        />
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}