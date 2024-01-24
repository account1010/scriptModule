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