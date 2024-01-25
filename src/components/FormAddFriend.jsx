import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend, setShowAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=8463");

  function handleSubmit(e) {
    e.preventDefault();

    // Validate inputs
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `https://i.pravatar.cc/48?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("");
    setShowAddFriend(false);
  }

  return (
    <form className="form-add-friend">
      <label>🧍‍♂️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

export default FormAddFriend;
