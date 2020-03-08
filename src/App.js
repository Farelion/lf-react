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
        return <div>
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
    }
}

export default App;
