---
title: "Introduction to Integration"
description: "Learn the fundamentals of integration including basic rules, techniques, and applications to finding areas under curves."
subject: "Mathematics"
level: "AS"
module: "Integration"
topics: ["Indefinite Integrals", "Definite Integrals", "Power Rule", "Substitution", "Area Under Curves"]
difficulty: "intermediate"
estimatedTime: 75
author: "Sydeka Team"
lastUpdated: "2024-12-07"
prerequisites: ["Differentiation", "Functions", "Basic algebra"]
---

# Introduction to Integration

## What is Integration?

**Integration** is the reverse process of differentiation. While differentiation finds rates of change, integration finds the original function when given its rate of change. Integration has two main applications:
1. Finding areas under curves
2. Solving differential equations

### Key Terminology
- **Integrand**: The function being integrated
- **Antiderivative**: A function whose derivative gives the integrand
- **Constant of integration**: The arbitrary constant $C$ in indefinite integrals

## Types of Integrals

### 1. Indefinite Integrals
$$\int f(x) \, dx = F(x) + C$$

where $F'(x) = f(x)$ and $C$ is the constant of integration.

### 2. Definite Integrals  
$$\int_a^b f(x) \, dx = F(b) - F(a)$$

where $a$ and $b$ are the limits of integration.

## Fundamental Theorem of Calculus

If $F'(x) = f(x)$, then:
$$\int_a^b f(x) \, dx = F(b) - F(a)$$

This connects differentiation and integration as inverse operations.

## Basic Integration Rules

### 1. Power Rule
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

**Examples:**
- $\int x^3 \, dx = \frac{x^4}{4} + C$
- $\int x^{-2} \, dx = \frac{x^{-1}}{-1} + C = -\frac{1}{x} + C$
- $\int \sqrt{x} \, dx = \int x^{\frac{1}{2}} \, dx = \frac{x^{\frac{3}{2}}}{\frac{3}{2}} + C = \frac{2x^{\frac{3}{2}}}{3} + C$

### 2. Constant Rule
$$\int k \, dx = kx + C$$

### 3. Constant Multiple Rule
$$\int kf(x) \, dx = k\int f(x) \, dx$$

### 4. Sum/Difference Rule
$$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$

## Standard Integrals

You should memorize these common integrals:

| Function | Integral |
|----------|----------|
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $e^x$ | $e^x + C$ |
| $\frac{1}{x}$ | $\ln\|x\| + C$ |
| $\frac{1}{\sqrt{x}}$ | $2\sqrt{x} + C$ |

## Worked Examples

### Example 1: Find $\int (3x^2 - 4x + 5) \, dx$

Using the sum rule and power rule:
$$\int (3x^2 - 4x + 5) \, dx = 3\int x^2 \, dx - 4\int x \, dx + 5\int 1 \, dx$$

$$= 3 \cdot \frac{x^3}{3} - 4 \cdot \frac{x^2}{2} + 5x + C$$

$$= x^3 - 2x^2 + 5x + C$$

### Example 2: Evaluate $\int_1^3 (2x + 1) \, dx$

**Step 1:** Find the antiderivative
$$\int (2x + 1) \, dx = x^2 + x + C$$

**Step 2:** Apply the fundamental theorem
$$\int_1^3 (2x + 1) \, dx = [x^2 + x]_1^3$$

**Step 3:** Evaluate at the limits
$$= (3^2 + 3) - (1^2 + 1) = 12 - 2 = 10$$

### Example 3: Find $\int \frac{2x^3 - 1}{x^2} \, dx$

**Step 1:** Simplify the integrand
$$\frac{2x^3 - 1}{x^2} = \frac{2x^3}{x^2} - \frac{1}{x^2} = 2x - x^{-2}$$

**Step 2:** Integrate
$$\int (2x - x^{-2}) \, dx = 2 \cdot \frac{x^2}{2} - \frac{x^{-1}}{-1} + C$$

$$= x^2 + \frac{1}{x} + C$$

### Example 4: Evaluate $\int_0^4 \sqrt{x} \, dx$

**Step 1:** Rewrite using indices
$$\int_0^4 \sqrt{x} \, dx = \int_0^4 x^{\frac{1}{2}} \, dx$$

**Step 2:** Apply power rule
$$= \left[\frac{x^{\frac{3}{2}}}{\frac{3}{2}}\right]_0^4 = \left[\frac{2x^{\frac{3}{2}}}{3}\right]_0^4$$

**Step 3:** Evaluate
$$= \frac{2 \cdot 4^{\frac{3}{2}}}{3} - \frac{2 \cdot 0^{\frac{3}{2}}}{3} = \frac{2 \cdot 8}{3} = \frac{16}{3}$$

## Integration by Substitution

For integrals of the form $\int f(g(x))g'(x) \, dx$:

**Method:**
1. Let $u = g(x)$
2. Then $du = g'(x) \, dx$
3. The integral becomes $\int f(u) \, du$
4. Integrate with respect to $u$
5. Substitute back to get the answer in terms of $x$

### Example 5: Find $\int 2x(x^2 + 1)^3 \, dx$

**Step 1:** Identify the substitution
Let $u = x^2 + 1$, then $\frac{du}{dx} = 2x$, so $du = 2x \, dx$

**Step 2:** Rewrite the integral
$$\int 2x(x^2 + 1)^3 \, dx = \int u^3 \, du$$

**Step 3:** Integrate
$$= \frac{u^4}{4} + C$$

**Step 4:** Substitute back
$$= \frac{(x^2 + 1)^4}{4} + C$$

### Example 6: Evaluate $\int_0^{\frac{\pi}{4}} \sin(2x) \, dx$

**Step 1:** Let $u = 2x$, then $du = 2 \, dx$, so $dx = \frac{du}{2}$

**Step 2:** Change the limits
- When $x = 0$: $u = 0$
- When $x = \frac{\pi}{4}$: $u = \frac{\pi}{2}$

**Step 3:** Rewrite and integrate
$$\int_0^{\frac{\pi}{4}} \sin(2x) \, dx = \int_0^{\frac{\pi}{2}} \sin u \cdot \frac{du}{2} = \frac{1}{2}\int_0^{\frac{\pi}{2}} \sin u \, du$$

$$= \frac{1}{2}[-\cos u]_0^{\frac{\pi}{2}} = \frac{1}{2}[(-\cos \frac{\pi}{2}) - (-\cos 0)]$$

$$= \frac{1}{2}[0 - (-1)] = \frac{1}{2}$$

## Area Under Curves

The definite integral $\int_a^b f(x) \, dx$ gives the **signed area** between the curve $y = f(x)$ and the x-axis from $x = a$ to $x = b$.

### Important Points:
- When $f(x) > 0$: Integral gives positive area (above x-axis)
- When $f(x) < 0$: Integral gives negative area (below x-axis)
- Total area = $\int_a^b |f(x)| \, dx$

### Example 7: Find the area under $y = x^2$ from $x = 1$ to $x = 3$

$$\text{Area} = \int_1^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_1^3 = \frac{27}{3} - \frac{1}{3} = \frac{26}{3} \text{ square units}$$

### Example 8: Find the area between $y = x^2 - 4$ and the x-axis from $x = -3$ to $x = 3$

**Step 1:** Find where the curve crosses the x-axis
$x^2 - 4 = 0 \Rightarrow x = \pm 2$

**Step 2:** Analyze the sign of $f(x) = x^2 - 4$
- For $x \in [-3, -2]$: $f(x) > 0$ (above x-axis)
- For $x \in [-2, 2]$: $f(x) < 0$ (below x-axis)  
- For $x \in [2, 3]$: $f(x) > 0$ (above x-axis)

**Step 3:** Calculate total area
$$\text{Total Area} = \int_{-3}^{-2} (x^2 - 4) \, dx + \int_{-2}^{2} |x^2 - 4| \, dx + \int_{2}^{3} (x^2 - 4) \, dx$$

$$= \int_{-3}^{-2} (x^2 - 4) \, dx + \int_{-2}^{2} (4 - x^2) \, dx + \int_{2}^{3} (x^2 - 4) \, dx$$

**Step 4:** Evaluate each integral
$$\int (x^2 - 4) \, dx = \frac{x^3}{3} - 4x + C$$

First integral: $\left[\frac{x^3}{3} - 4x\right]_{-3}^{-2} = \left(-\frac{8}{3} + 8\right) - \left(-9 + 12\right) = \frac{16}{3} - 3 = \frac{7}{3}$

Second integral: $\left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right) = 16 - \frac{16}{3} = \frac{32}{3}$

Third integral: $\left[\frac{x^3}{3} - 4x\right]_{2}^{3} = \left(9 - 12\right) - \left(\frac{8}{3} - 8\right) = -3 + \frac{16}{3} = \frac{7}{3}$

**Total Area:** $\frac{7}{3} + \frac{32}{3} + \frac{7}{3} = \frac{46}{3}$ square units

## Area Between Two Curves

For curves $y = f(x)$ and $y = g(x)$ where $f(x) \geq g(x)$ for $a \leq x \leq b$:

$$\text{Area} = \int_a^b [f(x) - g(x)] \, dx$$

### Example 9: Find the area between $y = x^2$ and $y = 2x + 3$

**Step 1:** Find intersection points
$x^2 = 2x + 3$
$x^2 - 2x - 3 = 0$
$(x - 3)(x + 1) = 0$
So $x = -1$ or $x = 3$

**Step 2:** Determine which function is on top
At $x = 0$: $y = x^2$ gives $y = 0$, $y = 2x + 3$ gives $y = 3$
So $2x + 3 > x^2$ between the intersection points.

**Step 3:** Calculate the area
$$\text{Area} = \int_{-1}^{3} (2x + 3 - x^2) \, dx = \int_{-1}^{3} (-x^2 + 2x + 3) \, dx$$

$$= \left[-\frac{x^3}{3} + x^2 + 3x\right]_{-1}^{3}$$

$$= \left(-9 + 9 + 9\right) - \left(\frac{1}{3} + 1 - 3\right) = 9 - \left(-\frac{5}{3}\right) = \frac{32}{3} \text{ square units}$$

## Practice Problems

### Set A: Basic Integration
1. $\int (4x^3 - 2x + 1) \, dx$
2. $\int \frac{3}{x^2} \, dx$
3. $\int (2\sqrt{x} - \frac{1}{\sqrt{x}}) \, dx$
4. $\int_0^2 (x^2 + 3x) \, dx$

### Set B: Substitution
5. $\int 3x^2(x^3 + 1)^4 \, dx$
6. $\int \frac{2x}{x^2 + 1} \, dx$
7. $\int_0^1 xe^{x^2} \, dx$

### Set C: Areas
8. Find the area under $y = 4 - x^2$ from $x = -1$ to $x = 2$
9. Find the area between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$
10. Find the total area between $y = \sin x$ and the x-axis from $x = 0$ to $x = 2\pi$

## Key Points to Remember

1. **Integration is the reverse of differentiation**
2. **Always include the constant $C$ in indefinite integrals**
3. **Use substitution when you see a function and its derivative**
4. **For areas below the x-axis, the integral gives negative values**
5. **Check your answer by differentiating**

## Common Mistakes

- Forgetting the constant of integration in indefinite integrals
- Not changing limits when using substitution in definite integrals
- Confusing signed area with total area
- Incorrect application of the power rule: $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$

## Applications

Integration is used in:
- **Physics**: Finding displacement from velocity, work done by forces
- **Economics**: Consumer and producer surplus, total cost from marginal cost
- **Engineering**: Calculating moments, centers of mass
- **Biology**: Population growth models, drug concentration

## Next Topics

After mastering basic integration, you'll study:
- Integration by parts
- Partial fractions
- Trigonometric substitution
- Numerical integration methods
- Differential equations
- Volumes of revolution
