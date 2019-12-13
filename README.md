# TableFor2  <img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/tf2_logo.png" align="right" height="57" width="226" >
-------------

Welcome to TableFor2! TableFor2 is a web application inspired by OpenTable. This online platform features restaurants in several major US cities. With this app users can browse, search, review and reserve restaurants. See below for some of the exciting highlights of this project.

![Screenshot](https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/restaurant_show.png)
[Visit TableFor2](http://tablefor2.herokuapp.com/#/)







## Table of Contents
* [Features & Highlights](#Features-&-Highlights)
  * [Restaurant Search](#search)
  * [Reservations](#reservations)
  * [Ratings & Reviews](#reviews)
  * [User Profile](#profile)
  * [Custom Errors](#errors)
  * [Responsive Design](#responsive)
* [Technologies](#Technologies)
* [Installation](#Installation)
* [Credits](#Seed-Sources)
* [Future Directions](#Future-Directions)


## <a id="Features-&-Highlights"></a>Features & Highlights ##

### <a id="search"></a>Public access to restaurant browsing via filtered and/or keyword search ###

<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_gifs/t.partial_search.gif" height="222" width="382" alt="Keyword Search">  <img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_gifs/t.filtered_search.gif" height="222" width="445" alt="Search by city" > 
*Restaurant search by title (left); restaurant search by dropdown (right)*    
*Note: it is possible to use dropdown filters and keyword in a single search*  



The app's restaurant searchbar sends two parameters to the backend: city ID (with a default value of 1: San Francisco) and restaurant name (optional).  

<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_snippets/t.snippet_search_actions2.png" width="100%" > *Restaurant action dispatches "fetch restaurants" with two parameters*    




<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_snippets/t.snippet_search_util.png" width="100%" > *API call to the restaurants controller, parameters included in query string*    

The index action includes an active record query for a matching city ID and any restaurant with a name that contains the search term, allowing for partial, case-insensitive search.

<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_snippets/t.snippet_search_controller2.png" width="100%" > *Index action on the restaurants controller*    

<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_snippets/t.snippet_frontend_query.png" width="60%" align="right" >    

The other search parameters are carried over directly to the restaurants index page. This is achieved by tacking a query string onto a route (/restaurants), defined on the master component. A future implementation will include real reservation search. 

The ternary logic in the snippet to the right is as follows: the state is set to an empty string when the component mounts. If it is still an empty string on submit, assign state ID to 1, otherwise assign state ID to the state that has been selected by the user.

*Search form component (right)*

### <a id="reservations"></a>User-authenticated access to reservations ###

<img src="https://github.com/mmdurnin/TableFor2/blob/master/app/assets/images/screenshot_gifs/t.create_reservation.gif" width="60%" align="right" >  

Reservations are created on the restaurants show page. On creating a new reservation, a handle submit function checks if there exists a current session id. If not, the open modal (type "log in") action is called to encourage the user to sign in. Model and database-level contstraints are in place to check that number of guests, time and reservation are not blank. On successfully submitting a new reservation, the user is redirected to their profile page which summarizes their upcoming reservations. This page renders all future reservations, in order from soonest to furthest in the future.

From the reservations summary page, a user also has access to updating and/or deleting their reservations. Two separate reservation actions are referenced on the reservation form container (update/ delete), both of which require an AJAX call to their respective actions on the backend reservations controller.

### <a id="reviews"></a>Restaurant ratings and reviews ###
### <a id="profile"></a>User profile featuring reservations and reviews ###
### <a id="errors"></a>Custom error handling ###
### <a id="responsive"></a>Responsive design ###

## <a id="Technologies"></a>Technologies ##

This project was built using the following technologies:
* PostgreSQL
* Ruby on Rails
* Javascript
* React & Redux
* CSS3

## <a id="Installation"></a>Installation ##


## <a id="Seed-Sources"></a>Seed Data Sources & Credits ##
Fonts
Icons
Images


## <a id="Future-Directions"></a>Future Directions ##
Edit & delete reviews
Restaurant filters by cuisine, neighborhood, and price
Save restaurants 
Create new restaurant ("for restauranteurs")
Real reservation search (updates to seeds with reservation slots)
