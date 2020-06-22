import React from 'react';


function atal(props){

return <div className="ad dungeon">

    <div className="dungeon-header">
        <div className="header-text">Atal'Dazar</div>
    </div>

    <div className="dungeon-items">
        { // eslint-disable-next-line
        props.dungeons.ad.map((item,i) => {
                const itemStats =  
                    item.stats.map((stats,i) => {
                    return stats.statName + " "
                    }).join('');

                var len = 0;
                var classLen = 0;
                var itemTypelen = 0;

                
                if (!(props.state.stats.length === 0)){

                    if ( props.state.stats.length === 1 ){
                        if(itemStats.includes(props.state.stats)){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }
                    } 

                    else if ( props.state.stats.length === 2 ){
                        if(itemStats.includes(props.state.stats[0]) && itemStats.includes(props.state.stats[1])){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }
                    } 
                    
                    else if ( props.state.stats.length === 3 ){
                        if(itemStats.includes(props.state.stats[0]) && itemStats.includes(props.state.stats[1]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        } 

                        else if (itemStats.includes(props.state.stats[0]) && itemStats.includes(props.state.stats[2]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        } 
                        
                        else if (itemStats.includes(props.state.stats[1]) && itemStats.includes(props.state.stats[2]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        } 
                    }
                    else if ( props.state.stats.length === 4){
                        if (itemStats.includes(props.state.stats[0])){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }

                        else if (itemStats.includes(props.state.stats[1]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }

                        else if (itemStats.includes(props.state.stats[2]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }

                        else if (itemStats.includes(props.state.stats[3]) ){
                            if(!(props.state.itemClass.length === 0)){
                                for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                                    if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                        if(!(props.state.itemSubClass.length === 0)){
                                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                                    if(!(props.state.itemType.length === 0)){
                                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                                return <div className="item" key={i}>
                                                                <a 
                                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                                data-wowhead={"item=" + item.itemId}
                                                                stats={
                                                                        item.stats.map((stats,i) => {
                                                                        return stats.statName + " "
                                                                        }).join('')
                                                                    }
                                                                item-type={item.itemInvType}
                                                                item-sub-class={item.itemSubClass}
                                                                item-class={item.itemClass}
                                                                >{item.itemName}</a>
                                                                </div>
            
            
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        // stats, class, subclass, no itemtype
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                        else{ // stats, class, no subclass, itemtype
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, no subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                            }
                            else{ // stats, no class, no subclass, no itemtype
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, no class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                    else{
                                        // stats, no class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            } 
                        }
                    }

                } 
                else { // no stats, class subclass itemtype check
                    if(!(props.state.itemClass.length === 0)){
                        for (classLen = 0; classLen < props.state.itemClass.length; classLen++) {
                            if(item.itemClass.includes(props.state.itemClass[classLen]) ){
                                if(!(props.state.itemSubClass.length === 0)){
                                    for (len = 0; len < props.state.itemSubClass.length; len++) {
                                        if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                            if(!(props.state.itemType.length === 0)){
                                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                        return <div className="item" key={i}>
                                                        <a 
                                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                                        data-wowhead={"item=" + item.itemId}
                                                        stats={
                                                                item.stats.map((stats,i) => {
                                                                return stats.statName + " "
                                                                }).join('')
                                                            }
                                                        item-type={item.itemInvType}
                                                        item-sub-class={item.itemSubClass}
                                                        item-class={item.itemClass}
                                                        >{item.itemName}</a>
                                                        </div>
    
    
                                                    }
                                                }
                                            }
                                            else{
                                                // stats, class, subclass, no itemtype
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>
                                            }
                                        }
                                    }
                                }
                                else{ // stats, class, no subclass, itemtype
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>


                                            }
                                        }
                                    }
                                    else{
                                        // stats, class, no subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            }
                        }
                    }
                    else{ // stats, no class, no subclass, no itemtype
                        if(!(props.state.itemSubClass.length === 0)){
                            for (len = 0; len < props.state.itemSubClass.length; len++) {
                                if(item.itemSubClass.includes(props.state.itemSubClass[len]) ){
                                    if(!(props.state.itemType.length === 0)){
                                        for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                            if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                                return <div className="item" key={i}>
                                                <a 
                                                href={"https://www.wowhead.com/item=" + item.itemId}
                                                data-wowhead={"item=" + item.itemId}
                                                stats={
                                                        item.stats.map((stats,i) => {
                                                        return stats.statName + " "
                                                        }).join('')
                                                    }
                                                item-type={item.itemInvType}
                                                item-sub-class={item.itemSubClass}
                                                item-class={item.itemClass}
                                                >{item.itemName}</a>
                                                </div>


                                            }
                                        }
                                    }
                                    else{
                                        // stats, class, subclass, no itemtype
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            }
                        }
                        else{ // stats, no class, no subclass, itemtype
                            if(!(props.state.itemType.length === 0)){
                                for (itemTypelen = 0; itemTypelen < props.state.itemType.length; itemTypelen++) {
                                    if(item.itemInvType.includes(props.state.itemType[itemTypelen]) ){
                                        return <div className="item" key={i}>
                                        <a 
                                        href={"https://www.wowhead.com/item=" + item.itemId}
                                        data-wowhead={"item=" + item.itemId}
                                        stats={
                                                item.stats.map((stats,i) => {
                                                return stats.statName + " "
                                                }).join('')
                                            }
                                        item-type={item.itemInvType}
                                        item-sub-class={item.itemSubClass}
                                        item-class={item.itemClass}
                                        >{item.itemName}</a>
                                        </div>
                                    }
                                }
                            }
                            else{
                                // stats, no class, no subclass, no itemtype
                                return <div className="item" key={i}>
                                <a 
                                href={"https://www.wowhead.com/item=" + item.itemId}
                                data-wowhead={"item=" + item.itemId}
                                stats={
                                        item.stats.map((stats,i) => {
                                        return stats.statName + " "
                                        }).join('')
                                    }
                                item-type={item.itemInvType}
                                item-sub-class={item.itemSubClass}
                                item-class={item.itemClass}
                                >{item.itemName}</a>
                                </div>
                            }
                        }
                    } 
                }
        })
        
        }
    </div>
    
</div>

}

export default atal;