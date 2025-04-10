<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IT Grades Setup</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-center p-10">
  <h1 class="text-4xl font-bold text-blue-600 mb-4">Database Setup</h1>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "";

  // Create connection
  $conn = new mysqli($servername, $username, $password);
  if ($conn->connect_error) {
    die("<p class='text-red-500'>Connection failed: " . $conn->connect_error . "</p>");
  }

  // Step 1: Drop database if it exists
  $sql = "DROP DATABASE IF EXISTS itgrades;";
  if ($conn->query($sql) === TRUE) {
    echo "<p class='text-green-600'>Step 1: Database deleted successfully</p>";
  } else {
    echo "<p class='text-red-500'>Error deleting database: " . $conn->error . "</p>";
  }

  // Step 2: Create new database
  $sql = "CREATE DATABASE itgrades;";
  if ($conn->query($sql) === TRUE) {
    echo "<p class='text-green-600'>Step 2: itgrades created successfully</p>";
  } else {
    echo "<p class='text-red-500'>Error creating database: " . $conn->error . "</p>";
  }

  // Step 3: Create table
  $sql = "CREATE TABLE itgrades.inte (
    id INT NOT NULL AUTO_INCREMENT,
    course VARCHAR(25) NOT NULL,
    grade VARCHAR(3) NOT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB;";
  if ($conn->query($sql) === TRUE) {
    echo "<p class='text-green-600'>Step 3: Table inte created successfully</p>";
  } else {
    echo "<p class='text-red-500'>Error creating table: " . $conn->error . "</p>";
  }

  $conn->close();
  ?>
</body>
</html>
