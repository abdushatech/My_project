<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grade Results</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-center p-10">
  <h1 class="text-3xl font-bold text-green-700 mb-4">Stored Grades</h1>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "itgrades";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("<p class='text-red-500'>Connection failed: " . $conn->connect_error . "</p>");
  }

  $sql = "SELECT course, grade FROM inte;";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    echo "<div class='max-w-xl mx-auto'>";
    while($row = $result->fetch_assoc()) {
      echo "<p class='text-lg text-gray-800 mb-2'>{$row['course']} — <span class='font-semibold'>{$row['grade']}</span></p>";
    }
    echo "</div>";
  } else {
    echo "<p class='text-gray-500'>No grades currently in the system.</p>";
  }

  $conn->close();
  ?>
</body>
</html>
