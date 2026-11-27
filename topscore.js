function findTopStudent(data){
    if (!Array.isArray(data) || data.length === 0) return null; 
    return data.reduce((top, cur) => cur.score > top.score ? cur : top).name;
}

module.exports = { findTopStudent };