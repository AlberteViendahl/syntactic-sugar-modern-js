import Image from "next/image";
//hurtig måde at lave en map funktion på
/* export default function Home() {
  const arr = [1, 2, 3, 4, 5];

  const doubled = arr.map(function (num) {
    return num * 2;
  });
  console.log(doubled); // [2, 4, 6, 8, 10]

  return <div></div>;
} */

//mindre kode ikke curly boys, lettere at læse end ^
/* export default function Home() {
  const arr = [1, 2, 3, 4, 5];

  const doubled = arr.map((num) => num * 2);

  console.log(doubled); // [2, 4, 6, 8, 10]
  return <div></div>;
} */

/* export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  const first = arr[0];
  const second = arr[1];
  console.log(first, second); // 1 2

  const user = {
    id: 10001,
    name: "Sam",
    email: "sam74@gmail.com",
  };
  const name = user.name;
  console.log(name); // Sam
  return <div></div>;
} */

//igen er der mindre kode, man kan også skrive first og secound på samme linje istedet for hver sit
/* export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  const [first, second] = arr;
  console.log(first, second); // 1 2

  const user = {
    id: 10001,
    name: "Sam",
    email: "sam74@gmail.com",
  };
  const { name } = user;
  console.log(name); // Sam
  return <div></div>;
} */

/* export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  const [first, second, ...remaining] = arr;
  console.log(first, second, remaining); // 1 2 [3, 4, 5]

  const user = {
    id: 10001,
    name: "Sam",
    email: "sam74@gmail.com",
  };
  const { name, ...rest } = user;
  console.log(name); // Sam
  console.log(rest); // {id: 10001, email: "sam74@gmail.com"}
  return <div></div>;
} */
//hvis du fjerner name i const så der kun står ...rest og console loggen så kommer alt frem op samme linje

export default function Home() {
  const user = {
    id: 10001,
    name: "Sam",
    email: "sam74@gmail.com",
  };
  const { name: firstName } = user;
  console.log(firstName); // Sam
  return <div></div>;
}
