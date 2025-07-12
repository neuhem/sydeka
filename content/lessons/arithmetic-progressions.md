---
title: "Arithmetic Progressions"
description: "Learn about arithmetic sequences, their properties, and how to find nth terms and sums of arithmetic progressions."
subject: "Mathematics"
level: "AS"
module: "Sequences & Series"
topics: ["Arithmetic Progressions", "Common Difference", "nth Term", "Sum of Series", "Arithmetic Mean"]
difficulty: "foundation"
estimatedTime: 40
author: "Sydeka Team"
---

# Arithmetic Progressions

## Introduction

An arithmetic progression (AP) is a sequence of numbers where each term after the first is obtained by adding a constant value, called the common difference, to the previous term.

## Learning Objectives

By the end of this lesson, you will be able to:
- Identify arithmetic progressions
- Find the nth term of an arithmetic progression
- Calculate the sum of an arithmetic series
- Solve problems involving arithmetic progressions
- Use arithmetic means in calculations

## 1. Definition and Basic Properties

### What is an Arithmetic Progression?

An arithmetic progression is a sequence where consecutive terms have a constant difference.

**General Form:** a, a+d, a+2d, a+3d, ...

Where:
- a = first term
- d = common difference
- Terms are: a₁, a₂, a₃, a₄, ...

### Finding the Common Difference

The common difference d is found by subtracting any term from the following term:
**d = aₙ₊₁ - aₙ**

**Example 1:** Find the common difference in the sequence 3, 7, 11, 15, 19, ...
```
d = 7 - 3 = 4
d = 11 - 7 = 4
d = 15 - 11 = 4
Common difference = 4
```

## 2. The nth Term Formula

The nth term of an arithmetic progression is given by:

**aₙ = a + (n-1)d**

Where:
- aₙ = nth term
- a = first term
- n = term number
- d = common difference

**Example 2:** Find the 20th term of the sequence 5, 8, 11, 14, ...
```
a = 5, d = 3
a₂₀ = 5 + (20-1)×3 = 5 + 19×3 = 5 + 57 = 62
```

**Example 3:** Which term of the sequence 2, 5, 8, 11, ... is equal to 50?
```
a = 2, d = 3, aₙ = 50
50 = 2 + (n-1)×3
48 = (n-1)×3
16 = n-1
n = 17
The 17th term is 50.
```

## 3. Sum of an Arithmetic Series

The sum of the first n terms of an arithmetic progression is:

**Sₙ = n/2[2a + (n-1)d]**

Or equivalently:

**Sₙ = n/2(a + l)**

Where l is the last term.

### Derivation

Consider: S = a + (a+d) + (a+2d) + ... + (a+(n-1)d)
Writing backwards: S = l + (l-d) + (l-2d) + ... + (l-(n-1)d)
Adding: 2S = n(a + l)
Therefore: S = n/2(a + l)

**Example 4:** Find the sum of the first 25 terms of 3, 7, 11, 15, ...
```
a = 3, d = 4, n = 25
S₂₅ = 25/2[2×3 + (25-1)×4]
S₂₅ = 25/2[6 + 24×4]
S₂₅ = 25/2[6 + 96]
S₂₅ = 25/2 × 102 = 25 × 51 = 1275
```

**Example 5:** Find the sum of all multiples of 3 between 1 and 100.
```
Multiples of 3: 3, 6, 9, ..., 99
a = 3, d = 3, last term = 99
Find n: 99 = 3 + (n-1)×3
96 = (n-1)×3
32 = n-1
n = 33
Sum = 33/2(3 + 99) = 33/2 × 102 = 33 × 51 = 1683
```

## 4. Arithmetic Mean

The arithmetic mean of two numbers a and b is:
**AM = (a + b)/2**

In an arithmetic progression, each term (except the first and last) is the arithmetic mean of its neighbors.

**Example 6:** Find the arithmetic mean of 15 and 25.
```
AM = (15 + 25)/2 = 40/2 = 20
```

### Inserting Arithmetic Means

To insert n arithmetic means between two numbers a and b:
1. The sequence becomes: a, A₁, A₂, ..., Aₙ, b
2. This creates an AP with (n+2) terms
3. Common difference: d = (b-a)/(n+1)

**Example 7:** Insert 4 arithmetic means between 3 and 18.
```
d = (18-3)/(4+1) = 15/5 = 3
Sequence: 3, 6, 9, 12, 15, 18
The 4 arithmetic means are: 6, 9, 12, 15
```

## 5. Properties of Arithmetic Progressions

### Key Properties

1. **Linear Growth:** APs grow linearly, making them useful for modeling constant rate changes
2. **Symmetry:** In a finite AP, terms equidistant from the ends sum to the same value
3. **Middle Term:** In an AP with odd number of terms, the middle term equals the arithmetic mean of first and last terms

### Three Terms in AP

If three numbers a, b, c are in arithmetic progression, then:
**2b = a + c**

**Example 8:** Are 5, 8, 11 in arithmetic progression?
```
Check: 2×8 = 16 and 5+11 = 16
Since 2×8 = 5+11, they are in AP.
```

## 6. Applications

### Real-World Problems

**Example 9:** A company's annual salary starts at £25,000 and increases by £2,000 each year. Find the total earnings over 10 years.

Solution:
```
This is an AP with a = 25000, d = 2000, n = 10
S₁₀ = 10/2[2×25000 + (10-1)×2000]
S₁₀ = 5[50000 + 9×2000]
S₁₀ = 5[50000 + 18000]
S₁₀ = 5 × 68000 = £340,000
```

**Example 10:** A ball is dropped from a height. It bounces to 3/4 of its previous height each time. If the initial height is 16m, find the total distance traveled in the first 5 bounces.

Note: This is actually a geometric progression problem, but included for comparison.

## 7. Problem-Solving Strategies

### Step-by-Step Approach

1. **Identify** if the sequence is arithmetic
2. **Find** the first term (a) and common difference (d)
3. **Choose** the appropriate formula
4. **Substitute** values carefully
5. **Check** your answer

### Common Mistakes to Avoid

- Confusing arithmetic with geometric progressions
- Miscounting the number of terms
- Forgetting to use (n-1) in the nth term formula
- Arithmetic errors in calculations

## Key Points to Remember

1. **AP Definition:** Constant common difference between consecutive terms
2. **nth Term:** aₙ = a + (n-1)d
3. **Sum Formula:** Sₙ = n/2[2a + (n-1)d] or Sₙ = n/2(first + last)
4. **Arithmetic Mean:** Each term is the mean of its neighbors
5. **Real Applications:** Useful for modeling linear growth situations

## Practice Problems

1. Find the 15th term of the AP: 7, 11, 15, 19, ...
2. Find the sum of the first 20 terms of the AP: 2, 5, 8, 11, ...
3. Which term of the AP 1, 4, 7, 10, ... is 100?
4. Insert 3 arithmetic means between 5 and 21
5. The sum of the first 10 terms of an AP is 185, and the first term is 4. Find the common difference.

## Summary

Arithmetic progressions are fundamental sequences in mathematics with widespread applications in finance, science, and engineering. Understanding their properties and formulas is essential for solving many real-world problems involving linear growth or constant rate changes.
