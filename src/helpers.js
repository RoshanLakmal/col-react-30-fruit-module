function choice(items){
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item){
    const index = items.indexOf(item);
    if (index > -1) {
        return items.splice(index, 1);
    }else{
        return undefined;
    }
    /* Another Way */
    // for(let i=0;i<items.length;i++){
    //     if(items[i] === item){
    //         return [...items.slice(0,i), ...items.slice(i+1)];
    //     }
    // }
}

export {choice,remove}