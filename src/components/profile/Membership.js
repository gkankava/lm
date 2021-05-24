import React, { useState, useRef, useCallback } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import LinearHeader from "./shared/LinearHeader";
import Card from "./shared/Card";
import { content } from "./shared/cardsContent";
import Carousel, { Pagination } from "react-native-snap-carousel";

const width = Dimensions.get("screen").width;

const Membership = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [carouselItems, setCarouselItems] = useState([
    content.walker,
    content.traveller,
    content.explorer,
  ]);
  const ref = useRef(null);
  // let list = [content.walker, content.traveller, content.explorer];

  const renderCard = (card, key) => {
    return (
      <Card
        key={key}
        img={card.item.img}
        title={card.item.title}
        opt={card.item.opt}
        price={card.item.price}
      />
    );
  };

  return (
    <>
      <LinearHeader />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Carousel
          firstItem={activeIndex}
          layout={"default"}
          ref={ref}
          renderItem={renderCard}
          data={carouselItems}
          sliderWidth={width}
          itemWidth={width * 0.7}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <Pagination
          dotsLength={3}
          activeDotIndex={activeIndex}
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 6,
            marginHorizontal: 0,
            backgroundColor: "#A5A5A5",
          }}
          inactiveDotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 0,
            backgroundColor: "#E5E5E5",
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </SafeAreaView>
    </>
  );
};

export default Membership;
