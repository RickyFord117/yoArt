export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Edit: { imageUri: string; promptText: string };
};

export interface InputPropTypes {
  label: string;
  keyboardType?: string;
  secure?: boolean;
  onUpdateValue: (inputType: string, enteredValue: string) => void;
  inputType?: string;
  value: string;
  isInvalid: boolean;
}

export interface MessageInputPropTypes {
  value: string;
  onUpdateValue: (enteredValue: string) => void;
  isInvalid: boolean;
}

export interface EditFormParamList {
  onTextEntered: (enteredText: string) => void;
  onSubmit: () => void;
}
