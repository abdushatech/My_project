<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Insert Grade</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-blue-50 text-center p-10">
  <h1 class="text-3xl font-bold text-blue-700 mb-4">Insert Grade</h1>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "itgrades";

  $course = "INTE 240";
  $grade = "A";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("<p class='text-red-500'>Connection failed: " . $conn->connect_error . "</p>");
  }

  $sql = "INSERT INTO inte (course, grade) VALUES ('$course', '$grade')";
  if ($conn->query($sql) === TRUE) {
    echo "<p class='text-green-600'>New record inserted successfully!</p>";
  } else {
    echo "<p class='text-red-500'>Error: " . $conn->error . "</p>";
  }

  $conn->close();
  ?>
</body>
</html>
