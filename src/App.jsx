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

  // Show add friend
  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  // Add friend
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Select friend
  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Split bill
  function handleSplitBill(value) {
    console.log(value);
    setFriends((prev) =>
      prev.map((friend) => {
        return friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      }),
    );

    setSelectedFriend(null);
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
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
