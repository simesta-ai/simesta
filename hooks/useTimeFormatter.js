

const useTimeFormatter = (timeInSeconds) => {
    let time = "";
    if (timeInSeconds < 60) {
        time = `0: ${timeInSeconds}`
    } else if(timeInSeconds >= 60 && timeInSeconds < 3600) {
        time = `${Math.floor(timeInSeconds / 60)}:${timeInSeconds % 60 > 10 ? timeInSeconds % 60 : `0${timeInSeconds % 60}`}`
    } else if(timeInSeconds >= 3600 && timeInSeconds < 86400) {
        time = `${Math.floor(timeInSeconds / 3600)}:${Math.floor((timeInSeconds % 3600) / 60)}:${timeInSeconds % 60 > 10 ? timeInSeconds % 60 : `0${timeInSeconds % 60}`} `
    } else if(timeInSeconds >= 86400 && timeInSeconds < 604800) {
        time = `${Math.floor(timeInSeconds / 86400)} days ${Math.floor((timeInSeconds % 86400) / 3600)} hours`
    } else if(timeInSeconds >= 604800) {
        time = `${Math.floor(timeInSeconds / 604800)} weeks`
    }
    return time
}

export default useTimeFormatter;