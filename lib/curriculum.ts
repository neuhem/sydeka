export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  year: 'AS' | 'A2';
  order: number;
  estimatedHours: number;
  prerequisites: string[];
  topics: CurriculumTopic[];
}

export interface CurriculumTopic {
  id: string;
  title: string;
  description: string;
  estimatedTime: number;
  difficulty: 'foundation' | 'intermediate' | 'advanced';
  learningObjectives: string[];
  keySkills: string[];
  assessmentCriteria: string[];
}

export const AQA_A_LEVEL_MATHEMATICS_CURRICULUM: CurriculumModule[] = [
  // AS Level (Year 1) Modules
  {
    id: 'as-algebra-functions',
    title: 'Algebra and Functions',
    description: 'Master algebraic techniques and function properties essential for A-Level Mathematics.',
    year: 'AS',
    order: 1,
    estimatedHours: 25,
    prerequisites: [],
    topics: [
      {
        id: 'laws-of-indices',
        title: 'Laws of Indices',
        description: 'Understanding and applying index laws, including negative and fractional indices.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Apply the laws of indices to simplify expressions',
          'Work with negative and fractional indices',
          'Solve equations involving indices'
        ],
        keySkills: [
          'Index manipulation',
          'Algebraic simplification',
          'Equation solving'
        ],
        assessmentCriteria: [
          'Correctly apply index laws',
          'Simplify complex expressions',
          'Solve index equations accurately'
        ]
      },
      {
        id: 'surds',
        title: 'Surds and Rationalisation',
        description: 'Working with surds and rationalising denominators.',
        estimatedTime: 45,
        difficulty: 'foundation',
        learningObjectives: [
          'Simplify expressions involving surds',
          'Rationalise denominators',
          'Solve equations involving surds'
        ],
        keySkills: [
          'Surd manipulation',
          'Rationalisation techniques',
          'Algebraic reasoning'
        ],
        assessmentCriteria: [
          'Simplify surd expressions correctly',
          'Rationalise denominators accurately',
          'Solve surd equations'
        ]
      },
      {
        id: 'quadratic-functions',
        title: 'Quadratic Functions',
        description: 'Comprehensive study of quadratic functions, equations, and inequalities.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Solve quadratic equations using various methods',
          'Sketch quadratic graphs and identify key features',
          'Solve quadratic inequalities',
          'Apply quadratic functions to real-world problems'
        ],
        keySkills: [
          'Factorisation',
          'Completing the square',
          'Quadratic formula',
          'Graph sketching'
        ],
        assessmentCriteria: [
          'Solve quadratic equations accurately',
          'Sketch graphs with correct key features',
          'Apply quadratic methods to problem-solving'
        ]
      },
      {
        id: 'inequalities',
        title: 'Linear and Quadratic Inequalities',
        description: 'Solving and representing inequalities graphically.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Solve linear inequalities',
          'Solve quadratic inequalities',
          'Represent solutions graphically'
        ],
        keySkills: [
          'Inequality manipulation',
          'Critical value identification',
          'Graphical representation'
        ],
        assessmentCriteria: [
          'Solve inequalities correctly',
          'Use appropriate notation',
          'Interpret graphical solutions'
        ]
      },
      {
        id: 'curve-sketching',
        title: 'Curve Sketching',
        description: 'Sketching polynomial and rational function graphs.',
        estimatedTime: 75,
        difficulty: 'advanced',
        learningObjectives: [
          'Sketch polynomial function graphs',
          'Identify key features of curves',
          'Transform function graphs'
        ],
        keySkills: [
          'Graph analysis',
          'Transformation techniques',
          'Function behavior analysis'
        ],
        assessmentCriteria: [
          'Sketch accurate graphs',
          'Identify all key features',
          'Apply transformations correctly'
        ]
      }
    ]
  },
  {
    id: 'as-coordinate-geometry',
    title: 'Coordinate Geometry',
    description: 'Study of geometric shapes and their properties using coordinate systems.',
    year: 'AS',
    order: 2,
    estimatedHours: 20,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'straight-lines',
        title: 'Straight Lines',
        description: 'Equations of straight lines and their properties.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Find equations of straight lines',
          'Calculate distances and midpoints',
          'Determine parallel and perpendicular lines'
        ],
        keySkills: [
          'Gradient calculation',
          'Line equation formulation',
          'Geometric reasoning'
        ],
        assessmentCriteria: [
          'Find line equations accurately',
          'Apply distance and midpoint formulas',
          'Identify line relationships'
        ]
      },
      {
        id: 'circles',
        title: 'Circles',
        description: 'Equations of circles and their geometric properties.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Find equations of circles',
          'Determine tangent and normal lines',
          'Solve circle intersection problems'
        ],
        keySkills: [
          'Circle equation manipulation',
          'Tangent properties',
          'Intersection calculations'
        ],
        assessmentCriteria: [
          'Derive circle equations',
          'Find tangent and normal lines',
          'Solve intersection problems'
        ]
      },
      {
        id: 'parametric-equations-intro',
        title: 'Introduction to Parametric Equations',
        description: 'Basic parametric representation of curves.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Understand parametric representation',
          'Convert between parametric and Cartesian forms',
          'Sketch parametric curves'
        ],
        keySkills: [
          'Parametric conversion',
          'Curve analysis',
          'Graphical representation'
        ],
        assessmentCriteria: [
          'Convert between forms accurately',
          'Sketch parametric curves',
          'Interpret parametric equations'
        ]
      }
    ]
  },
  {
    id: 'as-sequences-series',
    title: 'Sequences and Series',
    description: 'Study of arithmetic and geometric sequences and series.',
    year: 'AS',
    order: 3,
    estimatedHours: 18,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'arithmetic-sequences',
        title: 'Arithmetic Sequences',
        description: 'Arithmetic progressions and their properties.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Identify arithmetic sequences',
          'Find nth terms and sums',
          'Solve arithmetic sequence problems'
        ],
        keySkills: [
          'Pattern recognition',
          'Formula application',
          'Problem solving'
        ],
        assessmentCriteria: [
          'Find nth terms correctly',
          'Calculate series sums',
          'Apply to real-world problems'
        ]
      },
      {
        id: 'geometric-sequences',
        title: 'Geometric Sequences',
        description: 'Geometric progressions and their applications.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Identify geometric sequences',
          'Find nth terms and sums',
          'Apply to compound interest problems'
        ],
        keySkills: [
          'Ratio identification',
          'Exponential growth modeling',
          'Financial mathematics'
        ],
        assessmentCriteria: [
          'Find geometric terms and sums',
          'Model exponential situations',
          'Solve financial problems'
        ]
      },
      {
        id: 'binomial-expansion',
        title: 'Binomial Expansion',
        description: 'Expanding binomial expressions using the binomial theorem.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Apply the binomial theorem',
          'Find specific terms in expansions',
          'Use binomial coefficients'
        ],
        keySkills: [
          'Binomial theorem application',
          'Coefficient calculation',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Expand binomials correctly',
          'Find specific terms',
          'Apply binomial coefficients'
        ]
      }
    ]
  },
  {
    id: 'as-trigonometry',
    title: 'Trigonometry',
    description: 'Trigonometric functions, identities, and equation solving.',
    year: 'AS',
    order: 4,
    estimatedHours: 22,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'trigonometric-functions',
        title: 'Trigonometric Functions',
        description: 'Sine, cosine, and tangent functions and their properties.',
        estimatedTime: 75,
        difficulty: 'foundation',
        learningObjectives: [
          'Understand trigonometric ratios',
          'Work with radians and degrees',
          'Sketch trigonometric graphs'
        ],
        keySkills: [
          'Angle conversion',
          'Function evaluation',
          'Graph sketching'
        ],
        assessmentCriteria: [
          'Calculate trigonometric values',
          'Convert between angle measures',
          'Sketch accurate graphs'
        ]
      },
      {
        id: 'trigonometric-identities',
        title: 'Trigonometric Identities',
        description: 'Fundamental trigonometric identities and their applications.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply Pythagorean identities',
          'Use reciprocal identities',
          'Prove trigonometric identities'
        ],
        keySkills: [
          'Identity manipulation',
          'Algebraic proof',
          'Trigonometric reasoning'
        ],
        assessmentCriteria: [
          'Apply identities correctly',
          'Prove trigonometric relationships',
          'Simplify complex expressions'
        ]
      },
      {
        id: 'solving-trigonometric-equations',
        title: 'Solving Trigonometric Equations',
        description: 'Solving equations involving trigonometric functions.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Solve basic trigonometric equations',
          'Find solutions in given intervals',
          'Apply trigonometric identities to solve equations'
        ],
        keySkills: [
          'Equation solving strategies',
          'Interval notation',
          'Identity application'
        ],
        assessmentCriteria: [
          'Solve trigonometric equations',
          'Find all solutions in intervals',
          'Apply appropriate methods'
        ]
      }
    ]
  },
  {
    id: 'as-exponentials-logarithms',
    title: 'Exponentials and Logarithms',
    description: 'Exponential and logarithmic functions and their applications.',
    year: 'AS',
    order: 5,
    estimatedHours: 20,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'exponential-functions',
        title: 'Exponential Functions',
        description: 'Properties and graphs of exponential functions.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Understand exponential growth and decay',
          'Sketch exponential graphs',
          'Solve exponential equations'
        ],
        keySkills: [
          'Exponential manipulation',
          'Graph analysis',
          'Modeling techniques'
        ],
        assessmentCriteria: [
          'Sketch exponential graphs',
          'Solve exponential equations',
          'Model real-world situations'
        ]
      },
      {
        id: 'logarithmic-functions',
        title: 'Logarithmic Functions',
        description: 'Logarithms, their properties, and applications.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply logarithm laws',
          'Solve logarithmic equations',
          'Use logarithms in modeling'
        ],
        keySkills: [
          'Logarithm manipulation',
          'Equation solving',
          'Mathematical modeling'
        ],
        assessmentCriteria: [
          'Apply logarithm laws correctly',
          'Solve logarithmic equations',
          'Model exponential situations'
        ]
      },
      {
        id: 'exponential-modeling',
        title: 'Exponential Modeling',
        description: 'Using exponential functions to model real-world phenomena.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Model population growth',
          'Analyze radioactive decay',
          'Apply compound interest formulas'
        ],
        keySkills: [
          'Mathematical modeling',
          'Data interpretation',
          'Real-world applications'
        ],
        assessmentCriteria: [
          'Create appropriate models',
          'Interpret model parameters',
          'Make predictions from models'
        ]
      }
    ]
  },
  {
    id: 'as-differentiation',
    title: 'Differentiation',
    description: 'Introduction to calculus and differentiation techniques.',
    year: 'AS',
    order: 6,
    estimatedHours: 25,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'derivatives-from-first-principles',
        title: 'Derivatives from First Principles',
        description: 'Understanding the concept of derivatives using limits.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Understand the definition of a derivative',
          'Calculate derivatives from first principles',
          'Interpret derivatives as rates of change'
        ],
        keySkills: [
          'Limit evaluation',
          'Algebraic manipulation',
          'Conceptual understanding'
        ],
        assessmentCriteria: [
          'Calculate derivatives from first principles',
          'Understand the limit definition',
          'Interpret derivatives correctly'
        ]
      },
      {
        id: 'differentiation-rules',
        title: 'Differentiation Rules',
        description: 'Power rule, product rule, quotient rule, and chain rule.',
        estimatedTime: 90,
        difficulty: 'foundation',
        learningObjectives: [
          'Apply the power rule',
          'Use product and quotient rules',
          'Apply the chain rule'
        ],
        keySkills: [
          'Rule application',
          'Function composition',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Apply differentiation rules correctly',
          'Differentiate composite functions',
          'Simplify derivative expressions'
        ]
      },
      {
        id: 'applications-of-differentiation',
        title: 'Applications of Differentiation',
        description: 'Tangent lines, normal lines, and optimization problems.',
        estimatedTime: 105,
        difficulty: 'advanced',
        learningObjectives: [
          'Find equations of tangent and normal lines',
          'Solve optimization problems',
          'Apply differentiation to real-world problems'
        ],
        keySkills: [
          'Tangent line calculation',
          'Optimization techniques',
          'Problem-solving strategies'
        ],
        assessmentCriteria: [
          'Find tangent and normal lines',
          'Solve optimization problems',
          'Apply calculus to real situations'
        ]
      }
    ]
  },
  {
    id: 'as-integration',
    title: 'Integration',
    description: 'Introduction to integration and its applications.',
    year: 'AS',
    order: 7,
    estimatedHours: 22,
    prerequisites: ['as-differentiation'],
    topics: [
      {
        id: 'indefinite-integration',
        title: 'Indefinite Integration',
        description: 'Finding antiderivatives and integration techniques.',
        estimatedTime: 75,
        difficulty: 'foundation',
        learningObjectives: [
          'Understand integration as reverse differentiation',
          'Find indefinite integrals',
          'Apply integration rules'
        ],
        keySkills: [
          'Integration rules',
          'Antiderivative calculation',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Find indefinite integrals correctly',
          'Apply integration rules',
          'Include constants of integration'
        ]
      },
      {
        id: 'definite-integration',
        title: 'Definite Integration',
        description: 'Fundamental theorem of calculus and definite integrals.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply the fundamental theorem of calculus',
          'Evaluate definite integrals',
          'Understand the relationship between derivatives and integrals'
        ],
        keySkills: [
          'Definite integral evaluation',
          'Limit calculation',
          'Theorem application'
        ],
        assessmentCriteria: [
          'Evaluate definite integrals',
          'Apply the fundamental theorem',
          'Interpret integral results'
        ]
      },
      {
        id: 'areas-under-curves',
        title: 'Areas Under Curves',
        description: 'Using integration to find areas and solve geometric problems.',
        estimatedTime: 105,
        difficulty: 'advanced',
        learningObjectives: [
          'Calculate areas under curves',
          'Find areas between curves',
          'Apply integration to geometric problems'
        ],
        keySkills: [
          'Area calculation',
          'Curve intersection',
          'Geometric reasoning'
        ],
        assessmentCriteria: [
          'Calculate areas accurately',
          'Set up correct integrals',
          'Solve geometric problems'
        ]
      }
    ]
  },
  {
    id: 'as-statistics',
    title: 'Statistics',
    description: 'Data collection, analysis, and interpretation.',
    year: 'AS',
    order: 8,
    estimatedHours: 18,
    prerequisites: [],
    topics: [
      {
        id: 'data-collection',
        title: 'Data Collection and Sampling',
        description: 'Methods of data collection and sampling techniques.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Understand different sampling methods',
          'Identify bias in data collection',
          'Design appropriate sampling strategies'
        ],
        keySkills: [
          'Sampling design',
          'Bias identification',
          'Data quality assessment'
        ],
        assessmentCriteria: [
          'Design appropriate sampling methods',
          'Identify potential sources of bias',
          'Evaluate data collection methods'
        ]
      },
      {
        id: 'measures-of-location-spread',
        title: 'Measures of Location and Spread',
        description: 'Central tendency and variability measures.',
        estimatedTime: 75,
        difficulty: 'foundation',
        learningObjectives: [
          'Calculate mean, median, and mode',
          'Find quartiles and percentiles',
          'Calculate measures of spread'
        ],
        keySkills: [
          'Statistical calculation',
          'Data interpretation',
          'Measure selection'
        ],
        assessmentCriteria: [
          'Calculate statistics correctly',
          'Interpret statistical measures',
          'Choose appropriate measures'
        ]
      },
      {
        id: 'data-representation',
        title: 'Data Representation',
        description: 'Graphs, charts, and visual data representation.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Create appropriate graphs and charts',
          'Interpret data visualizations',
          'Analyze data distributions'
        ],
        keySkills: [
          'Graph creation',
          'Data visualization',
          'Distribution analysis'
        ],
        assessmentCriteria: [
          'Create accurate visualizations',
          'Interpret graphs correctly',
          'Analyze data patterns'
        ]
      }
    ]
  },
  {
    id: 'as-probability',
    title: 'Probability',
    description: 'Probability theory and its applications.',
    year: 'AS',
    order: 9,
    estimatedHours: 20,
    prerequisites: ['as-statistics'],
    topics: [
      {
        id: 'basic-probability',
        title: 'Basic Probability',
        description: 'Fundamental probability concepts and calculations.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Understand probability as a measure of likelihood',
          'Calculate basic probabilities',
          'Apply probability rules'
        ],
        keySkills: [
          'Probability calculation',
          'Event identification',
          'Rule application'
        ],
        assessmentCriteria: [
          'Calculate probabilities correctly',
          'Apply probability rules',
          'Interpret probability values'
        ]
      },
      {
        id: 'conditional-probability',
        title: 'Conditional Probability',
        description: 'Conditional probability and independence.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Calculate conditional probabilities',
          'Determine independence',
          'Apply multiplication rules'
        ],
        keySkills: [
          'Conditional calculation',
          'Independence testing',
          'Rule application'
        ],
        assessmentCriteria: [
          'Calculate conditional probabilities',
          'Determine independence correctly',
          'Apply multiplication rules'
        ]
      },
      {
        id: 'tree-diagrams',
        title: 'Tree Diagrams and Probability',
        description: 'Using tree diagrams to solve probability problems.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Construct tree diagrams',
          'Use diagrams to calculate probabilities',
          'Solve complex probability problems'
        ],
        keySkills: [
          'Diagram construction',
          'Probability calculation',
          'Problem-solving strategies'
        ],
        assessmentCriteria: [
          'Construct accurate tree diagrams',
          'Calculate probabilities from diagrams',
          'Solve multi-step problems'
        ]
      }
    ]
  },

  // A2 Level (Year 2) Modules
  {
    id: 'a2-functions',
    title: 'Functions',
    description: 'Advanced function concepts including composite and inverse functions.',
    year: 'A2',
    order: 10,
    estimatedHours: 20,
    prerequisites: ['as-algebra-functions'],
    topics: [
      {
        id: 'composite-functions',
        title: 'Composite Functions',
        description: 'Function composition and its properties.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Understand function composition',
          'Calculate composite functions',
          'Determine domains of composite functions'
        ],
        keySkills: [
          'Function composition',
          'Domain determination',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Form composite functions correctly',
          'Determine appropriate domains',
          'Simplify composite expressions'
        ]
      },
      {
        id: 'inverse-functions',
        title: 'Inverse Functions',
        description: 'Finding and working with inverse functions.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Understand the concept of inverse functions',
          'Find inverse functions algebraically',
          'Apply inverse function properties'
        ],
        keySkills: [
          'Inverse calculation',
          'Function properties',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Find inverse functions correctly',
          'Apply inverse properties',
          'Verify inverse relationships'
        ]
      },
      {
        id: 'modulus-function',
        title: 'Modulus Function',
        description: 'Properties and applications of the modulus function.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Understand the modulus function',
          'Sketch modulus function graphs',
          'Solve modulus equations and inequalities'
        ],
        keySkills: [
          'Modulus manipulation',
          'Graph sketching',
          'Equation solving'
        ],
        assessmentCriteria: [
          'Sketch modulus graphs accurately',
          'Solve modulus equations',
          'Handle modulus inequalities'
        ]
      }
    ]
  },
  {
    id: 'a2-advanced-trigonometry',
    title: 'Advanced Trigonometry',
    description: 'Trigonometric identities, compound angles, and advanced applications.',
    year: 'A2',
    order: 11,
    estimatedHours: 22,
    prerequisites: ['as-trigonometry'],
    topics: [
      {
        id: 'addition-formulae',
        title: 'Addition Formulae',
        description: 'Compound angle formulas and their applications.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply addition formulae',
          'Derive compound angle identities',
          'Solve complex trigonometric problems'
        ],
        keySkills: [
          'Formula application',
          'Identity derivation',
          'Complex problem solving'
        ],
        assessmentCriteria: [
          'Apply addition formulae correctly',
          'Derive related identities',
          'Solve compound angle problems'
        ]
      },
      {
        id: 'double-angle-formulae',
        title: 'Double Angle Formulae',
        description: 'Double angle identities and their applications.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply double angle formulae',
          'Solve double angle equations',
          'Use double angles in proofs'
        ],
        keySkills: [
          'Double angle application',
          'Equation solving',
          'Proof techniques'
        ],
        assessmentCriteria: [
          'Apply double angle formulae',
          'Solve related equations',
          'Construct mathematical proofs'
        ]
      },
      {
        id: 'r-alpha-form',
        title: 'R-alpha Form',
        description: 'Expressing trigonometric functions in R-alpha form.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Convert to R-alpha form',
          'Solve equations using R-alpha form',
          'Apply R-alpha form to real problems'
        ],
        keySkills: [
          'Form conversion',
          'Equation solving',
          'Practical application'
        ],
        assessmentCriteria: [
          'Convert to R-alpha form accurately',
          'Solve equations efficiently',
          'Apply to practical problems'
        ]
      }
    ]
  },
  {
    id: 'a2-advanced-calculus',
    title: 'Advanced Calculus',
    description: 'Advanced differentiation techniques and applications.',
    year: 'A2',
    order: 12,
    estimatedHours: 25,
    prerequisites: ['as-differentiation'],
    topics: [
      {
        id: 'product-quotient-chain-rules',
        title: 'Product, Quotient, and Chain Rules',
        description: 'Advanced differentiation rules and their applications.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply product rule effectively',
          'Use quotient rule correctly',
          'Master the chain rule'
        ],
        keySkills: [
          'Rule application',
          'Function composition',
          'Algebraic manipulation'
        ],
        assessmentCriteria: [
          'Apply rules correctly',
          'Differentiate complex functions',
          'Simplify derivative expressions'
        ]
      },
      {
        id: 'implicit-differentiation',
        title: 'Implicit Differentiation',
        description: 'Differentiating implicitly defined functions.',
        estimatedTime: 75,
        difficulty: 'advanced',
        learningObjectives: [
          'Understand implicit differentiation',
          'Differentiate implicit functions',
          'Apply to curve analysis'
        ],
        keySkills: [
          'Implicit differentiation',
          'Chain rule application',
          'Curve analysis'
        ],
        assessmentCriteria: [
          'Differentiate implicitly',
          'Find tangent lines to curves',
          'Analyze curve properties'
        ]
      },
      {
        id: 'related-rates',
        title: 'Related Rates',
        description: 'Solving related rates problems using differentiation.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Set up related rates problems',
          'Solve rate of change problems',
          'Apply to real-world situations'
        ],
        keySkills: [
          'Problem setup',
          'Rate calculation',
          'Real-world application'
        ],
        assessmentCriteria: [
          'Set up problems correctly',
          'Calculate rates accurately',
          'Apply to practical situations'
        ]
      }
    ]
  },
  {
    id: 'a2-parametric-equations',
    title: 'Parametric Equations',
    description: 'Advanced parametric curves and their properties.',
    year: 'A2',
    order: 13,
    estimatedHours: 20,
    prerequisites: ['as-coordinate-geometry', 'as-differentiation'],
    topics: [
      {
        id: 'parametric-differentiation',
        title: 'Parametric Differentiation',
        description: 'Differentiation of parametric equations.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Differentiate parametric equations',
          'Find tangent and normal lines',
          'Calculate second derivatives'
        ],
        keySkills: [
          'Parametric differentiation',
          'Tangent line calculation',
          'Second derivative analysis'
        ],
        assessmentCriteria: [
          'Differentiate parametric functions',
          'Find tangent and normal lines',
          'Calculate higher derivatives'
        ]
      },
      {
        id: 'parametric-integration',
        title: 'Parametric Integration',
        description: 'Integration involving parametric equations.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Integrate parametric functions',
          'Find areas under parametric curves',
          'Calculate arc lengths'
        ],
        keySkills: [
          'Parametric integration',
          'Area calculation',
          'Arc length determination'
        ],
        assessmentCriteria: [
          'Integrate parametric functions',
          'Calculate areas accurately',
          'Find arc lengths correctly'
        ]
      },
      {
        id: 'curve-sketching-parametric',
        title: 'Curve Sketching with Parametric Equations',
        description: 'Sketching and analyzing parametric curves.',
        estimatedTime: 75,
        difficulty: 'advanced',
        learningObjectives: [
          'Sketch parametric curves',
          'Identify curve properties',
          'Analyze curve behavior'
        ],
        keySkills: [
          'Curve sketching',
          'Property identification',
          'Behavior analysis'
        ],
        assessmentCriteria: [
          'Sketch curves accurately',
          'Identify key properties',
          'Analyze curve behavior'
        ]
      }
    ]
  },
  {
    id: 'a2-integration-techniques',
    title: 'Integration Techniques',
    description: 'Advanced integration methods and applications.',
    year: 'A2',
    order: 14,
    estimatedHours: 25,
    prerequisites: ['as-integration'],
    topics: [
      {
        id: 'integration-by-parts',
        title: 'Integration by Parts',
        description: 'Using integration by parts for complex integrals.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply integration by parts',
          'Choose appropriate u and dv',
          'Solve complex integration problems'
        ],
        keySkills: [
          'Parts integration',
          'Function selection',
          'Problem solving'
        ],
        assessmentCriteria: [
          'Apply integration by parts',
          'Make appropriate choices',
          'Solve complex integrals'
        ]
      },
      {
        id: 'integration-by-substitution',
        title: 'Integration by Substitution',
        description: 'Substitution methods for difficult integrals.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Use substitution methods',
          'Recognize substitution opportunities',
          'Transform integrals effectively'
        ],
        keySkills: [
          'Substitution technique',
          'Pattern recognition',
          'Integral transformation'
        ],
        assessmentCriteria: [
          'Use substitution correctly',
          'Recognize substitution patterns',
          'Transform integrals accurately'
        ]
      },
      {
        id: 'partial-fractions',
        title: 'Partial Fractions',
        description: 'Decomposing rational functions for integration.',
        estimatedTime: 105,
        difficulty: 'advanced',
        learningObjectives: [
          'Decompose into partial fractions',
          'Integrate rational functions',
          'Handle repeated and complex factors'
        ],
        keySkills: [
          'Partial fraction decomposition',
          'Rational function integration',
          'Complex factor handling'
        ],
        assessmentCriteria: [
          'Decompose fractions correctly',
          'Integrate rational functions',
          'Handle all factor types'
        ]
      }
    ]
  },
  {
    id: 'a2-differential-equations',
    title: 'Differential Equations',
    description: 'First-order differential equations and their applications.',
    year: 'A2',
    order: 15,
    estimatedHours: 18,
    prerequisites: ['as-differentiation', 'as-integration'],
    topics: [
      {
        id: 'separable-differential-equations',
        title: 'Separable Differential Equations',
        description: 'Solving differential equations by separation of variables.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Identify separable equations',
          'Solve by separation of variables',
          'Apply initial conditions'
        ],
        keySkills: [
          'Variable separation',
          'Equation solving',
          'Initial condition application'
        ],
        assessmentCriteria: [
          'Identify separable equations',
          'Solve using separation',
          'Apply initial conditions'
        ]
      },
      {
        id: 'differential-equation-modeling',
        title: 'Differential Equation Modeling',
        description: 'Using differential equations to model real-world phenomena.',
        estimatedTime: 90,
        difficulty: 'advanced',
        learningObjectives: [
          'Model real situations with differential equations',
          'Interpret solutions in context',
          'Apply to population and growth models'
        ],
        keySkills: [
          'Mathematical modeling',
          'Solution interpretation',
          'Real-world application'
        ],
        assessmentCriteria: [
          'Create appropriate models',
          'Interpret solutions correctly',
          'Apply to real situations'
        ]
      },
      {
        id: 'first-order-linear-equations',
        title: 'First-Order Linear Equations',
        description: 'Solving first-order linear differential equations.',
        estimatedTime: 75,
        difficulty: 'advanced',
        learningObjectives: [
          'Identify linear differential equations',
          'Use integrating factors',
          'Solve first-order linear equations'
        ],
        keySkills: [
          'Equation identification',
          'Integrating factor method',
          'Solution verification'
        ],
        assessmentCriteria: [
          'Identify linear equations',
          'Apply integrating factors',
          'Verify solutions'
        ]
      }
    ]
  },
  {
    id: 'a2-numerical-methods',
    title: 'Numerical Methods',
    description: 'Numerical techniques for solving mathematical problems.',
    year: 'A2',
    order: 16,
    estimatedHours: 15,
    prerequisites: ['as-differentiation', 'as-integration'],
    topics: [
      {
        id: 'newton-raphson-method',
        title: 'Newton-Raphson Method',
        description: 'Iterative method for finding roots of equations.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Apply Newton-Raphson method',
          'Analyze convergence',
          'Find roots of equations numerically'
        ],
        keySkills: [
          'Iterative methods',
          'Convergence analysis',
          'Root finding'
        ],
        assessmentCriteria: [
          'Apply method correctly',
          'Analyze convergence behavior',
          'Find roots accurately'
        ]
      },
      {
        id: 'trapezium-rule',
        title: 'Trapezium Rule',
        description: 'Numerical integration using the trapezium rule.',
        estimatedTime: 60,
        difficulty: 'foundation',
        learningObjectives: [
          'Apply trapezium rule',
          'Estimate definite integrals',
          'Analyze approximation errors'
        ],
        keySkills: [
          'Numerical integration',
          'Error analysis',
          'Approximation techniques'
        ],
        assessmentCriteria: [
          'Apply trapezium rule',
          'Estimate integrals accurately',
          'Analyze approximation quality'
        ]
      },
      {
        id: 'locating-roots',
        title: 'Locating Roots',
        description: 'Methods for locating roots of equations.',
        estimatedTime: 60,
        difficulty: 'intermediate',
        learningObjectives: [
          'Use change of sign method',
          'Apply interval bisection',
          'Locate roots systematically'
        ],
        keySkills: [
          'Sign change identification',
          'Interval bisection',
          'Systematic root location'
        ],
        assessmentCriteria: [
          'Identify sign changes',
          'Apply bisection method',
          'Locate roots systematically'
        ]
      }
    ]
  },
  {
    id: 'a2-vectors',
    title: 'Vectors',
    description: '3D vectors and their applications in geometry.',
    year: 'A2',
    order: 17,
    estimatedHours: 20,
    prerequisites: ['as-coordinate-geometry'],
    topics: [
      {
        id: '3d-vectors',
        title: '3D Vectors',
        description: 'Three-dimensional vector operations and properties.',
        estimatedTime: 75,
        difficulty: 'intermediate',
        learningObjectives: [
          'Understand 3D vector representation',
          'Perform vector operations',
          'Calculate magnitudes and directions'
        ],
        keySkills: [
          'Vector representation',
          'Vector operations',
          'Magnitude calculation'
        ],
        assessmentCriteria: [
          'Represent vectors correctly',
          'Perform operations accurately',
          'Calculate magnitudes and directions'
        ]
      },
      {
        id: 'scalar-product',
        title: 'Scalar Product',
        description: 'Dot product and its applications.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Calculate scalar products',
          'Find angles between vectors',
          'Apply to geometric problems'
        ],
        keySkills: [
          'Scalar product calculation',
          'Angle determination',
          'Geometric application'
        ],
        assessmentCriteria: [
          'Calculate scalar products',
          'Find angles correctly',
          'Apply to geometric problems'
        ]
      },
      {
        id: 'vector-equations-lines',
        title: 'Vector Equations of Lines',
        description: 'Representing lines using vectors and finding intersections.',
        estimatedTime: 105,
        difficulty: 'advanced',
        learningObjectives: [
          'Write vector equations of lines',
          'Find line intersections',
          'Solve geometric problems using vectors'
        ],
        keySkills: [
          'Line equation formulation',
          'Intersection calculation',
          'Geometric problem solving'
        ],
        assessmentCriteria: [
          'Write line equations correctly',
          'Find intersections accurately',
          'Solve vector geometry problems'
        ]
      }
    ]
  },
  {
    id: 'a2-hypothesis-testing',
    title: 'Hypothesis Testing',
    description: 'Statistical hypothesis testing with various distributions.',
    year: 'A2',
    order: 18,
    estimatedHours: 22,
    prerequisites: ['as-statistics', 'as-probability'],
    topics: [
      {
        id: 'binomial-hypothesis-testing',
        title: 'Binomial Hypothesis Testing',
        description: 'Hypothesis testing with binomial distributions.',
        estimatedTime: 90,
        difficulty: 'intermediate',
        learningObjectives: [
          'Formulate null and alternative hypotheses',
          'Conduct binomial tests',
          'Interpret test results'
        ],
        keySkills: [
          'Hypothesis formulation',
          'Test conduct',
          'Result interpretation'
        ],
        assessmentCriteria: [
          'Formulate hypotheses correctly',
          'Conduct tests accurately',
          'Interpret results appropriately'
        ]
      },
      {
        id: 'normal-distribution-testing',
        title: 'Normal Distribution Testing',
        description: 'Hypothesis testing with normal distributions.',
        estimatedTime: 105,
        difficulty: 'advanced',
        learningObjectives: [
          'Test means and proportions',
          'Use z-tests and t-tests',
          'Apply to real-world scenarios'
        ],
        keySkills: [
          'Test selection',
          'Statistical calculation',
          'Real-world application'
        ],
        assessmentCriteria: [
          'Select appropriate tests',
          'Calculate statistics correctly',
          'Apply to practical problems'
        ]
      },
      {
        id: 'type-errors-power',
        title: 'Type I and Type II Errors',
        description: 'Understanding and calculating error probabilities.',
        estimatedTime: 75,
        difficulty: 'advanced',
        learningObjectives: [
          'Understand Type I and Type II errors',
          'Calculate error probabilities',
          'Determine test power'
        ],
        keySkills: [
          'Error identification',
          'Probability calculation',
          'Power analysis'
        ],
        assessmentCriteria: [
          'Identify error types',
          'Calculate error probabilities',
          'Analyze test power'
        ]
      }
    ]
  }
];

export function getCurriculumByLevel(level: 'AS' | 'A2'): CurriculumModule[] {
  return AQA_A_LEVEL_MATHEMATICS_CURRICULUM.filter(module => module.year === level);
}

export function getCurriculumModule(moduleId: string): CurriculumModule | undefined {
  return AQA_A_LEVEL_MATHEMATICS_CURRICULUM.find(module => module.id === moduleId);
}

export function getPrerequisites(moduleId: string): string[] {
  const module = getCurriculumModule(moduleId);
  return module?.prerequisites || [];
}

export function getTopicsByModule(moduleId: string): CurriculumTopic[] {
  const module = getCurriculumModule(moduleId);
  return module?.topics || [];
}

export function getAllTopics(): CurriculumTopic[] {
  return AQA_A_LEVEL_MATHEMATICS_CURRICULUM.flatMap(module => module.topics);
}

export function getTopicById(topicId: string): CurriculumTopic | undefined {
  return getAllTopics().find(topic => topic.id === topicId);
}

export function getTotalEstimatedHours(level?: 'AS' | 'A2'): number {
  const modules = level ? getCurriculumByLevel(level) : AQA_A_LEVEL_MATHEMATICS_CURRICULUM;
  return modules.reduce((total, module) => total + module.estimatedHours, 0);
}

export function getModuleProgress(moduleId: string, completedTopics: string[]): {
  totalTopics: number;
  completedTopics: number;
  progressPercentage: number;
} {
  const module = getCurriculumModule(moduleId);
  if (!module) {
    return { totalTopics: 0, completedTopics: 0, progressPercentage: 0 };
  }

  const totalTopics = module.topics.length;
  const completed = module.topics.filter(topic => completedTopics.includes(topic.id)).length;
  const progressPercentage = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

  return {
    totalTopics,
    completedTopics: completed,
    progressPercentage
  };
}