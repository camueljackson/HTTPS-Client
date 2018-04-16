function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    var buffedData = '';
    for ( var i = 0; i < data.length; i++) {
      buffedData += data[i];
    }

    callback(buffedData);

  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

function printHTML (html) {
  console.log(html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)

// *****************






