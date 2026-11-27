function filterFailed(data, passScore){
    if (!Array.isArray(data)) return []; 
    return data 
        .filter(item => item.score < passScore) 
        .map(item => item.name);
}

module.exports = { filterFailed };