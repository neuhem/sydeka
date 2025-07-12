---
title: "Probability Fundamentals"
description: "Learn the basic principles of probability including events, sample spaces, and probability calculations."
subject: "Mathematics"
level: "AS"
module: "Probability"
topics: ["Sample Space", "Events", "Probability Rules", "Conditional Probability", "Independence", "Tree Diagrams"]
difficulty: "foundation"
estimatedTime: 45
author: "Sydeka Team"
---

# Probability Fundamentals

## Introduction

Probability is the branch of mathematics that deals with the likelihood of events occurring. It provides a framework for quantifying uncertainty and making predictions based on available information.

## Learning Objectives

By the end of this lesson, you will be able to:
- Define probability and understand basic terminology
- Calculate probabilities using different methods
- Apply probability rules and laws
- Use tree diagrams for complex probability problems
- Understand conditional probability and independence

## 1. Basic Concepts

### Sample Space and Events

**Sample Space (S):** The set of all possible outcomes of an experiment.

**Event (E):** A subset of the sample space; a collection of outcomes.

**Example 1:** Rolling a fair six-sided die
```
Sample Space: S = {1, 2, 3, 4, 5, 6}
Event "rolling an even number": E = {2, 4, 6}
Event "rolling a number greater than 4": F = {5, 6}
```

### Types of Events

**Simple Event:** Contains only one outcome
**Compound Event:** Contains more than one outcome
**Impossible Event:** Cannot occur (∅)
**Certain Event:** Must occur (S)

### Probability Definition

The probability of an event E is:

**P(E) = Number of favorable outcomes / Total number of possible outcomes**

**Properties:**
- 0 ≤ P(E) ≤ 1
- P(S) = 1 (certain event)
- P(∅) = 0 (impossible event)

**Example 2:** Find P(rolling an even number) with a fair die
```
Favorable outcomes: {2, 4, 6} → 3 outcomes
Total outcomes: 6
P(even) = 3/6 = 1/2
```

## 2. Probability Rules

### Complement Rule

The complement of event E is the event "E does not occur."

**P(E') = 1 - P(E)**

**Example 3:** If P(rain) = 0.3, find P(no rain)
```
P(no rain) = P(rain') = 1 - 0.3 = 0.7
```

### Addition Rule

For any two events A and B:

**P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**

**For mutually exclusive events:** P(A ∩ B) = 0
So: P(A ∪ B) = P(A) + P(B)

**Example 4:** In a class of 30 students, 18 study French, 12 study Spanish, and 5 study both. Find P(student studies French or Spanish).
```
P(F ∪ S) = P(F) + P(S) - P(F ∩ S)
P(F ∪ S) = 18/30 + 12/30 - 5/30 = 25/30 = 5/6
```

### Multiplication Rule

For any two events A and B:

**P(A ∩ B) = P(A) × P(B|A)**

**For independent events:** P(B|A) = P(B)
So: P(A ∩ B) = P(A) × P(B)

## 3. Conditional Probability

### Definition

The probability of event B given that event A has occurred:

**P(B|A) = P(A ∩ B) / P(A)** (provided P(A) > 0)

**Example 5:** A card is drawn from a standard deck. Find P(King | Red card).
```
P(King ∩ Red) = 2/52 (2 red kings)
P(Red) = 26/52 (26 red cards)
P(King | Red) = (2/52) / (26/52) = 2/26 = 1/13
```

### Independence

Two events A and B are independent if:
**P(B|A) = P(B)** or equivalently **P(A ∩ B) = P(A) × P(B)**

**Example 6:** Are "rolling a 3" and "rolling an odd number" independent when rolling a die?
```
P(3) = 1/6
P(odd) = 1/2
P(3 ∩ odd) = P(3) = 1/6
P(3) × P(odd) = 1/6 × 1/2 = 1/12
Since 1/6 ≠ 1/12, they are not independent.
```

## 4. Tree Diagrams

Tree diagrams are useful for visualizing and calculating probabilities in multi-stage experiments.

### Construction

1. Draw branches for each outcome of the first stage
2. Label each branch with its probability
3. From each first-stage outcome, draw branches for second-stage outcomes
4. Continue for all stages
5. Multiply probabilities along paths for final probabilities

**Example 7:** A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. Find P(both red).

```
Tree Diagram:
First draw: P(Red) = 3/5, P(Blue) = 2/5
Second draw (if first was red): P(Red) = 2/4, P(Blue) = 2/4
Second draw (if first was blue): P(Red) = 3/4, P(Blue) = 1/4

P(both red) = P(Red first) × P(Red second | Red first)
P(both red) = 3/5 × 2/4 = 6/20 = 3/10
```

## 5. Common Probability Distributions

### Uniform Distribution

All outcomes are equally likely.

**Example:** Rolling a fair die - each outcome has probability 1/6.

### Binomial Situations

- Fixed number of trials
- Each trial has two outcomes (success/failure)
- Probability of success is constant
- Trials are independent

**Example 8:** Flipping a coin 3 times, find P(exactly 2 heads).
```
Using tree diagram or formula:
P(exactly 2 heads) = C(3,2) × (1/2)² × (1/2)¹ = 3 × 1/4 × 1/2 = 3/8
```

## 6. Problem-Solving Strategies

### Systematic Approach

1. **Identify the sample space**
2. **Define the events clearly**
3. **Choose appropriate method:**
   - Direct counting
   - Tree diagram
   - Probability rules
4. **Calculate step by step**
5. **Check if answer makes sense**

### Common Techniques

**With Replacement:** Outcomes remain the same for each draw
**Without Replacement:** Outcomes change after each draw
**Conditional Problems:** Use P(B|A) = P(A ∩ B) / P(A)
**Independence:** Check if P(A ∩ B) = P(A) × P(B)

## 7. Real-World Applications

### Medical Testing

**Example 9:** A test for a disease is 95% accurate. If 2% of the population has the disease, what's the probability that a person who tests positive actually has the disease?

```
Let D = has disease, T = tests positive
P(D) = 0.02, P(T|D) = 0.95, P(T|D') = 0.05
P(T) = P(T|D)P(D) + P(T|D')P(D') = 0.95(0.02) + 0.05(0.98) = 0.068
P(D|T) = P(T|D)P(D) / P(T) = 0.95(0.02) / 0.068 ≈ 0.279
```

### Quality Control

**Example 10:** A factory produces items with 5% defective rate. If 3 items are randomly selected, find P(at least one defective).

```
P(at least one defective) = 1 - P(none defective)
P(none defective) = (0.95)³ = 0.857
P(at least one defective) = 1 - 0.857 = 0.143
```

## 8. Common Mistakes

### Pitfalls to Avoid

1. **Confusing P(A|B) with P(B|A)**
2. **Assuming independence without checking**
3. **Forgetting to consider all possible outcomes**
4. **Misunderstanding "at least" and "at most"**
5. **Not updating probabilities in "without replacement" problems**

### Tips for Success

1. **Draw diagrams** when possible
2. **List all outcomes** systematically
3. **Check if probabilities sum to 1**
4. **Use complement rule** for "at least" problems
5. **Practice with tree diagrams**

## Key Points to Remember

1. **Probability range:** 0 ≤ P(E) ≤ 1
2. **Complement rule:** P(E') = 1 - P(E)
3. **Addition rule:** P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
4. **Multiplication rule:** P(A ∩ B) = P(A) × P(B|A)
5. **Independence:** P(A ∩ B) = P(A) × P(B)
6. **Tree diagrams** help visualize multi-stage problems

## Practice Problems

1. A box contains 5 red, 3 blue, and 2 green balls. Find P(red or blue).
2. If P(A) = 0.4 and P(B) = 0.6, and A and B are independent, find P(A ∩ B).
3. In a class, 60% study math, 40% study physics, and 25% study both. Find P(student studies math or physics).
4. Two dice are rolled. Find P(sum is 7 | first die shows 3).
5. A coin is flipped 4 times. Find P(at least 2 heads).

## Summary

Probability provides a mathematical framework for dealing with uncertainty. Understanding basic concepts, rules, and problem-solving techniques is essential for analyzing random events and making informed decisions in various fields.
