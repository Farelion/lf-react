import React from 'react';
import Ad from './dungeons/bfa/ad.js'
import Fh from './dungeons/bfa/fh.js'
import Kr from './dungeons/bfa/kr.js'
import Mechagon from './dungeons/bfa/mechagon.js'
import Ml from './dungeons/bfa/ml'
import Sob from './dungeons/bfa/sob'
import Sots from './dungeons/bfa/sots.js'
import Td from './dungeons/bfa/td.js'
import Tos from './dungeons/bfa/tos.js'
import Under from './dungeons/bfa/under.js'
import Wm from './dungeons/bfa/wm.js'

var data = require('./db/db.json');
var dungeons = data.dungeons;

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      };
    }

    render(){
        return <div className="main">
            <h1 className="main-big-text">Lootfinder</h1>
            <p className="main-small-text">Check where you can find loot you need!</p>
            
            <div className="filter-controls-wrapper">

              <div className="filter-item statistics">
                <div className="left-text">Statistics:</div>
                <div className="buttons">
                  <button><p>Critical Strike</p></button>
                  <button><p>Haste</p></button>
                  <button><p>Mastery</p></button>
                  <button><p>Versatility</p></button>
                </div>
              </div>

              <div className="filter-item item-type">
                <div className="left-text">Item type:</div>
                <div className="buttons">
                  <button><p>Weapon</p></button>
                  <button><p>Armor</p></button>
                  <button><p>Trinket</p></button>
                </div>
              </div>

              <div className="filter-item armor-class">
                <div className="left-text">Armor class:</div>
                <div className="buttons">
                  <button><p>Cloth</p></button>
                  <button><p>Leather</p></button>
                  <button><p>Mail</p></button>
                  <button><p>Plate</p></button>
                </div>
              </div>

              <div className="filter-item armor-type">
                <div className="left-text">Armor type:</div>
                <div className="buttons">
                  <button><p>Head</p></button>
                  <button><p>Shoulder</p></button>
                  <button><p>Cloak</p></button>
                  <button><p>Chest</p></button>
                  <button><p>Wrist</p></button>
                  <button><p>Hands</p></button>
                  <button><p>Waist</p></button>
                  <button><p>Legs</p></button>
                  <button><p>Feet</p></button>
                  <button><p>Ring</p></button>
                </div>
              </div>

              <div className="filter-item weapon-type">
                <div className="left-text">Weapon type:</div>
                <div className="buttons">
                  <button><p>One-hand</p></button>
                  <button><p>Two-hand</p></button>
                  <button><p>Off-hand</p></button>
                </div>
              </div>

              <div className="filter-item weapon-class">
                <div className="left-text">Weapon class:</div>
                <div className="buttons">
                  <button><p>Mace</p></button>
                  <button><p>Axe</p></button>
                </div>
              </div>

              <div className="filter-item trinket-type">
                <div className="left-text">Trinket type:</div>
                <div className="buttons">
                  <button><p>Agility</p></button>
                  <button><p>Intellect</p></button>
                  <button><p>Strength</p></button>
                </div>
              </div>

            </div>

            <div className="dungeons-wrapper">
              <div className="dungeons">
                <Ad dungeons={dungeons}/>
                <Fh dungeons={dungeons}/>
                <Kr dungeons={dungeons}/>
                <Mechagon dungeons={dungeons}/>
                <Ml dungeons={dungeons}/>
                <Sob dungeons={dungeons}/>
                <Sots dungeons={dungeons}/>
                <Td dungeons={dungeons}/>
                <Tos dungeons={dungeons}/>
                <Under dungeons={dungeons}/>
                <Wm dungeons={dungeons}/>
              </div>
            </div>

            <footer></footer>
        </div>
    }
}

export default App;
