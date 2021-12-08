import * as scan from '../src/core/urlScanner'

const sut = new scan.UrlScanner();


describe('URL Scanner should', () => {
  test.each([
    
    ['Visit photo hosting sites such as www.flickr.com, 500px.com, www.freeimagehosting.net and \
    https://postimage.io, and upload these two image files, picture.dog.png and picture.cat.jpeg, \
    there. After that share their links at https://www.facebook.com/ and http://🍕.ws', 
    ["http://www.flickr.com","http://500px.com","http://www.freeimagehosting.net",
     "https://postimage.io","https://www.facebook.com/","http://🍕.ws"]
    ]

  ])('pass acceptance test', (input, expected) => {
    expect(sut.scan(input)).toEqual(expected);
  });

  test.each([
    ['- which requires a resource scheme such as http:// or https:// in the beginning of the link.', 
      'https://secure.example.com  unsecure.example.com', 
      ['https://secure.example.com', 'http://unsecure.example.com']],
    ['- Pay attention that web links may be long,', 
      'http://mw1.google.com/mw-earth-vectordb/kml-samples/gp/seattle/gigapxl/$[level]/r$[y]_c$[x].jpg', 
      ['http://mw1.google.com/mw-earth-vectordb/kml-samples/gp/seattle/gigapxl/$[level]/r$[y]_c$[x].jpg']
    ], 
    ['- links may contain Unicode characters and other parameters.', 
      'https://www.google.com/search?q=La+Gente+Está+Muy+Loca', 
      ['https://www.google.com/search?q=La+Gente+Está+Muy+Loca']]
  ])('return normalized links that should be compliant with RFC: %s', (requirement, input, expected) => {
    expect(sut.scan(input)).toEqual(expected);
  });

  test.each([
    ['blank string given', ''],
    ['no links of any kind given', 'just some text'],
    ['broken links provided', 'htt p://broken- example. com'],
    ['punny coded domains', 'nic.xn--unup4y'],
    ['invalid top level domain provided (full list here: https://data.iana.org/TLD/tlds-alpha-by-domain.txt)', 'not-a-web-link.gif'],
  ])('return empty array when %s', (requirement, input) => {
    expect(sut.scan(input)).toEqual([]);
  });

  test.each([
    
    ['emoji ', '😀😃😄😁😆😅🤣.com', ['http://😀😃😄😁😆😅🤣.com']],
    ['non-latin characters',  'Дети.Дети http://nic.游戏', ['http://Дети.Дети', 'http://nic.游戏']],
    
  ])('return links with %s', (requirement, input, expected) => {
    expect(sut.scan(input)).toEqual(expected);
  });
  
});