// var databaseRef = firebase.database().ref().child('message');

// databaseRef.on('value', function(snapshot) {
// 	document.getElementById('heading').innnerText = snapshot.val();
// });

//adding data to the database.
function addNewEvent() {
	
	//storing inputs into variables.
	var eventName = document.getElementById('eventName');
	var studentBody = document.getElementById('studentBody');
	var date = document.getElementById('date');
	var fee = document.getElementById('fee');
	var contactPerson = document.getElementById('contactPerson');
	var contact = document.getElementById('contact');
	var location = document.getElementById('location');
	var eventDesc = document.getElementById('eventDesc');
	var reward = document.getElementById('reward');

	//getting a database service reference.
	var dbRef = firebase.database();

	dbRef.ref('events/' + eventName.value).set({
		name: eventName.value,
		studentBody: studentBody.value,
		date: date.value,
		fee: fee.value,
		contactPerson: contactPerson.value,
		contact: contact.value,
		location: location.value,
		desc: eventDesc.value,
		reward: reward.value,
		isApproved: false,
		votes: 0
	});
}