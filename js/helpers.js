export const convertStringNumber = (n) => {
    const noSpaceStr = String(n).replace(/\s+/g, '');
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

export const animationNumber = (element, number) => {
    const fps = 60;
    const duration = 1000;
    const frameDuration = duration / fps;
    const totalFrame = Math.round(duration / frameDuration);

    let currentFrame = 0;

    const initialNumber = parseInt(element.textContent.replace(/[^0-9.-]+/g, ''));
    const increment = Math.trunc((number - initialNumber) / totalFrame);

    const animate = () => {
        currentFrame += 1;
        const newNumber = initialNumber + increment * currentFrame;
        element.textContent = `${number.toLocaleString()} $`;

        if(currentFrame < totalFrame) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = `${number.toLocaleString()} $`
        }
    }

    requestAnimationFrame(animate)
}