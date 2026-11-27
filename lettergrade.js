function addLetterGrade(data){
    if (!Array.isArray(data)) return []; 
    return data.map(item => ({
         ...item, 
         letter: item.score >= 90 ? "A" : item.score >= 75 ? "B" : "C" 
    }));
}

module.exports = { addLetterGrade };