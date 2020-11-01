const divCal = document.querySelector("#calendardata");
const divApp = document.querySelector("#applicationsData");
const divErr = document.querySelector("#divErr");
divCal.textContent = "Calendar Loading...";

function populateCalendar(apps) {
	for (let a of apps) {
		const liP = document.createElement("li");
		liP.innerHTML = `${a.Stage} <br>${a.Company} <br>${a.Date}`;
		divCal.appendChild(liP);
	}
}

function populateApplications(apps) {
	for (let a of apps) {
		const liP = document.createElement("li");
		liP.innerHTML = `Applied at <strong>${a.Company}</strong> on <em>${a.DateApplied}</em>
						 <ul>
							 <li><strong>Role:</strong> ${a.Role}</li>
							 <li><strong>Type:</strong> ${a.Type}</li>
							 <li><strong>Recruiter Contact:</strong> ${a.RecruiterInfo}</li>
							 <li><strong>Stage:</strong> ${a.Stage}</li>
							 <li><strong>Next Due:</strong> ${a.StageDate}</li>
							 <li><strong>Job Description:</strong> ${a.JobDescription}</li>
						 </ul>`;
		divApp.appendChild(liP);
	}
}




fetch("/calendar")
	.then((res) => res.json())
	.then(populateCalendar)
	.catch((err) => {
		divErr.textContent = err.message;
	});

fetch("/applications")
	.then((res) => res.json())
	.then(populateApplications)
	.catch((err) => {
		divErr.textContent = err.message;
	});
	
// const convertStampDate = (unixtimestamp) => {
// 	// Unixtimestamp
// 	// Months array
// 	var months_arr = [ "January", "February","March","April","May","June","July","August","September","October","November","December"];
// 	// Convert timestamp to milliseconds
// 	var date = new Date(unixtimestamp*1000);
// 	// Year
// 	var year = date.getFullYear();
// 	// Month
// 	var month = months_arr[date.getMonth()];
// 	// Day
// 	var day = date.getDate();
// 	// Hours
// 	var hours = date.getHours();
// 	// Minutes
// 	var minutes = "0" + date.getMinutes();
// 	// Seconds
// 	var seconds = "0" + date.getSeconds();
// 	// Display date time in MM-dd-yyyy h:m:s format
// 	var fulldate = month+" "+day+"-"+year+" "+hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
// 	// filtered date
// 	var convdataTime = month+" "+day;
// 	return convdataTime;
// }