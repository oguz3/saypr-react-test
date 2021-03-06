import { useState } from "react";
import { connect } from "react-redux";
import { removeUser, setModal } from "../../actions";

import * as Icons from "../icons";
import styles from "./userCard.module.css";

function UserCard(props) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<div className={styles.Card}>
			<div className={styles.ImgCover}>
				<img
					src={`https://avatars.dicebear.com/v2/avataaars/${props.user.username}.svg?options[mood][]=happy`}
					alt="Avatar"
				/>
			</div>

			<div className={styles.CardBody}>
				<h3>{props.user.name}</h3>
				<span>
					<Icons.Mail />
					<p>{props.user.email}</p>
				</span>
				<span>
					<Icons.Phone />
					<p>{props.user.phone}</p>
				</span>
				<span>
					<Icons.Web />
					<p>http://{props.user.website}</p>
				</span>
			</div>

			<div className={styles.CardFooter}>
				<button
					className={styles.Like}
					onClick={() => setIsLiked(!isLiked)}
				>
					{isLiked ? <Icons.Like /> : <Icons.LikeActive />}
				</button>
				<button onClick={() => props.setModal([true, props.user.id])}>
					<Icons.Edit />
				</button>
				<button onClick={() => props.removeUser(props.user.id)}>
					<Icons.Delete />
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
		isModalOpen: state.isModalOpen,
	};
};

export default connect(mapStateToProps, { removeUser, setModal })(UserCard);
