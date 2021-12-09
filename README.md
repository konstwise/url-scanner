# url-scanner
Docker engine must be installed to build, test and run the service. 
First of all, clone the repository or unpack a zipped one to a local folder.

## Build and Run Service as Docker Container

#### To build a docker image of the service launch this command from the folder with the sources:
    ````docker build -t konstwise/url-scanner:latest . --no-cache````

#### To run the image that has been built launch this command from the shell:
    ````docker run -it -p 3000:3000 konstwise/url-scanner:latest````

## Tests

Unit tests are implemented using Jest framework and running while building a docker image.
For details, please take a look here: **[Url Scanner tests](tests/)**.

## Send Requests Using cURL

### Unicode and Mixed Case Example
    curl --request POST \
    --url http://localhost:3000/scan-urls \
    --header 'accept: application/json' \
    --header 'content-type: text/plain' \
    --data 'valid-PunnyCode-domain.Дети invalid-non-Latin.аааааааааа MiXedCase.CoM'

### Example from Assignment Document
    curl --request POST \
    --url http://localhost:3000/scan-urls \
    --header 'accept: application/json' \
    --header 'content-type: text/plain' \
    --data 'Visit photo hosting sites such as www.flickr.com, 500px.com, www.freeimagehosting.net andhttps://postimage.io, and upload these two image files, picture.dog.png and picture.cat.jpeg,there. After that share their links at https://www.facebook.com/ and http://🍕.ws'
