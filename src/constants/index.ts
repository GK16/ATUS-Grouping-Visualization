export const DEFAULT_NAME = 'Group Population';

export const ATTRIBUTES = [
  // // GEMETSTA not work
  //   {
  //     key: 'GEMETSTA',
  //     type: 'categorical',
  //     label: 'Metropolitan Status',
  //     description: 'Metropolitan status',
  //     entries: {
  //       1: { name: 'Metropolitan', description: 'Metropolitan' },
  //       2: { name: 'Non-metropolitan', description: 'Non-metropolitan' },
  //       3: { name: 'Not identified', description: 'Not identified' },
  //     },
  //   },
  {
    key: 'PEEDUCA',
    type: 'categorical',
    label: 'Education Background',
    description:
      'What is the highest level of school you have completed or the highest degree you have received?',
    entries: {
      31: { name: 'Less than 1st grade', description: 'Less than 1st grade' },
      32: {
        name: '1st-4th grade',
        description: '1st, 2nd, 3rd, or 4th grade',
      },
      33: { name: '5-6th grade', description: '5th or 6th grade' },
      34: { name: '7-8th grade', description: '7th or 8th grade' },
      35: { name: '9th grade', description: '9th grade' },
      36: { name: '10th grade', description: '10th grade' },
      37: { name: '11th grade', description: '11th grade' },
      38: { name: '12th grade', description: '12th grade - no diploma' },
      39: {
        name: 'High school',
        description: 'High school graduate - diploma or equivalent (GED)',
      },
      40: {
        name: 'Some college',
        description: 'Some college but no degree',
      },
      41: {
        name: 'Associate degree - 1',
        description: 'Associate degree - occupational/vocational',
      },
      42: {
        name: 'Associate degree - 2',
        description: 'Associate degree - academic program',
      },
      43: {
        name: "Bachelor's degree",
        description: "Bachelor's degree (BA, AB, BS, etc.)",
      },
      44: {
        name: "Master's degree",
        description: "Master's degree (MA, MS, MEng, MEd, MSW, etc.)",
      },
      45: {
        name: 'Professional degree',
        description: 'Professional school degree (MD, DDS, DVM, etc.)',
      },
      46: {
        name: 'Doctoral degree',
        description: 'Doctoral degree (PhD, EdD, etc.)',
      },
    },
  },
  {
    key: 'TUDIARYDAY',
    type: 'categorical',
    label: 'Exact Diary Day',
    description:
      'Day of the week of diary day (day of the week about which the respondent was interviewed)',
    entries: {
      1: { name: 'Sunday', description: 'Sunday' },
      2: { name: 'Monday', description: 'Monday' },
      3: { name: 'Tuesday', description: 'Tuesday' },
      4: { name: 'Wednesday', description: 'Wednesday' },
      5: { name: 'Thursday', description: 'Thursday' },
      6: { name: 'Friday', description: 'Friday' },
      7: { name: 'Saturday', description: 'Saturday' },
    },
  },
  {
    key: 'PTDTRACE',
    type: 'categorical',
    label: 'Race',
    description: 'Race',
    entries: {
      1: { name: 'White only', description: 'White only' },
      2: { name: 'Black only', description: 'Black only' },
      3: {
        name: 'American Indian, Alaskan Native only',
        description: 'American Indian, Alaskan Native only',
      },
      4: { name: 'Asian only', description: 'Asian only' },
      5: {
        name: 'Hawaiian/Pacific Islander only',
        description: 'Hawaiian/Pacific Islander only',
      },
      6: { name: 'White-Black', description: 'White-Black' },
      7: {
        name: 'White-American Indian',
        description: 'White-American Indian',
      },
      8: { name: 'White-Asian', description: 'White-Asian' },
      9: { name: 'White-Hawaiian', description: 'White-Hawaiian' },
      10: {
        name: 'Black-American Indian',
        description: 'Black-American Indian',
      },
      11: { name: 'Black-Asian', description: 'Black-Asian' },
      12: { name: 'Black-Hawaiian', description: 'Black-Hawaiian' },
      13: {
        name: 'American Indian-Asian',
        description: 'American Indian-Asian',
      },
      14: {
        name: 'Asian-Hawaiian',
        description:
          'Asian-Hawaiian or American Indian-Hawaiian (beginning 5/2012)',
      },
      15: {
        name: 'White-Black-American Indian',
        description:
          'White-Black-American Indian or Asian-Hawaiian (beginning 5/2012)',
      },
      16: {
        name: 'White-Black-Asian',
        description:
          'White-Black-Asian or White-Black-American Indian (beginning 5/2012)',
      },
      17: {
        name: 'White-American Indian-Asian',
        description:
          'White-American Indian-Asian or White-Black-Asian (beginning 5/2012)',
      },
      18: {
        name: 'White-Asian-Hawaiian',
        description:
          'White-Asian-Hawaiian or White-Black-Hawaiian (beginning 5/2012)',
      },
      19: {
        name: 'White-Black-American Indian-Asian',
        description:
          'White-Black-American Indian-Asian or White-American Indian-Asian (beginning 5/2012)',
      },
      20: {
        name: '2 or 3 races',
        description:
          '2 or 3 races or White-American Indian-Hawaiian (beginning 5/2012)',
      },
      21: {
        name: '4 or 5 races',
        description: '4 or 5 races or White-Asian-Hawaiian (beginning 5/2012)',
      },
      22: {
        name: 'Black-American Indian-Asian',
        description: 'Black-American Indian-Asian (beginning 5/2012)',
      },
      23: {
        name: 'White-Black-American Indian-Asian',
        description: 'White-Black-American Indian-Asian (beginning 5/2012)',
      },
      24: {
        name: 'White-American Indian-Asian-Hawaiian',
        description: 'White-American Indian-Asian-Hawaiian (beginning 5/2012)',
      },
      25: {
        name: 'Other 3 race combinations',
        description: 'Other 3 race combinations (beginning 5/2012)',
      },
      26: {
        name: 'Other 4 and 5 race combinations',
        description: 'Other 4 and 5 race combinations (beginning 5/2012)',
      },
    },
  },
  {
    key: 'TELFS',
    type: 'categorical',
    label: 'Labor Force Status',
    description: 'Labor Force Status',
    entries: {
      1: { name: 'Employed - at work', description: 'Employed - at work' },
      2: { name: 'Employed - absent', description: 'Employed - absent' },
      3: {
        name: 'Unemployed - on layoff',
        description: 'Unemployed - on layoff',
      },
      4: { name: 'Unemployed - looking', description: 'Unemployed - looking' },
      5: { name: 'Not in labor force', description: 'Not in labor force' },
    },
  },
  {
    key: 'TRSPFTPT',
    type: 'categorical',
    label: 'Spouse Employment Detail',
    description:
      'Full time or part time employment status of spouse or unmarried partner',
    entries: {
      1: { name: 'Full time', description: 'Full time' },
      2: { name: 'Part time', description: 'Part time' },
      3: { name: 'Hours vary', description: 'Hours vary' },
    },
  },
  {
    key: 'TEAGE',
    type: 'numeric',
    label: 'Age',
    description: 'Age',
  },
  {
    key: 'PEHSPNON',
    type: 'categorical',
    label: 'Hispanic',
    description: 'Are you Spanish, Hispanic, or Latino',
    entries: {
      1: { name: 'Hispanic', description: 'Hispanic' },
      2: { name: 'Non-Hispanic', description: 'Non-Hispanic' },
    },
  },
  {
    key: 'TEMJOT',
    type: 'categorical',
    label: 'Multiple Jobs',
    description: 'In the last seven days did you have more than one job?',
    entries: {
      1: { name: 'Yes', description: 'Yes' },
      2: { name: 'No', description: 'No' },
    },
  },
  {
    key: 'TESCHENR',
    type: 'categorical',
    label: 'Higher Education',
    description: 'Are you enrolled in high school, college, or university?',
    entries: {
      1: { name: 'Yes', description: 'Yes' },
      2: { name: 'No', description: 'No' },
    },
  },
  {
    key: 'TESCHLVL',
    type: 'categorical',
    label: 'Higher Education Detail',
    description: 'Would that be high school, college, or university?',
    entries: {
      1: { name: 'High school', description: 'High school' },
      2: {
        name: 'College or university',
        description: 'College or university',
      },
    },
  },
  {
    key: 'TESEX',
    type: 'categorical',
    label: 'Sex',
    description: 'Sex: 1 for male and 2 for female',
    entries: {
      1: { name: 'Male', description: 'Male' },
      2: { name: 'Female', description: 'Female' },
    },
  },
  {
    key: 'TESPEMPNOT',
    type: 'categorical',
    label: 'Spouse Employment status',
    description: 'Employment status of spouse or unmarried partner',
    entries: {
      1: { name: 'Employed', description: 'Employed' },
      2: { name: 'Not employed', description: 'Not employed' },
    },
  },
  {
    key: 'TRCHILDNUM',
    type: 'numeric',
    label: 'Children Number',
    description: 'Number of household children < 18',
  },
  {
    key: 'TRDPFTPT',
    type: 'categorical',
    label: 'Employment Status',
    description: 'Full time or part time employment status of respondent',
    entries: {
      1: { name: 'Full time', description: 'Full time' },
      2: { name: 'Part time', description: 'Part time' },
    },
  },
  {
    key: 'TRERNWA',
    type: 'numeric',
    label: 'Weekly Earnings',
    description: 'Weekly earnings at main job',
  },
  {
    key: 'TRHOLIDAY',
    type: 'categorical',
    label: 'Diary Day',
    description: 'Flag to indicate if diary day was a holiday',
    entries: {
      1: { name: 'Non-holiday', description: 'Diary day was not a holiday' },
      0: { name: 'Holiday', description: 'Diary day was a holiday' },
    },
  },
  {
    key: 'TRYHHCHILD',
    type: 'numeric',
    label: 'Youngest Child Age',
    description: 'Age of youngest household child < 18',
  },
  {
    key: 'TEHRUSLT',
    type: 'numeric',
    label: 'Work Hours',
    description:
      'Total hours usually worked per week (sum of TEHRUSL1 and TEHRUSL2)',
  },
  {
    key: 'TUYEAR',
    type: 'numeric',
    label: 'Diary Year',
    description:
      'Year of diary day (year of day about which respondent was interviewed)',
  },
];
