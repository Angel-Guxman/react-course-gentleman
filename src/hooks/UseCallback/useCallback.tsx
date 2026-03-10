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
  const totalAge = useCallback(
    () => items.reduce((result, user) => result + user.age, 0),
    [items],
  );
  const [suma, setSuma] = useState(0);
  const doubleTotalAge = totalAge() + suma;
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
        </div>
      ))}
      <span>Edad total: {totalAge()}</span>
      <span>Suma total: {doubleTotalAge}</span>
      <button type="button" onClick={addUser}>
        Agregar
      </button>
      <input
        type="text"
        value={suma}
        onChange={(e) => setSuma(parseFloat(e.target.value))}
      />
    </div>
  );
};
