import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addUser, setLoading } from "./actions";
import Loading from "./component/loading";
import UserCard from "./component/card/userCard";
import "./style/App.css";

function App(props) {
	useEffect(() => {
		getUserData();
	}, []);

	async function getUserData() {
		props.setLoading(true);
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users`
		);
		await getUserImg(response.data);
	}

	async function getUserImg(user) {
		user.map(async (data) => {
			const response = await axios.get(
				`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`
			);
			props.addUser({ data, avatar: response.data });
			setTimeout(() => {
				props.setLoading(false);
			}, 1500);
		});
	}

	return (
		<div className="App">
			{props.isloading ? (
				<Loading />
			) : (
				<div className="Card-grid">
					{props.userData.map((user) => {
						return (
							<UserCard
								key={user.data.id}
								id={user.data.id}
								name={user.data.name}
								avatar={user.avatar}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		userData: state.userData,
		isloading: state.isloading,
	};
};

export default connect(mapStateToProps, { addUser, setLoading })(App);
