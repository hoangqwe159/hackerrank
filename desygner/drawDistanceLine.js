// check if rectangle is rotated
const isRotated = coord => {
  return !(coord.x1 === coord.x3 && coord.y1 === coord.y2);
};

const closestPoints = (selectedCoord, hoverCoord) => {
  let selectedPoints, hoverPoints;
  let minDistance;
  const inscribedCoord = {
    x1: (selectedCoord.x1 + selectedCoord.x2) / 2,
    y1: selectedCoord.y1,
    x2: selectedCoord.x2,
    y2: (selectedCoord.y2 + selectedCoord.y3) / 2,
    x3: selectedCoord.x3,
    y3: (selectedCoord.y3 + selectedCoord.y1) / 2,
    x4: (selectedCoord.x3 + selectedCoord.x4) / 2,
    y4: selectedCoord.y3,
  };

  // 2 rectangles are not rotated
  if (!isRotated(selectedCoord) && !isRotated(hoverCoord)) {
    const offset = isOffset(selectedCoord, hoverCoord);

    // Get inscribed coordinates
    selectedCoord = inscribedCoord;
    selectedPoints = coordToPoint(selectedCoord);
    hoverPoints = coordToPoint(hoverCoord);

    // If isOffset, return two points for selected element
    if (offset) {
      let firstSelectedPoint, secondSelectedPoint;
      let hoverPoint;
      minDistance = Infinity;

      // Find the first selected point
      for (let i = 0; i < selectedPoints.length; i++) {
        for (let j = 0; j < hoverPoints.length; j++) {
          const distance = calculateDistance(
            selectedPoints[i],
            hoverPoints[j]
          );
          if (distance < minDistance) {
            minDistance = distance;
            firstSelectedPoint = selectedPoints[i];
            hoverPoint = hoverPoints[j];
          }
        }
      }

      // Find the second selected point
      minDistance = Infinity;
      for (let i = 0; i < selectedPoints.length; i++) {
        const distance = calculateDistance(selectedPoints[i], hoverPoint);
        if (
          distance < minDistance &&
          selectedPoints[i] !== firstSelectedPoint
        ) {
          minDistance = distance;
          secondSelectedPoint = selectedPoints[i];
        }
      }

      return {
        startPoints: [firstSelectedPoint, secondSelectedPoint],
        endPoint: hoverPoint,
      };
    } else {
      let selectedPoint, hoverPoint;

      if (hoverCoord.y3 < selectedCoord.y1)
        selectedPoint = [selectedCoord.x1, selectedCoord.y1];
      else if (hoverCoord.x1 > selectedCoord.x2)
        selectedPoint = [selectedCoord.x2, selectedCoord.y2];
      else if (hoverCoord.y1 > selectedCoord.y4)
        selectedPoint = [selectedCoord.x4, selectedCoord.y4];
      else if (hoverCoord.x2 < selectedCoord.x3)
        selectedPoint = [selectedCoord.x3, selectedCoord.y3];

      minDistance = Infinity;
      for (let j = 0; j < hoverPoints.length; j++) {
        const distance = calculateDistance(
          selectedPoint,
          hoverPoints[j]
        );
        if (distance < minDistance) {
          minDistance = distance;
          hoverPoint = hoverPoints[j];
        }
      }

      const { xCoord, yCoord } = getCoordXY(hoverCoord);
      const maxX = Math.max(...xCoord);
      const maxY = Math.max(...yCoord);
      const minX = Math.min(...xCoord);
      const minY = Math.min(...yCoord);

      if (selectedPoint[0] < maxX && selectedPoint[0] > minX) {
        hoverPoint[0] = selectedPoint[0];
      }

      if (selectedPoint[1] < maxY && selectedPoint[1] > minY)
        hoverPoint[1] = selectedPoint[1];

      return {
        startPoints: [selectedPoint],
        endPoint: hoverPoint,
      };
    }
  } else {
    let selectedPoint, hoverPoint;
    selectedPoints = coordToPoint(selectedCoord);
    hoverPoints = coordToPoint(hoverCoord);
    minDistance = Infinity;

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
      startPoints: [selectedPoint],
      endPoint: hoverPoint,
    };
  }
};


const getCoordXY = coord => {
  const xCoord = [coord.x1, coord.x2, coord.x3, coord.x4];
  const yCoord = [coord.y1, coord.y2, coord.y3, coord.y4];

  return {
    xCoord: xCoord,
    yCoord: yCoord,
  };
};

const coordToPoint = coord => {
  const points = [
    [coord.x1, coord.y1],
    [coord.x2, coord.y2],
    [coord.x4, coord.y4],
    [coord.x3, coord.y3],
  ];
  return points;
};

const calculateDistance = (selectedPoint, hoverPoint) => {
  const xDistance = selectedPoint[0] - hoverPoint[0];
  const yDistance = selectedPoint[1] - hoverPoint[1];
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
};

const isOverlap = (selectedCoord, hoverCoord) => {
  const selectedPoints = coordToPoint(selectedCoord);
  const hoverPoints = coordToPoint(hoverCoord);
  const recs = [selectedPoints, hoverPoints];

  for (let index = 0; index < recs.length; index++) {
    const rec = recs[index];
    for (let i = 0; i < rec.length; i++) {
      let j = (i + 1) % rec.length;
      let p1 = rec[i];
      let p2 = rec[j];
      let normal = { x: p2[1] - p1[1], y: p1[0] - p2[0] };

      let minA = null;
      let maxA = null;
      selectedPoints.forEach(p => {
        let projected = normal.x * p[0] + normal.y * p[1];
        if (minA === null || projected < minA) {
          minA = projected;
        }
        if (maxA === null || projected > maxA) {
          maxA = projected;
        }
      });

      let minB = null;
      let maxB = null;
      hoverPoints.forEach(p => {
        var projected = normal.x * p[0] + normal.y * p[1];
        if (minB == null || projected < minB) minB = projected;
        if (maxB == null || projected > maxB) maxB = projected;
      });
      if (maxA < minB || maxB < minA) {
        return false;
      }
    }
  };
  return true;
};

const isOffset = (selectedCoord, hoverCoord) => {
  const isStraightBoth = !isRotated(selectedCoord) && !isRotated(hoverCoord);
  if (!isStraightBoth) return;

  const isOffsetX =
    hoverCoord.x1 > selectedCoord.x2 || hoverCoord.x2 < selectedCoord.x1;
  const isOffsetY =
    hoverCoord.y1 > selectedCoord.y3 || hoverCoord.y3 < selectedCoord.y1;
  return isOffsetX && isOffsetY;
};

const getArrLines = (selectedCoord, startPoints, endPoint, hoverCoord) => {
  const arrLines = [];
  let horizontal;
  for (let i = 0; i < startPoints.length; i++) {
    const startPoint = startPoints[i];
    if (startPoint[0] !== endPoint[0] && startPoint[1] !== endPoint[1]) {
      const connectedPoint1 = [startPoint[0], endPoint[1]];
      const connectedPoint2 = [endPoint[0], startPoint[1]];
      let connectedPoint;

      if (validConnectedPoint(connectedPoint1, selectedCoord, startPoint, hoverCoord)) {
        connectedPoint = connectedPoint1;
      } else {
        connectedPoint = connectedPoint2;
      }

      const textPosition = getTextPosition(startPoint, connectedPoint);


      arrLines.push(
        {
          x1: startPoint[0],
          y1: startPoint[1],
          x2: connectedPoint[0],
          y2: connectedPoint[1],
          text: [textPosition.textX, textPosition.textY]
        },
        {
          x1: connectedPoint[0],
          y1: connectedPoint[1],
          x2: endPoint[0],
          y2: endPoint[1],
        },
      );
    } else {
      const textPosition = getTextPosition(startPoint, endPoint);

      arrLines.push({
        x1: startPoint[0],
        y1: startPoint[1],
        x2: endPoint[0],
        y2: endPoint[1],
        text: [textPosition.textX, textPosition.textY]
      });
    }
  }
  return arrLines;
};

const validConnectedPoint = (connectedPoint, selectedCoord, startPoint, hoverCoord) => {
  const selectedPoints = coordToPoint(selectedCoord);
  for (let i = 0; i < selectedPoints.length; i++) {
    const selectedPoint = selectedPoints[i];
    console.log(startPoint.toString());
    console.log(selectedPoint.toString());
    

    console.log(i)
    const insideSelectedElem = isInside(connectedPoint, selectedCoord);
    const insideHoveredElem = isInside(connectedPoint, hoverCoord);
    if (startPoint.toString() === selectedPoint.toString()) {
      
      console.log(connectedPoint.toString());
      console.log(insideSelectedElem);
      console.log(selectedCoord)
      if (insideSelectedElem || insideHoveredElem) {
        return false;
      }
    } else {
      const collinear = isCollinear(startPoint, selectedPoint, connectedPoint);
      const between = isBetween(startPoint, selectedPoint, connectedPoint);
      if (collinear && between || collinear && insideSelectedElem) {
        return false;
      }
    }
  }
  return true;
};

const isInside = (connectedPoint, coord) => {
  const points = coordToPoint(coord);
  const pointA = points[0];
  const pointB = points[1];
  const pointC = points[2];
  const pointD = points[3];

  const sumArea =
    areaTriangle(pointA, connectedPoint, pointD) +
    areaTriangle(pointD, connectedPoint, pointC) +
    areaTriangle(pointC, connectedPoint, pointB) +
    areaTriangle(pointB, connectedPoint, pointA);

  const areaRec =
    calculateDistance(pointA, pointB) *
    calculateDistance(pointA, pointD);

  return precision(sumArea, 10000) <= precision(areaRec, 10000);
};

const precision = (value, defaultPrecision = 10) => {
  return Math.round(value * defaultPrecision) / defaultPrecision;
};


const isCollinear = (point1, point2, point3) => {
  const collinearX = point1[0] === point2[0] && point1[0] === point3[0];
  const collinearY = point1[1] === point2[1] && point1[1] === point3[1];

  return collinearX || collinearY;
};

const isBetween = (point1, point2, point3) => {
  const distance12 = calculateDistance(point1, point2);
  const distance23 = calculateDistance(point2, point3);
  const distance13 = calculateDistance(point1, point3);

  return distance12 + distance23 === distance13;
}

const getTextPosition = (startPoint, connectedPoint) => {
  const horizontal = startPoint[1] === connectedPoint[1];
  let textX, textY;
  const smallOffset = 5;
  const largeOffset = 10;
  if (horizontal) {
    textY = startPoint[1] - smallOffset;
    textX = startPoint[0] > connectedPoint[0]
      ? startPoint[0] - largeOffset
      : startPoint[0] + smallOffset;
  } else {
    textX = startPoint[0] + smallOffset;
    textY = startPoint[1] > connectedPoint[1]
      ? textY = startPoint[1] - smallOffset
      : textY = startPoint[1] + largeOffset;
  }

  return {
    textX: textX,
    textY: textY
  }
}

const selectedCoord = {
  x1: 1,
  y1: 2,
  x2: 3,
  y2: 2,
  x3: 1,
  y3: 1,
  x4: 3,
  y4: 1,
};

const hoverCoord = {
  x1: 4,
  y1: 4,
  x2: 6,
  y2: 6,
  x3: 5,
  y3: 3,
  x4: 7,
  y4: 5,
};

const tempCoord = {
  x1: 4,
  y1: 4,
  x2: 7,
  y2: 7,
  x3: 5,
  y3: 3,
  x4: 8,
  y4: 6,
};

// Case 2 straight rectangles
const recNotRotated1 = {
  x1: 2,
  y1: 2,
  x2: 4,
  y2: 2,
  x3: 2,
  y3: 3,
  x4: 4,
  y4: 3,
};

const recNotRotated2 = {
  x1: 5,
  y1: 4,
  x2: 6,
  y2: 4,
  x3: 5,
  y3: 5,
  x4: 6,
  y4: 5,
};

const shape1 = {
  x1: 4,
  y1: 4,
  x2: 10,
  y2: 4,
  x3: 4,
  y3: 8,
  x4: 10,
  y4: 8,
};
const shape2 = {
  x1: 1,
  y1: 2,
  x2: 3,
  y2: 2,
  x3: 1,
  y3: 3,
  x4: 3,
  y4: 3,
};
const shape3 = {
  x1: 3.5,
  y1: 1,
  x2: 5,
  y2: 1,
  x3: 3.5,
  y3: 2,
  x4: 5,
  y4: 2,
};
const shape4 = {
  x1: 6,
  y1: 2,
  x2: 9,
  y2: 2,
  x3: 6,
  y3: 3,
  x4: 9,
  y4: 3,
};
const shape5 = {
  x1: 11,
  y1: 1,
  x2: 12,
  y2: 1,
  x3: 11,
  y3: 3,
  x4: 12,
  y4: 3,
};
const shape6 = {
  x1: 11,
  y1: 5,
  x2: 12,
  y2: 5,
  x3: 11,
  y3: 9,
  x4: 12,
  y4: 9,
};
const shape7 = {
  x1: 6,
  y1: 9,
  x2: 9,
  y2: 9,
  x3: 6,
  y3: 10,
  x4: 9,
  y4: 10,
};
const shape8 = {
  x1: 2,
  y1: 8,
  x2: 4,
  y2: 8,
  x3: 2,
  y3: 10,
  x4: 4,
  y4: 10,
};

const shape9 = {
  x1: 56,
  y1: 495,
  x2: 228,
  y2: 495,
  x3: 56,
  y3: 545,
  x4: 228,
  y4: 545,
};

const shape10 = {
  x1: 214,
  y1: 366,
  x2: 386,
  y2: 366,
  x3: 214,
  y3: 416,
  x4: 386,
  y4: 416,
};
// console.log(isRotated(selectedCoord));
// console.log(isRotated(hoverCoord));
// console.log(closestPoints(selectedCoord, hoverCoord));
// console.log(closestPoints(hoverCoord, selectedCoord));

// console.log (closestPoints (recNotRotated1, recNotRotated2));
// console.log (isOffset (recNotRotated1, recNotRotated2));

// console.log (closestPoints (shape1, shape2));

const shape11 = {
  "sx": 0,
  "sy": 0,
  "x1": 325.4100498191532,
  "y1": 511.2035320702313,
  "x2": 571.2604246714507,
  "y2": 511.2035320702313,
  "x3": 325.4100498191532,
  "y3": 554.2035287432759,
  "x4": 571.2604246714507,
  "y4": 554.2035287432759,
  "x5": 448.3352372453019,
  "y5": 532.7035304067535
};

const shape12 = {
  "sx": 0,
  "sy": 0,
  "x1": -3.9999981332965304,
  "y1": 87.58904058571417,
  "x2": 241.85037671900093,
  "y2": 87.58904058571417,
  "x3": -3.9999981332965304,
  "y3": 130.58903725875885,
  "x4": 241.85037671900093,
  "y4": 130.58903725875885,
  "x5": 118.92518929285221,
  "y5": 109.08903892223651
};

const shape13 = {
  "sx": 0,
  "sy": 0,
  "x1": 94.89081588951316,
  "y1": 6.092307235495724,
  "x2": 340.74119074181067,
  "y2": 6.092307235495724,
  "x3": 94.89081588951316,
  "y3": 49.0923039085404,
  "x4": 340.74119074181067,
  "y4": 49.0923039085404,
  "x5": 217.81600331566193,
  "y5": 27.592305572018063
};

const shape14 = {
  "sx": 0,
  "sy": 0,
  "x1": 151.65743558331755,
  "y1": 74.30247051039817,
  "x2": 348.0022750988003,
  "y2": 222.2589195440733,
  "x3": 125.77939158999116,
  "y3": 108.64379478540712,
  "x4": 322.1242311054739,
  "y4": 256.60024381908227,
  "x5": 236.89083334439573,
  "y5": 165.45135716474022
};

const coords = {
  x1: 1,
  y1: 1,
  x2: 3,
  y2: 1,
  x3: 1,
  y3: 2,
  x4: 3,
  y4: 1,
};

const shape15 = {
  "sx": 0,
  "sy": 0,
  "x1": 93.48489440156615,
  "y1": 200.95139739419218,
  "x2": 339.3352692538636,
  "y2": 200.95139739419218,
  "x3": 93.48489440156615,
  "y3": 243.9513940672369,
  "x4": 339.3352692538636,
  "y4": 243.9513940672369,
  "x5": 216.41008182771486,
  "y5": 222.45139573071452
};

const shape16 = {
  "sx": 0,
  "sy": 0,
  "x1": 171.66767660510362,
  "y1": 312.83108820868046,
  "x2": 357.21330980749224,
  "y2": 474.12344641123093,
  "x3": 143.45714054119085,
  "y3": 345.2835976473746,
  "x4": 329.00277374357944,
  "y4": 506.5759558499251,
  "x5": 250.3352251743415,
  "y5": 409.7035220293028
};

const shape17 = {
  "sx": 0,
  "sy": 0,
  "x1": 28.06274648416563,
  "y1": 332.52000366972294,
  "x2": 154.0676714883277,
  "y2": 332.52000366972294,
  "x3": 28.06274648416563,
  "y3": 458.524928673885,
  "x4": 154.0676714883277,
  "y4": 458.524928673885,
  "x5": 91.06520898624666,
  "y5": 395.52246617180396
};

const shape18 = {
  "sx": 0,
  "sy": 0,
  "x1": 220.616797452194,
  "y1": 354.57947796409553,
  "x2": 394.4592646675082,
  "y2": 528.4219451794097,
  "x3": 190.21121061106092,
  "y3": 384.98506480522866,
  "x4": 364.0536778263751,
  "y4": 558.8275320205428,
  "x5": 292.33523763928457,
  "y5": 456.70350499231927
};

const shape19 = {
  "sx": 0,
  "sy": 0,
  "x1": 180.4484601724668,
  "y1": 111.40877360861415,
  "x2": 426.2988350247643,
  "y2": 111.40877360861415,
  "x3": 180.4484601724668,
  "y3": 154.40877028165883,
  "x4": 426.2988350247643,
  "y4": 154.40877028165883,
  "x5": 303.37364759861555,
  "y5": 132.9087719451365
};

const shape20 = {
  "sx": 0,
  "sy": 0,
  "x1": 40.0627468172577,
  "y1": 137.51999486657536,
  "x2": 166.06767182141976,
  "y2": 137.51999486657536,
  "x3": 40.0627468172577,
  "y3": 263.5249063091317,
  "x4": 166.06767182141976,
  "y4": 263.5249063091317,
  "x5": 103.06520931933872,
  "y5": 200.52245058785354
};

const point = [1.5, 1.5];
const areaTriangle = (point1, point2, point3) => {
  const area = Math.abs(
    (point2[0] * point1[1] - point1[0] * point2[1]) +
    (point3[0] * point2[1] - point2[0] * point3[1]) +
    (point1[0] * point3[1] - point3[0] * point1[1])) / 2;
  return area;
};
console.log(isInside(point, coords));

const main = (selectedCoord, hoverCoord) => {
  if (isOverlap(selectedCoord, hoverCoord)) return;
  const points = closestPoints(selectedCoord, hoverCoord);
  const startPoints = points.startPoints;
  const endPoint = points.endPoint;
  console.log(startPoints);
  console.log(endPoint);

  console.log(getArrLines(selectedCoord, startPoints, endPoint, hoverCoord));
}

console.log(main(shape19, shape20));

