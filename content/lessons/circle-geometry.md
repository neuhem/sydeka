---
title: "Circle Geometry"
description: "Study the properties of circles, including equations, tangents, and chord properties in coordinate geometry."
subject: "Mathematics"
level: "AS"
module: "Coordinate Geometry"
topics: ["Circle Equations", "Tangents", "Chords", "Circle Properties", "Geometric Proofs"]
difficulty: "intermediate"
estimatedTime: 50
author: "Sydeka Team"
---

# Circle Geometry

## Introduction

Circle geometry combines the algebraic approach of coordinate geometry with the geometric properties of circles. This lesson explores circle equations, tangent lines, and various circle theorems.

## Learning Objectives

By the end of this lesson, you will be able to:
- Write and manipulate circle equations
- Find equations of tangent lines to circles
- Work with chord properties
- Apply circle theorems in coordinate geometry
- Solve problems involving circles and lines

## 1. The Equation of a Circle

### Standard Form

A circle with center (h, k) and radius r has the equation:
**(x - h)² + (y - k)² = r²**

### General Form

**x² + y² + 2gx + 2fy + c = 0**

Where the center is (-g, -f) and radius is √(g² + f² - c)

**Example 1:** Find the center and radius of x² + y² - 6x + 4y - 12 = 0
```
Rearranging: x² - 6x + y² + 4y = 12
Completing the square:
(x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4
(x - 3)² + (y + 2)² = 25
Center: (3, -2), Radius: 5
```

### Circle Through Three Points

Given three non-collinear points, we can find the unique circle passing through them.

**Example 2:** Find the circle through points (1, 1), (2, 4), and (5, 3)
```
Let the equation be x² + y² + 2gx + 2fy + c = 0
Substituting each point:
Point (1,1): 1 + 1 + 2g + 2f + c = 0 → 2g + 2f + c = -2
Point (2,4): 4 + 16 + 4g + 8f + c = 0 → 4g + 8f + c = -20
Point (5,3): 25 + 9 + 10g + 6f + c = 0 → 10g + 6f + c = -34

Solving the system:
g = -3, f = -2, c = 8
Circle equation: x² + y² - 6x - 4y + 8 = 0
```

## 2. Tangent Lines to Circles

### Point on the Circle

If point P(x₁, y₁) is on the circle x² + y² + 2gx + 2fy + c = 0, then the tangent at P has equation:
**xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0**

**Example 3:** Find the tangent to x² + y² - 4x + 2y - 4 = 0 at point (1, 3)
```
Using the formula:
x(1) + y(3) + (-2)(x + 1) + (1)(y + 3) - 4 = 0
x + 3y - 2x - 2 + y + 3 - 4 = 0
-x + 4y - 3 = 0
x - 4y + 3 = 0
```

### Point Outside the Circle

For a point P(x₁, y₁) outside the circle, there are two tangent lines.

**Length of tangent from external point:**
**L = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c)**

**Example 4:** Find the length of tangent from (5, 1) to the circle x² + y² - 2x - 4y + 1 = 0
```
L = √(5² + 1² - 2(5) - 4(1) + 1)
L = √(25 + 1 - 10 - 4 + 1)
L = √13
```

### Tangent with Given Slope

To find tangents to circle x² + y² = r² with slope m:
**y = mx ± r√(1 + m²)**

**Example 5:** Find tangents to x² + y² = 25 with slope 3/4
```
y = (3/4)x ± 5√(1 + 9/16)
y = (3/4)x ± 5√(25/16)
y = (3/4)x ± 25/4
Tangents: y = (3/4)x + 25/4 and y = (3/4)x - 25/4
```

## 3. Chord Properties

### Chord of Contact

If tangents are drawn from external point P(x₁, y₁) to circle x² + y² + 2gx + 2fy + c = 0, the chord of contact has equation:
**xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0**

### Perpendicular from Center to Chord

The perpendicular distance from center to a chord bisects the chord.

**Example 6:** Find the midpoint of the chord cut off by line 3x + 4y - 7 = 0 from circle x² + y² - 2x - 4y + 1 = 0
```
Circle center: (1, 2)
Perpendicular from (1, 2) to 3x + 4y - 7 = 0:
Slope of given line = -3/4
Slope of perpendicular = 4/3
Equation: y - 2 = (4/3)(x - 1)
3y - 6 = 4x - 4
4x - 3y + 2 = 0

Intersection with original line:
3x + 4y - 7 = 0
4x - 3y + 2 = 0
Solving: x = 1, y = 1
Midpoint of chord: (1, 1)
```

## 4. Circle Theorems in Coordinate Geometry

### Power of a Point

For point P and circle with center O and radius r:
**Power = |PO|² - r²**

- If P is outside: Power > 0
- If P is on circle: Power = 0
- If P is inside: Power < 0

### Radical Axis

The radical axis of two circles is the locus of points having equal power with respect to both circles.

**Example 7:** Find the radical axis of circles x² + y² - 4x - 2y + 1 = 0 and x² + y² - 2x - 6y + 5 = 0
```
Subtracting the equations:
-4x - 2y + 1 - (-2x - 6y + 5) = 0
-4x - 2y + 1 + 2x + 6y - 5 = 0
-2x + 4y - 4 = 0
x - 2y + 2 = 0
```

## 5. Intersection of Circles and Lines

### Line and Circle Intersection

Substitute the line equation into the circle equation to find intersection points.

**Example 8:** Find intersection of line y = x + 1 and circle x² + y² = 10
```
Substituting: x² + (x + 1)² = 10
x² + x² + 2x + 1 = 10
2x² + 2x - 9 = 0
x = (-2 ± √(4 + 72))/4 = (-2 ± √76)/4 = (-1 ± √19)/2
Points: ((-1 + √19)/2, (1 + √19)/2) and ((-1 - √19)/2, (1 - √19)/2)
```

### Circle-Circle Intersection

Two circles can intersect in 0, 1, or 2 points.

**Condition for intersection:**
- No intersection: |d| > r₁ + r₂
- External tangency: |d| = r₁ + r₂
- Two intersections: |r₁ - r₂| < |d| < r₁ + r₂
- Internal tangency: |d| = |r₁ - r₂|

## 6. Applications

### Real-World Problems

**Example 9:** Three radio towers are located at (0, 0), (8, 0), and (4, 6). Each has a range of 5 km. Find the area covered by all three towers.
```
Tower 1: x² + y² = 25
Tower 2: (x - 8)² + y² = 25
Tower 3: (x - 4)² + (y - 6)² = 25

Find intersection points and calculate the area of the region covered by all three circles.
```

### Engineering Applications

Circles appear in:
- Gear systems
- Satellite orbits
- Antenna coverage areas
- Structural engineering

## 7. Problem-Solving Strategies

### Systematic Approach

1. **Identify** the type of circle problem
2. **Convert** to standard form if needed
3. **Apply** appropriate theorems
4. **Use** coordinate geometry methods
5. **Check** solutions geometrically

### Common Techniques

- **Completing the square** for circle equations
- **Parametric representation** for points on circles
- **Perpendicular bisector** method for centers
- **Distance formula** for tangent lengths

## Key Points to Remember

1. **Standard form:** (x - h)² + (y - k)² = r²
2. **Tangent from point** uses specific formulas
3. **Chord properties** involve perpendicular bisectors
4. **Circle theorems** apply in coordinate form
5. **Intersection** problems use substitution
6. **Power of a point** measures position relative to circle

## Practice Problems

1. Find the center and radius of x² + y² + 6x - 8y + 9 = 0
2. Find the tangent to x² + y² = 13 at point (2, 3)
3. Find the equation of the circle with center (2, -1) and radius 3
4. Find the chord of contact from (4, 5) to circle x² + y² = 25
5. Find where the line 2x + y = 5 intersects the circle x² + y² = 5

## Summary

Circle geometry in coordinate systems combines algebraic manipulation with geometric insight. Understanding circle equations, tangent properties, and intersection methods is essential for solving complex geometric problems analytically.
