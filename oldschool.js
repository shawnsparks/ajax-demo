function changeState(targetElement) {
	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		document.getElementById(targetElement).innerHTML = xmlHttp.responseText;
	}
}

function getXmlHttpObject() {
	var xmlHttp = null;
	try {
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e) {
		// Internet Explorer
		try {
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function linkId(link) {
	window.location = link + "?id=" + document.getElementById("idSelect").value;
}

function sendXmlHttpRequest(targetURL, targetElement) {
	xmlHttp = getXmlHttpObject();

	if (xmlHttp == null) {
		alert ("Browser does not support HTTP Request");
		return;
	}
	
	//Send request
	xmlHttp.onreadystatechange = function() {changeState(targetElement);};
	xmlHttp.open("GET", targetURL);
	xmlHttp.send(false);
}