export const VLATQuestions = [
  {
    question: 'What was the price of a barrel of oil in February 2015?',
    img: 'VLAT1',
    name: '0',
    options: ['$57.36', '$47.82', '$50.24', '$39.72', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'line',
    originID: 1,
    task: 'Retrieve Value',
    CVR: 1,
    P: 0.95,
    D: 0.07,
  },
  {
    question: 'In which month was the price of a barrel of oil the lowest in 2015?',
    img: 'VLAT1',
    name: '1',
    options: ['March', 'May', 'July', 'December', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'line',
    originID: 2,
    task: 'Find Extremum',
    CVR: 1,
    P: 0.97,
    D: 0.06,
  },
  {
    question: 'What was the price range of a barrel of oil in 2015?',
    img: 'VLAT1',
    name: '2',
    options: ['$35 - $65', '$48.36 - $60.95', '$37.04 - $48.36', '$37.04 - $60.95', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'line',
    originID: 3,
    task: 'Determine Range',
    CVR: 1,
    P: 0.56,
    D: 0.66,
  },
  {
    question: 'Over the course of the second half of 2015, the price of a barrel of oil was',
    img: 'VLAT1',
    name: '3',
    options: ['Rising', 'Falling', 'Staying', 'Skip'],
    trueAnswer: 1,
    answer: '',
    required: true,
    chartType: 'line',
    originID: 4,
    task: 'Find Correlations/Trends',
    CVR: 1,
    P: 0.98,
    D: 0.03,
  },
  {
    question: 'About how much did the price of a barrel of oil fall from April to September in 2015?',
    img: 'VLAT1',
    name: '4',
    options: ['$4', '$15', '$17', '$45', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'line',
    originID: 5,
    task: 'Make Comparisons',
    CVR: 0.2,
    P: 0.77,
    D: 0.44,
  },
  {
    question: 'What is the average internet speed in Japan?',
    img: 'VLAT2',
    name: '5',
    options: ['10 Mbps', '14 Mbps', '15 Mbps', '16 Mbps', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'bar',
    originID: 6,
    task: 'Retrieve Value',
    CVR: 1,
    P: 0.88,
    D: 0.21,
  },
  {
    question: 'In which country is the average internet speed the fastest in Asia?',
    img: 'VLAT2',
    name: '6',
    options: ['China', 'Hong Kong', 'South Korea', 'Vietnam', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'bar',
    originID: 7,
    task: 'Find Extremum',
    CVR: 1,
    P: 0.98,
    D: 0.05,

  },
  {
    question: 'What is the range of the average internet speed in Asia?',
    img: 'VLAT2',
    name: '7',
    options: ['0 - 22 Mbps', ' 2 - 20.5 Mbps', '3 - 20 Mbps', '3.4 - 7.8 Mbps', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'bar',
    originID: 8,
    task: 'Determine Range',
    CVR: 0.6,
    P: 0.54,
    D: 0.61,
  },
  {
    question: 'How many countries in Asia have an average internet speed that is slower than that of Thailand?',
    img: 'VLAT2',
    name: '8',
    options: ['5 Countries', ' 6 Countries', '7 Countries', '8 Countries', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'bar',
    originID: 9,
    task: 'Make Comparisons',
    CVR: 0.2,
    P: 0.4,
    D: 0.23,

  },
  {
    question: 'What is the cost of peanuts in Las Vegas?',
    img: 'VLAT3',
    name: '9',
    options: ['$12', ' $16.7', '$23.4', '$35.4', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'stackbar',
    originID: 10,
    task: 'Retrieve Value (Absolute Value)',
    CVR: 0.2,
    P: 0.38,
    D: 0.66,
  },
  {
    question: 'About what is the ratio of the cost of a sandwich to the total cost of room service in Seattle?',
    img: 'VLAT3',
    name: '10',
    options: ['1 to 10', '2 to 10', '4 to 10', '6 to 10', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'stackbar',
    originID: 11,
    task: 'Retrieve Value (Relative Value)',
    CVR: 0.2,
    P: 0.36,
    D: 0.48,

  },
  {
    question: 'In which city is the cost of soda the highest?',
    img: 'VLAT3',
    name: '11',
    options: ['New York City', 'Las Vegas', 'Atlanta', 'Washington D.C.', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'stackbar',
    originID: 12,
    task: 'Find Extremum',
    CVR: 0.2,
    P: 0.69,
    D: 0.45,

  },

  // {
  //     question: 'What is the cost range of a sandwich in the cities?',
  //     img: require("../../imgs/VLAT/VLAT3.png"),
  //     name: "12",
  //     options: ["$0 - $24.2","$0 - $55.9","$13 - $24.2","$17 - $35.2","Skip"],
  //     answer: '',
  //     trueAnswer: 2,
  //     required: true,
  //     chartType: 'stackbar'
  //
  // },
  {
    question: 'The cost of vodka in Atlanta is higher than that of Honolulu.',
    img: 'VLAT3',
    name: '13',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'stackbar',
    originID: 14,
    task: 'Make Comparisons (Absolute Value)',
    CVR: 0.2,
    P: 0.59,
    D: 0.52,

  },
  {
    question: 'The ratio of the cost of Soda to the cost of Water in Orlando is higher than in that of Washington D.C.',
    img: 'VLAT3',
    name: '14',
    options: ['True', 'False', 'Skip'],
    trueAnswer: 1,
    answer: '',
    required: true,
    chartType: 'stackbar',
    originID: 15,
    task: 'Make Comparisons (Relative Value)',
    CVR: 0.2,
    P: 0.47,
    D: 0.32,

  },
  {
    question: 'What is the approval rating of Republicans among the people who have the education level of Postgraduate Study?',
    img: 'VLAT4',
    name: '15',
    options: ['38%', '47%', '53%', '62%', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: '100% stackbar',
    originID: 16,
    task: 'Retrieve Value (Relative Value)',
    CVR: 1,
    P: 0.49,
    D: 0.57,

  },
  {
    question: 'What is the education level of people in which the Democrats have the lowest approval rating?',
    img: 'VLAT4',
    name: '16',
    options: ['High School Graduate or Less', 'Some College Degree', 'College Graduate', 'Postgraduate study', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: '100% stackbar',
    originID: 17,
    task: 'Find Extremum (Relative Value)',
    CVR: 0.6,
    P: 0.9,
    D: 0.21,

  },
  {
    question: 'The approval rating of Republicans for the people who have the education level of Some College Degree is lower than that for the people who have the education level of Postgraduate Study.',
    img: 'VLAT4',
    name: '17',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: '100% stackbar',
    originID: 18,
    task: 'Make Comparisons (Relative Value)',
    CVR: 1,
    P: 0.54,
    D: 0.54,

  },
  {
    question: 'About what is the global smartphone market share of Samsung?',
    img: 'VLAT5',
    name: '18',
    options: ['15%', '25%', '33%', '50%', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'pie',
    originID: 19,
    task: 'Retrieve Value (Relative Value)',
    CVR: 0.6,
    P: 0.72,
    D: 0.34,

  },
  {
    question: 'In which company is the global smartphone market share the smallest?',
    img: 'VLAT5',
    name: '19',
    options: ['Apple', 'Xiaomi', 'Lenovo', 'Others', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'pie',
    originID: 20,
    task: 'Find Extremum (Relative Value)',
    CVR: 0.6,
    P: 0.98,
    D: 0.03,

  },
  {
    question: 'The global smartphone market share of Apple is larger than that of Huawei.',
    img: 'VLAT5',
    name: '20',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'pie',
    originID: 21,
    task: 'Make Comparisons (Relative Value)',
    CVR: 0.6,
    P: 1,
    D: 0,

  },
  {
    question: 'How many people have rated the taxi between 4.0 and 4.2?',
    img: 'VLAT6',
    name: '21',
    options: ['145', '153', '200', '240', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'histogram',
    originID: 22,
    task: 'Retrieve Value (Derived Value)',
    CVR: 1,
    P: 0.84,
    D: 0.26,

  },
  {
    question: 'What is the rating that the people have rated the taxi the most?',
    img: 'VLAT6',
    name: '22',
    options: ['4.2-4.4', '4.4-4.6', '4.6-4.8', '4.8-5.0', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'histogram',
    originID: 23,
    task: 'Find Extremum (Derived Value)',
    CVR: 1,
    P: 0.94,
    D: 0.06,

  },
  // in paper, this Q is either too difficult or too confusing. D value is negative
  // {
  //     question: 'The distribution of the taxi passenger rating is generally skewed to the left.',
  //     img: require("../../imgs/VLAT/VLAT6.png"),
  //     name: "23",
  //     options: ["True","False","Skip"],
  //     answer: '',
  //     trueAnswer: 1,
  //     required: true,
  //     chartType: 'bar'
  //
  // },
  {
    question: 'More people have rated the taxi between 4.6 and 4.8 than between 4.2 and 4.4.',
    img: 'VLAT6',
    name: '24',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'histogram',
    originID: 25,
    task: 'Make Comparisons (Derived Value)',
    CVR: 1,
    P: 0.86,
    D: 0.18,

  },
  // {
  //     question: 'How many people have rated the taxi 4.9?',
  //     img: require("../../imgs/VLAT/VLAT6.png"),
  //     name: "25",
  //     options: ["200","240","345","Cannot be inferred","Skip"],
  //     answer: '',
  //     trueAnswer: 3,
  //     required: true,
  //     chartType: 'bar'
  //
  // },
  {
    question: 'What is the weight for the person who is 165.1 cm tall?',
    img: 'VLAT7',
    name: '26',
    options: ['53.9kg', '67.7kg', '70.5kg', '82.7kg', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'scatterplot',
    originID: 27,
    task: 'Retrieve Value',
    CVR: 1,
    P: 0.85,
    D: 0.27,

  },
  {
    question: 'What is the height for the tallest person among the 85 males?',
    img: 'VLAT7',
    name: '27',
    options: ['175.3cm', '192cm', '197.1cm', '200cm', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'scatterplot',
    originID: 28,
    task: 'Find Extremum',
    CVR: 1,
    P: 0.76,
    D: 0.39,

  },
  {
    question: 'What is the range in weight for the 85 males?',
    img: 'VLAT7',
    name: '28',
    options: ['40 - 130kg', '62.3 - 90.9kg', '53.9 - 102.3kg', '53.9 - 123.6kg', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'scatterplot',
    originID: 29,
    task: 'Determine Range',
    CVR: 0.6,
    P: 0.53,
    D: 0.49,

  },
  // {
  //     question: 'About the height for the 85 males is normally distributed.',
  //     img: require("../../imgs/VLAT/VLAT7.png"),
  //     name: "29",
  //     options: ["True","False","Skip"],
  //     answer: '',
  //     trueAnswer: 0,
  //     required: true,
  //     chartType: 'scatterplot'
  //
  // },
  {
    question: 'What is the height for a person who lies outside the others the most?',
    img: 'VLAT7',
    name: '30',
    options: ['167.4cm', '175.3cm', '193cm', '197.1cm', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'scatterplot',
    originID: 31,
    task: 'Find Anomalies',
    CVR: 0.6,
    P: 0.42,
    D: 0.29,

  },
  {
    question: 'A group of males are gathered around the height of 176 cm and the weight of 70 kg.',
    img: 'VLAT7',
    name: '31',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'scatterplot',
    originID: 32,
    task: 'Find Clusters',
    CVR: 0.2,
    P: 0.9,
    D: 0.23,

  },
  {
    question: 'There is a negative linear relationship between the height and the weight of the 85 males.',
    img: 'VLAT7',
    name: '32',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'scatterplot',
    originID: 33,
    task: 'Find Correlations/Trends',
    CVR: 1,
    P: 0.52,
    D: 0.66,

  },
  {
    question: 'The weights for males with the height of 188 cm are all the same.',
    img: 'VLAT7',
    name: '33',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'scatterplot',
    originID: 34,
    task: 'Make Comparisons',
    CVR: 0.6,
    P: 0.79,
    D: 0.2,

  },
  {
    question: 'What was the average price of a pound of coffee beans in September 2013?',
    img: 'VLAT8',
    name: '34',
    options: ['$4.9', '$5.0', '$5.1', '$5.2', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'area',
    originID: 35,
    task: 'Retrieve Value',
    CVR: 1,
    P: 0.75,
    D: 0.34,

  },
  {
    question: 'When was the average price of a pound of coffee beans at minimum?',
    img: 'VLAT8',
    name: '35',
    options: ['April 2013', 'September 2013', 'June 2014', 'December 2014', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'area',
    originID: 36,
    task: 'Find Extremum',
    CVR: 1,
    P: 0.44,
    D: 0.33,

  },
  {
    question: 'What was the range of the average price of a pound of coffee beans between January 2013 and December 2014?',
    img: 'VLAT8',
    name: '36',
    options: ['$4.4 - $6.2', '$4.6 - $5.9', '$4.6 - $6.0', '$4.6 - $6.1', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'area',
    originID: 37,
    task: 'Determine Range',
    CVR: 0.6,
    P: 0.38,
    D: 0.31,

  },
  {
    question: 'Over the course of 2013, the average price of a pound of coffee beans was',
    img: 'VLAT8',
    name: '37',
    options: ['Rising', 'Falling', 'Staying', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'area',
    originID: 38,
    task: 'Find Correlations/Trends',
    CVR: 1,
    P: 0.94,
    D: 0.14,

  },
  // {
  //     question: 'For how many months was the average price of a pound of coffee beans cheaper than that in December 2013?',
  //     img: require("../../imgs/VLAT/VLAT8.png"),
  //     name: "38",
  //     options: ["3 months","4 months","5 months","6 months","Skip"],
  //     answer: '',
  //     trueAnswer: 0,
  //     required: true,
  //     chartType: 'area'
  //
  // },
  {
    question: 'What was the number of girls named \'Amelia\' in 2010 in the UK?',
    img: 'VLAT9',
    name: '39',
    options: ['1500', '3800', '4200', '8000', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'stackarea',
    originID: 40,
    task: 'Retrieve Value (Absolute Value)',
    CVR: 0.2,
    P: 0.15,
    D: 0.29,

  },
  {
    question: 'About what was the ratio of the number of girls named \'Olivia\' to those named \'Isla\' in 2014 in the UK?',
    img: 'VLAT9',
    name: '40',
    options: ['1 to 1', '1 to 2', '1 to 3', '1 to 4', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'stackarea',
    originID: 41,
    task: 'Retrieve Value (Relative Value)',
    CVR: 0.6,
    P: 0.25,
    D: 0.29,

  },
  {
    question: 'Over the course of years between 2009 and 2014, when was the number of girls named \'Amelia\' at the maximum?',
    img: 'VLAT9',
    name: '41',
    options: ['2009', '2011', '2012', '2014', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'stackarea',
    originID: 42,
    task: 'Find Extremum',
    CVR: 0.6,
    P: 0.97,
    D: 0.04,

  },
  // //attention check question,
  // {
  //     question: 'How many names appear in this chart?',
  //     img: "VLAT9",
  //     name: "42",
  //     options: ["1","2","3","4","Skip"],
  //     answer: '',
  //     trueAnswer: 2,
  //     required: true,
  //     chartType: 'attentioncheck',
  //     originID: 43,
  //     task: "attention check",
  //     CVR: -1,
  //     P:-1,
  //     D:-1
  //
  // },
  {
    question: 'The number of girls named \'Isla\' was __________ from 2009 to 2012.',
    img: 'VLAT9',
    name: '43',
    options: ['Rising', 'Falling', 'Staying', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'stackarea',
    originID: 44,
    task: 'Find Correlations/Trends',
    CVR: 1,
    P: 0.96,
    D: 0.09,

  },
  {
    question: 'In the UK, the number of girls named \'Amelia\' in 2014 was more than it was in 2013.',
    img: 'VLAT9',
    name: '44',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'stackarea',
    originID: 45,
    task: 'Make Comparisons (Absolute Value)',
    CVR: 0.6,
    P: 0.2,
    D: 0.17,

  },
  {
    question: 'Over the course of years between 2009 and 2014, the number of girls named \'Isla\' was always more than \'Olivia\'.',
    img: 'VLAT9',
    name: '45',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'stackarea',
    originID: 46,
    task: 'Make Comparisons (Relative Value)',
    CVR: 0.2,
    P: 0.24,
    D: 0.2,

  },
  // {
  //     question: 'Over the course of years between 2014 and 2016, what was the range of the number of girls named \' Amelia\' ',
  //     img: require("../../imgs/VLAT/VLAT9.png"),
  //     name: "46",
  //     options: ["4000","5000","6000","Unknown","Skip"],
  //     answer: '',
  //     trueAnswer: 3,
  //     required: true,
  //     chartType: 'stackarea'
  //
  // },
  {
    question: 'What is the total length of the metro system in Beijing?',
    img: 'VLAT10',
    name: '47',
    options: ['330km', '400km', '530km', '560km', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'bubble',
    originID: 47,
    task: 'Retrieve Value',
    CVR: 1,
    P: 0.41,
    D: 0.46,

  },
  {
    question: 'Which city\'s metro system has the largest number of stations?',
    img: 'VLAT10',
    name: '48',
    options: ['Seoul', 'Beijing', 'New York City', 'Shanghai', 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'bubble',
    originID: 48,
    task: 'Find Extremum',
    CVR: 1,
    P: 0.69,
    D: 0.41,

  },
  {
    question: 'What is the range of the total length of the metro systems?',
    img: 'VLAT10',
    name: '49',
    options: ['150 - 600 km', '240 - 380 km', '240 - 560 km', '180 - 560 km', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'bubble',
    originID: 49,
    task: 'Determine Range',
    CVR: 0.6,
    P: 0.29,
    D: 0.46,

  },
  // {
  //     question: ' In general, the number of stations of the metro systems of the world is evenly distributed.',
  //     img: require("../../imgs/VLAT/VLAT10.png"),
  //     name: "50",
  //     options: ["True","False","Skip"],
  //     answer: '',
  //     trueAnswer: 1,
  //     required: true,
  //     chartType: 'bubble'
  //
  // },
  {
    question: 'Which city\'s metro system does lie outside the relationship between the total system length and the number of stations most?',
    img: 'VLAT10',
    name: '51',
    options: ['Tokyo', 'New York City', 'Beijing', 'London', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'bubble',
    originID: 51,
    task: 'Find Anomalies',
    CVR: 0.2,
    P: 0.53,
    D: 0.32,

  },
  {
    question: 'A group of the metro systems of the world has approximately 300 stations and around a 200 km system length.',
    img: 'VLAT10',
    name: '52',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'bubble',
    originID: 52,
    task: 'Find Clusters',
    CVR: 0.2,
    P: 0.59,
    D: 0.5,

  },
  {
    question: 'In general, the ridership of the metro system increases as the number of stations increases.',
    img: 'VLAT10',
    name: '53',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'bubble',
    originID: 53,
    task: 'Find Correlations/Trends',
    CVR: 0.2,
    P: 0.26,
    D: 0.09,

  },
  {
    question: 'The metro system in Shanghai has more ridership than the metro system in Beijing.',
    img: 'VLAT10',
    name: '54',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'bubble',
    originID: 54,
    task: 'Make Comparisons',
    CVR: 1,
    P: 0.8,
    D: 0.33,

  },
  {
    question: 'What was the unemployment rate for Indiana (IN) in 2015?',
    img: 'VLAT11',
    name: '55',
    options: ['1.1 - 2.3%', '2.3 - 3.4%', '3.4 - 4.6%', '4.6 - 5.7%',, 'Skip'],
    answer: '',
    trueAnswer: 2,
    required: true,
    chartType: 'map',
    originID: 55,
    task: 'Retrieve Value (Approximate Value)',
    CVR: 0.6,
    P: 0.24,
    D: 0.01,

  },
  {
    question: 'In which state was the unemployment rate the highest in 2015?',
    img: 'VLAT11',
    name: '56',
    options: ['Alaska (AK)', 'New Mexico (NM)', 'Florida (FL)', 'New York (NY)',, 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'map',
    originID: 56,
    task: 'Find Extremum (Approximate Value)',
    CVR: 0.6,
    P: 0.97,
    D: 0.06,

  },
  {
    question: 'In 2015, the unemployment rate for Washington (WA) was higher than that of Wisconsin (WI).',
    img: 'VLAT11',
    name: '57',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 0,
    required: true,
    chartType: 'map',
    originID: 57,
    task: 'Make Comparisons (Approximate Value)',
    CVR: 0.6,
    P: 0.92,
    D: 0.15,

  },
  {
    question: 'For which website was the number of unique visitors the largest in 2010?',
    img: 'VLAT12',
    name: '58',
    options: ['Facebook', 'Amazon', 'Bing', 'Google', 'Skip'],
    answer: '',
    trueAnswer: 3,
    required: true,
    chartType: 'treemap',
    originID: 59,
    task: 'Find Extremum (Relative Value)',
    CVR: 0.6,
    P: 0.68,
    D: 0.37,

  },
  {
    question: 'The number of unique visitors for Amazon was more than that of Yahoo in 2010.',
    img: 'VLAT12',
    name: '59',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'treemap',
    originID: 60,
    task: 'Make Comparisons (Relative Value)',
    CVR: 0.2,
    P: 0.42,
    D: 0.38,

  },
  {
    question: 'Samsung is nested in the Financial category.',
    img: 'VLAT12',
    name: '60',
    options: ['True', 'False', 'Skip'],
    answer: '',
    trueAnswer: 1,
    required: true,
    chartType: 'treemap',
    originID: 61,
    task: 'Identify the Hierarchical Structure',
    CVR: 1,
    P: 0.92,
    D: 0.13,

  },

];
