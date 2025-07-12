// Application configuration constants
import { Module } from '@/types'

export const APP_CONFIG = {
  name: 'Sydeka',
  tagline: 'AI-Powered Learning Platform',
  description: 'The future of learning is here. AI-powered education that makes world-class knowledge accessible to everyone, from high school to graduate level.',
  keywords: ['education', 'learning', 'AI', 'mathematics', 'physics', 'computer science', 'history'],
  author: 'Sydeka Team',
  copyright: '2024 Sydeka. All rights reserved. Making education accessible to all.',
} as const

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/ai-lesson-generator', label: 'AI Generator' },
  { href: '/about', label: 'About' },
] as const

export const FOOTER_LINKS = {
  subjects: [
    { href: '/subjects/mathematics', label: 'Mathematics' },
    { href: '/subjects/physics', label: 'Physics' },
    { href: '/subjects/computer-science', label: 'Computer Science' },
    { href: '/subjects/history', label: 'History' },
  ],
  platform: [
    { href: '/lessons', label: 'Browse Lessons' },
    { href: '/ai-mentor', label: 'AI Mentor' },
    { href: '/progress', label: 'Track Progress' },
    { href: '/community', label: 'Community' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
} as const

export const CURRICULUM_LEVELS = {
  AS: 'AS Year 1',
  A2: 'A2 Year 2',
} as const

export const DIFFICULTY_LEVELS = {
  foundation: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const

export const AS_MODULES: Module[] = [
  {
    id: 'as-algebra-functions',
    title: 'Algebra & Functions',
    description: 'Laws of indices, surds, quadratics, inequalities, sketching curves',
    level: 'AS',
    topics: ['Laws of Indices', 'Surds', 'Quadratics', 'Inequalities', 'Sketching Curves'],
    estimatedDuration: 40
  },
  {
    id: 'as-coordinate-geometry',
    title: 'Coordinate Geometry',
    description: 'Straight lines, circles, parametric equations',
    level: 'AS',
    topics: ['Straight Lines', 'Circles', 'Parametric Equations'],
    estimatedDuration: 35
  },
  {
    id: 'as-sequences-series',
    title: 'Sequences & Series',
    description: 'Arithmetic and geometric progressions, binomial expansion',
    level: 'AS',
    topics: ['Arithmetic Progressions', 'Geometric Progressions', 'Binomial Expansion'],
    estimatedDuration: 30
  },
  {
    id: 'as-trigonometry',
    title: 'Trigonometry',
    description: 'Trigonometric functions, identities, equations',
    level: 'AS',
    topics: ['Trigonometric Functions', 'Identities', 'Equations'],
    estimatedDuration: 35
  },
  {
    id: 'as-exponentials-logarithms',
    title: 'Exponentials & Logarithms',
    description: 'Exponential functions, natural logarithms, modelling',
    level: 'AS',
    topics: ['Exponential Functions', 'Natural Logarithms', 'Modelling'],
    estimatedDuration: 30
  },
  {
    id: 'as-differentiation',
    title: 'Differentiation',
    description: 'Derivatives from first principles, differentiation of polynomials, applications',
    level: 'AS',
    topics: ['First Principles', 'Polynomial Differentiation', 'Applications'],
    estimatedDuration: 40
  },
  {
    id: 'as-integration',
    title: 'Integration',
    description: 'Indefinite and definite integrals, area under curves',
    level: 'AS',
    topics: ['Indefinite Integrals', 'Definite Integrals', 'Area Under Curves'],
    estimatedDuration: 35
  },
  {
    id: 'as-statistics',
    title: 'Statistics',
    description: 'Data collection, measures of location and spread, representations',
    level: 'AS',
    topics: ['Data Collection', 'Measures of Location', 'Data Representations'],
    estimatedDuration: 30
  },
  {
    id: 'as-probability',
    title: 'Probability',
    description: 'Mutual exclusivity, independence, tree diagrams',
    level: 'AS',
    topics: ['Mutual Exclusivity', 'Independence', 'Tree Diagrams'],
    estimatedDuration: 25
  }
] as const

export const A2_MODULES: Module[] = [
  {
    id: 'a2-advanced-algebra',
    title: 'Advanced Algebra',
    description: 'Partial fractions, rational functions, complex algebraic manipulation',
    level: 'A2',
    topics: ['Partial Fractions', 'Rational Functions', 'Complex Algebra'],
    estimatedDuration: 45
  },
  {
    id: 'a2-advanced-calculus',
    title: 'Advanced Calculus',
    description: 'Integration techniques, differential equations, applications',
    level: 'A2',
    topics: ['Integration by Parts', 'Substitution', 'Differential Equations'],
    estimatedDuration: 50
  },
  {
    id: 'a2-complex-numbers',
    title: 'Complex Numbers',
    description: 'Complex plane, polar form, De Moivre\'s theorem, roots',
    level: 'A2',
    topics: ['Complex Plane', 'Polar Form', 'De Moivre\'s Theorem'],
    estimatedDuration: 40
  },
  {
    id: 'a2-vectors',
    title: 'Vectors',
    description: 'Vector operations, scalar and vector products, applications',
    level: 'A2',
    topics: ['Vector Operations', 'Scalar Product', 'Vector Product'],
    estimatedDuration: 45
  },
  {
    id: 'a2-parametric-equations',
    title: 'Parametric Equations',
    description: 'Parametric curves, calculus with parameters, applications',
    level: 'A2',
    topics: ['Parametric Curves', 'Parametric Calculus', 'Applications'],
    estimatedDuration: 35
  },
  {
    id: 'a2-numerical-methods',
    title: 'Numerical Methods',
    description: 'Root finding, numerical integration, iterative methods',
    level: 'A2',
    topics: ['Newton-Raphson', 'Trapezium Rule', 'Simpson\'s Rule'],
    estimatedDuration: 30
  },
  {
    id: 'a2-advanced-statistics',
    title: 'Advanced Statistics',
    description: 'Hypothesis testing, correlation, regression analysis',
    level: 'A2',
    topics: ['Hypothesis Testing', 'Correlation', 'Regression'],
    estimatedDuration: 40
  },
  {
    id: 'a2-probability-distributions',
    title: 'Probability Distributions',
    description: 'Normal, binomial, Poisson distributions, continuous random variables',
    level: 'A2',
    topics: ['Normal Distribution', 'Binomial Distribution', 'Poisson Distribution'],
    estimatedDuration: 35
  },
  {
    id: 'a2-mechanics',
    title: 'Advanced Mechanics',
    description: 'Projectile motion, circular motion, simple harmonic motion',
    level: 'A2',
    topics: ['Projectile Motion', 'Circular Motion', 'Simple Harmonic Motion'],
    estimatedDuration: 40
  }
] as const

// Lesson content for each module
export const MODULE_LESSONS = {
  'as-algebra-functions': [
    {
      id: 'laws-of-indices',
      title: 'Laws of Indices',
      content: `
# Laws of Indices

## Key Rules
1. **Product Rule**: $a^m \\times a^n = a^{m+n}$
2. **Quotient Rule**: $a^m \\div a^n = a^{m-n}$
3. **Power Rule**: $(a^m)^n = a^{mn}$
4. **Zero Index**: $a^0 = 1$ (where $a \\neq 0$)
5. **Negative Index**: $a^{-n} = \\frac{1}{a^n}$
6. **Fractional Index**: $a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$

## Examples
### Example 1: Simplify $2^3 \\times 2^4$
Using the product rule: $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$

### Example 2: Simplify $(3^2)^4$
Using the power rule: $(3^2)^4 = 3^{2 \\times 4} = 3^8 = 6561$

### Example 3: Simplify $\\frac{5^6}{5^2}$
Using the quotient rule: $\\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$

### Example 4: Evaluate $16^{\\frac{3}{4}}$
$16^{\\frac{3}{4}} = (16^{\\frac{1}{4}})^3 = (\\sqrt[4]{16})^3 = 2^3 = 8$

## Practice Problems
1. Simplify: $3^5 \\times 3^{-2}$
2. Evaluate: $64^{\\frac{2}{3}}$
3. Simplify: $\\frac{x^8}{x^3}$ where $x \\neq 0$
      `,
      difficulty: 'foundation',
      estimatedTime: 45
    },
    {
      id: 'surds',
      title: 'Surds and Irrational Numbers',
      content: `
# Surds and Irrational Numbers

## What is a Surd?
A surd is an irrational number that can be expressed as the root of a rational number.

## Key Rules for Surds
1. $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$
2. $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$
3. $\\sqrt{a^2} = |a|$
4. $(\\sqrt{a})^2 = a$ (where $a \\geq 0$)

## Simplifying Surds
To simplify a surd, find the largest perfect square factor.

### Example 1: Simplify $\\sqrt{72}$
$72 = 36 \\times 2 = 6^2 \\times 2$
Therefore: $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$

### Example 2: Simplify $\\sqrt{50} + \\sqrt{32}$
$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$
$\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}$
Therefore: $\\sqrt{50} + \\sqrt{32} = 5\\sqrt{2} + 4\\sqrt{2} = 9\\sqrt{2}$

## Rationalising Denominators
### Example 3: Rationalise $\\frac{3}{\\sqrt{5}}$
Multiply by $\\frac{\\sqrt{5}}{\\sqrt{5}}$:
$\\frac{3}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$

### Example 4: Rationalise $\\frac{2}{3 + \\sqrt{7}}$
Multiply by the conjugate $\\frac{3 - \\sqrt{7}}{3 - \\sqrt{7}}$:
$\\frac{2}{3 + \\sqrt{7}} \\times \\frac{3 - \\sqrt{7}}{3 - \\sqrt{7}} = \\frac{2(3 - \\sqrt{7})}{9 - 7} = \\frac{2(3 - \\sqrt{7})}{2} = 3 - \\sqrt{7}$
      `,
      difficulty: 'intermediate',
      estimatedTime: 50
    },
    {
      id: 'quadratics',
      title: 'Quadratic Equations and Functions',
      content: `
# Quadratic Equations and Functions

## Standard Form
A quadratic equation has the form: $ax^2 + bx + c = 0$ where $a \\neq 0$

## Methods of Solution

### 1. Factorisation
For $x^2 + 5x + 6 = 0$:
$(x + 2)(x + 3) = 0$
Therefore: $x = -2$ or $x = -3$

### 2. Quadratic Formula
$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

#### Example: Solve $2x^2 + 3x - 2 = 0$
Here $a = 2$, $b = 3$, $c = -2$
$x = \\frac{-3 \\pm \\sqrt{9 - 4(2)(-2)}}{2(2)} = \\frac{-3 \\pm \\sqrt{25}}{4} = \\frac{-3 \\pm 5}{4}$
Therefore: $x = \\frac{1}{2}$ or $x = -2$

### 3. Completing the Square
For $x^2 + 6x + 5 = 0$:
$x^2 + 6x + 9 - 9 + 5 = 0$
$(x + 3)^2 - 4 = 0$
$(x + 3)^2 = 4$
$x + 3 = \\pm 2$
Therefore: $x = -1$ or $x = -5$

## The Discriminant
For $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$
- If $\\Delta > 0$: Two distinct real roots
- If $\\Delta = 0$: One repeated real root
- If $\\Delta < 0$: No real roots (complex roots)

## Quadratic Functions and Graphs
The graph of $y = ax^2 + bx + c$ is a parabola:
- If $a > 0$: Opens upward (minimum point)
- If $a < 0$: Opens downward (maximum point)

### Vertex Form: $y = a(x - h)^2 + k$
The vertex is at $(h, k)$

#### Example: Find the vertex of $y = 2x^2 - 8x + 3$
Complete the square: $y = 2(x^2 - 4x) + 3$
$y = 2(x^2 - 4x + 4 - 4) + 3 = 2((x - 2)^2 - 4) + 3$
$y = 2(x - 2)^2 - 8 + 3 = 2(x - 2)^2 - 5$
Vertex: $(2, -5)$
      `,
      difficulty: 'intermediate',
      estimatedTime: 60
    }
  ],
  'as-coordinate-geometry': [
    {
      id: 'straight-lines',
      title: 'Equations of Straight Lines',
      content: `
# Equations of Straight Lines

## Key Forms

### 1. Gradient-Intercept Form: $y = mx + c$
- $m$ = gradient (slope)
- $c$ = y-intercept

### 2. Point-Slope Form: $y - y_1 = m(x - x_1)$
For a line passing through $(x_1, y_1)$ with gradient $m$

### 3. Two-Point Form
For points $(x_1, y_1)$ and $(x_2, y_2)$:
Gradient: $m = \\frac{y_2 - y_1}{x_2 - x_1}$

## Examples

### Example 1: Find the equation of the line through $(2, 3)$ and $(5, 9)$
Gradient: $m = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$
Using point-slope form with $(2, 3)$:
$y - 3 = 2(x - 2)$
$y - 3 = 2x - 4$
$y = 2x - 1$

### Example 2: Find where lines $y = 2x + 1$ and $y = -x + 7$ intersect
Set equal: $2x + 1 = -x + 7$
$3x = 6$
$x = 2$
$y = 2(2) + 1 = 5$
Intersection point: $(2, 5)$

## Parallel and Perpendicular Lines
- **Parallel lines** have equal gradients: $m_1 = m_2$
- **Perpendicular lines** have gradients where: $m_1 \\times m_2 = -1$

### Example 3: Find a line perpendicular to $y = 3x + 2$ through $(1, 4)$
Original gradient: $m_1 = 3$
Perpendicular gradient: $m_2 = -\\frac{1}{3}$
Equation: $y - 4 = -\\frac{1}{3}(x - 1)$
$y = -\\frac{1}{3}x + \\frac{1}{3} + 4 = -\\frac{1}{3}x + \\frac{13}{3}$

## Distance Between Points
For points $(x_1, y_1)$ and $(x_2, y_2)$:
$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

### Example 4: Find the distance between $(1, 2)$ and $(4, 6)$
$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$
      `,
      difficulty: 'foundation',
      estimatedTime: 50
    }
  ],
  'as-trigonometry': [
    {
      id: 'basic-trigonometry',
      title: 'Basic Trigonometric Functions',
      content: `
# Basic Trigonometric Functions

## Primary Ratios
In a right-angled triangle with angle $\\theta$:

$\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$

$\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$

$\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$

## Special Angles
| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|-------|---------|---------|---------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
| $45°$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

## Reciprocal Functions
- $\\csc \\theta = \\frac{1}{\\sin \\theta}$ (cosecant)
- $\\sec \\theta = \\frac{1}{\\cos \\theta}$ (secant)  
- $\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{\\cos \\theta}{\\sin \\theta}$ (cotangent)

## Fundamental Identity
$\\sin^2 \\theta + \\cos^2 \\theta = 1$

### Derived Identities
- $1 + \\tan^2 \\theta = \\sec^2 \\theta$
- $1 + \\cot^2 \\theta = \\csc^2 \\theta$

## Examples

### Example 1: Find $\\sin \\theta$ if $\\cos \\theta = \\frac{3}{5}$ and $0° < \\theta < 90°$
Using $\\sin^2 \\theta + \\cos^2 \\theta = 1$:
$\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$
Since $\\theta$ is acute: $\\sin \\theta = \\frac{4}{5}$

### Example 2: Solve $2\\sin \\theta = 1$ for $0° \\leq \\theta \\leq 360°$
$\\sin \\theta = \\frac{1}{2}$
From the unit circle: $\\theta = 30°$ or $\\theta = 150°$

## Sine and Cosine Rules

### Sine Rule
For any triangle with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$:
$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$

### Cosine Rule
$a^2 = b^2 + c^2 - 2bc\\cos A$

### Example 3: Triangle with sides 5, 7 and included angle 60°
Using cosine rule to find the third side:
$c^2 = 5^2 + 7^2 - 2(5)(7)\\cos 60°$
$c^2 = 25 + 49 - 70 \\times \\frac{1}{2} = 74 - 35 = 39$
$c = \\sqrt{39} \\approx 6.24$
      `,
      difficulty: 'intermediate',
      estimatedTime: 70
    }
  ],
  'as-differentiation': [
    {
      id: 'introduction-to-differentiation',
      title: 'Introduction to Differentiation',
      content: `
# Introduction to Differentiation

## What is Differentiation?
Differentiation is the process of finding the rate of change of a function with respect to its variable.

## Derivative Notation
For function $f(x)$:
- $f'(x)$ or $\\frac{df}{dx}$ or $\\frac{dy}{dx}$

## First Principles (Definition)
$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

### Example: Find derivative of $f(x) = x^2$ from first principles
$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$
$= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$
$= \\lim_{h \\to 0} \\frac{2xh + h^2}{h}$
$= \\lim_{h \\to 0} (2x + h) = 2x$

## Basic Rules

### Power Rule
$\\frac{d}{dx}(x^n) = nx^{n-1}$

Examples:
- $\\frac{d}{dx}(x^3) = 3x^2$
- $\\frac{d}{dx}(x^{-2}) = -2x^{-3}$
- $\\frac{d}{dx}(\\sqrt{x}) = \\frac{d}{dx}(x^{\\frac{1}{2}}) = \\frac{1}{2}x^{-\\frac{1}{2}} = \\frac{1}{2\\sqrt{x}}$

### Constant Rule
$\\frac{d}{dx}(c) = 0$ where $c$ is constant

### Constant Multiple Rule
$\\frac{d}{dx}(cf(x)) = cf'(x)$

### Sum Rule
$\\frac{d}{dx}(f(x) + g(x)) = f'(x) + g'(x)$

## Common Derivatives
- $\\frac{d}{dx}(\\sin x) = \\cos x$
- $\\frac{d}{dx}(\\cos x) = -\\sin x$
- $\\frac{d}{dx}(\\tan x) = \\sec^2 x$
- $\\frac{d}{dx}(e^x) = e^x$
- $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$

## Examples

### Example 1: Differentiate $y = 3x^4 - 2x^3 + 5x - 7$
$\\frac{dy}{dx} = 3(4x^3) - 2(3x^2) + 5(1) - 0 = 12x^3 - 6x^2 + 5$

### Example 2: Find the gradient of $y = \\frac{2}{x^3} + \\sqrt{x}$ at $x = 4$
First rewrite: $y = 2x^{-3} + x^{\\frac{1}{2}}$
$\\frac{dy}{dx} = 2(-3)x^{-4} + \\frac{1}{2}x^{-\\frac{1}{2}} = -6x^{-4} + \\frac{1}{2\\sqrt{x}}$
At $x = 4$: $\\frac{dy}{dx} = -\\frac{6}{256} + \\frac{1}{4} = -\\frac{3}{128} + \\frac{32}{128} = \\frac{29}{128}$

## Chain Rule
For composite functions: $\\frac{d}{dx}(f(g(x))) = f'(g(x)) \\cdot g'(x)$

### Example 3: Differentiate $y = (3x + 1)^5$
Let $u = 3x + 1$, then $y = u^5$
$\\frac{dy}{du} = 5u^4$, $\\frac{du}{dx} = 3$
$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = 5u^4 \\cdot 3 = 15(3x + 1)^4$

## Applications

### Finding Turning Points
At turning points: $\\frac{dy}{dx} = 0$

### Example 4: Find turning points of $y = x^3 - 6x^2 + 9x + 1$
$\\frac{dy}{dx} = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$
Setting $\\frac{dy}{dx} = 0$: $x = 1$ or $x = 3$
Turning points at $(1, 5)$ and $(3, 1)$
      `,
      difficulty: 'intermediate',
      estimatedTime: 80
    },
    {
      id: 'applications-of-differentiation',
      title: 'Applications of Differentiation',
      content: `
# Applications of Differentiation

## Finding Maximum and Minimum Points

### Second Derivative Test
- If $f'(a) = 0$ and $f''(a) > 0$: minimum at $x = a$
- If $f'(a) = 0$ and $f''(a) < 0$: maximum at $x = a$
- If $f'(a) = 0$ and $f''(a) = 0$: test is inconclusive

### Example 1: Find the nature of turning points for $y = x^3 - 3x^2 - 9x + 2$
$\\frac{dy}{dx} = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$
$\\frac{d^2y}{dx^2} = 6x - 6$

Turning points when $\\frac{dy}{dx} = 0$: $x = -1$ or $x = 3$

At $x = -1$: $\\frac{d^2y}{dx^2} = 6(-1) - 6 = -12 < 0$ → Maximum
At $x = 3$: $\\frac{d^2y}{dx^2} = 6(3) - 6 = 12 > 0$ → Minimum

## Optimization Problems

### Example 2: A farmer has 100m of fencing to make a rectangular pen. Find dimensions for maximum area.
Let width = $x$, then length = $\\frac{100-2x}{2} = 50-x$
Area: $A = x(50-x) = 50x - x^2$
$\\frac{dA}{dx} = 50 - 2x$
For maximum: $50 - 2x = 0$, so $x = 25$
Length = $50 - 25 = 25$
Maximum area occurs when the pen is a $25m \\times 25m$ square.

## Related Rates

### Example 3: A balloon is inflated so its radius increases at 2 cm/s. Find rate of volume increase when radius is 5 cm.
Volume of sphere: $V = \\frac{4}{3}\\pi r^3$
$\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt}$
Given: $\\frac{dr}{dt} = 2$ cm/s, $r = 5$ cm
$\\frac{dV}{dt} = 4\\pi (5)^2 (2) = 200\\pi$ cm³/s

## Tangents and Normals

### Tangent to curve $y = f(x)$ at point $(a, f(a))$:
Equation: $y - f(a) = f'(a)(x - a)$

### Normal to curve (perpendicular to tangent):
Gradient = $-\\frac{1}{f'(a)}$
Equation: $y - f(a) = -\\frac{1}{f'(a)}(x - a)$

### Example 4: Find equations of tangent and normal to $y = x^2 + 3x - 1$ at $x = 2$
At $x = 2$: $y = 4 + 6 - 1 = 9$, so point is $(2, 9)$
$\\frac{dy}{dx} = 2x + 3$
At $x = 2$: gradient = $2(2) + 3 = 7$

Tangent: $y - 9 = 7(x - 2)$ → $y = 7x - 5$
Normal: $y - 9 = -\\frac{1}{7}(x - 2)$ → $y = -\\frac{1}{7}x + \\frac{65}{7}$

## Curve Sketching
1. Find domain and range
2. Find intercepts
3. Find turning points using $f'(x) = 0$
4. Classify turning points using second derivative
5. Find points of inflection using $f''(x) = 0$
6. Analyze behavior as $x \\to \\pm\\infty$
      `,
      difficulty: 'advanced',
      estimatedTime: 90
    }
  ],
  'as-integration': [
    {
      id: 'introduction-to-integration',
      title: 'Introduction to Integration',
      content: `
# Introduction to Integration

## What is Integration?
Integration is the reverse process of differentiation. It finds the function whose derivative is given.

## Notation
- Indefinite integral: $\\int f(x) dx = F(x) + C$
- Definite integral: $\\int_a^b f(x) dx$

## Fundamental Theorem of Calculus
If $F'(x) = f(x)$, then:
$\\int_a^b f(x) dx = F(b) - F(a)$

## Basic Integration Rules

### Power Rule
$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ (where $n \\neq -1$)

Examples:
- $\\int x^3 dx = \\frac{x^4}{4} + C$
- $\\int x^{-2} dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$
- $\\int \\sqrt{x} dx = \\int x^{\\frac{1}{2}} dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2x^{\\frac{3}{2}}}{3} + C$

### Constant Rule
$\\int k dx = kx + C$

### Constant Multiple Rule
$\\int kf(x) dx = k\\int f(x) dx$

### Sum Rule
$\\int (f(x) + g(x)) dx = \\int f(x) dx + \\int g(x) dx$

## Common Integrals
- $\\int \\sin x dx = -\\cos x + C$
- $\\int \\cos x dx = \\sin x + C$
- $\\int \\sec^2 x dx = \\tan x + C$
- $\\int e^x dx = e^x + C$
- $\\int \\frac{1}{x} dx = \\ln|x| + C$

## Examples

### Example 1: Find $\\int (3x^2 - 4x + 5) dx$
$\\int (3x^2 - 4x + 5) dx = 3\\int x^2 dx - 4\\int x dx + 5\\int 1 dx$
$= 3 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + 5x + C$
$= x^3 - 2x^2 + 5x + C$

### Example 2: Evaluate $\\int_1^3 (2x + 1) dx$
First find antiderivative: $\\int (2x + 1) dx = x^2 + x + C$
Now evaluate: $\\int_1^3 (2x + 1) dx = [x^2 + x]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$

### Example 3: Find $\\int \\frac{2x^3 - 1}{x^2} dx$
First simplify: $\\frac{2x^3 - 1}{x^2} = 2x - x^{-2}$
$\\int (2x - x^{-2}) dx = 2 \\cdot \\frac{x^2}{2} - \\frac{x^{-1}}{-1} + C = x^2 + \\frac{1}{x} + C$

## Integration by Substitution
For integrals of the form $\\int f(g(x))g'(x) dx$:
Let $u = g(x)$, then $du = g'(x) dx$
The integral becomes $\\int f(u) du$

### Example 4: Find $\\int 2x(x^2 + 1)^3 dx$
Let $u = x^2 + 1$, then $du = 2x dx$
$\\int 2x(x^2 + 1)^3 dx = \\int u^3 du = \\frac{u^4}{4} + C = \\frac{(x^2 + 1)^4}{4} + C$

### Example 5: Evaluate the integral
Let $u = \\sin x$, then $du = \\cos x dx$
When $x = 0$: $u = 0$; when $x = \\pi/2$: $u = 1$
The integral equals $\\int_0^1 u du = [u^2/2]_0^1 = 1/2 - 0 = 1/2$
      `,
      difficulty: 'intermediate',
      estimatedTime: 75
    }
  ]
  // Add more modules as needed...
} as const
