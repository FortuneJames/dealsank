<?php
// for live server
// $servername = "localhost";
// $username = "iwebbtec_db24";
// $password = "Vision@2020";
// $dbname = "iwebbtec_db24";

// for test 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ark";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);

}


?>