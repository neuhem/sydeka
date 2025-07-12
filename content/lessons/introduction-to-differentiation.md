---
title: "Introduction to Differentiation"
description: "Master the fundamental concepts of differentiation including first principles, basic rules, and applications to finding gradients and rates of change."
subject: "Mathematics"
level: "AS"
module: "Differentiation"
topics: ["First Principles", "Power Rule", "Chain Rule", "Product Rule", "Quotient Rule", "Applications"]
difficulty: "intermediate"
estimatedTime: 80
author: "Sydeka Team"
lastUpdated: "2024-12-07"
prerequisites: ["Functions", "Limits", "Basic algebra"]
---

# Introduction to Differentiation

## What is Differentiation?

**Differentiation** is the mathematical process of finding the rate of change of a function with respect to its variable. It's one of the fundamental concepts in calculus and has applications throughout mathematics, physics, engineering, and economics.

### Key Concepts
- **Derivative**: The result of differentiation
- **Gradient**: The slope of a tangent line to a curve at a point
- **Rate of change**: How quickly one quantity changes with respect to another

## Derivative Notation

For a function $f(x)$, there are several ways to denote its derivative:

- **Leibniz notation**: $\frac{df}{dx}$ or $\frac{dy}{dx}$ (read as "dee f dee x")
- **Lagrange notation**: $f'(x)$ (read as "f prime of x")
- **Newton notation**: $\dot{f}$ (used mainly in physics for time derivatives)

## First Principles (Definition of a Derivative)

The derivative is formally defined using limits:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

This is called **differentiation from first principles**.

### Example 1: Differentiate $f(x) = x^2$ from first principles

**Step 1:** Apply the definition
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Step 2:** Substitute $f(x) = x^2$
$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}$$

**Step 3:** Expand $(x+h)^2$
$$f'(x) = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$

**Step 4:** Simplify
$$f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} \frac{h(2x + h)}{h}$$

**Step 5:** Cancel $h$ (since $h \neq 0$ in the limit)
$$f'(x) = \lim_{h \to 0} (2x + h) = 2x$$

**Therefore:** $\frac{d}{dx}(x^2) = 2x$

### Example 2: Differentiate $f(x) = x^3$ from first principles

Following the same process:
$$f'(x) = \lim_{h \to 0} \frac{(x+h)^3 - x^3}{h}$$

Expanding $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$:
$$f'(x) = \lim_{h \to 0} \frac{3x^2h + 3xh^2 + h^3}{h}$$
$$= \lim_{h \to 0} (3x^2 + 3xh + h^2) = 3x^2$$

**Therefore:** $\frac{d}{dx}(x^3) = 3x^2$

## Basic Differentiation Rules

From first principles, we can derive these fundamental rules:

### 1. Power Rule
For $f(x) = x^n$ where $n$ is any real number:
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

**Examples:**
- $\frac{d}{dx}(x^4) = 4x^3$
- $\frac{d}{dx}(x^{-2}) = -2x^{-3} = -\frac{2}{x^3}$
- $\frac{d}{dx}(\sqrt{x}) = \frac{d}{dx}(x^{\frac{1}{2}}) = \frac{1}{2}x^{-\frac{1}{2}} = \frac{1}{2\sqrt{x}}$

### 2. Constant Rule
The derivative of a constant is zero:
$$\frac{d}{dx}(c) = 0$$

**Example:** $\frac{d}{dx}(7) = 0$

### 3. Constant Multiple Rule
$$\frac{d}{dx}(cf(x)) = c \cdot f'(x)$$

**Example:** $\frac{d}{dx}(3x^2) = 3 \cdot 2x = 6x$

### 4. Sum/Difference Rule
$$\frac{d}{dx}(f(x) \pm g(x)) = f'(x) \pm g'(x)$$

**Example:** $\frac{d}{dx}(x^3 + 2x^2 - 5x + 1) = 3x^2 + 4x - 5$

## Common Derivatives

You should memorize these standard derivatives:

| Function | Derivative |
|----------|------------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $a^x$ | $a^x \ln a$ |

## Worked Examples

### Example 3: Differentiate $y = 3x^4 - 2x^3 + 5x - 7$

Apply the rules step by step:
$$\frac{dy}{dx} = 3 \cdot 4x^3 - 2 \cdot 3x^2 + 5 \cdot 1 - 0$$
$$= 12x^3 - 6x^2 + 5$$

### Example 4: Find the gradient of $y = \frac{2}{x^3} + \sqrt{x}$ at $x = 4$

**Step 1:** Rewrite using indices
$$y = 2x^{-3} + x^{\frac{1}{2}}$$

**Step 2:** Differentiate
$$\frac{dy}{dx} = 2(-3)x^{-4} + \frac{1}{2}x^{-\frac{1}{2}}$$
$$= -6x^{-4} + \frac{1}{2\sqrt{x}}$$

**Step 3:** Substitute $x = 4$
$$\frac{dy}{dx}\bigg|_{x=4} = -\frac{6}{4^4} + \frac{1}{2\sqrt{4}} = -\frac{6}{256} + \frac{1}{4}$$
$$= -\frac{3}{128} + \frac{32}{128} = \frac{29}{128}$$

### Example 5: Find $\frac{dy}{dx}$ when $y = \frac{x^2 + 3x - 1}{x}$

**Method 1:** Simplify first
$$y = \frac{x^2}{x} + \frac{3x}{x} - \frac{1}{x} = x + 3 - x^{-1}$$
$$\frac{dy}{dx} = 1 + 0 - (-1)x^{-2} = 1 + \frac{1}{x^2}$$

**Method 2:** Use quotient rule (covered later)

## The Chain Rule

For composite functions $y = f(g(x))$:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

where $u = g(x)$.

### Example 6: Differentiate $y = (3x + 1)^5$

**Step 1:** Let $u = 3x + 1$, so $y = u^5$

**Step 2:** Find the derivatives
- $\frac{dy}{du} = 5u^4$
- $\frac{du}{dx} = 3$

**Step 3:** Apply the chain rule
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = 5u^4 \cdot 3 = 15u^4$$

**Step 4:** Substitute back
$$\frac{dy}{dx} = 15(3x + 1)^4$$

### Example 7: Differentiate $y = \sqrt{x^2 + 1}$

**Step 1:** Rewrite as $y = (x^2 + 1)^{\frac{1}{2}}$

**Step 2:** Let $u = x^2 + 1$, so $y = u^{\frac{1}{2}}$

**Step 3:** Find derivatives
- $\frac{dy}{du} = \frac{1}{2}u^{-\frac{1}{2}}$
- $\frac{du}{dx} = 2x$

**Step 4:** Apply chain rule
$$\frac{dy}{dx} = \frac{1}{2}u^{-\frac{1}{2}} \cdot 2x = \frac{x}{\sqrt{u}} = \frac{x}{\sqrt{x^2 + 1}}$$

## Applications of Differentiation

### 1. Finding Turning Points
At turning points (maxima and minima), the gradient is zero:
$$\frac{dy}{dx} = 0$$

### Example 8: Find turning points of $y = x^3 - 6x^2 + 9x + 1$

**Step 1:** Differentiate
$$\frac{dy}{dx} = 3x^2 - 12x + 9$$

**Step 2:** Set equal to zero
$$3x^2 - 12x + 9 = 0$$
$$3(x^2 - 4x + 3) = 0$$
$$3(x - 1)(x - 3) = 0$$

**Step 3:** Solve for $x$
$$x = 1 \text{ or } x = 3$$

**Step 4:** Find corresponding $y$-values
- At $x = 1$: $y = 1 - 6 + 9 + 1 = 5$
- At $x = 3$: $y = 27 - 54 + 27 + 1 = 1$

**Turning points:** $(1, 5)$ and $(3, 1)$

### 2. Finding Rates of Change
The derivative gives the instantaneous rate of change.

### Example 9: The position of a particle is given by $s = t^3 - 3t^2 + 2t$ meters after $t$ seconds. Find:
a) The velocity at $t = 2$ seconds
b) When the particle is at rest

**Solution:**
Velocity = $\frac{ds}{dt} = 3t^2 - 6t + 2$

a) At $t = 2$: $v = 3(4) - 6(2) + 2 = 12 - 12 + 2 = 2$ m/s

b) Particle at rest when $v = 0$:
$3t^2 - 6t + 2 = 0$

Using the quadratic formula:
$t = \frac{6 \pm \sqrt{36 - 24}}{6} = \frac{6 \pm 2\sqrt{3}}{6} = 1 \pm \frac{\sqrt{3}}{3}$

## Practice Problems

### Set A: Basic Rules
1. Differentiate: $y = x^5$
2. Find $\frac{dy}{dx}$: $y = 4x^3 - 2x + 7$
3. Differentiate: $y = \frac{1}{x^2}$
4. Find the derivative: $y = 3\sqrt{x} - \frac{2}{x}$

### Set B: Chain Rule
5. Differentiate: $y = (2x - 1)^4$
6. Find $\frac{dy}{dx}$: $y = \sqrt{3x + 2}$
7. Differentiate: $y = (x^2 - 3x + 1)^3$

### Set C: Applications
8. Find the turning points of $y = x^3 - 3x^2 - 9x + 5$
9. The height of a ball is $h = 20t - 5t^2$ meters after $t$ seconds. Find the maximum height.
10. Find the equation of the tangent to $y = x^2 + 2x - 1$ at $x = 1$

## Key Points to Remember

1. **First principles** gives the formal definition but is slow for complex functions
2. **Power rule** is the most frequently used rule
3. **Chain rule** is essential for composite functions
4. Always **simplify** expressions before differentiating when possible
5. **Check your answers** by considering the behavior of the original function

## Common Mistakes

- Forgetting to apply the chain rule for composite functions
- Confusing the power rule: $\frac{d}{dx}(x^n) = nx^{n-1}$, not $nx^n$
- Not using negative indices: $\frac{1}{x^2} = x^{-2}$
- Forgetting the constant multiple rule

## Next Topics

After mastering basic differentiation, you'll study:
- Product and quotient rules
- Implicit differentiation  
- Parametric differentiation
- Second derivatives and concavity
- Optimization problems
- Related rates
