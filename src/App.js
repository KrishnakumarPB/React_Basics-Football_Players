import './styles.css';
import Playercard from './Playercard';

function App() {
  return (
    <div><h1>Football Players</h1>
    <div className="players">
      
      <Playercard
        imgUrl="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        name="Lionel Messi"
        country="Argentina"
      />
      
      <Playercard
        imgUrl="https://www.thehindu.com/sport/football/pa9c8/article32556500.ece/ALTERNATES/LANDSCAPE_1200/CRISTIANO-RONALDO"
        name="Christiano Ronaldo"
        country="Portugal"
      />
      <Playercard
        imgUrl="https://icdn.psgtalk.com/wp-content/uploads/2021/04/Neymar-Metz-vs-PSG-Ligue-1-2021.jpg"
        name="Neymar Jr"
        country="Brazil"
      />
      <Playercard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuT2B6BTz6sppV3zAq9d2z6n16ShywQfPgmOgY7rQ2zt_OMqeAMZHKoZoRsnwccLM9Og&usqp=CAU"
        name="Andre Iniesta"
        country="Spain"
      />
      <Playercard
        imgUrl="https://images.daznservices.com/di/library/GOAL/30/76/kylian-mbappe-psg-2020-21_erwzgw9j5mn21ba529ez9xme5.jpg?t=-2065268183&quality=100"
        name="Kylian Mbappe"
        country="France"
      />
    </div>
    </div>
    
  );
}

export default App;
