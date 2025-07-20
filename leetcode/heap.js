class HeapItem {
    constructor(item, priority = item) {
        this.item = item;
        this.priority = priority;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        // insert the new node at the end of the heap array
        this.heap.push(node);
        // find the correct position for the new node
        this.bubble_up();
    }

    heapify(array) {
        this.heap = array.slice(); // Copy to avoid mutating the input
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
            this._bubble_down_from(i);
        }
    }

    // Internal helper to bubble down from a specific index
    _bubble_down_from(index) {
        let min = index;
        const n = this.size();

        while (index < n) {
            const left = 2 * index + 1;
            const right = left + 1;

            if ((left < n && this.heap[left].priority < this.heap[min].priority) ||
                (right < n && this.heap[right].priority < this.heap[min].priority)) {
                min = (right < n && this.heap[right].priority < this.heap[left].priority) ? right : left;
            }

            if (min === index) break;

            [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
            index = min;
        }
    }

    bubble_up() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent.priority <= element.priority) break;
            // if the parent is bigger than the child then swap the parent and child
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    pop() {
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.bubble_down();
        return min;
    }

    bubble_down() {
        let index = 0;
        let min = index;
        const n = this.heap.length;

        while (index < n) {
            const left = 2 * index + 1;
            const right = left + 1;
            // check if left or right child is smaller than parent
            if ((left < n && this.heap[left].priority < this.heap[min].priority) ||
            (right < n && this.heap[right].priority < this.heap[min].priority)) {
                // pick the smaller child if both child is present
                if (right < n) {
                    min = this.heap[left].priority < this.heap[right].priority ? left : right;
                } else {
                    min = left;
                }
            }

            if (min === index) break;
            [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
            index = min;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubble_up();
    }

    bubble_up() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent.priority >= element.priority) break;

            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    heapify(array) {
        this.heap = array.slice(); // Copy to avoid mutating input
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
            this._bubble_down_from(i);
        }
    }

    _bubble_down_from(index) {
        let max = index;
        const n = this.size();

        while (index < n) {
            const left = 2 * index + 1;
            const right = left + 1;

            if ((left < n && this.heap[left].priority > this.heap[max].priority) ||
                (right < n && this.heap[right].priority > this.heap[max].priority)) {
                max = (right < n && this.heap[right].priority > this.heap[left].priority) ? right : left;
            }

            if (max === index) break;

            [this.heap[max], this.heap[index]] = [this.heap[index], this.heap[max]];
            index = max;
        }
    }

    pop() {
        const max = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.bubble_down();
        return max;
    }

    bubble_down() {
        let index = 0;
        let max = index;
        const n = this.heap.length;

        while (index < n) {
            const left = 2 * index + 1;
            const right = left + 1;

            if ((left < n && this.heap[left].priority > this.heap[max].priority) ||
                (right < n && this.heap[right].priority > this.heap[max].priority)) {

                if (right < n) {
                    max = this.heap[left].priority > this.heap[right].priority ? left : right;
                } else {
                    max = left;
                }
            }

            if (max === index) break;
            [this.heap[max], this.heap[index]] = [this.heap[index], this.heap[max]];
            index = max;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}