<?php
// Start session to access user data
session_start();

// Include database connection
include 'connect.php';

// Check if the deposit amount is provided
if (isset($_POST['amount']) && isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id']; // Get the logged-in user's ID
    $amount = $_POST['amount'];
    $status = 'Pending'; // Set initial status as "Pending"
    $date = date('Y-m-d H:i:s'); // Current timestamp

    // Insert transaction into the transactions table
    $stmt = $conn->prepare("INSERT INTO transactions (user_id, amount, status, date) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("idss", $userId, $amount, $status, $date);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Deposit initiated successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error initiating deposit."]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>
