//2. Hiển thị thông tin của từng người trong một danh sách gồm 10 người, 
// mỗi người có tên và tuổi ra danh sách ul
import React from 'react';
import './ListPerson.css';

function ListPerson() {
    // Constants
    const TEENAGER_MIN_AGE = 10;
    const TEENAGER_MAX_AGE = 20;

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

    // Helper function to check if person is teenager
    const isTeenager = (age) => age >= TEENAGER_MIN_AGE && age <= TEENAGER_MAX_AGE;

    // Task 1: Find first teenager
    const firstTeenager = people.find(person => isTeenager(person.age));
    
    // Task 2: Find all teenagers
    const allTeenagers = people.filter(person => isTeenager(person.age));
    
    // Task 3: Check if every person is teenager
    const allAreTeenagers = people.every(person => isTeenager(person.age));
    
    // Task 4: Check if any person is teenager
    const anyTeenager = people.some(person => isTeenager(person.age));
    
    // Task 5: Sort by name (ascending), then age (descending)
    const sortedPeople = [...people].sort((a, b) => {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        }
        return b.age - a.age;
    });

    return (
        <div className="container">
            <h1>📊 People Management System</h1>

            {/* Task 1: List of People */}
            <div className="section">
                <div className="section-title">1️⃣ List of All People</div>
                <div className="list-container">
                    <ul>
                        {people.map((person, index) => (
                            <li key={index}>
                                {person.name} <span style={{color: '#999'}}>({person.age} years old)</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Task 2: First Teenager */}
            <div className="section">
                <div className="section-title">2️⃣ Find First Teenager (Age {TEENAGER_MIN_AGE}-{TEENAGER_MAX_AGE})</div>
                <div className="result-box">
                    {firstTeenager ? (
                        `${firstTeenager.name} is ${firstTeenager.age} years old`
                    ) : (
                        'No teenager found.'
                    )}
                </div>
            </div>

            {/* Task 3: All Teenagers */}
            <div className="section">
                <div className="section-title">3️⃣ Find All Teenagers (Age {TEENAGER_MIN_AGE}-{TEENAGER_MAX_AGE})</div>
                <div className="list-container">
                    {allTeenagers.length > 0 ? (
                        <ul>
                            {allTeenagers.map((person, index) => (
                                <li key={index}>
                                    {person.name} <span style={{color: '#999'}}>({person.age} years old)</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{color: '#999'}}>No teenagers found.</p>
                    )}
                </div>
            </div>

            {/* Task 4: Every Person is Teenager */}
            <div className="section">
                <div className="section-title">4️⃣ Is Every Person a Teenager?</div>
                <div className={`result-box ${allAreTeenagers ? 'true' : 'false'}`}>
                    Result: <strong>{allAreTeenagers ? 'TRUE ✓' : 'FALSE ✗'}</strong>
                </div>
            </div>

            {/* Task 5: Any Person is Teenager */}
            <div className="section">
                <div className="section-title">5️⃣ Is Any Person a Teenager?</div>
                <div className={`result-box ${anyTeenager ? 'true' : 'false'}`}>
                    Result: <strong>{anyTeenager ? 'TRUE ✓' : 'FALSE ✗'}</strong>
                </div>
            </div>

            {/* Task 6: Sorted Table */}
            <div className="section">
                <div className="section-title">6️⃣ Sorted List (Name ↑ | Age ↓)</div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedPeople.map((person, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListPerson;