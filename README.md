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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
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

The relevant project schematic follows
![alt text](https://github.com/AnnaSkarpalezou/Portfolio-Optimization-using-Machine-Learning/blob/main/Pictures/Model%20Architecture-2.jpeg)

### Built With

This section should list all the main packages used in the project 
* pandas
* numpy
* matplotlib.pyplot 
* seaborn
* sklearn
* os
* torch
* keras
* SciPy

### Methods Used
* Principal Component Analysis
* Autoencoders
* Muliple Linear Regression
* Reccurrent Neural Networks (LSTM)
* Optimisation

### Technologies
* Javascript
* HTML
* CSS
* React
* D3
* Python

<!-- GETTING STARTED -->
## Getting Started

The data set used in this project can be accessed and imported directly into each model, from google drive. It is available to the entirety of the NYU network, however not publicly available as the information is of sensitive. The data preprocessing for each model is done in its respective jupyter notebook. The suggested order to view the jupyter notebooks begins with moving_average+linear_regression, then PCA+LSTM and lastly Optimization. 

### Prerequisites

- [PyTorch](https://pytorch.org/) (An open source deep learning platform) 


<!-- USAGE EXAMPLES -->
## Usage

Each of the models in the models folder, can be used to predict futute stock prices. The dataset expected is a 2d dataframe, with dates as rows and different metrics for stocks in columns. The Portfolio Optimizer file, when fed predicted prices will output the weights for a portfolio of maximised returns over risk (sharpe ratio), sparcified through the l1 Lasso loss function.

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






