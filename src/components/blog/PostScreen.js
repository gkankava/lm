import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

import PostScreenHeader from "./PostScreenHeader";
import BotTabNavigator from "../shared/bottomNav/botTabNavigator";
import Gallery from "./components/gal";

const PostScreen = (props) => {
  let { postID } = props.route.params;
  const [fetchedPost, setFetchedPost] = useState();
  const [galleryIsOpen, setGalleryIsOpen] = useState(0);

  useEffect(() => {
    if (postID) {
      axios
        .get(`http://134.209.239.1/api/blog/posts/${postID}`)
        .then((res) => {
          setFetchedPost(res.data);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      // setGalleryIsOpen(0);
    };
  }, []);

  let data = [];
  let thumb = [];

  if (fetchedPost) {
    data = fetchedPost.gallery.map((item, key) => ({ source: { uri: item } }));
    if (fetchedPost.gallery.length > 4) {
      for (let i = 0; i < 4; i++) {
        thumb.push(fetchedPost.gallery[i]);
      }
    } else {
      thumb = fetchedPost.gallery;
    }
  }

  return (
    <>
      {fetchedPost ? (
        <>
          <PostScreenHeader
            image={fetchedPost.postImage}
            title={fetchedPost.postName}
            subTitle={fetchedPost.status}
          />
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: 16,
              paddingTop: 30,
              paddingBottom: 0,
            }}
            contentContainerStyle={{ paddingBottom: 200 }}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#3A3A3C" }}
            >
              About
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                marginTop: 15,
                color: "#3A3A3C",
              }}
            >
              {fetchedPost.info}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#3A3A3C",
                marginTop: 30,
              }}
            >
              Gallery
            </Text>
            <View
              style={{
                marginTop: 15,
                marginBottom: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {thumb.map((item, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => setGalleryIsOpen(key + 1)}
                >
                  <Image
                    source={{ uri: item }}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 15,
                      marginBottom: 15,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#3A3A3C",
                marginTop: 30,
              }}
            >
              Location
            </Text>
            <MapView
              style={{ height: 300, width: "100%", marginTop: 15 }}
              initialRegion={{
                latitude: 41.693286650098756,
                longitude: 44.80144442893419,
                latitudeDelta: 0.08,
                longitudeDelta: 0.07,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 41.693286650098756,
                  longitude: 44.80144442893419,
                }}
              />
            </MapView>
          </ScrollView>
          {galleryIsOpen > 0 && (
            <Gallery
              vis={galleryIsOpen}
              setVis={setGalleryIsOpen}
              data={data}
              rendNum={data.length}
            />
          )}
        </>
      ) : null}
      <BotTabNavigator />
    </>
  );
};

export default PostScreen;
