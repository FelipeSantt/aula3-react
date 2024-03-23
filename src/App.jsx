import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [lightMode, setLightMode] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  const [vetor, setVetor] = useState([0,1,2]);
  const [obj, setObj] = useState({
    nome: 'Felipe',
    horaDeDormir: 22
  });

  function teste() {
    console.log("Testando");
  }

  function anyTime(){
    console.log("Todas as Vezes");
  }
  function oneTime(){
    console.log("Apenas uma Vez");
  }
  function onlyStateChange(){
    console.log("apenas quando uma dependencia mudar");
  }

  useEffect(() => {
    anyTime();
  })

  useEffect(() => {
    oneTime();
  }, []);

  useEffect(() => {
    onlyStateChange();
  }, [vetor]);

  teste();

  return (
    <div style= {{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: lightMode ? 'white' : 'black',
      color: lightMode ? 'black' : 'white',
    }}>
      <button style={{
        backgroundcolor: 'blueviolet',
        color: 'white',
        height: '100px',
        width: '100px'
      }}
      onClick={() => {
        setCount(count + 1);
        setLightMode(!lightMode);
        setParagraph(true);
        }}>
        {count}
      </button>
      {
        paragraph && (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias natus cumque. Temporibus et quasi modi a unde? Veniam doloremque ut voluptatem est suscipit dignissimos provident quia, quis assumenda quaerat.</p>
        )
      }
      <p>
        Nome: {obj.nome}<br/>
        Hora de Dormir: {obj.horaDeDormir}<br/>
        Idade: {obj.idade}<br/>
        <button onClick={() => setObj({...obj, horaDeDormir: 23, idade: 30}) }>
          Hora de Dormir
        </button>
      </p>
    </div>
    
  )
}

export default App;