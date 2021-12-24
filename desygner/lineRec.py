class Rect:
    def __init__(self,cpt,w,h):
        self.x = cpt[0]
        self.y = cpt[1]
        self.w = w
        self.h = h

    def dist(self,other):
        #overlaps in x or y:
        if abs(self.x - other.x) <= (self.w + other.w):
            dx = 0;
        else:
            dx = abs(self.x - other.x) - (self.w + other.w)
        #
        if abs(self.y - other.y) <= (self.h + other.h):
            dy = 0;
        else:
            dy = abs(self.y - other.y) - (self.h + other.h)
        return dx + dy

#example:
A = Rect((0,0),2,1)
B = Rect((4,5),1,2)
C = Rect((-1,-5),1,1)

print(A.dist(C))
print(A.dist(B))
print(B.dist(C))
