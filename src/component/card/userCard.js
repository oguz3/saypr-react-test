import { connect } from "react-redux";
import { removeUser } from "../../actions";

import styles from './userCard.module.css'

function UserCard(props) {
  const deleteUser = (id) => {
    props.userData.map((user) => {
      if (user.data.id === id) {
        props.removeUser(user.data.id);
      }
    });
  };

  return (
    <div className={styles.Card}>
      <div
        style={{ width: "50px" }}
        dangerouslySetInnerHTML={{ __html: props.avatar }}
      />
      <p>
        {props.id} - {props.name}
      </p>
      <button onClick={() => deleteUser(props.id)}>Delete</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  };
};

export default connect(mapStateToProps, { removeUser })(UserCard);
