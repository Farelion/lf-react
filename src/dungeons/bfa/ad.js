import React from 'react';


function atal(props){

return <div className="ad dungeon">

    <div className="dungeon-header">
        <div className="header-text">Atal'Dazar</div>
    </div>

    <div className="dungeon-items">
        {
        props.dungeons.ad.map((item,i) => {
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
        })
        }
    </div>
    
</div>

}

export default atal;