# url-scanner

## Send Requests Using cURL

### Unicode and Mixed Case Example
    curl --request POST \
    --url http://localhost:3000/scan-urls \
    --header 'accept: application/json' \
    --header 'content-type: text/plain' \
    --header 'user-agent: vscode-restclient' \
    --data 'valid-PunnyCode-domain.Детиinvalid-non-Latin.ааааааааааMiXedCase.CoM'

### Example from Assignment Document
    curl --request POST \
    --url http://localhost:3000/scan-urls \
    --header 'accept: application/json' \
    --header 'content-type: text/plain' \
    --header 'user-agent: vscode-restclient' \
    --data 'Visit photo hosting sites such as www.flickr.com, 500px.com, www.freeimagehosting.net andhttps://postimage.io, and upload these two image files, picture.dog.png and picture.cat.jpeg,there. After that share their links at https://www.facebook.com/ and http://🍕.ws'
