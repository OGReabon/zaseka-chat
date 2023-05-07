import { Card } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

const Chat = () => {
  const styles: Dict = {
    container: {
      height: "100vh",
      width: "100vw",
      justifyContent: "flex-start",
    },
    bubble: {
      borderRadius: "10px",
      padding: 2,
      margin: 2,
    },
  };

  return <Card style={styles.container}></Card>;
};

export default Chat;
