const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://manhbin195:manhbin195@master.go3a5w6.mongodb.net/"
);

const Schema = mongoose.Schema;

const account = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const user = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
  {
    collection: "posts",
  }
);

const AccountModel = mongoose.model("account", account);

const UserModel = mongoose.model("user", user);
const PostModel = mongoose.model("post", post);

PostModel.find({})
  .populate("author")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// AccountModel.create({
//   username: "Thu Thuỳ",
//   password: "123123",
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
