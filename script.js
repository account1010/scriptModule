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
    if (typeof url === "string"){
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

const write = {
    info:function(...data){
        console.log(...data);
    },
    warn:function(...data){
        console.warn(...data);
    },
    error:function(data){
        throw new Error(data)
    }
}

//loop command
const loop = {
    arrayEach: function (array, callbackfn){
        if (Array.isArray(array)) {
            array.forEach((item, index) => {
                callbackfn(item, index);
            });
        }
    },
    objectEach: function(object,callbackfn){
        for(let i in object){
            let b = object[`${i}`]
            callbackfn(i,b)
        }
    }
};

function download(data,name,langue){
    if(typeof data == "string" || (typeof data == "number" && !isNaN(data)) && typeof langue == "string" && typeof name == "string"){
        const blob = new Blob([data],{type:'text/plain'})
        const create = document.createElement("a")
        create.href = URL.createObjectURL(blob)
        create.download = name+"."+langue
        create.click()
    }
}
