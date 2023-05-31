import { Text, View, Image } from "native-base";
import Pin from "../assets/pin-icon.png";
import { TouchableOpacity } from "react-native";
import { Details } from "../screens/details";

export function Cards({ title, image, location, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <View
        display="flex"
        h="240px"
        w="170px"
        p="0px"
        mr="20px"
        bg="green.700"
        borderColor="green.500"
        rounded="20px"
      >
        <Image
          position="absolute"
          w="170px"
          h="240px"
          rounded="20px"
          source={{ uri: image }}
          alt="Nome do exercício"
        />
        <View flex={1} justifyContent="flex-end" p="5px">
          <Text
            fontSize="20px"
            ml="5px"
            mb="2px"
            color="#ffffff"
            lineHeight="25px"
          >
            {title}
          </Text>
          <View flexDirection="row" mb="3px">
            <Image w="20px" h="20px" ml="3px" source={Pin} alt="location" />
            <Text fontSize="12px" color="#ffffff" ml="3px" mt="2px">
              {location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
