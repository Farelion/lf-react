import React from 'react';


function under(props){

return <div className="under dungeon">
    <div className="dungeon-header">
        <div className="header-text">Underrot</div>
    </div>

    <div className="dungeon-items">
        {
        props.dungeons.under.map((item,i) => {
            return <div className="item" key={i}>

            <a 
            href={"https://www.wowhead.com/item=" + item.itemId}
            data-wowhead={"item=" + item.itemId}
            stats={
                    item.stats.map((stats,i) => {
                    return stats.statName
                    }) 
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

export default under;