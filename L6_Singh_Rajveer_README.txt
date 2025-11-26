# Lab 6
* *Date Created*: 21 Nov 2025
* *Last Modification Date*: 25 Nov 2025
* *Netlify URL*: <https://lab5csci3172.netlify.app/>
* *Github URL*: <https://github.com/Raj-2204/Lab5.git>
* *GitLab URL*: <https://git.cs.dal.ca/rajveers/csci-3172.git>

## Authors
* [Rajveer Singh](rajveer.singh@dal.ca) - (Lead)

## Built With
* [React](https://react.dev/) - Front-end library used to build UI components
* [React Router](https://reactrouter.com/home) - Used for client-side routing
* [Vite](https://vite.dev/) - Used to generate RSS Feeds
* [Node.js](https://nodejs.org/en/download/) - Used to generate RSS Feeds
* [Bootstrap](https://getbootstrap.com/) - Used to generate RSS Feeds
* [WeatherAPI](https://www.weatherapi.com/) - Used to generate RSS Feeds

## Sources Used

### server.js

*Lines 5 - 18 and 46 - 50*

```
app.get("/weather", async (req, res) => {
  try {
    const weatherAPI = process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=Halifax&aqi=no`);
    const data = await response.json();
    res.json({
      city: data.location.name,
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
    });
  } catch (err) {
    console.error("Error fetching:", err);
  }
});
app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5001, () => console.log(" running on port 5001"));

```

The code above was created by adapting the code in [Express js starting guide](https://expressjs.com/en/starter/hello-world.html) as shown below: 

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


```

- <!---How---> The code in [Express offical docs](linkhttps://expressjs.com/en/starter/hello-world.html) was implemented by using the given structure in docs
- <!---Why---> Code was used because understanding the structure of express.js
- <!---How---> Code was modified by adding the weather and projects endpoints

*Repeat as needed*

*Lines 5 - 37*

```
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Rajveer Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

```

The code above was created by adapting the code in [Bootstrap Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

```

- <!---How---> The Navbar structure from Bootstrap’s documentation was used as a guide to implement the navigation bar in project.
- <!---Why---> Bootstrap’s Navbar ensures consistency across browsers.
- <!---How---> Converted into JSX syntax, replaced <a> with <Link> from React Router, styling as well as changed class to className.

*Repeat as needed*


### Home.jsx

*Lines 25 - 31*

```
<div className="col-md-6 text-center mt-4 mt-md-0">
          <img 
            src={profileImg}
            alt="Rajveer Singh" 
            className="img-fluid rounded-circle shadow-sm home-profile-img"
          />
        </div>

```

The code above was created by adapting the code in [Bootstrap image utilities](https://getbootstrap.com/docs/5.0/content/images/) as shown below: 

```
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>

```

- <!---How---> The Bootstrap img-fluid class and rounded image examples were used as a reference to ensure my image is responsive.
- <!---Why---> Bootstrap’s documentation provided a reliable and accessible pattern for responsive images.
- <!---How---> Html into Jsx and src added {} brackets for react support


### About.jsx

*Lines 6 - 14*

```
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <p>
      I am a Computer Science student at Dalhousie University with
      experience in Java, Python, React, Android Studio, Git, and Firebase.
      I enjoy solving real-world problems and building interactive apps.
    </p>
  </div>
</div>

```

The code above was created by adapting the code in [Bootstrap Card component](https://getbootstrap.com/docs/4.0/components/card/) as shown below: 

```
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>

```

- <!---How---> The Bootstrap card component structure like card and card-body was referenced to create a visually clean container in the About page.
- <!---Why---> Using a Bootstrap card allowed me to present my text in a structured.
- <!---How---> Converted the HTML example into JSX for React.


### DarkModeContext.jsx

*Lines 1 - 28*

```
import {createContext} from "react";
import {useState} from  "react";
import {useEffect} from "react";
export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [mode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (err) {
      return "light";
    }
  });
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
    console.log(mode);
  }, [mode]);
  const toggleTheme = () => {
    setDarkMode(prev => (prev === "light" ? "dark" : "light"));
  };
  return (
    <DarkModeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
```

The code above was created by adapting the code in [DarkModeContext, useState, useEffect](https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639)(https://react.dev/reference/react/useEffect)(https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) as shown below: 

```
localStorage.setItem("myCat", "Tom");

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}

import React, {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export {DarkModeContext, DarkModeProvider};

```

- <!---How---> The code in [DarkModeContext, useState, useEffect](https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639)(https://react.dev/reference/react/useEffect)(https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) was implemented by using the code from the links mergering them together to save the theme in local storage.
- <!---Why---> [DarkModeContext, useState, useEffect](https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639)(https://react.dev/reference/react/useEffect)(https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) Code was used because it provided a reliable and accessible pattern for saving the theme in local storage.
- <!---How---> [DarkModeContext, useState, useEffect](https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639)(https://react.dev/reference/react/useEffect)(https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) Code was modified by using the code and mergering them together.

### Home.jsx

*Lines 5 - 23*

```
const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadWeather() {
      try {
        const res = await fetch("http://localhost:5001/weather");
        if (!res.ok){
          throw new Error("Failed to fetch weather");
        } 
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("weather not available");
        console.log(err);
      }
    }
    loadWeather();
  }, []);

```

The code above was created by adapting the code in [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) as shown below: 

```
useEffect(() => {
    const fetchWeatherData = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData(city)
  });

```
- <!---How---> The code in [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) was implemented by getting to know how weather API works and how to use it.
- <!---Why---> [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) Code was used because it provided a reliable and accessible pattern for saving the theme in local storage.
- <!---How---> [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) Code was modified by using the code and mergering them together.

### Home.jsx

*Lines 30 - 42*

```
{error && (
            <div className="alert alert-danger shadow-sm">{error}</div>
          )}

          {weather && (
            <div className="alert alert-info shadow-sm">
              <strong>Weather in {weather.city}:</strong><br />
              Temperature: {weather.temperature}°C<br />
              Humidity: {weather.humidity}%
            </div>
          )}
```

The code above was created by adapting the code in [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/) as shown below: 

```
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>

```
- <!---How---> The code in [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/) was implemented by showing alerts.
- <!---Why---> [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/) Code was used because it provided visual alerts.
- <!---How---> [Alerts](https://getbootstrap.com/docs/4.1/components/alerts/) Code was modified by data fetched from the weather API.

### Home.jsx

*Lines 5 - 23*

```
const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadWeather() {
      try {
        const res = await fetch("http://localhost:5001/weather");
        if (!res.ok){
          throw new Error("Failed to fetch weather");
        } 
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("weather not available");
        console.log(err);
      }
    }
    loadWeather();
  }, []);

```

The code above was created by adapting the code in [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) as shown below: 

```
useEffect(() => {
    const fetchWeatherData = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData(city)
  });

```
- <!---How---> The code in [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) was implemented by getting to know how weather API works and how to use it.
- <!---Why---> [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) Code was used because it provided a reliable and accessible pattern for saving the theme in local storage.
- <!---How---> [How to Build a Weather App in React](https://dev.to/vaatiesther/how-to-build-a-weather-app-in-react-48oj) Code was modified by using the code and mergering them together.

### Skills.jsx

*Lines 19 - 27*

```
 return (
    <div>
      <h2 className="fw-bold mb-4">Skills</h2>
      <input type="text" className="form-control mb-3"
        placeholder="Search skills..." value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex gap-2 mb-3">
        {["Programming", "Frontend", "Backend", "Tools"].map((category) => (
          <button key={category} className={`btn btn-sm ${category === category ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCategory(category)}>{category}</button>
        ))}
        <button className="btn btn-sm btn-secondary" onClick={() => setCategory("")}>Clear</button>
      </div>

      <ul className="list-group">
        {filtered.map((skill, index) => (
          <li key={index} className="list-group-item">
            {skill.name} <span className="text-muted">({skill.category})</span>
          </li>
        ))}
      </ul>
```

The code above was created by adapting the code in [Rendering Lists](https://react.dev/learn/rendering-lists) as shown below: 

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```
- <!---How---> The code in [Rendering Lists](https://react.dev/learn/rendering-lists) was implemented by using the code to filter accordingly.
- <!---Why---> [Rendering Lists](https://react.dev/learn/rendering-lists) Code was used because It provide the basics how to use filter in react.
- <!---How---> [Rendering Lists](https://react.dev/learn/rendering-lists) Code was modified by returning the filtered list instead of filtering in the code itself.

### Skills.jsx

*Lines 19 - 27*

```
 return (
    <div>
      <h2 className="fw-bold mb-4">Skills</h2>
      <input type="text" className="form-control mb-3"
        placeholder="Search skills..." value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex gap-2 mb-3">
        {["Programming", "Frontend", "Backend", "Tools"].map((category) => (
          <button key={category} className={`btn btn-sm ${category === category ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCategory(category)}>{category}</button>
        ))}
        <button className="btn btn-sm btn-secondary" onClick={() => setCategory("")}>Clear</button>
      </div>

      <ul className="list-group">
        {filtered.map((skill, index) => (
          <li key={index} className="list-group-item">
            {skill.name} <span className="text-muted">({skill.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
```

The code above was created by adapting the code in [How to implement search filter functionality in React JS ?, Filter by Category in React](https://www.geeksforgeeks.org/reactjs/how-to-implement-search-filter-functionality-in-reactjs/) (https://medium.com/@adrianqueizan/filter-by-category-in-react-71ce1ea16dc5) as shown below: 

```
import React, { useState } from 'react'
import './App.css';
import { BsSearch } from 'react-icons/bs';

function App() {
    const productList = ["blue pant"
        , "black pant"
        , "blue shirt"
        , "black shoes"
        , "brown shoes"
        , "white pant"
        , "white shoes"
        , "red shirt"
        , "gray pant"
        , "white shirt"
        , "golden shoes"
        , "dark pant"
        , "pink shirt"
        , "yellow pant"];
    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    }
    const mystyle = {
        marginLeft: "600px",
        marginTop: "20px",
        fontWeight: "700"
    };

    return (
        <div>
            <div style={mystyle}>
                <input onChange={e => setSearchVal(e.target.value)}>
                </input>
                <BsSearch onClick={handleSearchClick} />
            </div>
            <div>

                {products.map((product) => {
                    return (
                        <div style={mystyle}>{product}</div>
                    )
                })
                }

            </div>
        </div>
    );
}

export default App;

import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ itemsData }) {

  const [selectedCategory,setselectedCategory]=useState("All")

// Grabbing the value
  function handleAdd(e){
     setselectedCategory(e.target.value)
  }

// Filtering out the array 
  const ItemToFilter = items.filter((value)=>{
    if(selectedCategory==="All"){
      return true
    }else{
      return value.category===selectedCategory
      }
    }
  )

  return (
      <div className="Filter">
        <select name="filter" onChange={handleAdd}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <ul>
     {ItemToFilter.map( item => ( <Item key={item.id} name={item.name} category={item.category} /> ) )}
         </ul> 
      </div>
  );
}

export default ShoppingList;

```
- <!---How---> The code in [How to implement search filter functionality in React JS ?](https://www.geeksforgeeks.org/reactjs/how-to-implement-search-filter-functionality-in-reactjs/) was implemented by using the code to implement search filter functionality in react.
- <!---How---> The code in [Filter by Category in React](https://medium.com/@adrianqueizan/filter-by-category-in-react-71ce1ea16dc5) was implemented by catergory options for pre defined filters.
- <!---Why---> Code was used because it was available how to create search bar and catergory options for pre defined filters.
- <!---How---> Code was modified by adpating to the design pattern of the project and instead of options I used buttons for filter categories.

## Artificial Intelligence Tools Used
N/A
## Acknowledgments
* Bootstrap documentation for layout and components
* Course materials and in-class examples for React fundamentals
