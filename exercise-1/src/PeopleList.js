function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Teacher" }
  ];

  const reversedPeople = [...people].reverse();

  return (
    <div>
      <h2>People List</h2>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        {reversedPeople.map((person, index) => (
          <li
            key={index}
            style={{ marginBottom: "0px", lineHeight: "1.1" }} // Rất sát nhau
          >
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
