const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: []
		},
		actions: {
			getData: ()=> {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/class_agenda", {
					method: "GET",
					headers: {"content-type": "application/json"}
				})
					.then(response => response.json())
					.then(result => setStore({data: result}))
					.catch(err => console.log(err))
			},

			createContact: (contact)=> {
				fetch("https://assets.breatheco.de/apis/fake/contact/",{
					method: "POST",
					headers: {"content-type": "application/json"},
					body: JSON.stringify(contact)
				})
				.then(response => response.status === 200 ? getActions().getData(): "")
				.catch(err => console.log(err))
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
