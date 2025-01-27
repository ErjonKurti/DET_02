<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $firstName = trim($data['firstName'] ?? '');
    $lastName = trim($data['lastName'] ?? '');
    $city = trim($data['city'] ?? '');
    $address = trim($data['address'] ?? '');

    if (empty($firstName) || empty($lastName) || empty($city) || empty($address)) {
        echo json_encode(['status' => 'error', 'message' => 'Te gjitha fushat jane te detyrueshme.']);
        exit;
    }

    $entry = [
        'firstName' => $firstName,
        'lastName' => $lastName,
        'city' => $city,
        'address' => $address,
        'timestamp' => date('Y-m-d H:i:s')
    ];

    $filePath = 'data.json';

    if (file_exists($filePath)) {
        $existingData = json_decode(file_get_contents($filePath), true);
    } else {
        $existingData = [];
    }

    // Append new entry
    $existingData[] = $entry;

    // Save data back to the file
    if (file_put_contents($filePath, json_encode($existingData, JSON_PRETTY_PRINT))) {
        echo json_encode(['status' => 'success', 'message' => 'Te dhenat u ruajten me sukses.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Gabim gjate ruajtjes se te dhenave.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Kerkese e pavlefshme.']);
}
?>
