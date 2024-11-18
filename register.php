<?php
session_start();
include 'connect.php';

if (isset($_POST['signUp'])) {
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);  // Hash the password for security

    // Check if the email already exists
    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($checkEmail);
    if ($result->num_rows > 0) {
        echo "Email Address Already Exists!";
    } else {
        // Insert new user into the database
        $insertQuery = "INSERT INTO users (username, email, password) VALUES ('$firstName', '$email', '$password')";
        if ($conn->query($insertQuery) === TRUE) {
            // Set session variables
            $_SESSION['first_name'] = $firstName;
            $_SESSION['last_name'] = $lastName;
            header("Location: profile.html");  // Redirect to profile page
            exit();
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

if (isset($_POST['signIn'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    // Query to check if the email and password match
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Set session variables with user info
        $_SESSION['first_name'] = $row['firstName'];
        $_SESSION['last_name'] = $row['lastName'];
        $_SESSION['email'] = $row['email'];
        
        header("Location: profile.html");  // Redirect to profile page
        exit();
    } else {
        echo "Not Found, Incorrect Email or Password";
    }
}
?>
