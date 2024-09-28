const MCQ = {
  question: "What is the main purpose of quantum wells?",
  options: [
    "To confine particles in a two-dimensional space",
    "To enhance quantum mechanical effects",
    "To fabricate semiconductor devices",
    "To generate electricity",
  ],
  answer: "To enhance quantum mechanical effects",
  explanation:
    "Quantum wells are nanostructures that confine particles, like electrons, in a two-dimensional space, enhancing quantum mechanical effects.",
};

const OneChoiceQuestion = {
    question: "What is the main purpose of quantum wells?",
    explanation:
        "Quantum wells are nanostructures that confine particles, like electrons, in a two-dimensional space, enhancing quantum mechanical effects.",
};

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1h3m-7ZrUGWSajjq_9M62AThYmRvz34iSM2k0tQgtecNaz_rHH6-LVzc15h9-lWODxM&usqp=CAU";

const lectureIdeaContent = [
  {
    id: 1,
    ideaText:
      "Quantum wells are nanostructures that confine particles, like electrons, in a two-dimensional space, enhancing quantum mechanical effects.",
    image: image,
    mcq: null,
    oneChoiceQuestion: OneChoiceQuestion,
  },
  {
    id: 2,
    ideaText:
      "Quantum wells are used in the fabrication of semiconductor devices like lasers, LEDs, and solar cells.",
    image: null,
    mcq: MCQ,
    oneChoiceQuestion: null,
  },
  {
    id: 3,
    ideaText:
      "Quantum wells are used in the fabrication of semiconductor devices like lasers, LEDs, and solar cells.",
    image: image,
    mcq: null,
    oneChoiceQuestion: OneChoiceQuestion,
  },
  {
    id: 4,
    ideaText:
      "Quantum wells are used in the fabrication of semiconductor devices like lasers, LEDs, and solar cells.",
    image: null,
    mcq: null,
    oneChoiceQuestion: null,
  },
  {
    id: 5,
    ideaText:
      "Quantum wells are used in the fabrication of semiconductor devices like lasers, LEDs, and solar cells.",
    image: image,
    mcq: MCQ,
    oneChoiceQuestion: null,
  },
];



export default lectureIdeaContent;
