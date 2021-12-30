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
  if (!isRotated (selectedCoord) && !isRotated (hoverCoord)) {
    const offset = isOffset (selectedCoord, hoverCoord);
    console.log(offset);

    // Get inscribed coordinates
    selectedCoord = inscribedCoord;
    selectedPoints = coordToPoint (selectedCoord);
    hoverPoints = coordToPoint (hoverCoord);

    // If isOffset, return two points for selected element
    if (offset) {
      let firstSelectedPoint, secondSelectedPoint;
      let hoverPoint;
      minDistance = Infinity;

      // Find the first selected point
      for (let i = 0; i < selectedPoints.length; i++) {
        for (let j = 0; j < hoverPoints.length; j++) {
          const distance = calculateDistance (
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
        const distance = calculateDistance (selectedPoints[i], hoverPoint);
        if (
          distance < minDistance &&
          selectedPoints[i] !== firstSelectedPoint
        ) {
          minDistance = distance;
          secondSelectedPoint = selectedPoints[i];
        }
      }

      return {
        selectedPoints: [firstSelectedPoint, secondSelectedPoint],
        hoverPoints: [hoverPoint],
      };
    } else {
      let selectedPoint, hoverPoint;
      minDistance = Infinity;

      for (let i = 0; i < selectedPoints.length; i++) {
        for (let j = 0; j < hoverPoints.length; j++) {
          const distance = calculateDistance (
            selectedPoints[i],
            hoverPoints[j]
          );
          if (distance < minDistance) {
            minDistance = distance;
            selectedPoint = selectedPoints[i];
            hoverPoint = hoverPoints[j];
          }
        }
      }

      const {xCoord, yCoord} = getCoordXY (hoverCoord);
      const maxX = Math.max (...xCoord);
      const maxY = Math.max (...yCoord);
      const minX = Math.min (...xCoord);
      const minY = Math.min (...yCoord);

      if (selectedPoint[0] < maxX && selectedPoint[0] > minX) {
        hoverPoint[0] = selectedPoint[0];
      }

      if (selectedPoint[1] < maxY && selectedPoint[1] > minY)
        hoverPoint[1] = selectedPoint[1];

      return {
        selectedPoints: [selectedPoint],
        hoverPoints: [hoverPoint],
      };
    }
  } else {
    let selectedPoint, hoverPoint;
    selectedPoints = coordToPoint (selectedCoord);
    hoverPoints = coordToPoint (hoverCoord);
    minDistance = Infinity;

    for (let i = 0; i < selectedPoints.length; i++) {
      for (let j = 0; j < hoverPoints.length; j++) {
        const distance = calculateDistance (selectedPoints[i], hoverPoints[j]);
        if (distance < minDistance) {
          minDistance = distance;
          selectedPoint = selectedPoints[i];
          hoverPoint = hoverPoints[j];
        }
      }
    }
    return {
      selectedPoints: [selectedPoint],
      hoverPoints: [hoverPoint],
    };
  }
};

const drawDistanceLine = (selectedCoord, hoverCoord) => {};

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
    [coord.x3, coord.y3],
    [coord.x4, coord.y4],
  ];
  return points;
};

const calculateDistance = (selectedPoint, hoverPoint) => {
  const xDistance = selectedPoint[0] - hoverPoint[0];
  const yDistance = selectedPoint[1] - hoverPoint[1];
  return Math.sqrt (xDistance ** 2 + yDistance ** 2);
};

const isOverlap = (selectedCoord, hoverCoord) => {
  const selectedPoints = coordToPoint (selectedCoord);
  const hoverPoints = coordToPoint (hoverCoord);
  const recs = [selectedPoints, hoverPoints];

  recs.forEach (rec => {
    for (let i = 0; i < rec.length; i++) {
      let j = (i + 1) % rec.length;
      let p1 = rec[i];
      let p2 = rec[j];
      let normal = {x: p2[1] - p1[1], y: p1[0] - p2[0]};

      let minA = null;
      let maxA = null;
      selectedPoints.forEach (p => {
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
      hoverPoints.forEach (p => {
        var projected = normal.x * p[0] + normal.y * p[1];
        if (minB == null || projected < minB) minB = projected;
        if (maxB == null || projected > maxB) maxB = projected;
      });

      if (maxA < minB || maxB < minA) return false;
    }
  });
  return true;
};

const isOffset = (selectedCoord, hoverCoord) => {
  const isStraightBoth = !isRotated (selectedCoord) && !isRotated (hoverCoord);
  if (!isStraightBoth) return;

  const isOffsetX =
    hoverCoord.x1 > selectedCoord.x2 || hoverCoord.x2 < selectedCoord.x1;
  const isOffsetY =
    hoverCoord.y1 > selectedCoord.y3 || hoverCoord.y3 < selectedCoord.y1;
  return isOffsetX && isOffsetY;
};

const getArrLines = (selectedCoord, hoverCoord, selectedPoints, hoverPoint) => {
  const arrLines = [];
  for (let i = 0; i < selectedPoints.length; i++) {
    const selectedPoint = selectedPoints[i];
    const connectedPoint1 = 
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
}
const shape2 = {
  x1: 1,
  y1: 2,
  x2: 3,
  y2: 2,
  x3: 1,
  y3: 3,
  x4: 3,
  y4: 3,
}
const shape3 = {
  x1: 3.5,
  y1: 1,
  x2: 5,
  y2: 1,
  x3: 3.5,
  y3: 2,
  x4: 5,
  y4: 2,
}
const shape4 = {
  x1: 6,
  y1: 2,
  x2: 9,
  y2: 2,
  x3: 6,
  y3: 3,
  x4: 9,
  y4: 3,
}
const shape5 = {
  x1: 11,
  y1: 1,
  x2: 12,
  y2: 1,
  x3: 11,
  y3: 3,
  x4: 12,
  y4: 3,
}
const shape6 = {
  x1: 11,
  y1: 5,
  x2: 12,
  y2: 5,
  x3: 11,
  y3: 9,
  x4: 12,
  y4: 9,
}
const shape7 = {
  x1: 6,
  y1: 9,
  x2: 9,
  y2: 9,
  x3: 6,
  y3: 10,
  x4: 9,
  y4: 10,
}
const shape8 = {
  x1: 2,
  y1: 8,
  x2: 4,
  y2: 8,
  x3: 2,
  y3: 10,
  x4: 4,
  y4: 10,
}

// console.log(isRotated(selectedCoord));
// console.log(isRotated(hoverCoord));
// console.log(closestPoints(selectedCoord, hoverCoord));
// console.log(closestPoints(hoverCoord, selectedCoord));

// console.log (closestPoints (recNotRotated1, recNotRotated2));
// console.log (isOffset (recNotRotated1, recNotRotated2));

// console.log (closestPoints (shape1, shape2));
console.log (closestPoints (shape1, shape8));

console.log(isOverlap(shape1, shape8));

