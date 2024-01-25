import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 1,
    name: "Ali",
    image: "https://i.pravatar.cc/48?u=32234",
    balance: 10,
  },
  {
    id: 2,
    name: "Sajad",
    image: "https://i.pravatar.cc/48?u=32235",
    balance: -7,
  },
  {
    id: 3,
    name: "John",
    image: "https://i.pravatar.cc/48?u=32236",
    balance: 30,
  },
  {
    id: 4,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=32237",
    balance: 40,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
