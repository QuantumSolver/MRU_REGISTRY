
// import fs from 'fs';
import dotenv from 'dotenv/config';
import https from 'https';

let OE_HOST = process.env.OE_HOST
console.log(OE_HOST)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

import fetch from 'node-fetch'


	// 	const requestOptions = {
	// 	   agent: httpsAgent,
	// 	   method: 'GET', 
	// 		headers: {
	// 		  'Content-Type': 'application/json',
	// 		  Authorization: 'Basic enl4OjQzNjM3NDhLaW5n'
	// 		},
	// 	   body: JSON.stringify(d)
	//    };


 async function getCsrf(){	  
	
	let request = await fetch(`https://dev.npes.ml/OpenELIS-Global/LoginPage`,{  agent: httpsAgent})
	let csrf =  (await request.text()).split('csrf" value="')[1].split('"')[0] 
	let jsessionid =  String(request.headers.get('set-cookie')).split(';')[0]
	const form = new URLSearchParams({
		"loginName":"admin",
		"password":"adminADMIN!",
		"_csrf":`${csrf}`
	});
	// form.append("loginName", "marc");
	// form.append("password", "4363748King!");
	// form.append("_csrf", `${csrf}`);

		
	const options = {
		agent: httpsAgent,
		method: 'POST',
		headers: {
		cookie: `${jsessionid}`,
		'Content-Type': 'application/x-www-form-urlencoded'
		},
		redirect: 'manual'
		
	};
	options.body = form;
	let authenticate = await fetch(`https://dev.npes.ml/OpenELIS-Global/ValidateLogin`,options)
	let koekie = String(authenticate.headers.get('set-cookie')).split(';')[0]
	if(koekie){
		 let getauthedCsrf = await fetch(`https://dev.npes.ml/OpenELIS-Global/Home`, {  agent: httpsAgent, method: 'GET', headers: {
		 cookie: `${koekie}`}
		})

		let newCSRF =  (await getauthedCsrf.text()).split('csrf" value="')[1].split('"')[0] 
		console.log(koekie,newCSRF)
	}


}

getCsrf()