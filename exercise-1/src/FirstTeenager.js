import React from "react";

function FirstTeenager() {
  const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 14 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 17 }
  ];

  // Tìm người đầu tiên có tuổi từ 13 đến 19
  const teenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>
          Name: {teenager.name}, Age: {teenager.age}
        </p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;