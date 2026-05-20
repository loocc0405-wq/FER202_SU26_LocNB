//2. Hiển thị thông tin của từng người dùng trong một danh sách gồm 10 người,
// mỗi người có tên và tuổi ra danh ách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];

    // Check if person is teenager (age >= 10 and age <= 20)
    const isTeenager = (person) => person.age >= 10 && person.age <= 20;

    // 1. Find first teenager
    const firstTeenager = people.find(isTeenager);

    // 2. Find all teenagers
    const allTeenagers = people.filter(isTeenager);

    // 3. Check if every person is teenager
    const everyoneIsTeenager = people.every(isTeenager);

    // 4. Check if any person is teenager
    const anyoneIsTeenager = people.some(isTeenager);

    return (
        <div>
            <h3>All People:</h3>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <strong>{person.name}</strong> - {person.age} years old
                    </li>
                ))}
            </ul>

            <h3>Results:</h3>
            <p><strong>First teenager:</strong> {firstTeenager ? `${firstTeenager.name} (${firstTeenager.age} years old)` : 'None'}</p>
            
            <p><strong>All teenagers ({allTeenagers.length}):</strong></p>
            <ul>
                {allTeenagers.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} years old
                    </li>
                ))}
            </ul>

            <p><strong>Every person is teenager:</strong> {everyoneIsTeenager ? 'True' : 'False'}</p>
            <p><strong>Any person is teenager:</strong> {anyoneIsTeenager ? 'True' : 'False'}</p>
        </div>
    );
}
export default ListPerson;