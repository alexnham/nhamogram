import { useState } from "react";
import Navbar from "./Navbar";
import FlowChart from "./flowchart";

const flowChartTree = {
  id: 1,
  question: 'Was a non-contrast CT scan performed?',
  children: [
    {
      id: 2,
      label: "Yes",
      question: 'What are the Hounsfield units on non-contrast CT scan?',
      children: [
        {
          id: 3,
          label: ">= 10",
          question: 'Was Second Line Imaging performed?',
          children: [
            {
              id: 4,
              label: "Yes",
              question: 'Second Line Imaging Characteristics',
              children: [
                {
                  id: 5,
                  label: "Benign Functional",
                  question: "Benign Functional Adenoma \n Hyperaldosteronism",
                  children: [
                    {
                      id: 6,
                      label: "Yes",
                      question: "Perform lateralization using adrenal vein sampling followed by an adrenalectomy.",
                      children: [
                        {
                          id: 7,
                          label: "If unilateral secretion",
                          children: [
                            { id: 8, label: "Consider adrenalectomy" }
                          ]
                        },
                        {
                          id: 9,
                          label: "If bilateral secretion",
                          children: [
                            { id: 10, label: "Consider medical management" }
                          ]
                        }
                      ]
                    },
                    {
                      id: 11,
                      label: "No",
                      question: "Hypercortisolism",
                      children: [
                        {
                          id: 12,
                          label: "Yes",
                          children: [
                            {
                              id: 13,
                              label: "Measure plasma ACTH and consider adrenalectomy with patients with Cushing's syndrome and select patients with mild autonomous cortisol secretion"
                            }
                          ]
                        },
                        {
                          id: 14,
                          label: "No",
                          question: "Pheochromocytoma",
                          children: [
                            {
                              id: 15,
                              label: "Yes",
                              children: [
                                { id: 16, label: "Adrenalectomy, MIS where feasible" }
                              ]
                            },
                            {
                              id: 17,
                              label: "No",
                              children: [
                                { id: 18, label: "Consider Medical Management" }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 19,
                  label: "Benign Non-Functional",
                  question: "Benign Non-Functional Adenoma\nWhat is the size?",
                  children: [
                    {
                      id: 20,
                      label: "< 4cm",
                      children: [
                        { id: 21, label: "No radiographic or hormonal follow-up" }
                      ]
                    },
                    {
                      id: 22,
                      label: "> 4cm",
                      children: [
                        { id: 23, label: "Repeat CT in 6–12 months" }
                      ]
                    }
                  ]
                },
                {
                  id: 24,
                  label: "Equivocal non-functional lesion",
                  children: [
                    { id: 25, label: "Repeat imaging in 3–6 months vs. consider adrenalectomy" }
                  ]
                },
                {
                  id: 26,
                  label: "Suspected Metastasis",
                  children: [
                    { id: 27, label: "Consider biopsy and/or PET/CT" }
                  ]
                },
                {
                  id: 28,
                  label: "ACC",
                  children: [
                    { id: 29, label: "Adrenalectomy + lymphadenectomy, open favored when increased risk of tumor rupture" }
                  ]
                }
              ]
            },
            {
              id: 30,
              label: "No",
              children: [
                { id: 31, label: "Perform Chemical shift MRI if available or contrast-enhanced washout CT" }
              ]
            }
          ]
        },
        {
          id: 32,
          label: "< 10",
          question: 'Is It Functional?',
          children: [
            {
              id: 33,
              label: "Yes",
              question: "Benign Functional Adenoma \n Hyperaldosteronism",
              children: [
                {
                  id: 34,
                  label: "Yes",
                  question: "Perform lateralization using adrenal vein sampling followed by an adrenalectomy.",
                  children: [
                    {
                      id: 35,
                      label: "If unilateral secretion",
                      children: [
                        { id: 36, label: "Consider adrenalectomy" }
                      ]
                    },
                    {
                      id: 37,
                      label: "If bilateral secretion",
                      children: [
                        { id: 38, label: "Consider medical management" }
                      ]
                    }
                  ]
                },
                {
                  id: 39,
                  label: "No",
                  question: "Hypercortisolism",
                  children: [
                    {
                      id: 40,
                      label: "Yes",
                      children: [
                        {
                          id: 41,
                          label: "Measure plasma ACTH and consider adrenalectomy with patients with Cushing's syndrome and select patients with mild autonomous cortisol secretion"
                        }
                      ]
                    },
                    {
                      id: 42,
                      label: "No",
                      question: "Pheochromocytoma",
                      children: [
                        {
                          id: 43,
                          label: "Yes",
                          children: [
                            { id: 44, label: "Adrenalectomy, MIS where feasible" }
                          ]
                        },
                        {
                          id: 45,
                          label: "No",
                          children: [
                            { id: 46, label: "Consider Medical Management" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 47,
              label: "No",
              question: "Benign Non-Functional Adenoma\nWhat is the size?",
              children: [
                {
                  id: 48,
                  label: "< 4cm",
                  children: [
                    { id: 49, label: "No radiographic or hormonal follow-up" }
                  ]
                },
                {
                  id: 50,
                  label: "> 4cm",
                  children: [
                    { id: 51, label: "Repeat CT in 6–12 months" }
                  ]
                }
              ]
            },
            {
              id: 52,
              label: "Testing Not Performed",
              question: "Perform hormone function screen \nIs there hypotension/hypokalemia?",
              children: [
                {
                  id: 53,
                  label: "Yes",
                  children: [
                    {
                      id: 54,
                      label: "1. Test urine metanephrines/normetanephrines\n" +
                        "2. Test serum renin/aldosterone ratio\n" +
                        "3. Perform 1mg dexamethasone suppression test"
                    }
                  ]
                },
                {
                  id: 55,
                  label: "No",
                  children: [
                    {
                      id: 56,
                      label: "1. Test urine metanephrines/normetanephrines\n" +
                        "2. No indication to perform serum renin/aldosterone ratio\n" +
                        "3. Perform 1mg dexamethasone suppression test"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 57,
      label: "No",
      children: [
        { id: 58, label: "Perform non-contrast CT" }
      ]
    }
  ]
};





function App() {
  const [calculate, setCalculate] = useState(false)
  return (
    <div className="App">
      <Navbar></Navbar>
      {!calculate && <div className="h-screen w-screen flex flex-col items-center justify-center p-10 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">

        <h1 className="text-4xl font-bold">Adrenal Nhamogram</h1>
        <h4 className="text-sm py-5">Workup and Management of the Adrenal Incidentaloma</h4>
        <button
          className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg"
        onClick={() => setCalculate(true)}>
          Continue
        </button>
        </div>
      </div>}
      {calculate && <FlowChart root={flowChartTree} />}
    </div>
  );
}

export default App;
