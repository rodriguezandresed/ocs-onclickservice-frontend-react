const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "http://127.0.0.1:3000",
			token: localStorage.getItem("token") || "",
			endPoints: ["servicios", "proveedores"],
			servicios: [],
			proveedores: []
		},
		actions: {
			handleRegister: async (values) => {
				let store = getStore();
				console.log(values);
				let actions = getActions();
				try {
					const response = await fetch(`${store.URL_BASE}/user`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(values)
					})

					if (response.ok) {

						actions.handleLogin(values)

					}
				}
				catch (error) {
					console.log(error);
				}

			},

			handleLogin: async (login) => {
				let store = getStore();
				const response = await fetch(`${store.URL_BASE}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				})
				let data = await response.json()
				if (response.ok) {

					setStore({
						...store, token: data.token
					});
					localStorage.setItem("token", data.token);

				}
			},

			fetchServicios: async () => {
				let store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/${store.endPoints[0]}`);
					let data = await response.json();
					console.log(data)
					console.log(`${store.URL_BASE}/${store.endPoints[0]}`)

					if (response.ok) {
						setStore({
							...store, servicios: data
						})
					}
				} catch (error) {
					console.log(error)
				}
			},

			handleLogOut: async () => {
				let store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/logout`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					});
					let data = await response.json();
					console.log(data)

					if (response.ok) {
						setStore({
							...store,
							token: ""
						})
						localStorage.removeItem("token")
					}
				} catch (error) {
					console.log(error)
				}
			},

			getCategoria: async (categoria) => {
				let store = getStore();
				try {
					let newCategory = categoria.toLowerCase();
					if (categoria.length != "") {
						let response = await fetch(`${store.URL_BASE}/proveedores/${newCategory}`)
						let data = await response.json();
						console.log(data, "general")
						console.log(newCategory)

						if (response.ok) {
							setStore({
								...store, proveedores: data
							})
						}
					}
					// else {
					// 	let response = await fetch(`${store.URL_BASE}/proveedores/${newCategory}`)
					// 	let data = await response.json();
					// 	console.log(data)

					// 	if (response.ok) {
					// 		setStore({
					// 			...store, proveedores: data
					// 		})
					// 	}
					// }
				}

				catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
