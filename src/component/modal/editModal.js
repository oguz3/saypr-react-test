import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setModal, updateUser } from "../../actions";
import { Modal } from "antd";
import "antd/dist/antd.css";

import styles from "./editModal.module.css";

function EditModal(props) {
    const [userId, setUserId] = useState();
	const [newName, setNewName] = useState();
	const [newEmail, setNewEmail] = useState();
	const [newPhone, setNewPhone] = useState();
	const [newWebsite, setNewWebsite] = useState();

    useEffect(() => {
        props.userData.map((user) => {
            if(user.id === props.isModalOpen[1] && props.isModalOpen[0] === true){
                setUserId(user.id)
                setNewName(user.name)
                setNewEmail(user.email)
                setNewPhone(user.phone)
                setNewWebsite(user.website)
            }
        })
    }, [props.isModalOpen])

    const changeUserData = () => {
        props.updateUser(userId, newName, newEmail, newPhone, newWebsite)
        props.setModal([false, null])
    }

	return (
		<div className={styles.Modal}>
			<Modal
				title="Basic Modal"
				visible={props.isModalOpen[0]}
				onOk={() => changeUserData()}
				onCancel={() => props.setModal([false, null])}
			>
				{props.userData.map((user) => {
					if (user.id === props.isModalOpen[1]) {
						return (
							<span 
                                key={user.id} 
                            >
								<div className={styles.InputBox}>
									<label>Name:</label>
									<input
										type="text"
										id="name"
										defaultValue={user.name}
										onChange={(event) =>
											setNewName(event.target.value)
										}
									/>
								</div>
								<div className={styles.InputBox}>
									<label>Email:</label>
									<input
										type="email"
										id="email"
										defaultValue={user.email}
                                        onChange={(event) =>
											setNewEmail(event.target.value)
										}
									/>
								</div>
								<div className={styles.InputBox}>
									<label>Phone:</label>
									<input
										type="text"
										id="phone"
										defaultValue={user.phone}
                                        onChange={(event) =>
											setNewPhone(event.target.value)
										}
									/>
								</div>
								<div className={styles.InputBox}>
									<label>Website:</label>
									<input
										type="text"
										id="website"
										defaultValue={user.website}
                                        onChange={(event) =>
											setNewWebsite(event.target.value)
										}
									/>
								</div>
							</span>
						);
					}
				})}
			</Modal>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
		isModalOpen: state.isModalOpen,
	};
};

export default connect(mapStateToProps, { setModal, updateUser })(EditModal);
