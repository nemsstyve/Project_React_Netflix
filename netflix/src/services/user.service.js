/* eslint-disable import/no-anonymous-default-export */
const apiUrl = "http://localhost:3003";
export default {
    register(payload) {
		return fetch(`${apiUrl}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then((res) => res.json());
	},
    login(payload) {
		return fetch(`${apiUrl}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then(res=>res.json())
	},
    getMe(jwt) {
        return fetch(`${apiUrl}/users`, {
			method: "GET",
			headers: {
				"Content-Type": "Application/json",
                "Authorization": `Bearer ${jwt}`,
			},
		}).then((res)=>res.json())
    }
};