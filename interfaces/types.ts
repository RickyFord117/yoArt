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
