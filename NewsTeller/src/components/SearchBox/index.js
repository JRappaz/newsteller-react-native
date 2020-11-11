import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./style";

import ButtonBar from "@components/ButtonBar";
import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

import { Picker } from "@react-native-picker/picker";

/**
 *  Search box to let user select search options
 */
export default SearchBox = ({ setAndFetch, sources }) => {
  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);

  const [lang, setLang] = useState(null);
  const [source, setSource] = useState(ALL_SOURCES);

  const ALL_SOURCES = "All sources";
  const availableSources = [ALL_SOURCES, ...sources];

  const updateOption = (field, value) => {
    setSearchOptions((prevState) => {
      const newObject = { ...prevState };
      newObject[field] = value;
      return newObject;
    });
  };

  const handlSubmit = () => {
    const finalOptions = { ...searchOptions };
    const filters = [];
    if (lang != null) {
      filters.push({ field: "lang", values: [lang], type: "all" });
    }

    if (source != null) {
      filters.push({ field: "handle", values: [source], type: "all" });
    }

    finalOptions["filters"] = filters;
    setAndFetch(finalOptions);
  };

  return (
    <View style={styles.container}>
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
        <ButtonBar title={"search"} onPress={handlSubmit} />
      </View>
      <View style={styles.pickersContainer}>
        <Picker
          selectedValue={searchOptions.sortField}
          style={{ ...styles.smallPicker, ...styles.text }}
          itemStyle={styles.text}
          onValueChange={(itemValue, itemIndex) =>
            updateOption("sortField", itemValue)
          }
        >
          <Picker.Item label="Hot" value="hot" />
          <Picker.Item label="Date" value="date" />
        </Picker>
        <Picker
          selectedValue={source}
          style={{ ...styles.largePicker, ...styles.text }}
          itemStyle={styles.text}
          onValueChange={(itemValue, itemIndex) => setSource(itemValue)}
        >
          {availableSources.map((source) => (
            <Picker.Item label={source} value={source} key={source} />
          ))}
        </Picker>
        <Picker
          selectedValue={lang}
          style={{ ...styles.largePicker, ...styles.text }}
          itemStyle={styles.text}
          onValueChange={(itemValue, itemIndex) => setLang(itemValue)}
        >
          <Picker.Item label="All languages" value={null} />
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Italian" value="it" />
          <Picker.Item label="German" value="de" />
        </Picker>
      </View>
    </View>
  );
};
