import './App.css';

const memberList = [
    {
      id: 1,
      first_name: "Guntar",
      age: 88,
    },
    {
      id: 2,
      first_name: "Birch",
      age: 37,
    },
    {
      id: 3,
      first_name: "Galvin",
      age: 5,
    },
    {
      id: 4,
      first_name: "Karine",
      age: 80,
    },
    {
      id: 5,
      first_name: "Lew",
      age: 87,
    },
    {
      id: 6,
      first_name: "Garrott",
      age: 58,
    },
    {
      id: 7,
      first_name: "Susanna",
      age: 95,
    },
    {
      id: 8,
      first_name: "Hanna",
      age: 46,
    },
    {
      id: 9,
      first_name: "Jase",
      age: 37,
    },
    {
      id: 10,
      first_name: "Reuven",
      age: 59,
    },
  ];
  const filteredList = memberList.filter((member) => {
    return member.age < 50;
  });

function App() {
  return (
        <table>
        <thead>
          <th>
            <td>Name</td>
            <td>Age</td>
          </th>
        </thead>
        <tbody>
          {filteredList.map((member) => (
            <tr>
              <td>
                <strong>Name: </strong> {member.first_name}
              </td>
              <strong>Age: {member.age}</strong>
            </tr>
          ))}
        </tbody>
      </table>
      );  
}

export default App;
