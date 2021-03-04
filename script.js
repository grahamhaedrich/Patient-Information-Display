window.onload = function() {

const obj = {
	resourceType: "Patient",
	id: "xcda",
	text: {
		status: "generated",
		div: "<div><br/><br/><p>Henry Levin the 7th</p><br/><br/></div>"
	},
	identifier: [{
	  system: "urn:oid:2.16.840.1.113883.19.5",
		value: "12345"
	}],
	use: "usual",
	type: {
		coding: [{
			system: "http://hl7.org/fhir/v2/0203",
			code: "MR"
		}]
	},
  active: true,
	name: [{
		family: "Levin",
		given: "Henry"
	}],
	gender: "m",
	birthDate: "2002-09-24",
	managingOrganization: {
		reference: "Organization/2.16.840.1.113883.19.5",
		display: "University Health Network"
	},
	conditions: [
		"Diabetes",
		"High blood pressure",
		"Asthma"
	]
}

console.log(obj.conditions);
document.getElementById("name").innerHTML = obj.name[0].given + " " + obj.name[0].family;
document.getElementById("org_name").innerHTML = obj.managingOrganization.display;
document.getElementById("gender").innerHTML = obj.gender;
document.getElementById("num_cond").innerHTML = obj.conditions.length;
document.getElementById("list_cond").innerHTML = obj.conditions.join(", ");
}
