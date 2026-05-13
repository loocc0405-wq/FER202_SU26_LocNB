import logo from './logo.svg';
import './App.css';

function App() {
  //Khai báo hàm chao1 nhận 1 tham số name, in ra lời chào
  //tên đó ở console
  let chao1 = (name) => console.log(`Xin chao, ${name}!`);
  //Khai báo 1 đối tượng Person có các thuộc tính id, name, age, address
  let person = {
    id: 1,
    name: "LocNB",
    age: 20,
    address: "123 Nguyen Trai, Hanoi"
  };
  //In thông tin của đối tượng Person ra thẻ card trong React
  return (
  <>
    <h1>Xin chào, đây là bài tập về nhà trong React</h1>
    <h2>Tôi là LocNB</h2>

    <button onClick={() => chao1("LocNB")}>
      Gọi hàm chao1
    </button>

    <div className="card">
      <h3>Thông tin cá nhân</h3>
      <p>ID: {person.id}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
    </div>
  </>
);
}
export default App;
