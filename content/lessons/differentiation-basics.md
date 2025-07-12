---
title: "Differentiation Basics"
subject: "Mathematics"
level: "AS"
duration: 75
difficulty: "intermediate"
topics: ["Calculus", "Differentiation", "Derivatives"]
prerequisites: ["Algebraic manipulation", "Functions"]
---

# Differentiation Basics

## Learning Objectives

By the end of this lesson, you will be able to:
- Understand the concept of a derivative
- Apply the power rule for differentiation
- Find derivatives of polynomial functions
- Interpret derivatives as rates of change

## What is Differentiation?

Differentiation is the process of finding the derivative of a function. The derivative measures how a function changes as its input changes.

## The Power Rule

For any function $f(x) = x^n$ where $n$ is a real number:

$$\frac{d}{dx}[x^n] = nx^{n-1}$$

### Examples:
- $\frac{d}{dx}[x^3] = 3x^2$
- $\frac{d}{dx}[x^2] = 2x$
- $\frac{d}{dx}[x] = 1$
- $\frac{d}{dx}[c] = 0$ (where $c$ is a constant)

## Differentiation Rules

### 1. Constant Rule
$$\frac{d}{dx}[c] = 0$$

### 2. Constant Multiple Rule
$$\frac{d}{dx}[cf(x)] = c \cdot f'(x)$$

### 3. Sum/Difference Rule
$$\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$$

## Step-by-Step Example

Find the derivative of $f(x) = 3x^4 - 2x^3 + 5x - 7$

**Step 1:** Apply the power rule to each term
- $\frac{d}{dx}[3x^4] = 3 \cdot 4x^3 = 12x^3$
- $\frac{d}{dx}[-2x^3] = -2 \cdot 3x^2 = -6x^2$
- $\frac{d}{dx}[5x] = 5 \cdot 1 = 5$
- $\frac{d}{dx}[-7] = 0$

**Step 2:** Combine the results
$$f'(x) = 12x^3 - 6x^2 + 5$$

## Physical Interpretation

The derivative represents:
- **Instantaneous rate of change**
- **Slope of the tangent line** at any point
- **Velocity** when position is given as a function of time

## Practice Problems

1. Find the derivatives of:
   - $f(x) = x^5 - 3x^2 + 2$
   - $g(x) = 4x^3 - 6x + 1$
   - $h(x) = 2x^4 - \frac{1}{2}x^2 + 3x$

2. If $s(t) = 5t^2 - 3t + 2$ represents position, find the velocity function $v(t)$.

3. Find the equation of the tangent line to $y = x^2 - 4x + 3$ at $x = 2$.

## Summary

- Differentiation finds the rate of change of a function
- The power rule: $\frac{d}{dx}[x^n] = nx^{n-1}$
- Constants differentiate to zero
- Use sum/difference rules for polynomials
- Derivatives have important physical interpretations
