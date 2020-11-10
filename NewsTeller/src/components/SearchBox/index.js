import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./style";

import ButtonBar from "@components/ButtonBar";
import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

/**
 *  Search box to let user select search options
 */
export default SearchBox = ({ setAndFetch }) => {
  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);

  const updateOption = (field, value) => {
    setSearchOptions((prevState) => {
      const newObject = { ...prevState };
      newObject[field] = value;
      return newObject;
    });
  };

  return (
    <View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Search..."
          onChangeText={(newSearchTerm) =>
            updateOption("searchTerm", newSearchTerm)
          }
          value={searchOptions.searchTerm}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBar
          title={"search"}
          onPress={() => setAndFetch(searchOptions)}
        />
      </View>
    </View>
  );
};
