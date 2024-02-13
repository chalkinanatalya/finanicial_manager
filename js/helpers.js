export const convertStringNumber = (n) => {
    const noSpaceStr = n.replace(/\s+/g, '');
    const num = parseFloat(noSpaceStr);

    if(!isNaN(num) && isFinite(num)) {
        return num;
    } else {
        false;
    }
}

export const reformateDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${month.padStart(2, '0')}.${day.padStart(2, '0')}.${year}`;
}