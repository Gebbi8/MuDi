<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script type="text/javascript" src="JS/jquery.js"></script>
<script type="text/javascript" src="JS/init.js"></script>

<body>

<header class="w3-container w3-teal">
  <h1>MuDi -  Multiple Diff</h1>
</header>



<div class="w3-row-padding w3-section">
  <div class="w3-quarter">
      <div class="w3-container">
        Original Model:
        <input id="orgFile" type="file" name="orgFile"><br>
        <output id="orgFileList"></output>

        Comparison List:
        <input id="files" type="file" name="newFiles" multiple><br>
        <output id="list"></output>
      </div>
      
      <div class="w3-container">
        <input id="compareButton" type="button" class="w3-button w3-teal" value="Compare!">
      </div>
  </div>

  <div class="w3-threequarter">
      <div class="w3-container">
        <p>Choose and submit the origanl file!</p>
      </div>
  </div>

</div>

<footer class="w3-container w3-teal">
  <h5>Footer</h5>
  <p>Footer information goes here</p>
</footer>
<script type="text/javascript">
    $(document).ready(function () {init ();});
</script>
</body>
</html>
