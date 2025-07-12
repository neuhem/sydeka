---
title: "Partial Fractions"
description: "Learn to decompose rational functions into partial fractions, an essential technique for integration and advanced algebra."
subject: "Mathematics"
level: "A2"
module: "Advanced Algebra"
topics: ["Partial Fractions", "Rational Functions", "Linear Factors", "Quadratic Factors", "Repeated Factors"]
difficulty: "intermediate"
estimatedTime: 55
author: "Sydeka Team"
---

# Partial Fractions

## Introduction

Partial fractions is a technique used to decompose complex rational functions into simpler fractions. This method is essential for integration, solving differential equations, and analyzing rational functions.

## Learning Objectives

By the end of this lesson, you will be able to:
- Identify when partial fractions can be applied
- Decompose rational functions with linear factors
- Handle repeated linear factors
- Work with irreducible quadratic factors
- Apply partial fractions to integration problems

## 1. What are Partial Fractions?

### Definition

Partial fractions is the process of expressing a rational function as a sum of simpler fractions.

**Example:** 
```
3x + 1
------ = A/(x-1) + B/(x+2)
(x-1)(x+2)
```

### When to Use Partial Fractions

1. The degree of the numerator is less than the degree of the denominator
2. The denominator can be factored
3. We want to integrate the function or solve differential equations

### Improper Fractions

If the degree of numerator ≥ degree of denominator, first perform polynomial long division.

**Example 1:** Decompose (x³ + 2x² + 3x + 1)/(x² + x - 2)
```
First divide: x³ + 2x² + 3x + 1 = (x² + x - 2)(x + 1) + (4x + 3)
So: (x³ + 2x² + 3x + 1)/(x² + x - 2) = x + 1 + (4x + 3)/(x² + x - 2)
Now decompose (4x + 3)/(x² + x - 2)
```

## 2. Case 1: Distinct Linear Factors

### Method

If the denominator factors as (x - a)(x - b)(x - c)... where all factors are distinct:

**f(x)/((x-a)(x-b)(x-c)) = A/(x-a) + B/(x-b) + C/(x-c)**

### Finding the Constants

**Method 1: Cover-up Method**
- Cover the factor (x - a) and substitute x = a to find A
- Repeat for other factors

**Method 2: Substitution Method**
- Multiply both sides by the denominator
- Substitute convenient values of x

**Method 3: Equating Coefficients**
- Expand the right side and compare coefficients

**Example 2:** Decompose (3x + 1)/((x-1)(x+2))
```
3x + 1
------ = A/(x-1) + B/(x+2)
(x-1)(x+2)

Method 1 (Cover-up):
For A: Cover (x-1), substitute x = 1: (3(1) + 1)/(1+2) = 4/3 = A
For B: Cover (x+2), substitute x = -2: (3(-2) + 1)/(-2-1) = -5/(-3) = 5/3 = B

Therefore: (3x + 1)/((x-1)(x+2)) = 4/3/(x-1) + 5/3/(x+2)
```

**Example 3:** Decompose (2x² + 3x + 1)/((x-1)(x+1)(x+2))
```
2x² + 3x + 1
------------- = A/(x-1) + B/(x+1) + C/(x+2)
(x-1)(x+1)(x+2)

Using substitution:
x = 1: (2 + 3 + 1)/((0)(3)) = 6/6 = 1 = A
x = -1: (2 - 3 + 1)/((-2)(1)) = 0/(-2) = 0 = B  
x = -2: (8 - 6 + 1)/((-3)(-1)) = 3/3 = 1 = C

Therefore: (2x² + 3x + 1)/((x-1)(x+1)(x+2)) = 1/(x-1) + 0/(x+1) + 1/(x+2)
         = 1/(x-1) + 1/(x+2)
```

## 3. Case 2: Repeated Linear Factors

### Method

If the denominator has a repeated factor (x - a)ⁿ:

**f(x)/((x-a)ⁿ(x-b)) = A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)ⁿ + B/(x-b)**

**Example 4:** Decompose (x + 1)/((x-2)²(x+1))
```
x + 1
----- = A/(x-2) + B/(x-2)² + C/(x+1)
(x-2)²(x+1)

Multiply by (x-2)²(x+1):
x + 1 = A(x-2)(x+1) + B(x+1) + C(x-2)²

For C: x = -1: 0 = C(9), so C = 0
For B: x = 2: 3 = B(3), so B = 1
For A: x = 0: 1 = A(-2)(1) + 1(1) + 0, so -2A + 1 = 1, A = 0

Therefore: (x + 1)/((x-2)²(x+1)) = 0/(x-2) + 1/(x-2)² + 0/(x+1) = 1/(x-2)²
```

**Example 5:** Decompose (3x² - 2x + 1)/((x-1)³)
```
3x² - 2x + 1
------------ = A/(x-1) + B/(x-1)² + C/(x-1)³
(x-1)³

Multiply by (x-1)³:
3x² - 2x + 1 = A(x-1)² + B(x-1) + C

Method: Differentiate and substitute x = 1
Original: 3x² - 2x + 1 = A(x-1)² + B(x-1) + C
At x = 1: 3 - 2 + 1 = C, so C = 2

Differentiate: 6x - 2 = 2A(x-1) + B
At x = 1: 6 - 2 = B, so B = 4

Differentiate again: 6 = 2A
So A = 3

Therefore: (3x² - 2x + 1)/((x-1)³) = 3/(x-1) + 4/(x-1)² + 2/(x-1)³
```

## 4. Case 3: Irreducible Quadratic Factors

### Method

If the denominator contains an irreducible quadratic factor ax² + bx + c:

**f(x)/((ax² + bx + c)(x-d)) = (Ax + B)/(ax² + bx + c) + C/(x-d)**

**Example 6:** Decompose (2x² + 3x + 1)/((x² + 1)(x-1))
```
2x² + 3x + 1
------------ = (Ax + B)/(x² + 1) + C/(x-1)
(x² + 1)(x-1)

Multiply by (x² + 1)(x-1):
2x² + 3x + 1 = (Ax + B)(x-1) + C(x² + 1)

For C: x = 1: 2 + 3 + 1 = C(1 + 1), so C = 3

Expand: 2x² + 3x + 1 = Ax² - Ax + Bx - B + 3x² + 3
                      = (A + 3)x² + (-A + B)x + (-B + 3)

Comparing coefficients:
x²: 2 = A + 3, so A = -1
x¹: 3 = -A + B = 1 + B, so B = 2
x⁰: 1 = -B + 3 = -2 + 3 = 1 ✓

Therefore: (2x² + 3x + 1)/((x² + 1)(x-1)) = (-x + 2)/(x² + 1) + 3/(x-1)
```

## 5. Case 4: Repeated Quadratic Factors

### Method

If there's a repeated quadratic factor (ax² + bx + c)ⁿ:

**f(x)/((ax² + bx + c)ⁿ) = (A₁x + B₁)/(ax² + bx + c) + (A₂x + B₂)/(ax² + bx + c)² + ... + (Aₙx + Bₙ)/(ax² + bx + c)ⁿ**

**Example 7:** Decompose (x³ + 2x² + 3x + 1)/((x² + 1)²)
```
x³ + 2x² + 3x + 1
----------------- = (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)²
(x² + 1)²

This requires more advanced techniques involving differentiation or complex analysis.
```

## 6. Applications to Integration

### Integration of Partial Fractions

Once decomposed, each fraction can be integrated using standard techniques:

- ∫ A/(x-a) dx = A ln|x-a| + C
- ∫ A/(x-a)ⁿ dx = A/((1-n)(x-a)ⁿ⁻¹) + C (n ≠ 1)
- ∫ (Ax + B)/(x² + k²) dx involves ln and arctan functions

**Example 8:** Integrate ∫ (3x + 1)/((x-1)(x+2)) dx
```
From Example 2: (3x + 1)/((x-1)(x+2)) = 4/3/(x-1) + 5/3/(x+2)

∫ (3x + 1)/((x-1)(x+2)) dx = ∫ (4/3/(x-1) + 5/3/(x+2)) dx
                            = (4/3)ln|x-1| + (5/3)ln|x+2| + C
```

## 7. Problem-Solving Strategies

### Systematic Approach

1. **Check if proper fraction** (degree of numerator < degree of denominator)
2. **Factor the denominator** completely
3. **Set up the partial fraction form** according to the factors
4. **Find the constants** using substitution or coefficient comparison
5. **Verify** by combining fractions back together

### Common Mistakes

- Forgetting to check if the fraction is proper
- Incorrect partial fraction setup for repeated factors
- Computational errors in finding constants
- Not factoring the denominator completely

## 8. Advanced Techniques

### Heaviside Cover-up Method

For simple poles, this method is very efficient:

**Example 9:** Quick decomposition of (x + 3)/((x-1)(x+2))
```
For A: Cover (x-1), substitute x=1: (1+3)/(1+2) = 4/3
For B: Cover (x+2), substitute x=-2: (-2+3)/(-2-1) = 1/(-3) = -1/3

Result: (x + 3)/((x-1)(x+2)) = 4/3/(x-1) - 1/3/(x+2)
```

### Complex Analysis Connection

Partial fractions are closely related to residue theory in complex analysis, providing deeper insight into the method.

## Key Points to Remember

1. **Degree check:** Numerator degree < denominator degree
2. **Factor completely:** All factors must be found
3. **Correct setup:** Match partial fraction form to factor types
4. **Multiple methods:** Use substitution, cover-up, or coefficients
5. **Verification:** Always check by combining fractions
6. **Integration:** Primary application is making integration easier

## Practice Problems

1. Decompose (2x + 3)/((x-1)(x+3))
2. Decompose (x² + 2x + 1)/((x-1)²(x+2))
3. Decompose (3x² + 2x + 1)/((x² + 1)(x-2))
4. Integrate ∫ (x + 1)/((x-2)(x+1)) dx
5. Decompose (x³ + 1)/(x² - 1) (hint: first do polynomial division)

## Summary

Partial fractions is a powerful technique for decomposing rational functions. It's essential for integration, solving differential equations, and analyzing rational functions. Master the different cases and you'll have a valuable tool for advanced mathematics.
