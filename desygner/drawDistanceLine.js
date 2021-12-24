// check if rectangle is rotated
const isRotated = (coord) => {
    return !(coord.x1 === coord.x3 && coord.y1 === coord.y2);
}

const closestPoints = (selectedCoord, hoverCoord) => {
    if (!isRotated(selectedCoord) && !isRotated(hoverCoord)) {
        const inscribedRecCoord = {
            x1: (selectedCoord.x1 + selectedCoord.x2) / 2,
            y1: selectedCoord.y1,
            x2: selectedCoord.x2,
            y2: (selectedCoord.y2 + selectedCoord.y3) / 2,
            x3: selectedCoord.x3,
            y3: (selectedCoord.y3 + selectedCoord.y1) / 2,
            x4: (selectedCoord.x3 + selectedCoord.x4) / 2,
            y4: selectedCoord.y3
        }
        selectedCoord = inscribedRecCoord;
    }

    const selectedPoints = coordToPoint(selectedCoord);
    const hoverPoints = coordToPoint(hoverCoord);

    let selectedPoint, hoverPoint;
    let minDistance = Infinity;

    for (let i = 0; i < selectedPoints.length; i++) {
        for (let j = 0; j < hoverPoints.length; j++) {
            const distance = calculateDistance(selectedPoints[i], hoverPoints[j]);
            if (distance < minDistance) {
                minDistance = distance;
                selectedPoint = selectedPoints[i];
                hoverPoint = hoverPoints[j];
            }
        }
    }

    return {
        selectedPoint: selectedPoint,
        hoverPoint: hoverPoint
    };


}


const drawDistanceLine = (selectedCoord, hoverCoord) => {


}

const coordToPoint = (coord) => {
    const points = [
        [coord.x1, coord.y1],
        [coord.x2, coord.y2],
        [coord.x3, coord.y3],
        [coord.x4, coord.y4],
    ]
    return points;
}

const calculateDistance = (selectedPoint, hoverPoint) => {
    const xDistance = selectedPoint[0] - hoverPoint[0];
    const yDistance = selectedPoint[1] - hoverPoint[1];
    return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

const isOverlap = (a, b) => {
    const aPoints = coordToPoint(a);
    const bPoints = coordToPoint(b);
    const polygons = [aPoints, bPoints];

    polygons.forEach(polygon => {
        for (let i = 0; i < polygon.length; i++) {
            let j = (i + 1) % polygon.length;
            let p1 = polygon[i];
            let p2 = polygon[j];
            let normal = { x: p2[1] - p1[1], y: p1[0] - p2[0] };

            let minA = null;
            let maxA = null;
            aPoints.forEach(p => {
                let projected = normal.x * p[0] + normal.y * p[1];
                if (minA === null || projected < minA) {
                    minA = projected;
                }
                if (maxA === null || projected > maxA) {
                    maxA = projected;
                }
            })

            let minB = null;
            let maxB = null;
            bPoints.forEach(p => {
                var projected = normal.x * p[0] + normal.y * p[1];
                if (minB == null || projected < minB)
                    minB = projected;
                if (maxB == null || projected > maxB)
                    maxB = projected;
            })

            if (maxA < minB || maxB < minA)
                return false;
        }
    });
    return true;

}

console.log(123);

const selectedCoord = {
    x1: 1,
    y1: 2,
    x2: 3,
    y2: 2,
    x3: 1,
    y3: 1,
    x4: 3,
    y4: 1
}

const hoverCoord = {
    x1: 4,
    y1: 4,
    x2: 6,
    y2: 6,
    x3: 5,
    y3: 3,
    x4: 7,
    y4: 5
}

const tempCoord = {
    x1: 4,
    y1: 4,
    x2: 7,
    y2: 7,
    x3: 5,
    y3: 3,
    x4: 8,
    y4: 6
}

console.log(isRotated(selectedCoord));
console.log(isRotated(hoverCoord));
console.log(closestPoints(selectedCoord, hoverCoord));
console.log(closestPoints(hoverCoord, selectedCoord));
console.log(isOverlap(selectedCoord, hoverCoord));