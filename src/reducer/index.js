import { ADDUSER, REMOVEUSER, SETLOADING, SETMODAL } from "../actions/index";

const INITIAL_STATE = {
	userData: [],
	isloading: true,
	isModalOpen: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADDUSER:
			return {
				...state,
				userData: action.payload,
			};
		case REMOVEUSER:
			return {
				...state,
				userData: state.userData.filter(
					(user) => user.id !== action.payload
				),
			};
		case SETLOADING:
			return {
				...state,
				isloading: action.payload,
			};
		case SETMODAL:
			return {
				...state,
				isModalOpen: action.payload,
			};
		default:
			return state;
	}
};
