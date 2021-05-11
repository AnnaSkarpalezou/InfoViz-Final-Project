# InfoViz-Final-Project

[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/maps.jpeg" alt="Logo" width="300" height="180">
  </a>

  <h3 align="center">Data Visualization using React and D3</h3>

  <p align="center">
    Visualizing Airbnb listings of Chinese cities
    <br />
    <a href=https://github.com/AnnaSkarpalezou/Portfolio-Optimization-using-Machine-Learning><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Visualization and Interaction</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Welcome to the Airbnb Dataset Exploratory Analysis! We hope to understand the Airbnb rental environment in China through an exploratory review of the Airbnb datasets in this research. We attempt to answer the following questions using static and dynamic visualizations:

* How do listing price rates differ from neighborhood to neighbourhood?
* How does the popularity of listings on Airbnb by neighbourhood change over the year?
* What are the various categories of properties in China? Can they differ depending on where you live?
* Which neighbourhoods offer the highest number of available airbnb listings?
* How does Shanghai Compare to Beijing?

Airbnb is a digital platform through which users can organize and deliver hospitality and tourism experiences. This hospitality service can be accessed via their website or smartphone applications. The aim of this visualisation project was to analyze and estimate the most common rental neighbourhoods in Shanghai, as well as how much it would on average cost for someone were considering a trip here. We are also exploring the popularity of each neighbourhood throughout the year, as well as offering some aggregate statistics by neighbourhood.
The visualizations we created are intended to assist users in exploring common neighbourhoods based on their preferences if they wanted to book a trip and ride around or transit around Shanghai or Beijing. Our data and visualizations are mainly aimed at travelers looking for low-cost accommodations during the best time in the year. People looking for a cheap place to stay for a single night or a place to host a small gathering/event are among our secondary community.
The cover page and visualization without selection look as follows:


![alt text](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/cover.jpeg)

![alt text](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/shanghai.jpeg)

![alt text](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/beijing.jpeg)

### Built With
* Javascript
* HTML
* CSS
* React
* D3
* Python

<!-- GETTING STARTED -->
## Getting Started

The data can be accessed through the [Airbnb Open Data Sources](http://insideairbnb.com/get-the-data.html) page. We utilized 3 types of files for each of the cities, making for a total of 6 files used: 
- Listings.csv contains basic information about the listings
- Neighborhoods.geojson is a GeoJSON file of neighborhoods of the city, a map of Shanghai separated into districts in both English and Chinese. 
- Reviews.csv contains the date when each listing was reviewed and the listing_id
- 
We utilised the price and neighbourhood information, grouping the listings together by neighbourhood to visualize the average price distribution across on a bar chart. We used the reviews_per_month as an estimate of popularity for each listing, which were later to be grouped together by neighbourhood and used in the area popularity chart. From Reviews.csv we will count the occurrences of a listing_id within a month (as gathered from the date), to gaze at the popularity and availability of a listing for each month. 
	Since we wanted to get aggregate statistics by neighborhood to show on our tooltip, we decided to do some data preprocessing and munging in python. We mainly used the library pandas, using the function group_by to get by neighbourhood info. We then used the .mean(), .max(), .min() and .count() functions to get the average, maximum and minimum price of listings per neighbourhood, the number of each type of listings (Entire home/apartments, Private rooms, Shared rooms) per neighbourhood and the average number of reviews per neighbourhood per month. The relevant code can be found on data_munging.ipynb.


<!-- USAGE EXAMPLES -->
## Visualization and Interaction

Our app is split into two main components, the cover page and the visualizations of the data. The cover page introduces the main objectives we hope to convey through our visualizations. Initially the page is solely the cover page, to navigate to the visualizations there is a dropdown UI widget that allows the user to choose among the cities for which visualisations are available, filtering the dataset used. For each city there are 3 main views, a choropleth map, a barchart and a time series.	
The map's interaction is simple and intuitive, using the channel of saturation to differentiate the sections of airbnb listings. Users can hover over each of the respective city's neighbourhoods to see a toolbar with the name of the neighbourhood as well as a tooltip with aggregate statistics for that neighbourhood, which follows the cursor. The selected neighbourhood is distinguished by its changed color.
Interactions with the bar graph allow the user to to select a neighbourhood, which changes color upon selection. Both the choropleth map and bar graph views are coordinated with linked highlighting bidirectionally, with a hover over a neighbourhood in the barchart triggering the same neighbourhood on the map and vice versa. A tooltip also appears, which does not follow the cursor as not to cover the information dense bar chart. 
Lastly, an area map appears upon the selection of a neighbourhood either through the map or the barchart. This is unidirectionally linked to the other views. The three views with selection for each city are as follows:


![alt text](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/shanghai.select.jpeg)

![alt text](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project/blob/main/screenshots/beijing.select.jpeg)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

Project Link: [https://github.com/AnnaSkarpalezou/InfoViz-Final-Project](https://github.com/AnnaSkarpalezou/InfoViz-Final-Project)

## Team Members

|Name     |  Handle   | 
|---------|-----------------|
|[Anna Skarpalezou](https://github.com/AnnaSkarpalezou)| @annaskarpalezou       |
|[Andrew Liu](https://github.com/NotLiu)| @NotLiu        |
|[Brandon Eap](https://github.com/brandeap) |     @brandeap  |

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/MIT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png






