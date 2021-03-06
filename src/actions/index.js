export const ADDUSER = "ADDUSER";
export const REMOVEUSER = "REMOVEUSER";
export const UPDATEUSER = "UPDATEUSER";
export const SETLOADING = "SETLOADING";
export const SETMODAL = "SETMODAL";

export const addUser = (data) => {
  return { type: ADDUSER, payload: data };
};

export const removeUser = (id) => {
  return { type: REMOVEUSER, payload: id };
};

export const updateUser = (id, name, email, phone, website) => {
  return { type: UPDATEUSER, payload: {id, name, email, phone, website} };
};

export const setLoading = (status) => {
  return { type: SETLOADING, payload: status };
};

export const setModal = (status) => {
  return { type: SETMODAL, payload: status };
};