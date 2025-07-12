---
title: "Basic Trigonometric Functions"
description: "Explore the fundamental trigonometric ratios, special angles, identities, and applications in solving triangles."
subject: "Mathematics"
level: "AS"
module: "Trigonometry"
topics: ["Sine", "Cosine", "Tangent", "Special Angles", "Trigonometric Identities", "Sine Rule", "Cosine Rule"]
difficulty: "intermediate"
estimatedTime: 70
author: "Sydeka Team"
lastUpdated: "2024-12-07"
prerequisites: ["Pythagoras theorem", "Basic algebra", "Right-angled triangles"]
---

# Basic Trigonometric Functions

## Introduction to Trigonometry

**Trigonometry** is the study of relationships between angles and sides in triangles. The word comes from Greek: "trigonon" (triangle) and "metron" (measure). It has applications in navigation, physics, engineering, astronomy, and many other fields.

## Primary Trigonometric Ratios

In a right-angled triangle with angle $\theta$:

$$\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}$$

$$\cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}$$

$$\tan \theta = \frac{\text{opposite}}{\text{adjacent}}$$

### Memory Aid: SOH-CAH-TOA
- **S**in = **O**pposite / **H**ypotenuse
- **C**os = **A**djacent / **H**ypotenuse  
- **T**an = **O**pposite / **A**djacent

### Example 1: Finding trigonometric ratios
In a right-angled triangle with sides 3, 4, and 5 (where 5 is the hypotenuse), find all trigonometric ratios for the angle opposite the side of length 3.

**Solution:**
- Opposite = 3, Adjacent = 4, Hypotenuse = 5
- $\sin \theta = \frac{3}{5} = 0.6$
- $\cos \theta = \frac{4}{5} = 0.8$  
- $\tan \theta = \frac{3}{4} = 0.75$

## Special Angles

These angles appear frequently and should be memorized:

| Angle | Degrees | Radians | $\sin$ | $\cos$ | $\tan$ |
|-------|---------|---------|--------|--------|--------|
| $0°$ | $0°$ | $0$ | $0$ | $1$ | $0$ |
| $30°$ | $30°$ | $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45°$ | $45°$ | $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60°$ | $60°$ | $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $90°$ | $\frac{\pi}{2}$ | $1$ | $0$ | undefined |

### Deriving Special Angles

**For 30° and 60°:** Use an equilateral triangle with side length 2
- Height = $\sqrt{3}$ (by Pythagoras)
- Creates two 30-60-90 triangles with sides 1, $\sqrt{3}$, 2

**For 45°:** Use an isosceles right triangle with legs of length 1
- Hypotenuse = $\sqrt{2}$ (by Pythagoras)
- Creates a 45-45-90 triangle with sides 1, 1, $\sqrt{2}$

## Reciprocal Functions

The reciprocal trigonometric functions are:

$$\csc \theta = \frac{1}{\sin \theta} = \frac{\text{hypotenuse}}{\text{opposite}}$$

$$\sec \theta = \frac{1}{\cos \theta} = \frac{\text{hypotenuse}}{\text{adjacent}}$$

$$\cot \theta = \frac{1}{\tan \theta} = \frac{\cos \theta}{\sin \theta} = \frac{\text{adjacent}}{\text{opposite}}$$

### Example 2: Calculate reciprocal functions
If $\sin \theta = \frac{3}{5}$ and $\cos \theta = \frac{4}{5}$, find all reciprocal functions.

**Solution:**
- $\csc \theta = \frac{1}{\sin \theta} = \frac{5}{3}$
- $\sec \theta = \frac{1}{\cos \theta} = \frac{5}{4}$
- $\tan \theta = \frac{\sin \theta}{\cos \theta} = \frac{3/5}{4/5} = \frac{3}{4}$
- $\cot \theta = \frac{1}{\tan \theta} = \frac{4}{3}$

## Fundamental Trigonometric Identities

### Pythagorean Identity
The most important identity:
$$\sin^2 \theta + \cos^2 \theta = 1$$

**Proof:** In a right triangle with hypotenuse $h$, opposite $o$, and adjacent $a$:
$$o^2 + a^2 = h^2 \quad \text{(Pythagoras theorem)}$$
Dividing by $h^2$:
$$\frac{o^2}{h^2} + \frac{a^2}{h^2} = 1$$
$$\left(\frac{o}{h}\right)^2 + \left(\frac{a}{h}\right)^2 = 1$$
$$\sin^2 \theta + \cos^2 \theta = 1$$

### Derived Identities
From the Pythagorean identity:

$$1 + \tan^2 \theta = \sec^2 \theta$$
$$1 + \cot^2 \theta = \csc^2 \theta$$

### Example 3: Using Pythagorean identity
If $\cos \theta = \frac{3}{5}$ and $0° < \theta < 90°$, find $\sin \theta$.

**Solution:**
Using $\sin^2 \theta + \cos^2 \theta = 1$:
$$\sin^2 \theta = 1 - \cos^2 \theta = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$

Since $\theta$ is in the first quadrant: $\sin \theta = \frac{4}{5}$

## Solving Basic Trigonometric Equations

### Example 4: Solve $2\sin \theta = 1$ for $0° \leq \theta \leq 360°$

**Solution:**
$$\sin \theta = \frac{1}{2}$$

From the unit circle or special angles:
- $\theta = 30°$ (first quadrant)
- $\theta = 150°$ (second quadrant, where sine is also positive)

**Check:** $\sin 30° = \sin 150° = \frac{1}{2}$ ✓

### Example 5: Solve $\cos \theta = -\frac{\sqrt{2}}{2}$ for $0° \leq \theta \leq 360°$

**Solution:**
Cosine is negative in the second and third quadrants.
The reference angle is $45°$ (since $\cos 45° = \frac{\sqrt{2}}{2}$).

- Second quadrant: $\theta = 180° - 45° = 135°$
- Third quadrant: $\theta = 180° + 45° = 225°$

## The Unit Circle

The unit circle (radius = 1, centered at origin) provides a powerful way to understand trigonometry:

- Any point on the circle has coordinates $(\cos \theta, \sin \theta)$
- $\theta$ is measured counterclockwise from the positive x-axis
- All trigonometric values can be read from the unit circle

### Quadrant Signs
| Quadrant | $\sin$ | $\cos$ | $\tan$ |
|----------|---------|---------|---------|
| I (0° to 90°) | + | + | + |
| II (90° to 180°) | + | - | - |
| III (180° to 270°) | - | - | + |
| IV (270° to 360°) | - | + | - |

**Memory aid:** "All Students Take Calculus" (starting from Quadrant I)

## Sine and Cosine Rules

For any triangle (not necessarily right-angled) with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$ respectively:

### Sine Rule
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

**Use when:** You know two angles and one side, or two sides and a non-included angle.

### Cosine Rule
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

**Use when:** You know three sides, or two sides and the included angle.

### Example 6: Using the Sine Rule
In triangle ABC, $\angle A = 30°$, $\angle B = 45°$, and side $a = 10$ cm. Find side $b$.

**Solution:**
Using the sine rule:
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{10}{\sin 30°} = \frac{b}{\sin 45°}$$
$$\frac{10}{\frac{1}{2}} = \frac{b}{\frac{\sqrt{2}}{2}}$$
$$20 = \frac{b}{\frac{\sqrt{2}}{2}}$$
$$b = 20 \times \frac{\sqrt{2}}{2} = 10\sqrt{2} \text{ cm}$$

### Example 7: Using the Cosine Rule
A triangle has sides of length 5 cm, 7 cm, and included angle 60°. Find the third side.

**Solution:**
Using the cosine rule with $a = ?$, $b = 5$, $c = 7$, $A = 60°$:
$$a^2 = b^2 + c^2 - 2bc\cos A$$
$$a^2 = 5^2 + 7^2 - 2(5)(7)\cos 60°$$
$$a^2 = 25 + 49 - 70 \times \frac{1}{2}$$
$$a^2 = 74 - 35 = 39$$
$$a = \sqrt{39} \approx 6.24 \text{ cm}$$

### Example 8: Finding an angle using Cosine Rule
In a triangle with sides 6 cm, 8 cm, and 10 cm, find the largest angle.

**Solution:**
The largest angle is opposite the longest side (10 cm).
Using the cosine rule:
$$\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{6^2 + 8^2 - 10^2}{2(6)(8)}$$
$$= \frac{36 + 64 - 100}{96} = \frac{0}{96} = 0$$

Therefore: $C = 90°$ (This is a right-angled triangle!)

## Graphs of Trigonometric Functions

### Sine Function: $y = \sin x$
- **Domain:** All real numbers
- **Range:** $[-1, 1]$  
- **Period:** $360°$ or $2\pi$ radians
- **Key points:** $(0°, 0)$, $(90°, 1)$, $(180°, 0)$, $(270°, -1)$, $(360°, 0)$

### Cosine Function: $y = \cos x$
- **Domain:** All real numbers
- **Range:** $[-1, 1]$
- **Period:** $360°$ or $2\pi$ radians  
- **Key points:** $(0°, 1)$, $(90°, 0)$, $(180°, -1)$, $(270°, 0)$, $(360°, 1)$

### Tangent Function: $y = \tan x$
- **Domain:** All real numbers except $90° + n \times 180°$
- **Range:** All real numbers
- **Period:** $180°$ or $\pi$ radians
- **Asymptotes:** $x = 90°, 270°, 450°, ...$

## Practice Problems

### Set A: Basic Ratios
1. In a right triangle with opposite = 5, adjacent = 12, find all six trigonometric ratios.
2. If $\sin \theta = \frac{2}{3}$, find $\cos \theta$ and $\tan \theta$ (assume acute angle).
3. Evaluate without a calculator: $\sin 60° + \cos 30° - \tan 45°$

### Set B: Equations
4. Solve $\cos \theta = \frac{1}{2}$ for $0° \leq \theta \leq 360°$
5. Solve $\tan \theta = -1$ for $0° \leq \theta \leq 360°$
6. Find all values of $\theta$ where $2\sin \theta - \sqrt{3} = 0$ in $[0°, 360°]$

### Set C: Triangle Problems
7. In triangle ABC, $a = 8$, $b = 10$, $\angle C = 75°$. Find side $c$.
8. A triangle has sides 7, 9, 11. Find the smallest angle.
9. In triangle PQR, $\angle P = 40°$, $\angle Q = 65°$, $p = 15$. Find $q$ and $r$.

### Set D: Applications
10. A ladder 10m long leans against a wall at 70° to the horizontal. How high up the wall does it reach?
11. From a point 100m from the base of a tower, the angle of elevation to the top is 30°. Find the tower's height.
12. Two ships leave port simultaneously. One travels 20 km north, the other 30 km on bearing 060°. How far apart are they?

## Key Points to Remember

1. **SOH-CAH-TOA** for basic ratios
2. **Special angles** should be memorized
3. **Pythagorean identity** is fundamental: $\sin^2 \theta + \cos^2 \theta = 1$
4. **Quadrant rules** determine signs of trig functions
5. **Sine rule** for non-right triangles with angles and opposite sides
6. **Cosine rule** for non-right triangles with sides and included angles

## Real-World Applications

- **Navigation:** GPS systems, ship and aircraft navigation
- **Engineering:** Bridge design, roof construction  
- **Physics:** Wave motion, oscillations, circular motion
- **Astronomy:** Calculating distances to stars and planets
- **Computer Graphics:** Rotation and transformation of objects
- **Music:** Sound waves and harmonics

## Common Mistakes

- Confusing opposite and adjacent sides
- Using degrees when calculator is in radians (or vice versa)
- Forgetting that some angles have no solution
- Not considering all possible angles in the given range
- Mixing up sine and cosine rule applications

## Next Steps

After mastering basic trigonometry, you'll study:
- Compound angle formulas
- Double and half-angle formulas  
- Trigonometric equations and inequalities
- Inverse trigonometric functions
- Calculus applications (derivatives and integrals)
- Complex numbers and trigonometry
