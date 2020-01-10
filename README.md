# Project Overview


## Project Description

Brewery Tour Manager allows a user to search breweries in a specific city, and then plan a tour based on the information they've searched. User can type out the tour route as they want it, and then can share this tour on social media with friends / family. 

## Video Presentation

- [video presentation](https://youtu.be/oW-zJdHTrD8)


## Project Links

- [github repo](https://github.com/dcgleason/brewery-locator)
- [deployment](https://brewery-tour-manager.netlify.com/)

## Wireframes

- [wireframes](https://i.ibb.co/rkFd87S/Screen-Shot-2020-01-10-at-12-38-01-PM.png)
- [react architecture](https://i.ibb.co/qgYqSTd/Screen-Shot-2020-01-10-at-12-47-30-PM.png)


### MVP/PostMVP 

#### MVP 
- Finds and uses external api 
- Allows user to search for brewery by city
- Renders data on page  
- Allows user to input tour stop manually
- Can cross out tour stops user has visited

#### PostMVP 

- Drag and drop feature. User drags a card and "drops" it in a "favorites" category 

## Components 

| Component | Description | 
| --- | :---: |  
| About | Top level component, this renders a link to the page, using React Routes | 
| App | Contains the basic structure of the app. Is where other main components render to. Also is where the OpenBrewery API is called and where the search function is layed out| 
| CitySearch | Form that takes input from user as they search for a city  | 
| Results | Component that passes down props to ResultsItem | 
| ResultsItem | Renders search results in card format | 
| InputForm | Form that takes input from user as they type in desired tour stops | 
| InputList | Passes down props to InputItem| 
| InputItem | Displays item, user can click "visited" button to cross out stop | 


## Additional Libraries/Packages
Used Bootstrap (for React), react-share, react-card-flip, font-awesome

## Code Snippet

The code below deals with the search functionality, and I am particularly proud of it. It sets the state "query" to the inputed value from the CitySearch (a form), and then calls search, passing in the state as an argument. Search then amends the api end point so that it returns the appropiate data. 


```
onChange = (e) => {  
    this.setState({
      query: e.target.value
    });

    this.search(this.state.query);
  };

  search = (query) => {
    const url = `https://api.openbrewerydb.org/breweries?by_city=${query}`;
    fetch(url)
      .then(results => results.json())
      .then(res => {console.log(res)
          this.setState({data: res});
      })
      };
```

## Issues and Resolutions
 Initially, I tried to use the google maps api becuase I wanted to display the route visually, but I ran into CORS errors and couldn't get around them without a back end. I went without the google maps api, and allowed the users to manually input their tour stops instead. 
