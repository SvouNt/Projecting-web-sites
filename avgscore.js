function calculateAverage(data){
    if (!Array.isArray(data) || data.length === 0) return 0; 
    const sum = data.reduce((acc, item) => acc + item.score, 0); 
    return sum / data.length;
}

module.exports = { calculateAverage };