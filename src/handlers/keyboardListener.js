import { Keyboard } from "react-native";

export const addKeyboardListener = (setKeyboardStatus) => {
  const _keyboardWillShow = (e) => {
    setKeyboardStatus(true);
  };
  const _keyboardWillHide = () => {
    setKeyboardStatus(false);
  };
  Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
  Keyboard.addListener("keyboardWillHide", _keyboardWillHide);
};

export const removeKeyboardListener = (setKeyboardStatus) => {
  const _keyboardWillShow = () => {
    setKeyboardStatus(true);
  };
  const _keyboardWillHide = () => {
    setKeyboardStatus(false);
  };
  Keyboard.removeListener("keyboardWillShow", _keyboardWillShow);
  Keyboard.removeListener("keyboardWillHide", _keyboardWillHide);
};
