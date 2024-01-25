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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
