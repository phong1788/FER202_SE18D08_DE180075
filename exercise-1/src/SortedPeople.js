import React from "react";

function SortedPeople() {
  const people = [
    { name: "Alice", age: 17, occupation: "Student" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 16, occupation: "Student" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eve", age: 22, occupation: "Designer" },
  ];

  // Sắp xếp theo occupation, sau đó theo age tăng dần
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h3>Sorted by Occupation, then by Age</h3>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;