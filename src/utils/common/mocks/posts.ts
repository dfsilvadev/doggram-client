import imageOne from "@/assets/images/jpg/1705435211023.jpg";
import imageTwo from "@/assets/images/jpg/1705435318445.jpg";

const posts = [
  {
    _id: "65cf7d89f398df7e5f704151",
    image: imageOne,
    title: "Mereço um like?",
    likes: ["65bebf20a464fba4a92f5ea8"],
    comments: [
      {
        comment: "Your dog is beautiful :)",
        userName: "Daniel Silva",
        userImage: "1707921150929.png",
        userId: "65bebf20a464fba4a92f5ea8"
      }
    ],
    userId: "65bebf20a464fba4a92f5ea8",
    userName: "Daniel Silva",
    createdAt: "2024-02-16T15:21:45.965Z",
    updatedAt: "2024-02-16T15:23:23.992Z",
    __v: 2
  },
  {
    _id: "65cf7d33f398df7e5f70414d",
    image: imageTwo,
    title: "Que foi? Quer um pouco?",
    likes: [],
    comments: [],
    userId: "65bebf20a464fba4a92f5ea8",
    userName: "Daniel Silva",
    createdAt: "2024-02-16T15:20:19.811Z",
    updatedAt: "2024-02-16T15:20:19.811Z",
    __v: 0
  }
];

export { posts };
