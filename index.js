var request = new XMLHttpRequest();
var output = '';
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function() {
  if ((request.status==200) && (request.readyState==4)) {
    data_json = JSON.parse(request.response);
    var movieDataArrays = data_json.data;
    for (var i = 0; i < movieDataArrays.length; i++) {
      if (data_json.data[i][10] == "Golden Gate Bridge") {
        output += "<b>Movie Title:</b> " + data_json.data[i][8] + "<br><b>Release Year: </b> " + data_json.data[i][9] + "<br><b>Production Company:</b> " + data_json.data[i][12] + "<br><br>";
      }
    }
    }
    document.getElementById("result").innerHTML += output
  }

request.send();
