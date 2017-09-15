function init(){
  $("#compareButton").click(function(){alert("compare!")});

  //add event listener to file listener
  document.getElementById('files').addEventListener('change', handleFilesSelect, false);
  document.getElementById('orgFile').addEventListener('change', handleFileSelect, false);

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
  document.getElementById('orgFileList').innerHTML = '<ul class="w3-ul w3-card-4">' + output.join('') + '</ul>';
}

function handleFileSelect(evt) {
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
