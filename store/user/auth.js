import create from "zustand";
import { setTokenHeader } from "../../src/services/tokenHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = (set) => ({
  currentUser: {
    isAuthenticated: false,
    user: null,
  },
  setCurrentUser: (isAuthenticated, user) => {
    set(() => ({
      currentUser: {
        isAuthenticated,
        user,
      },
    }));
  },
  logOut: () => {
    AsyncStorage.clear();
    setTokenHeader(false);
    set(() => ({
      currentUser: {
        isAuthenticated: false,
        user: null,
      },
    }));
  },
});
export const userProvider = create(store);
