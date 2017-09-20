function init(){
  //add function to compare button
  $("#compareButton").click(function(){compareAllFiles()});
  //add event listener to file listener
  document.getElementById('files').addEventListener('change', handleFilesSelect, false);
}

function handleFilesSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li class="w3-display-container"> ',
                escape(f.name),
                '<span onclick="this.parentElement.style.display=',
                '\'none\'',
                '" class="w3-button w3-transparent w3-display-right">&times;</span>',
                '</li>'
              );
  }
  document.getElementById('list').innerHTML = '<ul class="w3-ul w3-card-4">' + output.join('') + '</ul>';
}

function compareAllFiles(orgFile, altFile, callback){
  for(i=0; i<document.getElementById("files").files.length; i++){
    //create DOM elements
    var pre = "<div id='diff" + i + "' class='w3-container'>";
    var end = document.getElementById("files").files[i].name + "</div>";
    $("#content").append(pre+end);
    //call bives with orgFile and altFile

        var altFile = document.getElementById("files").files[i];
        var altFileResult;
        //console.log(altFile);

        //You could insert a check here to ensure proper file type

    for(j=i+1; j < document.getElementById("files").files.length; j++){
      var read = new FileReader();
      read.readAsText(altFile);
      read.onloadend = function(){
          console.log(read.result);


        readFile(orgFile, altFile, function(e) {
                //manipulate with result...
                $('#content').text(e.target.result);
                addDiffElement(e.target.result)
        });

      };
    }

  }
}

function addDiffElement(altFile, orgFile, id){
  $("#content").append("<p>diff -" + altFileResult + " -- " + read.result + "</p>")
}


function readFile(file, callback){
    var reader = new FileReader();
    reader.onload = callback;
    reader.readAsText(file);
}


//Info-Content
function getBivesData(v1, v2, command){
	var data;
	//console.log(v1.url, v2.url);

	var bivesJob = {
		files:
		[
			v1,
			v2
		],
		commands:
			command
	};


	// call the bives wrapper script
	$.post (
		"bives/bives.php",
		"bivesJob=" + JSON.stringify (bivesJob),
		function (data)
		{
			//obj = showSbgn(JSON.parse(data).reactionsSbgnJson);
			console.log(obj);
			$("#bivesReport").html ($.parseJSON (data).reportHtml);
			var sbgnJson = $.parseJSON (data).reactionsSbgnJson;
		}
	);
}
