import walk from "../../../../assets/images/walker.png";
import trav from "../../../../assets/images/traveler.png";
import exp from "../../../../assets/images/explorer.png";

export const content = {
  walker: {
    title: "walker",
    img: walk,
    opt: [
      { status: true, title: "3 day" },
      { status: true, title: "Unlimited access to blog" },
      { status: true, title: "Unlimited questions/asnwers" },
      { status: false, title: "Urgent Messages" },
      { status: false, title: "Unlimited chat history" },
    ],
    price: "9.99",
  },
  traveller: {
    title: "traveller",
    img: trav,
    opt: [
      { status: true, title: "3 day" },
      { status: true, title: "Unlimited access to blog" },
      { status: true, title: "Unlimited questions/asnwers" },
      { status: false, title: "Urgent Messages" },
      { status: false, title: "Unlimited chat history" },
    ],
    price: "9.99",
  },
  explorer: {
    title: "explorer",
    img: exp,
    opt: [
      { status: true, title: "3 day" },
      { status: true, title: "Unlimited access to blog" },
      { status: true, title: "Unlimited questions/asnwers" },
      { status: false, title: "Urgent Messages" },
      { status: false, title: "Unlimited chat history" },
    ],
    price: "9.99",
  },
};
