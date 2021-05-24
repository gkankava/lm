import Toast from "react-native-toast-message";
import { apiCall } from "../../src/services/api";
import { setTokenHeader } from "../../src/services/tokenHeader";
import { setData } from "../../src/handlers/localStorage";

const API = "http://134.209.239.1";

export const signIn = (userData, callback, setSubmitting, navigate) => {
  return new Promise((resolve, reject) => {
    return apiCall("post", `${API}/api/auth/signin`, userData)
      .then((res) => {
        setSubmitting(false);
        setData("jwtToken", res.token);
        setTokenHeader(res.token);
        callback(true, res.user);
        if (!res.user.verified) {
          navigate();
        }
        resolve();
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          text2: err.message,
          type: "error",
          position: "top",
          visibilityTime: 1500,
          autoHide: true,
          topOffset: 50,
        });
        setSubmitting(false);
      });
  });
};
export const signUp = (userData, callback, setSubmitting, navigate) => {
  return new Promise((resolve, reject) => {
    return apiCall("post", `${API}/api/auth/signup`, userData)
      .then((res) => {
        setData("jwtToken", res.token);
        setTokenHeader(res.token);
        callback(true, res);
        setSubmitting(false);
        navigate();
        resolve();
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          text2: "Email/Phone already exists",
          type: "error",
          position: "top",
          visibilityTime: 1500,
          autoHide: true,
          topOffset: 50,
        });
        setSubmitting(false);
      });
  });
};

export const fetchUserData = (id, callback) => {
  return new Promise((resolve, reject) => {
    return apiCall("get", `${API}/api/get-user-data/${id}`)
      .then((data) => {
        callback(true, { ...data });
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};
