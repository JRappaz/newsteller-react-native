import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { styles } from "./style";

import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

import { NewsTellerLogoTransparent } from "@assets/icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

/**
 *  Search box to let user search a term, filter and sort the results
 *  Below is an example of options for a query:
 *
 * aggregations: "articles_over_time",
 * filters: [
 *  { field: "lang", values: ["fr"], type: "all" },
 *  { field: "handle", values: ["BFMTV"], type: "all" },
 * ],
 * searchTerm: "",
 * sortDirection: "desc",
 * sortField: "date"
 *
 */
export default SearchBox = ({ setAndFetch, sources }) => {
  const [shouldSubmit, setShouldSubmit] = useState(false);

  // When a action is performed on the options, shouldSubmit is set to true
  useEffect(() => {
    if (shouldSubmit) {
      handlSubmit();
    }
  }, [shouldSubmit]);

  // submit selected options for a query
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

  // searchTerm option
  const [searchTerm, setSearchTerm] = useState("");

  // lang filter => language
  const ALL_LANGUAGES = { label: "All languages", value: null };
  const AVAILABLE_LANGUAGES = [
    ALL_LANGUAGES,
    { label: "French", value: "fr" },
    { label: "Italian", value: "it" },
    { label: "English", value: "en" },
    { label: "German", value: "de" },
  ];
  const [lang, setLang] = useState(ALL_LANGUAGES.value);
  // Set source to all sources when a language is selected
  const updateLang = (newValue) => {
    setLang(newValue);
    setSource(ALL_SOURCES.value);
  };

  // Handle filter => source
  const ALL_SOURCES = { label: "All sources", value: null };
  const AVAILABLE_SOURCES = [
    ALL_SOURCES,
    ...sources.map((s) => {
      const newObj = { label: s, value: s };
      return newObj;
    }),
  ];
  const [source, setSource] = useState(ALL_SOURCES.value);

  // SortField Option
  const AVAILABLE_SORT = [
    { label: "Date", value: "date" },
    { label: "Hot", value: "hot" },
  ];
  const [sort, setSort] = useState(AVAILABLE_SORT[0].value);

  const selectableItem = (setCurrent, item, selected) => {
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
          style={[styles.textInput, styles.text]}
        />
      </View>
      <FlatList
        data={AVAILABLE_LANGUAGES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableItem(updateLang, item, lang)}
      />
      <FlatList
        data={AVAILABLE_SOURCES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableItem(setSource, item, source)}
      />
      <FlatList
        data={AVAILABLE_SORT}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => selectableItem(setSort, item, sort)}
      />
    </View>
  );
};
