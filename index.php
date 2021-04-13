<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>XSS Test</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<?php
  error_reporting(0);
?>

<div class="container">
  <form name="test" action="">
    <h3>Hello 
      <span>
        <?php
          $parsedWord = $_GET['word'];
          $initialWord = "World";
          if ($parsedWord!="") {
            echo $parsedWord;
          } else {
            $initialWord = "World";
            echo $initialWord;
          }?></span>!
      </h3>
    <input type="text" name="word">
    <input class="submit" type="submit" name="submit">
  </form>

  <div class="nav">
    <button id="getBtn">Get</button>
    <button id="postBtn">Post</button>
  </div>

  <div class="output"></div>
</div>

<?php
  
  // if ($parsedWord) {
  //   $initialWord = $parsedWord;
  // }
?>

<!--<script src="js/app.js"></script>-->
<script src="js/script.js"></script>
</body>
</html>