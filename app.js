const segments = {
    0: ['a', 'b', 'c', 'd', 'e', 'f'],
    1: ['b', 'c'],
    2: ['a', 'b', 'd', 'e', 'g'],
    3: ['a', 'b', 'c', 'd', 'g'],
    4: ['b', 'c', 'f', 'g'],
    5: ['a', 'c', 'd', 'f', 'g'],
    6: ['a', 'c', 'd', 'e', 'f', 'g'],
    7: ['a', 'b', 'c'],
    8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    9: ['a', 'b', 'c', 'd', 'f', 'g']
};

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const time = [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];

    document.querySelectorAll('.digit').forEach((digit, index) => {
        const number = parseInt(time[index]);
        digit.innerHTML = '';
        for (let segment of ['a', 'b', 'c', 'd', 'e', 'f', 'g']) {
            const segmentDiv = document.createElement('div');
            segmentDiv.classList.add('segment', segment);
            if (segments[number].includes(segment)) {
                segmentDiv.classList.add('on');
            }
            digit.appendChild(segmentDiv);
        }
    });
}

setInterval(updateClock, 1000);
updateClock();
