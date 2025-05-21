import React from "react";

// Danh sách mẫu
const people = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

function AreAllTeenagers() {
  // Kiểm tra tất cả đều là teen (13–19 tuổi)
  const allAreTeenagers = people.every((person) => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2> Check if all are teenagers</h2>
      <p>
        {allAreTeenagers
          ? "All people are teenagers."
          : "Not all people are teenagers."}
      </p>
    </div>
  );
}

export default AreAllTeenagers;