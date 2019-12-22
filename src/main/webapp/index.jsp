<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CreditCard-Home Page</title>
</head>
<body bgcolor="cyan">

	
	<form method="POST" action="checkEligibility">
		<label for="panNo">Enter PAN Number</label> <input type="text" id="panNo" name="panNo"
		required pattern="[a-zA-Z0-9]{10}" title="10 character alpha numeric"></input><br><br>	
		<button id="submit" name="submit" type="submit">Check</button>
	</form>
</body>
</html>