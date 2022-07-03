import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Kamble",
    username: "Gadgetfather",
    password: "akshay123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Forever an outlaw...",
    profileImg:
      "https://pbs.twimg.com/profile_images/1463934993692987392/TXpTXOl6_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "TSMFTX ",
    lastName: "ImperialHal",
    username: "ImperialHal",
    password: "Philip123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "TSM for Apex Legends | Partnered with @aimlab",
    profileImg:
      "https://pbs.twimg.com/profile_images/1530315370124435456/hfSVTY4w_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "Jack",
    lastName: "Balika",
    username: "Jack",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "lorem222 at jack",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
  {
    _id: uuid(),
    firstName: "TestUser3",
    lastName: "Balika",
    username: "TestUser3",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "lorem222 at testUser3",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
];
