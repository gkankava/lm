import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import axios from "axios";
import { DotIndicator } from "react-native-indicators";

import Search from "./components/search";
import Result from "./components/Result";
import Categories from "./components/categories";
import CategoriesPosts from "./components/categoriesPosts";
import Popular from "./components/popular";
import Recents from "./components/recents";
import BottomTavNavigator from "../shared/bottomNav/botTabNavigator";

const height = Dimensions.get("screen").height;

const BlogContent = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, selectCategory] = useState();
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [focused, setFocused] = useState(false);

  //fetch categories
  useEffect(() => {
    axios
      .get(`http://134.209.239.1/api/blog/categories`)
      .then((res) => {
        setCategories(res.data);
        selectCategory(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //fetch posts from categories

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`http://134.209.239.1/api/blog/${selectedCategory._id}`)
        .then((res) => {
          setFetchedPosts(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    axios
      .get(`http://134.209.239.1/api/dummy`)
      .then((res) => setDummy(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [list, setList] = useState([]);

  const renderContent = () => (
    <>
      <Search focused={setFocused} setList={setList} />
      {focused ? (
        <Result list={list} />
      ) : (
        <>
          {categories.length > 0 && selectedCategory ? (
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              selectCategory={selectCategory}
              setFetchedPosts={setFetchedPosts}
            />
          ) : (
            <View style={styles.categoryTabContainer}>
              <DotIndicator color="#85C8D5" size={5} />
            </View>
          )}

          {fetchedPosts.length > 0 ? (
            <CategoriesPosts
              fetchedPosts={fetchedPosts}
              navigation={navigation}
            />
          ) : (
            <View style={styles.catPostsContainer}>
              <DotIndicator color="#85C8D5" size={7} />
            </View>
          )}
          {dummy ? (
            <Popular data={dummy} navigation={navigation} />
          ) : (
            <View style={styles.catPostsContainer}>
              <DotIndicator color="#85C8D5" size={7} />
            </View>
          )}
          {dummy ? (
            <Recents data={dummy} navigation={navigation} />
          ) : (
            <View style={styles.catPostsContainer}>
              <DotIndicator color="#85C8D5" size={7} />
            </View>
          )}
        </>
      )}
    </>
  );

  return (
    <View style={{ backgroundColor: "white", flexGrow: 1, paddingBottom: 200 }}>
      {renderContent()}
    </View>
  );
};

export default BlogContent;

const styles = StyleSheet.create({
  categoryTabContainer: {
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
    width: "100%",
    marginBottom: 30,
    alignItems: "flex-start",
  },
  catPostsContainer: {
    width: "100%",
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 15,
    height: height * 0.3 + 30,
    flexDirection: "row",
    alignItems: "center",
  },
});
