---
title: "Statistics - Data Analysis"
description: "Learn fundamental statistical concepts including data collection, measures of central tendency, and measures of dispersion."
subject: "Mathematics"
level: "AS"
module: "Statistics"
topics: ["Data Collection", "Mean", "Median", "Mode", "Standard Deviation", "Variance", "Data Representations"]
difficulty: "foundation"
estimatedTime: 50
author: "Sydeka Team"
---

# Statistics - Data Analysis

## Introduction

Statistics is the science of collecting, analyzing, interpreting, and presenting data. This lesson covers fundamental statistical concepts essential for understanding data in various contexts.

## Learning Objectives

By the end of this lesson, you will be able to:
- Identify different types of data
- Calculate measures of central tendency
- Calculate measures of dispersion
- Choose appropriate data representations
- Interpret statistical results

## 1. Types of Data

### Qualitative vs Quantitative

**Qualitative Data (Categorical):**
- Describes qualities or characteristics
- Examples: Colors, names, opinions
- Cannot be measured numerically

**Quantitative Data (Numerical):**
- Describes quantities that can be measured
- Examples: Height, weight, temperature
- Can be measured numerically

### Discrete vs Continuous

**Discrete Data:**
- Can only take specific values
- Usually counted
- Examples: Number of students, shoe sizes

**Continuous Data:**
- Can take any value within a range
- Usually measured
- Examples: Height, weight, time

**Example 1:** Classify these data types:
```
Number of cars in a parking lot → Discrete quantitative
Hair color → Qualitative
Temperature → Continuous quantitative
Grade (A, B, C, D, F) → Qualitative (ordinal)
```

## 2. Measures of Central Tendency

### Mean (Average)

The arithmetic mean is the sum of all values divided by the number of values.

**Formula:** x̄ = (x₁ + x₂ + ... + xₙ)/n = Σx/n

**Example 2:** Find the mean of 5, 8, 12, 15, 20
```
Mean = (5 + 8 + 12 + 15 + 20)/5 = 60/5 = 12
```

### Median

The middle value when data is arranged in order.

**For odd n:** Middle value
**For even n:** Average of two middle values

**Example 3:** Find the median of 3, 7, 9, 12, 15, 18, 21
```
Data is already ordered, n = 7 (odd)
Median = 4th value = 12
```

**Example 4:** Find the median of 4, 6, 8, 10, 12, 14
```
Data is ordered, n = 6 (even)
Median = (8 + 10)/2 = 9
```

### Mode

The most frequently occurring value.

**Example 5:** Find the mode of 2, 3, 3, 5, 7, 7, 7, 9
```
Mode = 7 (appears 3 times)
```

### When to Use Each Measure

- **Mean:** Best for symmetric distributions, affected by outliers
- **Median:** Best for skewed distributions, not affected by outliers
- **Mode:** Best for categorical data, may not be unique

## 3. Measures of Dispersion

### Range

The difference between the largest and smallest values.

**Range = Maximum - Minimum**

**Example 6:** Find the range of 3, 7, 12, 15, 23
```
Range = 23 - 3 = 20
```

### Interquartile Range (IQR)

The range of the middle 50% of data.

**IQR = Q₃ - Q₁**

Where Q₁ and Q₃ are the first and third quartiles.

### Variance

The average of the squared differences from the mean.

**Population Variance:** σ² = Σ(x - μ)²/N
**Sample Variance:** s² = Σ(x - x̄)²/(n-1)

### Standard Deviation

The square root of variance.

**Population Standard Deviation:** σ = √(σ²)
**Sample Standard Deviation:** s = √(s²)

**Example 7:** Find the standard deviation of 2, 4, 6, 8, 10

```
Step 1: Find mean = (2+4+6+8+10)/5 = 6
Step 2: Find squared differences
(2-6)² = 16
(4-6)² = 4
(6-6)² = 0
(8-6)² = 4
(10-6)² = 16
Step 3: Sum = 16+4+0+4+16 = 40
Step 4: Variance = 40/5 = 8
Step 5: Standard deviation = √8 ≈ 2.83
```

## 4. Data Representations

### Frequency Tables

Used to organize data by showing how often each value occurs.

**Example 8:** Create a frequency table for test scores:
85, 90, 85, 95, 80, 90, 85, 95, 90, 85

| Score | Frequency |
|-------|-----------|
| 80    | 1         |
| 85    | 4         |
| 90    | 3         |
| 95    | 2         |

### Histograms

Bar charts for continuous data using intervals (bins).

**Key Features:**
- No gaps between bars
- Bars represent frequency density
- Used for continuous data

### Box Plots

Show the five-number summary: Min, Q₁, Median, Q₃, Max

**Components:**
- Box: From Q₁ to Q₃ (IQR)
- Line in box: Median
- Whiskers: Extend to Min and Max
- Outliers: Points beyond whiskers

### Scatter Plots

Show relationships between two quantitative variables.

**Used for:**
- Identifying correlation
- Looking for patterns
- Detecting outliers

## 5. Interpreting Data

### Skewness

**Right-skewed (Positive):** Tail extends to the right
- Mean > Median > Mode

**Left-skewed (Negative):** Tail extends to the left
- Mode > Median > Mean

**Symmetric:** Both sides are mirror images
- Mean ≈ Median ≈ Mode

### Outliers

Data points that are unusually far from other values.

**Detection Methods:**
1. **1.5 × IQR Rule:** Values beyond Q₁ - 1.5×IQR or Q₃ + 1.5×IQR
2. **Z-score Method:** Values with |z| > 2 or 3
3. **Visual Inspection:** Points far from the main cluster

## 6. Applications

### Real-World Examples

**Example 9:** A company wants to analyze employee salaries:
Data: £25,000, £28,000, £30,000, £32,000, £35,000, £38,000, £120,000

```
Mean = £44,000 (affected by high salary)
Median = £32,000 (better representative)
The £120,000 is an outlier (possibly a manager)
```

**Example 10:** Quality control in manufacturing:
A machine produces bolts with target diameter 10mm.
Sample: 9.8, 10.1, 9.9, 10.2, 9.7, 10.0, 10.3, 9.6

```
Mean = 9.95mm (close to target)
Standard deviation = 0.24mm (measure of consistency)
Range = 0.7mm (total variation)
```

## 7. Common Mistakes and Tips

### Common Errors

1. **Confusing population and sample statistics**
2. **Not identifying outliers**
3. **Using mean for skewed data**
4. **Misinterpreting correlation as causation**

### Tips for Success

1. **Always plot your data first**
2. **Check for outliers**
3. **Consider the context**
4. **Use multiple measures**
5. **Verify calculations**

## Key Points to Remember

1. **Choose appropriate measures** based on data type and distribution
2. **Mean is sensitive to outliers**, median is not
3. **Standard deviation** measures spread around the mean
4. **Visualize data** before calculating statistics
5. **Consider context** when interpreting results

## Practice Problems

1. Calculate mean, median, and mode for: 12, 15, 18, 15, 20, 22, 15
2. Find the standard deviation of: 5, 10, 15, 20, 25
3. Identify the type of skewness if mean = 75, median = 80, mode = 85
4. A dataset has Q₁ = 20, Q₃ = 35. Find the IQR and identify outliers if any value is beyond 5 or 50.
5. Interpret: A class has mean test score 78 with standard deviation 12. What does this tell you?

## Summary

Statistics provides tools to understand and interpret data. Mastering measures of central tendency and dispersion, along with proper data visualization, is essential for making informed decisions based on data analysis.
