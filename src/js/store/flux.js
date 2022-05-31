const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "http://127.0.0.1:3000",
			token: localStorage.getItem("token") || "",
			endPoints: ["servicios", "proveedores"],
			servicios: [],
			proveedores: [],
			usuario: [],
			detalles: [],
			pedidos: [],
			contratos: [],
			blackbox:[]
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
				let actions = getActions();
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

					actions.handleGetPedidos();
					actions.handleGetContratos();

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
						localStorage.removeItem("token");
						
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
			},

			getDetalles: async (proveedor) => {
				let store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/user/${proveedor}`)
					let data = await response.json();
					console.log(data, "soy el detalle");

					if (response.ok) {
						setStore({
							...store, detalles: data
						})
					}

				}
				catch (error) {
					console.log(error)
				}

			},

			getProfile: async () => {
				let actions = getActions()
				let store = getStore();
				actions.handleGetPedidos();
				actions.handleGetContratos();
				try {
					const response = await fetch(`${store.URL_BASE}/profile`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify()
					})
					let data = await response.json()
					
					if (response.ok) {

						setStore({
							...store, usuario: data
						})
					
					}
				}

				catch (error) {
					console.log(error)
				};

			},

			handleGetPedidos: async () => {
				let store = getStore();
				const response = await fetch("http://127.0.0.1:3000/pedidos_pendientes", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.token}`
					}
				})
				let data = await response.json()
				

				if (response.ok) {
					setStore({
						...store, pedidos: data
					});
					localStorage.setItem("pedidos", JSON.stringify(getStore().pedidos));
				}
			},
			
			handleGetContratos: async () => {
				let store = getStore();
				const response = await fetch ("http://127.0.0.1:3000/contratos_pendientes", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.token}`
					}
					})
					let data = await response.json()
					
					
					if (response.ok){
						setStore({
							...store, contratos:data 
						});
						localStorage.setItem("contratos", JSON.stringify(getStore().contratos));
					}
			},

			handleEditOrden: async (item, status) => {
				let store = getStore();
				let box = []
				if (status == 1 & item.status_orden_recibida == true ){
					 box = {"status_orden_aceptada":item.status_orden_aceptada, "status_orden_cancelada":item.status_orden_cancelada, "status_orden_recibida":false, "id":item.id, "proveedor_id":item.proveedor.id}
					
				}
				if (status == 1 & item.status_orden_recibida == false ){
					 box = {"status_orden_aceptada":item.status_orden_aceptada, "status_orden_cancelada":item.status_orden_cancelada, "status_orden_recibida":true, "id":item.id, "proveedor_id":item.proveedor.id}
					
				}

				if (status == 2 & item.status_orden_aceptada == true ){
					 box = {"status_orden_aceptada":false, "status_orden_cancelada":item.status_orden_cancelada, "status_orden_recibida":item.status_orden_recibida, "id":item.id, "proveedor_id":item.proveedor.id}

				}
				if (status == 2 & item.status_orden_aceptada == false ){
					 box = {"status_orden_aceptada":true, "status_orden_cancelada":item.status_orden_cancelada, "status_orden_recibida":item.status_orden_recibida, "id":item.id, "proveedor_id":item.proveedor.id}
				}

				if (status == 3 & item.status_orden_cancelada == true ){
					 box = {"status_orden_aceptada":item.status_orden_aceptada, "status_orden_cancelada":false, "status_orden_recibida":item.status_orden_recibida, "id":item.id, "proveedor_id":item.proveedor.id}

				}
				if (status == 3 & item.status_orden_cancelada == false ){
					 box = {"status_orden_aceptada":item.status_orden_aceptada, "status_orden_cancelada":true, "status_orden_recibida":item.status_orden_recibida, "id":item.id, "proveedor_id":item.proveedor.id}
				}
				console.log(status)
				const response = await fetch (`http://127.0.0.1:3000/editar_orden_cliente/`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				},
				body: JSON.stringify(box)
				})
				let data = await response.json()
				if (response.ok){
					console.log("Se edito la orden")
				}

			}

	}
	}
};
;

export default getState;
