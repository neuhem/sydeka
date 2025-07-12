---
title: "Geometric Progressions"
description: "Learn about geometric sequences, their properties, and how to find nth terms and sums of geometric progressions."
subject: "Mathematics"
level: "AS"
module: "Sequences & Series"
topics: ["Geometric Progressions", "Common Ratio", "nth Term", "Sum of Series", "Geometric Mean", "Infinite Series"]
difficulty: "foundation"
estimatedTime: 45
author: "Sydeka Team"
---

# Geometric Progressions

## Introduction

A geometric progression (GP) is a sequence where each term after the first is obtained by multiplying the previous term by a constant value called the common ratio.

## Learning Objectives

By the end of this lesson, you will be able to:
- Identify geometric progressions
- Find the nth term of a geometric progression
- Calculate the sum of finite geometric series
- Work with infinite geometric series
- Apply geometric progressions to real-world problems

## 1. Definition and Basic Properties

### What is a Geometric Progression?

A geometric progression is a sequence where consecutive terms have a constant ratio.

**General Form:** a, ar, ar², ar³, ...

Where:
- a = first term
- r = common ratio
- Terms are: a₁, a₂, a₃, a₄, ...

### Finding the Common Ratio

The common ratio r is found by dividing any term by the previous term:
**r = aₙ₊₁/aₙ**

**Example 1:** Find the common ratio in the sequence 2, 6, 18, 54, ...
```
r = 6/2 = 3
r = 18/6 = 3
r = 54/18 = 3
Common ratio = 3
```

### Types of Geometric Progressions

**Increasing GP:** |r| > 1
**Decreasing GP:** 0 < |r| < 1
**Oscillating GP:** r < 0

**Example 2:** Classify these sequences:
```
2, 6, 18, 54, ... → Increasing (r = 3 > 1)
8, 4, 2, 1, ... → Decreasing (r = 1/2 < 1)
1, -2, 4, -8, ... → Oscillating (r = -2 < 0)
```

## 2. The nth Term Formula

The nth term of a geometric progression is:

**aₙ = arⁿ⁻¹**

Where:
- aₙ = nth term
- a = first term
- r = common ratio
- n = term number

**Example 3:** Find the 8th term of the sequence 3, 6, 12, 24, ...
```
a = 3, r = 2
a₈ = 3 × 2⁸⁻¹ = 3 × 2⁷ = 3 × 128 = 384
```

**Example 4:** Which term of the sequence 5, 10, 20, 40, ... is 1280?
```
a = 5, r = 2, aₙ = 1280
1280 = 5 × 2ⁿ⁻¹
256 = 2ⁿ⁻¹
2⁸ = 2ⁿ⁻¹
8 = n - 1
n = 9
The 9th term is 1280.
```

## 3. Sum of Finite Geometric Series

The sum of the first n terms of a geometric progression is:

**Sₙ = a(1 - rⁿ)/(1 - r)** (when r ≠ 1)

**Sₙ = na** (when r = 1)

### Alternative Form

**Sₙ = a(rⁿ - 1)/(r - 1)** (when r ≠ 1)

**Example 5:** Find the sum of the first 10 terms of 2, 6, 18, 54, ...
```
a = 2, r = 3, n = 10
S₁₀ = 2(3¹⁰ - 1)/(3 - 1)
S₁₀ = 2(59049 - 1)/2
S₁₀ = 59048
```

**Example 6:** Find the sum of the series 1 + 1/2 + 1/4 + ... + 1/128
```
a = 1, r = 1/2
Last term = 1/128 = 1/2⁷, so n = 8
S₈ = 1(1 - (1/2)⁸)/(1 - 1/2)
S₈ = (1 - 1/256)/(1/2)
S₈ = (255/256) × 2 = 255/128
```

## 4. Infinite Geometric Series

For an infinite geometric series with |r| < 1:

**S∞ = a/(1 - r)**

**Convergence condition:** |r| < 1

**Example 7:** Find the sum of the infinite series 1 + 1/3 + 1/9 + 1/27 + ...
```
a = 1, r = 1/3
Since |1/3| < 1, the series converges.
S∞ = 1/(1 - 1/3) = 1/(2/3) = 3/2
```

**Example 8:** Find the sum of 0.333... (repeating decimal)
```
0.333... = 3/10 + 3/100 + 3/1000 + ...
This is a GP with a = 3/10, r = 1/10
S∞ = (3/10)/(1 - 1/10) = (3/10)/(9/10) = 3/9 = 1/3
```

## 5. Geometric Mean

The geometric mean of two numbers a and b is:
**GM = √(ab)**

In a geometric progression, each term (except the first and last) is the geometric mean of its neighbors.

**Example 9:** Find the geometric mean of 8 and 18.
```
GM = √(8 × 18) = √144 = 12
```

### Inserting Geometric Means

To insert n geometric means between two numbers a and b:
1. The sequence becomes: a, G₁, G₂, ..., Gₙ, b
2. This creates a GP with (n+2) terms
3. Common ratio: r = (b/a)^(1/(n+1))

**Example 10:** Insert 2 geometric means between 3 and 24.
```
r = (24/3)^(1/(2+1)) = 8^(1/3) = 2
Sequence: 3, 6, 12, 24
The 2 geometric means are: 6 and 12
```

## 6. Applications

### Population Growth

Many populations grow geometrically under ideal conditions.

**Example 11:** A bacteria culture starts with 100 bacteria and doubles every hour. How many bacteria are there after 8 hours?
```
a = 100, r = 2, n = 8
a₈ = 100 × 2⁸⁻¹ = 100 × 2⁷ = 100 × 128 = 12,800 bacteria
```

### Compound Interest

Money invested at compound interest grows geometrically.

**Example 12:** £1000 is invested at 5% compound interest per year. Find the value after 6 years.
```
a = 1000, r = 1.05, n = 6
a₆ = 1000 × (1.05)⁶ = 1000 × 1.340 = £1340
```

### Depreciation

Assets often depreciate geometrically.

**Example 13:** A car worth £20,000 depreciates by 15% each year. Find its value after 5 years.
```
a = 20000, r = 0.85, n = 5
a₅ = 20000 × (0.85)⁵ = 20000 × 0.444 = £8,880
```

## 7. Comparing Arithmetic and Geometric Progressions

### Key Differences

| Aspect | Arithmetic | Geometric |
|--------|------------|-----------|
| Pattern | Constant difference | Constant ratio |
| Growth | Linear | Exponential |
| Middle term | AM = (a+b)/2 | GM = √(ab) |
| Applications | Uniform motion | Population growth |

### Relationship

**AM ≥ GM** (equality when a = b)

**Example 14:** For numbers 4 and 9:
```
AM = (4 + 9)/2 = 6.5
GM = √(4 × 9) = √36 = 6
Indeed, AM > GM
```

## 8. Problem-Solving Strategies

### Step-by-Step Approach

1. **Identify** if the sequence is geometric
2. **Find** the first term (a) and common ratio (r)
3. **Choose** the appropriate formula
4. **Check** convergence for infinite series
5. **Interpret** results in context

### Common Mistakes

- Confusing geometric with arithmetic progressions
- Not checking convergence for infinite series
- Misapplying formulas when r = 1
- Calculation errors with negative ratios

## Key Points to Remember

1. **GP Definition:** Constant ratio between consecutive terms
2. **nth Term:** aₙ = arⁿ⁻¹
3. **Finite Sum:** Sₙ = a(1 - rⁿ)/(1 - r)
4. **Infinite Sum:** S∞ = a/(1 - r) when |r| < 1
5. **Geometric Mean:** Each term is the GM of its neighbors
6. **Applications:** Growth, decay, compound interest

## Practice Problems

1. Find the 12th term of the GP: 2, 6, 18, 54, ...
2. Find the sum of the first 8 terms of the GP: 1, 1/2, 1/4, 1/8, ...
3. Find the sum to infinity of: 3 + 1.5 + 0.75 + 0.375 + ...
4. Insert 3 geometric means between 2 and 32
5. A population of 1000 grows at 8% per year. What is the population after 10 years?

## Summary

Geometric progressions model exponential growth and decay phenomena. Understanding their properties and formulas is crucial for applications in finance, biology, physics, and many other fields where multiplicative processes occur.
