import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "lorem5",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "123",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "lorem2",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
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
