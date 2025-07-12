---
title: "Exponential Functions"
description: "Explore exponential functions, their properties, graphs, and applications in modeling growth and decay processes."
subject: "Mathematics"
level: "AS"
module: "Exponentials & Logarithms"
topics: ["Exponential Functions", "Exponential Growth", "Exponential Decay", "Natural Exponential", "Applications"]
difficulty: "foundation"
estimatedTime: 45
author: "Sydeka Team"
---

# Exponential Functions

## Introduction

Exponential functions are among the most important functions in mathematics, with applications ranging from population growth to radioactive decay, from compound interest to signal processing.

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand the definition and properties of exponential functions
- Sketch graphs of exponential functions
- Solve exponential equations
- Apply exponential functions to real-world problems
- Work with the natural exponential function e^x

## 1. Definition and Basic Properties

### What is an Exponential Function?

An exponential function has the form:
**f(x) = aˣ**

Where:
- a > 0 (base must be positive)
- a ≠ 1 (to avoid constant functions)
- x is the variable in the exponent

### Standard Form

The general exponential function is:
**f(x) = abˣ + c**

Where:
- a affects vertical scaling
- b is the base (growth/decay factor)
- c is the vertical shift

## 2. Properties of Exponential Functions

### Domain and Range
- **Domain:** All real numbers (-∞, ∞)
- **Range:** (0, ∞) for f(x) = aˣ where a > 0

### Key Properties

1. **f(0) = 1** (for f(x) = aˣ)
2. **f(1) = a** (the base)
3. **f(x) > 0** for all x (always positive)
4. **One-to-one function** (passes horizontal line test)

### Growth vs Decay

- **Exponential Growth:** a > 1
- **Exponential Decay:** 0 < a < 1

**Example 1:** Classify these functions as growth or decay
```
f(x) = 2ˣ     → Growth (base 2 > 1)
g(x) = (1/3)ˣ → Decay (base 1/3 < 1)
h(x) = 5ˣ     → Growth (base 5 > 1)
```

## 3. Laws of Exponents

### Fundamental Laws

1. **Product Rule:** aˣ · aʸ = aˣ⁺ʸ
2. **Quotient Rule:** aˣ / aʸ = aˣ⁻ʸ
3. **Power Rule:** (aˣ)ʸ = aˣʸ
4. **Zero Exponent:** a⁰ = 1 (a ≠ 0)
5. **Negative Exponent:** a⁻ˣ = 1/aˣ

**Example 2:** Simplify 2³ · 2⁵ / 2²
```
2³ · 2⁵ / 2² = 2³⁺⁵⁻² = 2⁶ = 64
```

## 4. Graphing Exponential Functions

### Basic Graphs

**For f(x) = aˣ where a > 1:**
- Passes through (0, 1)
- Increasing function
- Horizontal asymptote: y = 0
- Concave up

**For f(x) = aˣ where 0 < a < 1:**
- Passes through (0, 1)
- Decreasing function
- Horizontal asymptote: y = 0
- Concave up

### Transformations

**Example 3:** Describe the transformation of f(x) = 2ˣ⁺¹ - 3
```
Starting with f(x) = 2ˣ:
- Shift left 1 unit (x → x+1)
- Shift down 3 units (subtract 3)
- New asymptote: y = -3
- New y-intercept: f(0) = 2¹ - 3 = -1
```

## 5. The Natural Exponential Function

### Euler's Number e

The natural exponential function uses the base e ≈ 2.71828...

**f(x) = eˣ**

### Properties of e

- **e = lim(n→∞) (1 + 1/n)ⁿ**
- **e = 1 + 1/1! + 1/2! + 1/3! + ...**
- Most important base in calculus and applications

### Why e is Special

The function eˣ has the unique property that its derivative equals itself:
**d/dx(eˣ) = eˣ**

## 6. Solving Exponential Equations

### Same Base Method

If aˣ = aʸ, then x = y

**Example 4:** Solve 2ˣ⁺¹ = 2³
```
Since bases are equal:
x + 1 = 3
x = 2
```

### Different Bases

Use logarithms (covered in next lesson)

**Example 5:** Solve 3ˣ = 7
```
Take log of both sides:
log(3ˣ) = log(7)
x log(3) = log(7)
x = log(7)/log(3) ≈ 1.77
```

## 7. Applications

### Population Growth

**Model:** P(t) = P₀eʳᵗ

Where:
- P(t) = population at time t
- P₀ = initial population
- r = growth rate
- t = time

**Example 6:** A bacteria culture starts with 1000 bacteria and doubles every 2 hours. Find the population after 6 hours.

Solution:
```
Since it doubles every 2 hours:
P(t) = 1000 · 2^(t/2)
After 6 hours: P(6) = 1000 · 2^(6/2) = 1000 · 2³ = 8000 bacteria
```

### Radioactive Decay

**Model:** N(t) = N₀e⁻λᵗ

Where:
- N(t) = amount at time t
- N₀ = initial amount
- λ = decay constant
- t = time

**Example 7:** Carbon-14 has a half-life of 5730 years. If a sample starts with 20g, how much remains after 10000 years?

Solution:
```
Half-life formula: N(t) = N₀(1/2)^(t/t₁/₂)
N(10000) = 20(1/2)^(10000/5730)
N(10000) = 20(1/2)^1.746
N(10000) ≈ 20 × 0.298 ≈ 5.96g
```

### Compound Interest

**Model:** A(t) = P(1 + r/n)ⁿᵗ

Where:
- A(t) = amount after time t
- P = principal
- r = annual interest rate
- n = compounding frequency
- t = time in years

**Example 8:** £1000 invested at 5% compounded quarterly for 3 years.
```
A(3) = 1000(1 + 0.05/4)^(4×3)
A(3) = 1000(1.0125)¹²
A(3) ≈ 1000 × 1.1608 ≈ £1160.80
```

## 8. Problem-Solving Strategies

### Step-by-Step Approach

1. **Identify** the type of exponential function
2. **Determine** the base and any transformations
3. **Set up** the equation based on given information
4. **Solve** using appropriate methods
5. **Check** your answer in context

### Common Applications

- **Growth/Decay:** Use P(t) = P₀aᵗ or P(t) = P₀eʳᵗ
- **Half-life:** Use N(t) = N₀(1/2)^(t/t₁/₂)
- **Compound Interest:** Use A = P(1 + r/n)ⁿᵗ
- **Cooling/Heating:** Use Newton's Law of Cooling

## Key Points to Remember

1. **Exponential functions** have variable exponents
2. **Base determines behavior:** a > 1 (growth), 0 < a < 1 (decay)
3. **Domain:** All real numbers, **Range:** (0, ∞)
4. **e is special:** Natural exponential function
5. **Real applications:** Growth, decay, finance, physics

## Practice Problems

1. Sketch the graph of f(x) = 3ˣ
2. Solve: 2ˣ⁺¹ = 32
3. A population grows from 500 to 2000 in 4 years. Find the growth rate.
4. Simplify: (3²)ˣ · 3⁻ˣ / 3ˣ⁺¹
5. £500 invested at 6% compounded monthly. Find the value after 2 years.

## Summary

Exponential functions are powerful mathematical tools for modeling real-world phenomena involving growth and decay. Understanding their properties, graphs, and applications is essential for advanced mathematics and many scientific fields.
