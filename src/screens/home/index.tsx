import { VStack, Text, Image, FlatList, ScrollView } from "native-base";

import * as Box from "./styled";
import User from "../../assets/person.png";
import Menu from "../../assets/menu.png";

import { Cards } from "../../components/cards";
import { Button, TouchableOpacity } from "react-native";

import { DATA, dataCategory, dataActivities, dataLearnMore } from "./data";

export function Home({ navigation }) {
  const ItemActivities = ({ title, avatar }) => (
    <Box.Activities>
      <Image
        w="40px"
        h="40px"
        resizeMode="stretch"
        bg={"#fffff"}
        source={{ uri: avatar }}
        alt="Nome do exercício"
      />
      <Text color="#99999b" fontSize={"12px"} mt="5px">
        {title}
      </Text>
    </Box.Activities>
  );
  const Item = ({ title }) => (
    <Box.Tab>
      <TouchableOpacity>
        <Text color="#99999b" fontSize={"16px"}>
          {title}
        </Text>
      </TouchableOpacity>
    </Box.Tab>
  );
  return (
    <VStack flex={1}>
      <Box.Header>
        <Image w="20px" h="20px" source={Menu} alt="Nome do exercício" />
        <Button
          title="Link para detalhes"
          onPress={() => navigation.navigate("Details")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Image
            w="52px"
            h="52px"
            source={User}
            alt="Nome do exercício"
            rounded="lg"
          />
        </TouchableOpacity>
      </Box.Header>
      <ScrollView bg="#ffffff">
        <Box.Title>Discover</Box.Title>
        <FlatList
          data={dataCategory}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          _contentContainerStyle={{
            px: 5,
            pt: 2,
          }}
        />

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Cards
              title={item.title}
              location={item.location}
              image={item.image}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          _contentContainerStyle={{
            px: 5,
            pb: 2,
          }}
        />

        <Box.Title>Activities</Box.Title>
        <FlatList
          data={dataActivities}
          renderItem={({ item }) => (
            <ItemActivities avatar={item.avatar} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          _contentContainerStyle={{
            px: 5,
          }}
        />
        <Box.Title>Learn More</Box.Title>
        <FlatList
          data={dataLearnMore}
          renderItem={({ item }) => (
            <Cards
              title={item.title}
              location={item.location}
              image={item.image}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          _contentContainerStyle={{
            px: 5,
            pb: 10,
            pt: 5,
          }}
        />
      </ScrollView>
    </VStack>
  );
}
