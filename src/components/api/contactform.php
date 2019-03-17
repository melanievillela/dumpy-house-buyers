<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if (empty($firstName) || empty($lastName) || empty($address) || empty($city) || empty($state) || empty($zip) || empty($phone) || empty($email) die();

if ($_POST)
	{
	http_response_code(200);
	$subject = "Home Consultation Request";
	$to = "melaniemedel@att.net";
    $message = "You have received an email from ".$email.".\n\n".$firstName." ".$lastName."\n"."Address: ".$address." ".$city.", ".$state." ".$zip."\n"."Phone: ".$phone."\n"."Email: ".$email."\n";

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $email . ">";
    mail($to, $subject, $message, $headers);
    
    echojson_encode(array (
		"sent" => true
    ));
	}
else
    {
    echojson_encode(["sent" => false, "message" => "Something went wrong. Please try again. If this error persists please call us at 123-456-7890"]);
    }
?>