---
title: "Complex Numbers"
description: "Introduction to complex numbers, their operations, and representations in the complex plane."
subject: "Mathematics"
level: "A2"
module: "Complex Numbers"
topics: ["Complex Numbers", "Imaginary Unit", "Complex Plane", "Polar Form", "Operations"]
difficulty: "intermediate"
estimatedTime: 60
author: "Sydeka Team"
---

# Complex Numbers

## Introduction

Complex numbers extend the real number system to include solutions to equations like x² + 1 = 0. They have profound applications in mathematics, physics, engineering, and signal processing.

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand the concept of complex numbers
- Perform basic operations with complex numbers
- Represent complex numbers in the complex plane
- Convert between rectangular and polar forms
- Solve quadratic equations with complex solutions

## 1. The Imaginary Unit

### Definition

The imaginary unit i is defined as:
**i = √(-1)**

**Key Properties:**
- i² = -1
- i³ = i² × i = -1 × i = -i
- i⁴ = i² × i² = (-1) × (-1) = 1
- i⁵ = i⁴ × i = 1 × i = i

**Pattern:** Powers of i repeat every 4: i, -1, -i, 1, i, -1, -i, 1, ...

**Example 1:** Calculate i⁷
```
i⁷ = i⁴ × i³ = 1 × (-i) = -i
Or: 7 = 4(1) + 3, so i⁷ = i³ = -i
```

## 2. Complex Numbers

### Definition

A complex number is a number of the form:
**z = a + bi**

Where:
- a is the real part (Re(z))
- b is the imaginary part (Im(z))
- a and b are real numbers

### Types of Complex Numbers

**Real Numbers:** b = 0, so z = a
**Pure Imaginary:** a = 0, so z = bi
**Complex (general):** Both a ≠ 0 and b ≠ 0

**Example 2:** Identify the parts:
```
z₁ = 3 + 4i → Re(z₁) = 3, Im(z₁) = 4
z₂ = -2 - 5i → Re(z₂) = -2, Im(z₂) = -5
z₃ = 7 → Re(z₃) = 7, Im(z₃) = 0
z₄ = 3i → Re(z₄) = 0, Im(z₄) = 3
```

## 3. Operations with Complex Numbers

### Addition and Subtraction

**(a + bi) ± (c + di) = (a ± c) + (b ± d)i**

**Example 3:** Calculate (3 + 2i) + (1 - 4i)
```
(3 + 2i) + (1 - 4i) = (3 + 1) + (2 - 4)i = 4 - 2i
```

### Multiplication

**(a + bi)(c + di) = (ac - bd) + (ad + bc)i**

**Example 4:** Calculate (2 + 3i)(1 - 2i)
```
(2 + 3i)(1 - 2i) = 2(1) + 2(-2i) + 3i(1) + 3i(-2i)
                  = 2 - 4i + 3i - 6i²
                  = 2 - 4i + 3i - 6(-1)
                  = 2 - 4i + 3i + 6
                  = 8 - i
```

### Complex Conjugate

The complex conjugate of z = a + bi is:
**z* = a - bi**

**Properties:**
- z + z* = 2a (real)
- z × z* = a² + b² (real and positive)
- (z*)* = z

### Division

To divide complex numbers, multiply by the conjugate of the denominator:

**(a + bi)/(c + di) = (a + bi)(c - di)/((c + di)(c - di))**

**Example 5:** Calculate (3 + 2i)/(1 - i)
```
(3 + 2i)/(1 - i) = (3 + 2i)(1 + i)/((1 - i)(1 + i))
                  = (3 + 3i + 2i + 2i²)/(1 - i²)
                  = (3 + 5i + 2(-1))/(1 - (-1))
                  = (1 + 5i)/2
                  = 1/2 + 5i/2
```

## 4. The Complex Plane

### Representation

Complex numbers can be represented as points in the complex plane:
- x-axis: real axis
- y-axis: imaginary axis
- Point (a, b) represents z = a + bi

**Example 6:** Plot these complex numbers:
```
z₁ = 3 + 2i → Point (3, 2)
z₂ = -1 + 4i → Point (-1, 4)
z₃ = 2 - 3i → Point (2, -3)
```

### Modulus (Absolute Value)

The modulus of z = a + bi is:
**|z| = √(a² + b²)**

This represents the distance from the origin to the point (a, b).

**Example 7:** Find |3 + 4i|
```
|3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5
```

### Argument

The argument of z = a + bi is the angle θ that the line from origin to (a, b) makes with the positive real axis.

**arg(z) = arctan(b/a)** (with appropriate quadrant adjustment)

**Example 8:** Find arg(1 + i)
```
arg(1 + i) = arctan(1/1) = arctan(1) = π/4 (45°)
```

## 5. Polar Form

### Conversion to Polar Form

Any complex number z = a + bi can be written as:
**z = r(cos θ + i sin θ) = r cis θ**

Where:
- r = |z| = √(a² + b²) (modulus)
- θ = arg(z) (argument)

**Example 9:** Convert 1 + i to polar form
```
r = |1 + i| = √(1² + 1²) = √2
θ = arctan(1/1) = π/4
So: 1 + i = √2 cis(π/4)
```

### Conversion from Polar Form

Given z = r cis θ:
**z = r cos θ + i r sin θ**

**Example 10:** Convert 2 cis(π/3) to rectangular form
```
z = 2 cos(π/3) + i × 2 sin(π/3)
  = 2 × (1/2) + i × 2 × (√3/2)
  = 1 + i√3
```

## 6. Solving Quadratic Equations

### Quadratic Formula with Complex Solutions

For ax² + bx + c = 0, when discriminant Δ = b² - 4ac < 0:

**x = (-b ± √(Δ))/2a = (-b ± i√|Δ|)/2a**

**Example 11:** Solve x² + 2x + 5 = 0
```
a = 1, b = 2, c = 5
Δ = 4 - 4(1)(5) = 4 - 20 = -16
x = (-2 ± √(-16))/2 = (-2 ± 4i)/2 = -1 ± 2i
```

## 7. Applications

### Electrical Engineering

In AC circuit analysis, complex numbers represent:
- Resistance (real part)
- Reactance (imaginary part)
- Impedance (complex number)

### Signal Processing

Complex exponentials e^(iωt) = cos(ωt) + i sin(ωt) are fundamental in:
- Fourier analysis
- Digital signal processing
- Control systems

### Quantum Mechanics

Wave functions are complex-valued, and complex numbers are essential for:
- Quantum states
- Probability amplitudes
- Schrödinger equation

## 8. Important Identities

### Euler's Formula

**e^(iθ) = cos θ + i sin θ**

**Special Cases:**
- e^(iπ) = -1 (Euler's identity)
- e^(i π/2) = i
- e^(i 2π) = 1

### De Moivre's Theorem

**(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)**

**Example 12:** Calculate (1 + i)⁸
```
First convert to polar: 1 + i = √2 cis(π/4)
(1 + i)⁸ = (√2)⁸ × cis(8 × π/4)
         = 2⁴ × cis(2π)
         = 16 × (1 + 0i)
         = 16
```

## Key Points to Remember

1. **i² = -1** defines the imaginary unit
2. **Complex numbers** have real and imaginary parts
3. **Operations** follow algebraic rules with i² = -1
4. **Complex conjugate** is useful for division
5. **Polar form** connects to trigonometry
6. **Modulus** gives distance from origin
7. **Applications** span engineering and physics

## Practice Problems

1. Calculate (2 - 3i) + (4 + 5i)
2. Find (1 + 2i)(3 - i)
3. Calculate (2 + i)/(1 - i)
4. Find |3 - 4i|
5. Convert 1 - i to polar form
6. Solve x² - 4x + 13 = 0

## Summary

Complex numbers provide a complete algebraic system where all polynomial equations have solutions. Understanding their properties and operations is essential for advanced mathematics and many scientific applications.
