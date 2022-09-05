/*
Isaac Newton has forgotten his laws of physics and needs your help to animate 
an object on his game.
He must use the Second Law of Motion that states, "when the forces acting 
on an object are unbalanced, the object will accelerate."
This acceleration is dependent upon the force that acts upon the object 
and the object's mass.
So he wants to know what the acceleration of that object is, 
depending on its properties:

mass of xx
Δv of xx
Δt of xx
force of xx
distance xx
time xx

Create a function named getAcceleration that calculates the velocity of a given object. For example:
a = F/m
a = Δv/Δt
a = 2d/t^2
a = acceleration
m = mass
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/
function getAcceleration(obj) {
  let a = obj.f / obj.m;
  let b = obj.Δv / obj.Δt;
  let c = (2 * obj.d) / (obj.t * obj.t);
  let e = "impossible";
  if (typeof obj.f == "number" && typeof obj.m == "number") {
    return obj.f / obj.m;
  } else if (typeof obj.Δv == "number" && typeof obj.Δt == "number") {
    return b;
  } else if (typeof obj.d == "number" && typeof obj.t == "number") {
    return c;
  } else {
    return e;
  }
}
