const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://3000-rafmanrique-onclickserv-ey3qa4jq8w1.ws-us45.gitpod.io",
			token: localStorage.getItem("token") || "",
			endPoints: [],
		},
		actions: {
			handleRegister: async (register) => {
				let store = getStore();
				const response = await fetch (`${store.URL_BASE}/user`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(register)
				})
				let data = await response.json()
				
				if (response.ok){
					
					setStore({
						...store,token:data.token
					})
					localStorage.setItem("token",data.token)

					return true;
				}

				return false;
			}
		}
	};
};

export default getState;
