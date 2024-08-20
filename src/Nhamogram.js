import { useEffect, useState } from "react";

const Nhamogram = () => {
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState();
  const [question, setQuestion] = useState('');

  const determineAnswer = () => {
    if (hu === false && suspected === 'Benign' && functional === false && size === false) {
      setAnswer('No Follow Up');
    } else if (hu === false && suspected === 'Benign' && functional === false && size === true) {
      setAnswer('Repeat CT in 6-12 months');
    } else if (suspected === 'Benign' && functional !== false) {
      setAnswer("Next");
    } else if (hu === true && suspected === 'Other') {
      setAnswer('Repeat imaging in 3-6 months vs. consider adrenalectomy');
    } else if (hu === true && suspected === 'Metastasis') {
      setAnswer('Consider biopsy or PET/CT');
    } else if (hu === true && suspected === 'ACC') {
      setAnswer('Adrenalectomy');
    } else {
      setAnswer("Error")
    }
    // HTN: hypertension; hypoK: hypokalemia
    
    if (management === "Hypercortisolism") {
      setAnswer('Measure plasma ACTH and Consider adrenalectomy with patients with cushings syndrome and select patients with mild autonomous cortisol secretion');
    } else if (management === "Pheochromocytoma") {
      setAnswer('Adrenalectomy, MIS where feasible');
    } else if (management === "Hyperaldosteronism") {
      setAnswer('Perform lateralization using adrenal vein sampling followed by an adrenalectomy.');
    }
  };

  const handleNext = () => {
    determineAnswer();
    setStep(step + 1);
    console.log(answer)
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-10 bg-gray-100">
      {step === 1 &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Hounsfield Units</h2>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hu"
                  value="<10 HU"
                  onChange={() => setOptions(false)}
                  className="mr-2"
                />
                Under 10 HU
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hu"
                  value=">10 HU"
                  onChange={() => setOptions(true)}
                  className="mr-2"
                />
                Over or Equal to 10 HU
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800  text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }
      {step === 2 &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Functionality</h2>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="functional"
                  value="Yes"
                  onChange={() => setOptions(true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="functional"
                  value="Indeterminate"
                  onChange={() => setOptions(true)}
                  className="mr-2"
                />
                Indeterminate
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="functional"
                  value="No"
                  onChange={() => setOptions(false)}
                  className="mr-2"
                />
                No
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800  text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 3 &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Size</h2>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="<4cm"
                  onChange={() => setOptions(false)}
                  className="mr-2"
                />
                Under 4cm
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="size"
                  value=">4cm"
                  onChange={() => setOptions(true)}
                  className="mr-2"
                />
                Over or Equal to 4cm
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 4 &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Second-line Imaging - Contrast-enhanced washout CT</h2>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="n/a"
                  onChange={() => {
                    setOptions('')
                    setOptions('')
                  }}
                  className="mr-2"
                />
                Not Applicable
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Benign"
                  onChange={() => {
                    setOptions('Benign')
                    setOptions('Benign')
                  }}
                  className="mr-2"
                />
                Relative washout ≥ 40% with absolute washout ≥ 60% (Benign)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Other"
                  onChange={() => {
                    setOptions('Other')
                    setOptions('Other')
                  }}
                  className="mr-2"
                />
                Relative washout ≤ 40% with absolute washout ≤ 60% (Suggestive of other)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Metastasis"
                  onChange={() => {
                    setOptions('Metastasis')
                    setOptions('Metastasis')

                  }}
                  className="mr-2"
                />
                Relative washout ≤40% with absolute washout ≤60% (Suggestive of metastasis with history of cancer)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="ACC"
                  onChange={() => {
                    setOptions('ACC')
                    setOptions('ACC')
                  }
                    
                  }
                  className="mr-2"
                />
                Relative washout ≤40% with absolute washout ≤60% (Suggestive of ACC)
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 5 &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Step 5: Second-line Imaging - Chemical shift MRI</h2>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="n/a"
                  onChange={() => setOptions(firstSuspected)}
                  className="mr-2"
                />
                Not Applicable
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Benign"
                  onChange={() => setOptions('Benign')}
                  className="mr-2"
                />
                Microscopic fat with homogenous signal intensity drop (Benign)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Other"
                  onChange={() => setOptions('Other')}
                  className="mr-2"
                />
                Heterogenous signal intensity dropout (Suggestive of other)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="Metastasis"
                  onChange={() => setOptions('Metastasis')}
                  className="mr-2"
                />
                Heterogenous signal intensity dropout (Suggestive of metastasis with history of cancer)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="suspected"
                  value="ACC"
                  onChange={() => setOptions('ACC')}
                  className="mr-2"
                />
                Heterogenous signal intensity dropout (Suggestive of ACC)
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 6 && answer !== "Next" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Based on your answers:</h1>
          <h1 className="text-xl text-gray-700">{answer}</h1>
          <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" onClick={() => window.location.reload()}>
            Continue
          </button>
        </div>
      }
      {step === 6 && answer === "Next" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Dealing with Functional/Indeterminate Lesions</h2>
          <h4 className="text-lg font-medium mb-4">Is there Pheochromocytoma?</h4>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="Pheochromocytoma"
                  onChange={() => setOptions('Pheochromocytoma')}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="No"
                  onChange={() => setManagement('')}
                  className="mr-2"
                />
                No
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }
      {step === 7 && answer === "Next" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Dealing with Functional/Indeterminate Lesions</h2>
          <h4 className="text-lg font-medium mb-4">Is there Hyperaldosteronism?</h4>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="Hyperaldosteronism"
                  onChange={() => setManagement('Hyperaldosteronism')}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="No"
                  onChange={() => setManagement('')}
                  className="mr-2"
                />
                No
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }
      {step === 8 && answer === "Next" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Dealing with Functional/Indeterminate Lesions</h2>
          <h4 className="text-lg font-medium mb-4">Is there Hypercortisolism?</h4>
          <form>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="Hypercortisolism"
                  onChange={() => setManagement('Hypercortisolism')}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="management"
                  value="No"
                  onChange={() => setManagement('')}
                  className="mr-2"
                />
                No
              </label>
            </div>
            <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      }
      {step > 6 && answer !== "Next" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Based on your answers:</h1>
          <h1 className="text-xl text-gray-700">{answer}</h1>
          <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" onClick={() => window.location.reload()}>
            Continue
          </button>
        </div>
      }
      {step === 9 && management === "" &&
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Based on your answers:</h1>
          <h1 className="text-xl text-gray-700">Consider Medical Management</h1>
          <button className="bg-gray-500 hover:bg-gray-800 text-white p-3 rounded-lg mt-6 w-full" onClick={() => window.location.reload()}>
            Continue
          </button>
        </div>
      }
    </div>
  );
}

export default Nhamogram;
