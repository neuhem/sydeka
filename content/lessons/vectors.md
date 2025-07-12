---
title: "Vectors"
description: "Introduction to vectors, vector operations, and applications in 2D and 3D space."
subject: "Mathematics"
level: "A2"
module: "Vectors"
topics: ["Vector Notation", "Vector Operations", "Scalar Product", "Vector Product", "Applications"]
difficulty: "intermediate"
estimatedTime: 55
author: "Sydeka Team"
---

# Vectors

## Introduction

Vectors are mathematical objects that have both magnitude and direction. They are essential in physics, engineering, computer graphics, and many other fields where direction matters as much as size.

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand vector notation and representation
- Perform vector operations (addition, subtraction, scalar multiplication)
- Calculate scalar (dot) and vector (cross) products
- Apply vectors to solve geometric problems
- Use vectors in physics applications

## 1. Vector Basics

### Definition

A vector is a quantity that has both magnitude and direction.

**Examples:**
- Displacement (10 km northeast)
- Velocity (50 m/s at 30° above horizontal)
- Force (100 N downward)

### Notation

**Vector:** a, **a**, or **a⃗**
**Magnitude:** |a| or |**a**|

### Vector vs Scalar

**Scalar:** Magnitude only (temperature, mass, time)
**Vector:** Magnitude and direction (velocity, force, displacement)

## 2. Vector Representation

### Component Form

In 2D: **a** = (a₁, a₂) or **a** = a₁**i** + a₂**j**
In 3D: **a** = (a₁, a₂, a₃) or **a** = a₁**i** + a₂**j** + a₃**k**

Where **i**, **j**, **k** are unit vectors along x, y, z axes.

### Position Vectors

A position vector represents the position of a point relative to the origin.

**Example 1:** Point P(3, 4, 5) has position vector **r** = 3**i** + 4**j** + 5**k**

### Column Vector Notation

Vectors can be written as column matrices:
```
a = [a₁]
    [a₂]
    [a₃]
```

## 3. Vector Operations

### Vector Addition

**Geometrically:** Place vectors head-to-tail
**Algebraically:** Add corresponding components

**a** + **b** = (a₁ + b₁, a₂ + b₂, a₃ + b₃)

**Example 2:** Find **a** + **b** where **a** = (2, 3, 1) and **b** = (1, -2, 4)
```
a + b = (2+1, 3+(-2), 1+4) = (3, 1, 5)
```

### Vector Subtraction

**a** - **b** = (a₁ - b₁, a₂ - b₂, a₃ - b₃)

**Example 3:** Find **a** - **b** where **a** = (5, 2, -1) and **b** = (3, 4, 2)
```
a - b = (5-3, 2-4, -1-2) = (2, -2, -3)
```

### Scalar Multiplication

k**a** = (ka₁, ka₂, ka₃)

**Example 4:** Find 3**a** where **a** = (2, -1, 4)
```
3a = (3×2, 3×(-1), 3×4) = (6, -3, 12)
```

### Properties

1. **Commutative:** **a** + **b** = **b** + **a**
2. **Associative:** (**a** + **b**) + **c** = **a** + (**b** + **c**)
3. **Distributive:** k(**a** + **b**) = k**a** + k**b**
4. **Zero Vector:** **a** + **0** = **a**

## 4. Magnitude and Unit Vectors

### Magnitude

|**a**| = √(a₁² + a₂² + a₃²)

**Example 5:** Find |**a**| where **a** = (3, 4, 5)
```
|a| = √(3² + 4² + 5²) = √(9 + 16 + 25) = √50 = 5√2
```

### Unit Vectors

A unit vector has magnitude 1.

**Unit vector in direction of a:** **â** = **a**/|**a**|

**Example 6:** Find the unit vector in the direction of **a** = (6, 8, 0)
```
|a| = √(6² + 8² + 0²) = √(36 + 64) = √100 = 10
â = (6, 8, 0)/10 = (0.6, 0.8, 0)
```

## 5. Scalar Product (Dot Product)

### Definition

**a** · **b** = |**a**||**b**|cos θ

Where θ is the angle between the vectors.

### Component Form

**a** · **b** = a₁b₁ + a₂b₂ + a₃b₃

**Example 7:** Find **a** · **b** where **a** = (2, 3, 1) and **b** = (1, -2, 4)
```
a · b = 2(1) + 3(-2) + 1(4) = 2 - 6 + 4 = 0
```

### Properties

1. **Commutative:** **a** · **b** = **b** · **a**
2. **Distributive:** **a** · (**b** + **c**) = **a** · **b** + **a** · **c**
3. **Scalar multiple:** (k**a**) · **b** = k(**a** · **b**)
4. **Self dot product:** **a** · **a** = |**a**|²

### Applications

**Finding angles:** cos θ = (**a** · **b**)/(|**a**||**b**|)

**Perpendicular vectors:** **a** ⊥ **b** if **a** · **b** = 0

**Example 8:** Find the angle between **a** = (1, 2, 3) and **b** = (2, 1, 0)
```
a · b = 1(2) + 2(1) + 3(0) = 4
|a| = √(1² + 2² + 3²) = √14
|b| = √(2² + 1² + 0²) = √5
cos θ = 4/(√14 × √5) = 4/√70
θ = arccos(4/√70) ≈ 61.9°
```

## 6. Vector Product (Cross Product)

### Definition (3D only)

**a** × **b** = |**a**||**b**|sin θ **n̂**

Where **n̂** is the unit vector perpendicular to both **a** and **b**.

### Component Form

**a** × **b** = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)

### Determinant Form

```
a × b = |i  j  k |
        |a₁ a₂ a₃|
        |b₁ b₂ b₃|
```

**Example 9:** Find **a** × **b** where **a** = (2, 1, 3) and **b** = (1, 0, 2)
```
a × b = |i  j  k |
        |2  1  3|
        |1  0  2|
      = i(1×2 - 3×0) - j(2×2 - 3×1) + k(2×0 - 1×1)
      = i(2) - j(4-3) + k(-1)
      = (2, -1, -1)
```

### Properties

1. **Anticommutative:** **a** × **b** = -(**b** × **a**)
2. **Distributive:** **a** × (**b** + **c**) = **a** × **b** + **a** × **c**
3. **Scalar multiple:** (k**a**) × **b** = k(**a** × **b**)
4. **Parallel vectors:** **a** × **b** = **0** if **a** ∥ **b**

### Geometric Interpretation

|**a** × **b**| = area of parallelogram formed by **a** and **b**

## 7. Applications

### Physics Applications

**Displacement:** **s** = **r₂** - **r₁**
**Velocity:** **v** = d**r**/dt
**Acceleration:** **a** = d**v**/dt
**Force:** **F** = m**a**

### Work and Energy

**Work:** W = **F** · **s**
**Power:** P = **F** · **v**

**Example 10:** A force **F** = (3, 4, 0) N acts on an object that moves through displacement **s** = (2, 1, 5) m. Find the work done.
```
W = F · s = 3(2) + 4(1) + 0(5) = 6 + 4 + 0 = 10 J
```

### Torque

**Torque:** **τ** = **r** × **F**

**Example 11:** A force **F** = (0, 0, 10) N is applied at position **r** = (2, 1, 0) m from the pivot. Find the torque.
```
τ = r × F = |i  j  k |
            |2  1  0|
            |0  0  10|
          = i(1×10 - 0×0) - j(2×10 - 0×0) + k(2×0 - 1×0)
          = (10, -20, 0) N·m
```

### Geometry Applications

**Area of triangle:** Area = ½|**a** × **b**|
**Volume of parallelepiped:** V = |**a** · (**b** × **c**)|

## 8. Lines and Planes

### Vector Equation of a Line

**r** = **a** + t**b**

Where **a** is a point on the line and **b** is the direction vector.

**Example 12:** Find the equation of the line through (1, 2, 3) in the direction (2, 1, -1).
```
r = (1, 2, 3) + t(2, 1, -1)
r = (1 + 2t, 2 + t, 3 - t)
```

### Vector Equation of a Plane

**r** · **n** = **a** · **n**

Where **n** is the normal vector to the plane.

## Key Points to Remember

1. **Vectors** have magnitude and direction
2. **Component operations** work element-wise
3. **Scalar product** gives a scalar, measures alignment
4. **Vector product** gives a vector, measures perpendicularity
5. **Unit vectors** have magnitude 1
6. **Applications** span physics, engineering, graphics

## Practice Problems

1. Find **a** + **b** where **a** = (3, -2, 1) and **b** = (1, 4, -2)
2. Calculate |**a**| where **a** = (5, 12, 0)
3. Find **a** · **b** where **a** = (2, 1, 3) and **b** = (1, -1, 2)
4. Calculate **a** × **b** where **a** = (1, 2, 3) and **b** = (2, 0, 1)
5. Find the angle between vectors (1, 1, 1) and (1, 0, 0)

## Summary

Vectors are fundamental mathematical objects with wide applications in physics, engineering, and computer science. Understanding vector operations and their geometric interpretations is essential for solving problems involving direction and magnitude.
