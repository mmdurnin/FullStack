import React from 'react';

class ReviewForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            restaurant_id: this.props.restaurantId,
            rating: "",
            body: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.loggedIn) {
            this.props.createReview({ restaurant_id: this.state.restaurant_id, rating: this.state.rating, body: this.state.body }, this.props.restaurantId)
            this.setState({
                rating: "",
                body: ""
            });
        } else {
            this.props.openModal('login')
        }
        // this.props.fetchReviews(this.props.restaurantId)
    }



    render(){

        return(

            <div className="review-form-container-parent">
                <form className="review-form-container-child" onSubmit={this.handleSubmit}>
                    <h1>Leave a review!</h1>
                        <div className="review-form-stars">
                                <input 
                                type="radio" 
                                id="rating-5"
                                name="rating"
                                value="5"
                                checked={this.state.rating === "5"}
                                onChange={this.update("rating")} 
                                />

                                <label 
                                className="star" 
                                htmlFor="rating-5" 
                                title="Superb"
                                aria-hidden="true">
                                </label>

                                <input 
                                type="radio" 
                                id="rating-4"
                                name="rating"
                                value="4"
                                checked={this.state.rating === "4"}
                                onChange={this.update("rating")} 
                                />
                                
                                <label 
                                className="star"
                                htmlFor="rating-4"
                                title="Pretty excellent"
                                aria-hidden="true">
                                </label>

                                <input 
                                type="radio" 
                                id="rating-3"
                                name="rating"
                                value="3"
                                checked={this.state.rating === "3"}
                                onChange={this.update("rating")} 
                                />
                                
                                <label 
                                className="star"
                                htmlFor="rating-3"
                                title="Good."
                                aria-hidden="true">
                                </label>

                                <input 
                                type="radio" 
                                id="rating-2"
                                name="rating"
                                value="2"
                                checked={this.state.rating === "2"}
                                onChange={this.update("rating")} 
                                />
                                
                                <label 
                                className="star"
                                htmlFor="rating-2"
                                title="It was a place with food."
                                aria-hidden="true">
                                </label>

                                <input 
                                type="radio" 
                                id="rating-1"
                                name="rating"
                                value="1"
                                checked={this.state.rating === "1"}
                                onChange={this.update("rating")} 
                                />
                                
                                <label 
                                className="star"
                                htmlFor="rating-1"
                                title="I would not eat here again."
                                aria-hidden="true">
                                </label>
                        </div>



                        <div className="submittext-review-container">
                            <label className="review-text">
                                <textarea
                                value={this.state.body}
                                onChange={this.update("body")}
                                />
                            </label>

                            <input className="submit-review" type="submit"/>
                        </div>
                </form>
            </div>
        )
    }
}

export default ReviewForm;