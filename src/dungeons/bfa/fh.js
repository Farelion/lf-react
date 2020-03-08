import React from 'react';

function fh(props){

return <div className="fh">
    {
    props.dungeons.fh.map((item,i) => {
        return <div key={i}>

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

}

export default fh;