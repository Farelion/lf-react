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
        stats: [],
        itemClass: [],
        itemSubClass: [],
        itemType: []
      };
    }


    componentDidMount(){

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://wow.zamimg.com/widgets/power.js";
      script.async = false;
      
      document.head.appendChild(script);
    };
    componentDidUpdate(){
      this.$WowheadPower.refreshLinks();
    }



    statChange = (e) => {
            // checking if we should remove clicked value or add
            if( this.state.stats.includes(e) ){

              // find index of e and splice it from array, state copy to not work on state other way than setState
              var index = this.state.stats.indexOf(e);
              var stateCopy = this.state.stats
              stateCopy.splice(index, 1)
              var stateSpliced = stateCopy
              this.setState({
                stats: stateSpliced
              })
      
            } else{
              // just add e to existing array
              this.setState(prevState => ({
                stats: [...prevState.stats, e]
              }))
            }
    }

    classChange = (e) => {
      // checking if we should remove clicked value or add
      if( this.state.itemClass.includes(e) ){

        // find index of e and splice it from array, state copy to not work on state other way than setState
        var index = this.state.itemClass.indexOf(e);
        var stateCopy = this.state.itemClass
        stateCopy.splice(index, 1)
        var stateSpliced = stateCopy
        this.setState({
          itemClass: stateSpliced
        })

      } else{
        // just add e to existing array
        this.setState(prevState => ({
          itemClass: [...prevState.itemClass, e]
        }))
      }
    }

    subClassChange = (e) => {
            // checking if we should remove clicked value or add
            if( this.state.itemSubClass.includes(e) ){

              // find index of e and splice it from array, state copy to not work on state other way than setState
              var index = this.state.itemSubClass.indexOf(e);
              var stateCopy = this.state.itemSubClass
              stateCopy.splice(index, 1)
              var stateSpliced = stateCopy
              this.setState({
                itemSubClass: stateSpliced
              })
      
            } else{
              // just add e to existing array
              this.setState(prevState => ({
                itemSubClass: [...prevState.itemSubClass, e]
              }))
            }
    }

    itemType = (e) => {
          // checking if we should remove clicked value or add
          if( this.state.itemType.includes(e) ){

            // find index of e and splice it from array, state copy to not work on state other way than setState
            var index = this.state.itemType.indexOf(e);
            var stateCopy = this.state.itemType
            stateCopy.splice(index, 1)
            var stateSpliced = stateCopy
            this.setState({
              itemType: stateSpliced
            })

          } else{
            // just add e to existing array
            this.setState(prevState => ({
              itemType: [...prevState.itemType, e]
            }))
          }
    }


    render(){
        return <div className="main">
            <h1 className="main-big-text">Lootfinder</h1>
            <p className="main-small-text">Check where you can find loot you need!</p>
            
            <div className="filter-controls-wrapper">

              <div className="filter-item statistics">
                <div className="left-text">Statistics:</div>
                <div className="buttons">
                  <button id="crit" value="Critical Strike" onClick={((e) => {this.statChange(e.target.value); })}><p>Critical Strike</p></button>
                  <button id="haste" value="Haste" onClick={((e) => {this.statChange(e.target.value); })}><p>Haste</p></button>
                  <button id="mastery" value="Mastery" onClick={((e) => {this.statChange(e.target.value); })}><p>Mastery</p></button>
                  <button id="vers" value="Versatility" onClick={((e) => {this.statChange(e.target.value); })}><p>Versatility</p></button>
                </div>
              </div>

              <div className="filter-item item-type">
                <div className="left-text">Item type:</div>
                <div className="buttons">
                  <button value="Weapon" onClick={((e) => this.classChange(e.target.value))}><p>Weapon</p></button>
                  <button value="Armor" onClick={((e) => this.classChange(e.target.value))}><p>Armor</p></button>
                  <button value="Trinket" onClick={((e) => this.itemType(e.target.value))}><p>Trinket</p></button>
                </div>
              </div>

              <div className="filter-item armor-class">
                <div className="left-text">Armor class:</div>
                <div className="buttons">
                  <button value="Cloth" onClick={((e) => this.subClassChange(e.target.value))}><p>Cloth</p></button>
                  <button value="Leather" onClick={((e) => this.subClassChange(e.target.value))}><p>Leather</p></button>
                  <button value="Mail" onClick={((e) => this.subClassChange(e.target.value))}><p>Mail</p></button>
                  <button value="Plate" onClick={((e) => this.subClassChange(e.target.value))}><p>Plate</p></button>
                </div>
              </div>

              <div className="filter-item armor-type">
                <div className="left-text">Armor type:</div>
                <div className="buttons">
                  <button value="Head" onClick={((e) => this.itemType(e.target.value))}><p>Head</p></button>
                  <button value="Shoulder" onClick={((e) => this.itemType(e.target.value))}><p>Shoulder</p></button>
                  <button value="Cloak"onClick={((e) => this.itemType(e.target.value))}><p>Cloak</p></button>
                  <button value="Chest" onClick={((e) => this.itemType(e.target.value))}><p>Chest</p></button>
                  <button value="Wrist" onClick={((e) => this.itemType(e.target.value))}><p>Wrist</p></button>
                  <button value="Hands" onClick={((e) => this.itemType(e.target.value))}><p>Hands</p></button>
                  <button value="Waist" onClick={((e) => this.itemType(e.target.value))}><p>Waist</p></button>
                  <button value="Legs" onClick={((e) => this.itemType(e.target.value))}><p>Legs</p></button>
                  <button value="Feet" onClick={((e) => this.itemType(e.target.value))}><p>Feet</p></button>
                  <button value="Finger" onClick={((e) => this.itemType(e.target.value))}><p>Ring</p></button>
                </div>
              </div>

              <div className="filter-item weapon-type">
                <div className="left-text">Weapon type:</div>
                <div className="buttons">
                  <button value="One-hand" onClick={((e) => this.itemType(e.target.value))}><p>One-hand</p></button>
                  <button value="Ranged" onClick={((e) => this.itemType(e.target.value))}><p>Ranged</p></button>
                  <button value="Two-Hand" onClick={((e) => this.itemType(e.target.value))}><p>Two-hand</p></button>
                  <button value="Held In Off-hand" onClick={((e) => this.itemType(e.target.value))}><p>Off-hand</p></button>
                </div>
              </div>

              <div className="filter-item weapon-class">
                <div className="left-text">Weapon class:</div>
                <div className="buttons">
                  <button value="Mace" onClick={((e) => this.subClassChange(e.target.value))}><p>Mace</p></button>
                  <button value="Axe" onClick={((e) => this.subClassChange(e.target.value))}><p>Axe</p></button>
                </div>
              </div>

            </div>

            <div className="dungeons-wrapper">
              <div className="dungeons">
                <Ad dungeons={dungeons} state={this.state}/>
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
