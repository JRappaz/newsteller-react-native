import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { styles } from "./style";

import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

import { NewsTellerLogoTransparent } from "@assets/icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

/**
 *  Search box to let user select search options
 */
export default SearchBox = ({ setAndFetch, sources }) => {
  const [shouldSubmit, setShouldSubmit] = useState(false);

  useEffect(() => {
    if (shouldSubmit) {
      handlSubmit();
    }
  }, [shouldSubmit]);

  const handlSubmit = () => {
    setShouldSubmit(false);
    const finalOptions = { ...DEFAULT_SEARCH_OPTIONS };
    const filters = [];
    if (lang != null) {
      filters.push({ field: "lang", values: [lang], type: "all" });
    }

    if (source != null) {
      filters.push({ field: "handle", values: [source], type: "all" });
    }

    finalOptions["filters"] = filters;
    finalOptions["sortField"] = sort;
    finalOptions["searchTerm"] = searchTerm;

    setAndFetch(finalOptions);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const ALL_LANGUAGES = { label: "All languages", value: null };
  const AVAILABLE_LANGUAGES = [
    ALL_LANGUAGES,
    { label: "French", value: "fr" },
    { label: "Italian", value: "it" },
    { label: "English", value: "en" },
    { label: "German", value: "de" },
  ];
  const [lang, setLang] = useState(ALL_LANGUAGES.value);

  const ALL_SOURCES = { label: "All sources", value: null };
  const AVAILABLE_SOURCES = [
    ALL_SOURCES,
    ...sources.map((s) => {
      const newObj = { label: s, value: s };
      return newObj;
    }),
  ];
  const [source, setSource] = useState(ALL_SOURCES.value);

  const AVAILABLE_SORT = [
    { label: "Date", value: "date" },
    { label: "Hot", value: "hot" },
  ];
  const [sort, setSort] = useState(AVAILABLE_SORT[0].value);

  const selectableListItem = (setCurrent, item, selected) => {
    return (
      <TouchableOpacity
        style={
          selected == item.value ? styles.filterItemSelected : styles.filterItem
        }
        onPress={() => {
          setCurrent(item.value);
          setShouldSubmit(true);
        }}
      >
        <Text style={styles.text}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const _keyExtractor = (item, index) => "list-item-" + index;

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Image source={NewsTellerLogoTransparent} style={styles.logo} />
        <TextInput
          placeholder="Search..."
          onChangeText={(newSearchTerm) => setSearchTerm(newSearchTerm)}
          onEndEditing={() => setShouldSubmit(true)}
          value={searchTerm}
          style={styles.textInput}
        />
      </View>
      <FlatList
        data={AVAILABLE_LANGUAGES}
        horizontal={true}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableListItem(setLang, item, lang)}
      />
      <FlatList
        data={AVAILABLE_SOURCES}
        horizontal={true}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableListItem(setSource, item, source)}
      />
      <FlatList
        data={AVAILABLE_SORT}
        horizontal={true}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableListItem(setSort, item, sort)}
      />
    </View>
  );
};
