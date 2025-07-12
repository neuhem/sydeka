---
title: "Binomial Theorem"
description: "Learn the binomial theorem, binomial coefficients, and applications to expanding algebraic expressions."
subject: "Mathematics"
level: "AS"
module: "Sequences & Series"
topics: ["Binomial Theorem", "Binomial Coefficients", "Pascal's Triangle", "Binomial Expansions", "Applications"]
difficulty: "intermediate"
estimatedTime: 50
author: "Sydeka Team"
---

# Binomial Theorem

## Introduction

The binomial theorem provides a formula for expanding powers of binomials (expressions with two terms). It's a fundamental result in algebra with applications in probability, calculus, and combinatorics.

## Learning Objectives

By the end of this lesson, you will be able to:
- State and apply the binomial theorem
- Calculate binomial coefficients
- Expand binomial expressions
- Find specific terms in binomial expansions
- Apply the binomial theorem to solve problems

## 1. The Binomial Theorem

### Statement

For any positive integer n:

**(a + b)ⁿ = Σ(k=0 to n) C(n,k) aⁿ⁻ᵏ bᵏ**

Where C(n,k) is the binomial coefficient "n choose k".

### Expanded Form

**(a + b)ⁿ = C(n,0)aⁿ + C(n,1)aⁿ⁻¹b + C(n,2)aⁿ⁻²b² + ... + C(n,n)bⁿ**

**Example 1:** Expand (x + y)⁴
```
(x + y)⁴ = C(4,0)x⁴ + C(4,1)x³y + C(4,2)x²y² + C(4,3)xy³ + C(4,4)y⁴
         = 1·x⁴ + 4·x³y + 6·x²y² + 4·xy³ + 1·y⁴
         = x⁴ + 4x³y + 6x²y² + 4xy³ + y⁴
```

## 2. Binomial Coefficients

### Definition

The binomial coefficient C(n,k) or (n choose k) is:

**C(n,k) = n!/(k!(n-k)!)**

### Properties

1. **C(n,0) = C(n,n) = 1**
2. **C(n,k) = C(n,n-k)** (symmetry)
3. **C(n,k) + C(n,k+1) = C(n+1,k+1)** (Pascal's identity)
4. **Σ(k=0 to n) C(n,k) = 2ⁿ**

**Example 2:** Calculate C(7,3)
```
C(7,3) = 7!/(3!(7-3)!) = 7!/(3!4!) = (7×6×5)/(3×2×1) = 210/6 = 35
```

## 3. Pascal's Triangle

### Construction

Each number is the sum of the two numbers above it:

```
Row 0:        1
Row 1:      1   1
Row 2:    1   2   1
Row 3:  1   3   3   1
Row 4: 1  4   6   4  1
Row 5: 1 5  10  10  5 1
```

### Applications

Row n gives the coefficients for (a + b)ⁿ

**Example 3:** Use Pascal's triangle to expand (x + 2)³
```
Row 3: 1, 3, 3, 1
(x + 2)³ = 1·x³ + 3·x²·2 + 3·x·2² + 1·2³
         = x³ + 6x² + 12x + 8
```

## 4. Specific Terms in Binomial Expansions

### General Term

The (r+1)th term in the expansion of (a + b)ⁿ is:

**Tᵣ₊₁ = C(n,r) aⁿ⁻ʳ bʳ**

**Example 4:** Find the 5th term in the expansion of (2x + 3y)⁸
```
5th term means r = 4
T₅ = C(8,4) (2x)⁸⁻⁴ (3y)⁴
   = 70 × (2x)⁴ × (3y)⁴
   = 70 × 16x⁴ × 81y⁴
   = 90,720x⁴y⁴
```

### Finding Specific Coefficients

**Example 5:** Find the coefficient of x⁵ in the expansion of (2x - 3)⁸
```
General term: Tᵣ₊₁ = C(8,r) (2x)⁸⁻ʳ (-3)ʳ
For x⁵: 8 - r = 5, so r = 3
T₄ = C(8,3) (2x)⁵ (-3)³
   = 56 × 32x⁵ × (-27)
   = -48,384x⁵
Coefficient of x⁵ is -48,384
```

## 5. Applications of the Binomial Theorem

### Approximations

For small values of x, (1 + x)ⁿ ≈ 1 + nx

**Example 6:** Approximate (1.02)⁵
```
(1.02)⁵ = (1 + 0.02)⁵
Using first two terms: ≈ 1 + 5(0.02) = 1 + 0.1 = 1.1
(More accurate: 1.10408...)
```

### Probability

The binomial theorem relates to the binomial probability distribution.

**Example 7:** In 4 coin flips, what's the probability of exactly 2 heads?
```
Each outcome has probability (1/2)⁴
Number of ways to get 2 heads = C(4,2) = 6
Probability = 6 × (1/2)⁴ = 6/16 = 3/8
```

### Series Expansions

**Example 8:** Expand (1 + x)⁻¹ for |x| < 1
```
(1 + x)⁻¹ = 1 - x + x² - x³ + x⁴ - ...
This is a geometric series with first term 1 and ratio -x
```

## 6. Negative and Fractional Indices

### Generalized Binomial Theorem

For any real number n and |x| < 1:

**(1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + n(n-1)(n-2)x³/3! + ...**

**Example 9:** Expand (1 + x)^(1/2) up to x³ term
```
(1 + x)^(1/2) = 1 + (1/2)x + (1/2)(-1/2)x²/2! + (1/2)(-1/2)(-3/2)x³/3! + ...
               = 1 + x/2 - x²/8 + x³/16 - ...
```

### Applications

**Example 10:** Find the first three terms of (4 + x)^(1/2)
```
(4 + x)^(1/2) = (4(1 + x/4))^(1/2) = 2(1 + x/4)^(1/2)
Using the expansion of (1 + u)^(1/2) where u = x/4:
= 2[1 + (x/4)/2 - (x/4)²/8 + ...]
= 2[1 + x/8 - x²/128 + ...]
= 2 + x/4 - x²/64 + ...
```

## 7. Problem-Solving Strategies

### Systematic Approach

1. **Identify** the binomial expression
2. **Determine** the values of n, a, and b
3. **Choose** appropriate method:
   - Full expansion for small n
   - Specific term formula for large n
   - Approximation for practical problems
4. **Calculate** carefully
5. **Check** your answer

### Common Techniques

- **Use Pascal's triangle** for small n
- **Apply general term formula** for specific terms
- **Use approximations** for practical calculations
- **Check symmetry** of coefficients

## 8. Special Cases and Identities

### Important Identities

1. **(1 + 1)ⁿ = 2ⁿ = Σ C(n,k)**
2. **(1 - 1)ⁿ = 0 = Σ (-1)ᵏ C(n,k)** (for n > 0)
3. **(1 + x)ⁿ(1 + x)ᵐ = (1 + x)ⁿ⁺ᵐ**

### Combinatorial Interpretation

C(n,k) represents the number of ways to choose k objects from n objects.

**Example 11:** How many ways can you choose 3 books from 8 books?
```
C(8,3) = 8!/(3!5!) = (8×7×6)/(3×2×1) = 336/6 = 56 ways
```

## Key Points to Remember

1. **Binomial theorem:** (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ
2. **Binomial coefficients:** C(n,k) = n!/(k!(n-k)!)
3. **General term:** Tᵣ₊₁ = C(n,r) aⁿ⁻ʳ bʳ
4. **Pascal's triangle** provides coefficients
5. **Approximations** useful for small x
6. **Negative indices** give infinite series

## Practice Problems

1. Expand (x + 2)⁵
2. Find the coefficient of x⁴ in (3x - 2)⁷
3. Find the 6th term in the expansion of (2a + b)⁹
4. Use the binomial theorem to approximate (0.98)⁴
5. Find the first four terms of (1 + 2x)^(-1/2)

## Summary

The binomial theorem is a powerful tool for expanding expressions and solving combinatorial problems. Its applications extend from basic algebra to advanced calculus and probability theory, making it essential for further mathematical study.
