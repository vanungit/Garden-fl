import axios from 'axios';
import callApi from '../utils/apiCaller';
// import { cpus } from 'os';
const data = [
	{
		"id": "1",
		"name": "Բույսեր և ծաղիկներ",
		"price": "250004",
		"species": "chautreo",
		"img": "/images/spx2-1.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f7d842"
	},
	{
		"id": "2",
		"name": "Բույսեր և ծաղիկներ",
		"price": "290000",
		"species": "cohoa",
		"img": "/images/spx2-2.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#5481e6"
	},
	{
		"id": "3",
		"name": "Բույսեր և ծաղիկներ",
		"price": "3000",
		"species": "dayleo",
		"img": "/images/spx2-3.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#98cb4a"
	},
	{
		"id": "4",
		"name": "Բույսեր և ծաղիկներ",
		"price": "500000",
		"species": "deban",
		"img": "/images/spx2-4.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#5481e6"
	},
	{
		"id": "5",
		"name": "Բույսեր և ծաղիկներ",
		"price": "610000",
		"species": "mayman",
		"img": "/images/spx2-14.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f15f74"
	},
	{
		"id": "6",
		"name": "Բույսեր և ծաղիկներ",
		"price": "860000",
		"species": "trangtri",
		"img": "/images/spx2-6.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f76d3c"
	},
	{
		"id": "7",
		"name": "Բույսեր և ծաղիկներ",
		"price": "770000",
		"species": "noithat",
		"img": "/images/spx2-7.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#98cb4a"
	},
	{
		"id": "8",
		"name": "Բույսեր և ծաղիկներ",
		"price": "400000",
		"species": "chautreo",
		"img": "/images/spx2-8.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#913ccd"
	},
	{
		"id": "9",
		"name": "Բույսեր և ծաղիկներ",
		"price": "350000",
		"species": "cohoa",
		"img": "/images/spx2-9.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#913ccd"
	},
	{
		"id": "10",
		"name": "Բույսեր և ծաղիկներ",
		"price": "300000",
		"species": "dayleo",
		"img": "/images/spx2-10.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f7d842"
	},
	{
		"id": "11",
		"name": "Բույսեր և ծաղիկներ",
		"price": "580000",
		"species": "deban",
		"img": "/images/spx2-11.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#98cb4a"
	},
	{
		"id": "12",
		"name": "Բույսեր և ծաղիկներ",
		"price": "490000",
		"species": "mayman",
		"img": "/images/spx2-12.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f76d3c"
	},
	{
		"id": "13",
		"name": "Բույսեր և ծաղիկներ",
		"price": "710000",
		"species": "trangtri",
		"img": "/images/spx2-13.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f76d3c"
	},
	{
		"id": "14",
		"name": "Բույսեր և ծաղիկներ",
		"price": "200000",
		"species": "noithat",
		"img": "/images/spx2-5.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#f76d3c"
	},
	{
		"id": "15",
		"name": "Բույսեր և ծաղիկներ",
		"price": "260000",
		"species": "chautreo",
		"img": "/images/spx2-15.png",
		"detail": "Բույսեր և ծաղիկներ",
		"color": "#913ccd"
	}
]


export function fetchProducts() {
	return (dispatch) => {
		// return axios.get('https://5ca5c51d3a08260014278a74.mockapi.io/flowershop')
		// 	.then((response) => {
		// 		dispatch(fetchSuccess(response.data));
		// 	})
		// 	.catch((response) => {
		// 		dispatch(fetchError(response));
		// 	});
		dispatch(fetchSuccess(data));
	}
}

export function fetchSuccess(re) {
	return { type: 'OKK', data: re };
}
export function fetchError(er) {
	return { type: 'ERROR', data: er };
}

export function fetchUsers() {
	return (dispatch) => {
		return axios.get('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop')
			.then((response) => {
				dispatch(fetchUsersSuccess(response.data));
			})
			.catch((response) => {
				dispatch(fetchUsersError(response));
			});
	}
}

export function fetchUsersSuccess(re) {
	return { type: 'USERSOKK', data: re };
}
export function fetchUsersError(er) {
	return { type: 'USERSERROR', data: er };
}//

export function actDeleteUserRequest(id) {
	return (dispatch) => {
		return callApi('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop/' + id, 'DELETE', null).then(res => {
			console.log(res);
			dispatch(actDeleteUser(res.data.id));
		})
	}
}
export function actDeleteUser(id) {
	return {
		type: 'DELETE_USER', id: id
	}
}

export function actEditStatusOrderUserRequest(id, data) {
	return (dispatch) => {
		return callApi('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop/' + id, 'PUT', data).then(res => {
			// console.log(res);
			dispatch(actEditStatusOrderUser(id, res.data));
		})
	}
}
export function actEditStatusOrderUser(id, data) {
	return {
		type: 'EDIT_STATUS_ORDER_USER', id: id, data: data
	}
}




export function actDeleteProductRequest(id) {
	return (dispatch) => {
		return callApi('https://5ca5c51d3a08260014278a74.mockapi.io/flowershop/' + id, 'DELETE', null).then(res => {
			console.log(res.data);
			dispatch(actDeleteProduct(res.data.id));
		})
	}
}
export function actDeleteProduct(id) {
	return {
		type: 'DELETE_PRODUCT', id: id
	}
}

export function actAddProductRequest(data) {
	return (dispatch) => {
		return callApi('https://5ca5c51d3a08260014278a74.mockapi.io/flowershop/', 'POST', data).then(res => {
			dispatch(actAddProduct(res.data));
		})
	}
}
export function actAddProduct(data) {
	return {
		type: 'ADD_PRODUCT', data: data
	}
}

export function actEditProductRequest(id, data) {
	console.log(data)
	return (dispatch) => {
		return callApi('https://5ca5c51d3a08260014278a74.mockapi.io/flowershop/' + id, 'PUT', data).then(res => {
			console.log(res.data)
			dispatch(actEditProduct(id, res.data));
		})
	}
}
export function actEditProduct(id, data) {
	return {
		type: 'EDIT_PRODUCT', data: data, id: id
	}
}





export function filterColor(color) {
	return { type: 'FILTERCOLOR', color: color };
}

export function filterSpecies(species) {
	return { type: 'FILTERSPECIES', species: species };
}

export function filterPrice(min, max) {
	return { type: 'FILTERPRICE', min: min, max: max };
}

export function sort(data) {
	return { type: 'SORT', data: data };
}

export function productDetail(name, img, price) {
	return { type: 'PRODUCTDETAIL', name: name, img: img, price: price };
}

export function checkLogIn(id, status, name, cart, address, email, phone, username, pw, order, dateOrder, statusOrder) {
	return { type: 'CHECKLOGIN', id: id, name: name, status: status, cart: cart, address: address, email: email, phone: phone, username: username, pw: pw, order: order, dateOrder: dateOrder, statusOrder: statusOrder };
}
export function checkLogIn_edit(id, data) {
	return (dispatch) => {
		let carts = {}
		for (let i = 0; i <= data.length; i++) {
			carts[i] = data[i];
		}
		let dataCart = JSON.stringify(carts)
		return axios.put('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop/' + id, { cart: dataCart })
			.then((response) => {
				let cartUser = Object.values(JSON.parse(response.data.cart));
				dispatch(checkLogIn(response.data.id, response.data.status, response.data.name, cartUser, response.data.address, response.data.email, response.data.phone, response.data.username, response.data.pw, response.data.order, response.data.dateOrder, response.data.statusOrder));

			})
			.catch((response) => {
				dispatch(fetchError(response));
			});
	}
}

export function checkLogIn_error(error) {
	return { type: 'CHECKLOGINERROR', name: error };
}
export function logOut() {
	return { type: 'LOGOUT' };
}


export function switchLogin(name) {
	return { type: 'SWITCHLOGIN', name: name };
}

export function search(data) {
	return { type: 'SEARCH', name: data };
}

export function pagination(number) {
	return {
		type: 'CURRENT_PAGE', number: number
	}
}
export function pagination1(number) {
	return {
		type: 'TODOSPER_PAGE', number: number
	}
}