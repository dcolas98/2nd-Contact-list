const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			data: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/class_agenda", {
						method: "GET",
						headers: {
							"content-type": "application/json"
						}
					})
					.then(response => response.json())
					.then(result => setStore({
						data: result
					}))
					.catch(err => console.log(err))
			},
			editContact: (contact)=>{
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: 'PUT',
					headers:{
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact),
				})
				.then(response => {
					response.status === 200 ? getActions().getData():"";
				})
				.catch(err => console.log(err))
			},

			delContact: (id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json"
					},
				})
				.then(response => {
					response.status === 200 ? getActions().getData():"";
				})

			},

			addContact: ({full_name, email, address, phone}) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: 'POST',
						// redirect: 'follow',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify( 
							{
								"full_name": full_name,
								"email": email,
								"agenda_slug": "class_agenda",
								"address": address,
								"phone": phone
							})

					})
					// .then(response => response.status === 200 ? getActions().getData() : "")
					.then(response => {if(!response.ok){
						throw new Error(response.error)}
					})
					.then(()=>{
						getActions().getData()
					})
					.catch((error) => console.log("error", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({
					demo: demo
				});
			}
		}
	};
};

export default getState;