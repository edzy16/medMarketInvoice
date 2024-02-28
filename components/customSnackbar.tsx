import React from "react";
import { Snackbar } from "react-native-paper";

type Props = {
  visible: boolean;
  onDismiss: () => void;
  message: string;
  bgColor: boolean;
};

const CustomSnackbar = ({ visible, onDismiss, message, bgColor }: Props) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={Snackbar.DURATION_SHORT}
      style={{ backgroundColor: bgColor ? "#93af5f" : "#af645f" }}
      action={{
        label: "X",
        onPress: onDismiss,
      }}
    >
      {message}
    </Snackbar>
  );
};

export default CustomSnackbar;
