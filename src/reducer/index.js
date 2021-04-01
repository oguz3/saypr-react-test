import {
	ADDUSER,
	REMOVEUSER,
	UPDATEUSER,
	SETLOADING,
	SETMODAL,
} from "../actions/index";

const INITIAL_STATE = {
	userData: [],
	isloading: true,
	isModalOpen: [false, null],
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
		case UPDATEUSER:
			return {
				...state,
				userData: state.userData.map((user) =>
					user.id === action.payload.id
						? {
							...user,
							name: action.payload.name,
							email: action.payload.email,
							phone: action.payload.phone,
							website: action.payload.website,
						  }
						: user
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
