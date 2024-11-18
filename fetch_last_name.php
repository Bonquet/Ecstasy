<?php
session_start();

if (isset($_SESSION['last_name'])) {
    echo json_encode(['last_name' => $_SESSION['last_name']]);
} else {
    http_response_code(401); // Unauthorized
    echo json_encode(['error' => 'User not logged in']);
}
?>
