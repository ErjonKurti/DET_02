# Data Saving Form  

This project is an interactive form that allows users to save their data into a JSON file using HTML, CSS, JavaScript (AJAX), and PHP.  

## Project Purpose  
- To create a form for collecting user information: **First Name**, **Last Name**, **City**, and **Address**.  
- To ensure all data is accurate through client-side and server-side validation.  
- To store validated data in a JSON file for further use.  

## Key Features  
- **HTML and CSS**:  
  - A modern form with a minimalist design and dark theme.  
  - Interactive fields with visual effects on focus.  
- **Client-Side Validation (JavaScript)**:  
  - Ensures all fields are completed before submission.  
  - Displays error messages next to empty fields.  
  - Sends data to the server via AJAX.  
- **Server-Side Storage (PHP)**:  
  - Validates data on the server to enhance security.  
  - Saves data into a JSON file named `data.json`.  
  - Returns appropriate responses to the client (success or error).  


## How It Works  
1. When the user fills out the form and clicks the **Save** button:  
   - Data validation is performed.  
   - If all fields are filled, the data is sent to the server.  
   - The server saves the data in `data.json` and returns the message: **"Data saved successfully"**.  
2. If any field is empty, the user is notified with clear error messages.  
3. The **Cancel** button clears all fields and notifies the user that the form has been reset.  

## Requirements  
- **PHP Server**: To test the `Save.php` script.  
- **Modern Browser**: To execute JavaScript and display the form.  

## Installation and Usage  
1. Download or clone this repository.  
2. Place the project folder in a local server (e.g., XAMPP, WAMP).  
3. Open `Index.html` in your browser using the local server URL.  
4. Fill out the form and test the functionalities.  

## Additional Features  
- **Server-Side Validation**: Prevents the submission of invalid data.  
- **JSON Storage**: Data is saved in an easy-to-read and process format.  

## Author  
This project is a course assignment to validate and save user data using old web technologies.  

