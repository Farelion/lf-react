import React from 'react';

import Dos from './dungeons/sl/dos.js'
import Hoa from './dungeons/sl/hoa.js'
import Mots from './dungeons/sl/mots.js'
import Pf from './dungeons/sl/pf.js'
import Sd from './dungeons/sl/sd.js'
import Soa from './dungeons/sl/soa.js'
import Nw from './dungeons/sl/nw.js'
import Top from './dungeons/sl/top.js'


var data = require('./db/db.json');
var dungeons = data.dungeons;

console.log(data.dungeons.length)



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
      // //adding wowhead tooltip script
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://wow.zamimg.com/widgets/power.js";
      script.async = true;
      
      document.body.appendChild(script);



      //// adding toggle class to control buttons
      // select all buttons
      let buttons = document.querySelectorAll("button");

      // addeventlisteners to buttons
      buttons.forEach(function(elem) {
        elem.addEventListener('click', () => {
          elem.classList.toggle("clicked")

        });
      });

      //// header hide dungeon
      let dungeonHeader = document.querySelectorAll(".dungeon-header");



      // addeventlisteners to dungeon-header, so we can collapse clicked dungeon
      dungeonHeader.forEach(function(elem) {
        elem.addEventListener('click', () => {
          if(elem.parentNode.classList.contains("hidden")){
            elem.querySelector(".header-arrow").classList.remove('active')
            elem.parentNode.querySelector(".dungeon-items").classList.remove('hidden')
            elem.parentNode.classList.remove('hidden')
          }
          else{
            elem.querySelector(".header-arrow").classList.add('active')
            elem.parentNode.querySelector(".dungeon-items").classList.add('hidden')
            elem.parentNode.classList.add('hidden')
          }

        });
      });


    };


    componentDidUpdate(){
      //// refrehing links after rerendering of dungeons items 
      window.$WowheadPower.refreshLinks();


      //// adding class to hide dungeons when no items were found in that dungeon
      let dungeonItemsWrap = document.querySelectorAll(".dungeon-items");
      dungeonItemsWrap.forEach(function(elem) {
        if(elem.hasChildNodes()){
          elem.parentNode.classList.remove('no-items')
        }
        else{
          elem.parentNode.classList.add('no-items')
        }
      });
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
                  <button value="Back"onClick={((e) => this.itemType(e.target.value))}><p>Cloak</p></button>
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
                  <button value="One-Hand" onClick={((e) => this.itemType(e.target.value))}><p>One-hand</p></button>
                  <button value="Two-Hand" onClick={((e) => this.itemType(e.target.value))}><p>Two-hand</p></button>
                  <button value="Ranged" onClick={((e) => this.itemType(e.target.value))}><p>Ranged</p></button>
                  <button value="Off Hand" onClick={((e) => this.itemType(e.target.value))}><p>Off Hand</p></button>
                  <button value="Held In Off-hand" onClick={((e) => this.itemType(e.target.value))}><p>Held In Off-hand</p></button>
                </div>
              </div>

              <div className="filter-item weapon-class">
                <div className="left-text">Weapon class:</div>
                <div className="buttons">
                  <button value="Dagger" onClick={((e) => this.subClassChange(e.target.value))}><p>Dagger</p></button>
                  <button value="Sword" onClick={((e) => this.subClassChange(e.target.value))}><p>Sword</p></button>
                  <button value="Mace" onClick={((e) => this.subClassChange(e.target.value))}><p>Mace</p></button>
                  <button value="Axe" onClick={((e) => this.subClassChange(e.target.value))}><p>Axe</p></button>
                  <button value="Warglaives" onClick={((e) => this.subClassChange(e.target.value))}><p>Warglaives</p></button>
                  <button value="Fist Weapon" onClick={((e) => this.subClassChange(e.target.value))}><p>Fist Weapon</p></button>
                  <button value="Polearm" onClick={((e) => this.subClassChange(e.target.value))}><p>Polearm</p></button>
                  <button value="Staff" onClick={((e) => this.subClassChange(e.target.value))}><p>Staff</p></button>
                  <button value="Bow" onClick={((e) => this.subClassChange(e.target.value))}><p>Bow</p></button>
                  <button value="Crossbow" onClick={((e) => this.subClassChange(e.target.value))}><p>Crossbow</p></button>
                  <button value="Gun" onClick={((e) => this.subClassChange(e.target.value))}><p>Gun</p></button>
                  <button value="Wand" onClick={((e) => this.subClassChange(e.target.value))}><p>Wand</p></button>
                  <button value="Shield" onClick={((e) => this.subClassChange(e.target.value))}><p>Shield</p></button>
                </div>
              </div>

            </div>

            <div className="dungeons-wrapper">
              <div className="dungeons">
                <Dos dungeons={dungeons} state={this.state}/>
                <Hoa dungeons={dungeons} state={this.state}/>
                <Mots dungeons={dungeons} state={this.state}/>
                <Pf dungeons={dungeons} state={this.state}/>
                <Sd dungeons={dungeons} state={this.state}/>
                <Soa dungeons={dungeons} state={this.state}/>
                <Nw dungeons={dungeons} state={this.state}/>
                <Top dungeons={dungeons} state={this.state}/>
              </div>
            </div>

            <footer></footer>
        </div>
    }
}

export default App;
