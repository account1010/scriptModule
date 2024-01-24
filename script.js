//time command

const time = {
    out:function(callbackfn,durationSecond){
        if(typeof callbackfn !== "function"){
            throw new TypeError(callbackfn+" is not a function")
        }
        else{
            setTimeout(callbackfn,durationSecond * 1000)
            return "waiting..."
        }
    },
    interval:function(callbackfn,durationSecond){
        if(typeof callbackfn !== "function"){
            throw new TypeError(callbackfn+" is not a function")
        }
        else{
            setInterval(callbackfn,durationSecond * 1000)
            return "waiting..."
        }
    }
}

//receiveData command
async function receiveData(url) {
    if (typeof url === "string") {
        try{
            const data = await fetch(url);
            const response = await data.text()
            console.log(response)
        }
        catch(error){
            throw new TypeError("failed to receiveData")
        }
    }
}

//write command
function write(...data) {
    const result = data.map(item => {
        if (typeof item === 'symbol') {
            return `Symbol(${item.description || 'Symbol'})`;
        } else if (item === null) {
            return 'null';
        } else if (typeof item === 'function') {
            return 'function';
        } else {
            return item;
        }
    });
    console.log(result);
    console.log(result.join(" "));
}
