import { connect } from "react-redux";
import { setModal } from "../../actions";
import { Modal } from "antd";
import "antd/dist/antd.css";

import styles from './editModal.module.css'

function EditModal(props) {
  return (
    <div className={styles.Modal}>
        <Modal
            title="Basic Modal"
            visible={props.isModalOpen[0]}
            onOk={() => props.setModal([false, null])}
            onCancel={() => props.setModal([false, null])}
        >
            {props.userData.map(user => {
                if(user.id === props.isModalOpen[1]){
                    return(
                        <span key={user.id}>
                            <div className={styles.InputBox}>
                                <label>Name:</label>
                                <input type='text' id='name' defaultValue={user.name}/>
                            </div>
                            <div className={styles.InputBox}>
                                <label>Email:</label>
                                <input type='text' id='email' defaultValue={user.email}/>
                            </div>
                            <div className={styles.InputBox}>
                                <label>Phone:</label>
                                <input type='text' id='phone' defaultValue={user.phone}/>
                            </div>
                            <div className={styles.InputBox}>
                                <label>Website:</label>
                                <input type='text' id='website' defaultValue={user.website}/>
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
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, { setModal })(EditModal);
