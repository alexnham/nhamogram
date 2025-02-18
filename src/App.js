import { useState } from "react";
import Navbar from "./Navbar";
import FlowChart from "./Flowchart";
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
          question: 'Is It Functional?',
          children: [
            {
              id: 4,
              label: "Yes",
              question: 'Was Second Line Imaging performed?',
              children: [
                {
                  id: 5,
                  label: "Yes",
                  question: 'What are the second line imaging characteristics suggestive of?',
                  children: [
                    { id: 6, label: "Benign Adenoma", children: [{ id: 7, label: "Adrenalectomy" }] },
                    { id: 24, label: "Equivocal lesion", children: [{ id: 25, label: "Adrenalectomy" }] },
                    { id: 26, label: "Suspected Metastasis", children: [{ id: 27, label: "Consider biopsy and/or PET/CT" }] },
                    { id: 28, label: "Adrenocortical carcinoma (ACC)", children: [{ id: 29, label: "Adrenalectomy + lymphadenectomy, open favored when increased risk of tumor rupture" }] }
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
              label: "No",
              question: 'Was Second Line Imaging performed?',
              children: [
                {
                  id: 33,
                  label: "Yes",
                  question: 'What are the second line imaging characteristics suggestive of?',
                  children: [
                    { id: 34, label: "Benign Adenoma", children: [{id: 35, label: "No radiographic or hormonal follow-up" }] },
                    { id: 52, label: "Equivocal lesion", children: [{ id: 53, label: "Repeat imaging in 3–6 months vs. consider adrenalectomy" }] },
                    { id: 54, label: "Suspected Metastasis", children: [{ id: 55, label: "Consider biopsy and/or PET/CT" }] },
                    { id: 56, label: "Adrenocortical carcinoma (ACC)", children: [{ id: 57, label: "Adrenalectomy + lymphadenectomy, open favored when increased risk of tumor rupture" }] }
                  ]
                },
                {
                  id: 58,
                  label: "No",
                  children: [
                    { id: 59, label: "Perform Chemical shift MRI if available or contrast-enhanced washout CT" }
                  ]
                }
              ]
            },
            {
              id: 60,
              label: "Testing Not Yet Performed",
              children: [
                {
                  id: 61,
                  label:
                    "1. Test serum renin/aldosterone ratio only if there is hypertension and or hyperkalemia\n" +
                    "2. Perform 1mg dexamethasone suppression test\n" +
                    "3. Consider testing for plasma-free metanephrines or 24-hour urinary fractionated metanephrines if symptoms of catecholamine excess"
                }
              ]
            }
          ]
        },
        {
          id: 62,
          label: "< 10",
          question: 'Is It Functional?',
          children: [
            {
              id: 63,
              label: "Yes",
              question: "What type of hyperfunctioning lesion is it?",
              children: [
                {
                  id: 64,
                  label: "Hyperaldosteronism",
                  question: "Perform lateralization using adrenal vein sampling followed by an adrenalectomy.",
                  children: [
                    {
                      id: 65,
                      label: "If unilateral secretion",
                      children: [
                        { id: 66, label: "Consider adrenalectomy" }
                      ]
                    },
                    {
                      id: 67,
                      label: "If bilateral secretion",
                      children: [
                        { id: 68, label: "Consider medical management" }
                      ]
                    }
                  ]
                },
                {
                  id: 69,
                  label: "Hypercortisolism",
                  children: [
                    { id: 70, label: "Adrenalectomy, MIS where feasible" }
                  ]
                },
                {
                  id: 71,
                  label: "Pheochromocytoma",
                  children: [
                    { id: 72, label: "Adrenalectomy, MIS where feasible. \n Perform alpha followed by beta blocking" }
                  ]
                }
              ]
            },
            {
              id: 73,
              label: "No",
              question: "Benign Non-Functional Adenoma\nWhat is the size?",
              children: [
                {
                  id: 74,
                  label: "< 4cm",
                  children: [
                    { id: 75, label: "No radiographic or hormonal follow-up" }
                  ]
                },
                {
                  id: 76,
                  label: "> 4cm",
                  children: [
                    { id: 77, label: "Repeat CT in 6–12 months" }
                  ]
                }
              ]
            },
            {
              id: 78,
              label: "Testing Not Yet Performed",
              children: [
                {
                  id: 79,
                  label:
                    "1. Test serum renin/aldosterone ratio only if there is hypertension and or hyperkalemia\n" +
                    "2. Perform 1mg dexamethasone suppression test\n" +
                    "3. Consider testing for plasma-free metanephrines or 24-hour urinary fractionated metanephrines if symptoms of catecholamine excess"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 80,
      label: "No",
      children: [
        { id: 81, label: "Perform non-contrast CT" }
      ]
    }
  ]
}





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
