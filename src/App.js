import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addUser, setLoading } from "./actions";
import Loading from "./component/loading";
import UserCard from "./component/card/userCard";
import EditModal from "./component/modal/editModal";
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
		props.addUser(response.data);
		setTimeout(() => {
			props.setLoading(false);
		}, 1000);
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
								key={user.id}
								user={user}
							/>
						);
					})}
					<EditModal />
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
