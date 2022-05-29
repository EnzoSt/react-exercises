import { useMemo } from "react";

export function FilteredList({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter((i) => i.age > 18);
  }, [items]);

  return (
    <div>
        <h3>Users age greater than 18:</h3>
      <ul>
        {filteredItems.map((i) => (
          <li key={i.id}>
            {i.name} - {i.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
