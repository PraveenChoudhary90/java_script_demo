// setItem function
localStorage.setItem("name","praveen");
localStorage.setItem("name","pradum");// same key nhi hona chihiye otherwise value override ho jati hai
localStorage.setItem("sername","choudhary");
localStorage.setItem("dost","rohit");
localStorage.setItem("cgpa",8.4);
localStorage.setItem("college","truba");
localStorage.setItem("univercity","rgpv");


// getItem functin
let name = localStorage.getItem("name");
console.log(name);

// removeItem function
localStorage.removeItem("dost");

// clearItem function
//localStorage.clear();