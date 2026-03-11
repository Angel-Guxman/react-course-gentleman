import { useCallback, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}
export const ListOfUsers = () => {
  const [items, setItems] = useState<User[]>([
    {
      id: 1,
      name: "Angel",
      age: 22,
    },
    {
      id: 2,
      name: "Jose",
      age: 20,
    },
  ]);
  const [user, setUser] = useState("");
  const selectUser = useCallback((user: string) => setUser(user), []);
  const addUser = () => {
    setItems((value) => [
      ...value,
      {
        id: value.length + 1,
        name: `John-${value.length + 1}`,
        age: value.length + 1,
      },
    ]);
  };
  console.log(items);
  return (
    <div className="">
      {items.map((user) => (
        <div className="" key={user.id}>
          <span>{user.name}</span>
          <span>{user.age}</span>
          <button type="button" onClick={() => selectUser(user.name)}>
            Seleccionar
          </button>
        </div>
      ))}
      <span>User: {user}</span>
      <button type="button" onClick={addUser}>
        Agregar
      </button>
    </div>
  );
};
