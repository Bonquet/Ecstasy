<?php
// connect.php - Connection to the database (included here for reference)
// include 'connect.php';

$conn = new mysqli('localhost', 'root', '', 'coinwave');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch transactions for a specific user (replace 'user_id' with actual client ID logic)
$userId = $_SESSION['user_id']; // Assuming you're using sessions to track logged-in users
$sql = "SELECT transaction_id, amount, status, date FROM transactions WHERE user_id = '$userId'";
$result = $conn->query($sql);

$transactions = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $transactions[] = $row;
    }
}

// Return the data in JSON format for use in JavaScript
echo json_encode($transactions);
?>
