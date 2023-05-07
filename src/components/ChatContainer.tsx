import { Flex } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";
import { useUser } from "../utils/UserProvider";

const ChatContainer = () => {
  const { id, name, role, icon } = useUser();

  const styles: Dict = {
    container: {
      height: "100vh",
      width: "100vw",
      justifyContent: "flex-start",
    },
  };

  return <Flex style={styles.container}></Flex>;
};

export default ChatContainer;
