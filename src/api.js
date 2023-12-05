import axios from 'axios'

let apiURL = 'http://localhost:8888'    // FOR REQUESTS TO THE JSON SERVER

const ax = axios.create({
    baseURL: apiURL
});
console.log("REQUESTS ARE BEING SENT TO: " + apiURL);

export function getAllUsers(){
    return ax.get("users/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All Users:" + error));
}

export function getAllRoles() {
    return ax.get("roles/").then(resp => (resp.data)).catch((error) => errorHandler("Error Getting All Roles:" + error));
}

export function getUserById(id){
    return ax.get("users/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting User By Id:" + error));
}

export function updateUser(user){
    return ax.put("users/" + user.id, user).catch((error) => errorHandler("Error Updating User:" + error));
}

export function insertUser(user){
    return ax.post("users/", user).catch((error) => errorHandler("Error Inserting User:" + error));
}


// TENANT METHOD
export function getAllTenant(){
    return ax.get("tenant/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All Tenant:" + error));
}

export function getTenantById(id){
    return ax.get("Tenant/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Tenant By Id:" + error));
}

export function updateTenant(Tenant){
    return ax.put("Tenant/" + Tenant.id, Tenant).catch((error) => errorHandler("Error Updating Tenant:" + error));
}

export function insertTenant(Tenant){
    return ax.post("Tenant/", Tenant).catch((error) => errorHandler("Error Inserting Tenant:" + error));
}

export function login(email, password) {
    return ax.get(`users/?email=${email}&password=${password}`).then(resp => {
		if(resp.data.length == 1){
			return resp.data[0] // we want to get the first, and hopefully only, user from the resp.data array
		}else{
			return null
		}
	}).catch((error) => errorHandler(error));
}


// LANDLORD METHOD
export function getAllLandlord(){
    return ax.get("Landlord/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All Landlord:" + error));
}


export function getLandlordById(id){
    return ax.get("Landlord/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Landlord By Id:" + error));
}

export function updateLandlord(Landlord){
    return ax.put("Landlord/" + Landlord.id, Landlord).catch((error) => errorHandler("Error Updating Landlord:" + error));
}

export function insertLandlord(Landlord){
    return ax.post("Landlord/", Landlord).catch((error) => errorHandler("Error Inserting Landlord:" + error));
}


// PROPERTY METHOD
export function getAllProperty(){
    return ax.get("Property/").then(resp => (resp.data)).catch(error => errorHandler("Error Getting All Property:" + error));
}

export function getPropertyById(id){
    return ax.get("Property/" + id).then(resp => (resp.data)).catch((error) => errorHandler("Error Getting Property By Id:" + error));
}

export function updateProperty(Property){
    return ax.put("Property/" + Property.id, Property).catch((error) => errorHandler("Error Updating Property:" + error));
}

export function insertProperty(Property){
    return ax.post("Property/", Property).catch((error) => errorHandler("Error Inserting Property:" + error));
}

function errorHandler(msg){
    console.log("API ERROR", msg);
    throw new Error(msg); // because we throw an error here, we can catch it in our components.
}

