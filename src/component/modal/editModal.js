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
            visible={props.isModalOpen}
            onOk={() => props.setModal(false)}
            onCancel={() => props.setModal(false)}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, { setModal })(EditModal);
