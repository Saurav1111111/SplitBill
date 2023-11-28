import "./styles.css";
import { useState } from "react";
const friendsArray = [
  {
    id: 1,
    name: "Friend 1",
    imageUrl: "https://randomuser.me/api/portraits/women/84.jpg",
    balance: -100,
  },
  {
    id: 2,
    name: "Friend 2",
    imageUrl: "https://randomuser.me/api/portraits/women/64.jpg",
    balance: 150,
  },
  {
    id: 3,
    name: "friend3",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    balance: 0,
  },
  {
    id: 4,
    name: "Friend 4",
    imageUrl: "https://randomuser.me/api/portraits/men/79.jpg",
    balance: -50,
  },
];

export default function App() {
  const [name, setName] = useState("");
  function onhandleSubmit() {}
  return (
    <div className="App">
      <div className="sideBar">
        <FriendsList friends={friendsArray} />
        <FormAddFriend name={name} getName={setName} onSumit={onhandleSubmit} />
        <Button> ADD FRIEND </Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li className="itemFriend">
      <img src={friend.imageUrl} />
    <div>
        <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          You owes {friend.name} {friend.balance} rupees{" "}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          {friend.name} owes you {friend.balance} rupees{" "}
        </p>
      )}
      {friend.balance == 0 && <p> you and {friend.name} are same.</p>}</div>
      <Button forwhat={"close"} />
    </li>
  );
}

function Button({ children }) {
  return <button className="button"> {children}</button>;
}

function FormAddFriend({ name, setName }) {
  return (
    <form className="formAddFriend">
      <label for="name"> friend's name</label>
      <input type="text" id="name" />
      <label> img url</label>
      <input type="text" placeholder="" />
      <Button> ADD </Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <div>
      <h2> Split the Bill with x </h2>
      <label>Bill value </label>
      <input type="text" />
      <label>X's expanse </label>
      <input type="text" />
      <label>Your Expanse </label>
      <input type="text" />
      <label> Who is paying the bill </label>
      <select>
        <option value="you"> you </option>
        <option value="me"> me </option>
      </select>

      <Button> Split Bill </Button>
    </div>
  );
}
