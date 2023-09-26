import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState({
    id: 57,
    advice:
      "It is easy to sit up and take notice , what's difficult is getting up and taking action",
  });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setCount(data.slip);
      })
      .catch((error) => {
        console.error("Erro ao buscar o conselho da API:", error);
      });
  }, [isActive]);

  return (
    <>
      <section>
        <h2>A D V I C E # {count.id}</h2>
        <p className="advice">{count.advice}</p>
        <span className="devide"></span>
      </section>
      <button
        onClick={(currentState) =>
          setIsActive((currentState) => !currentState)
        }></button>
    </>
  );
}

export default App;
