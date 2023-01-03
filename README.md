# imageProcessorApi
Image Processing API - Udacity Full Stack JavaScript Developer Nanodegree Program project
This project resizes and serves up images based on specified dimensions as needed by a web application.

## Getting started

## Getting Started

    To start using this web application, simply clone this repository. 
    You can start the app locally by downloading the neccessary dependencies for the frontend and start the app using the command "npm start". 
    In addition you have to download the neccessary dependencies for the backend and run the backend .

clone the repository

``` 
    git clone git@github.com:NathyG2524/imageProcessorApi.git
```

### For the backend

```
cd imageProcessor
```

install dependencies

```
npm install
```

Start the dev server 


```
npm run dev
```

The following NPM scripts are provided:
```
lint Runs eslint for code formatting

prettier Runs prettier code formatting

build Converts Typescript into JavaScript code

test Runs build and Jasmine to perform tests

jasmine Run jasmine test

start Runs the application in Node
```
Usage:
The server will listen on port 5000: To use the Image Processor API, send a request to the endpoint with the following query parameters:

filename : The filename of the image file to process as stored under assets

width : The intended width of the image file to be returned

height : The intended height of the image file to be returned

#### Expected query arguments are:
----

filename: Available filenames are: 
```
encenadaport 

fjord

icelandwaterfall 
 
palmtunnel
 
santamonica
```
  
  width: numerical pixel value > 0 height: numerical pixel value > 0

## API Reference


### EndPoints

1. GET /images: gets resize images 
```
http://localhost:5000/api/images?filename=encenadaport.jpg&width=100&height=100
```

### Errors

Error: missing size
```
Error messages: Please specify size
```

Error: invalid height
```
Error messages: Please enter a valid height
```

Error: invalid width
```
Error messages: Please enter a valid width
```

Error: file does not exits
```
Error messages: File does not exists
```

Error: missing filename
```
Error messages: Please enter a filename
```