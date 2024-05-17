import { useEffect, useState } from "react";

const Nhamogram = () => {
  const [step, setStep] = useState(1)
  const [hu, setHu] = useState(false);
  const [suspected, setSuspected] = useState('');
  const [functional, setFunctional] = useState(false);
  const [size, setSize] = useState(false);
  const [answer, setAnswer] = useState('');

  const determineAnswer = () => {
    if (hu === false && suspected === 'Benign' && functional === false && size === false) {
      setAnswer('No Follow Up');
    } else if (hu === false && suspected === 'Benign' && functional === false && size === true) {
      setAnswer('Repeat CT in 6-12 months');
    } else if (suspected === 'Benign' && functional === true) {
      setAnswer('Figure 2');
    } else if (hu === true && suspected === 'Other') {
      setAnswer('Repeat imaging in 3-6 months vs. consider adrenalectomy');
    } else if (hu === true && suspected === 'Metastasis') {
      setAnswer('Consider biopsy or PET/CT');
    } else if (hu === true && suspected === 'ACC') {
      setAnswer('Adrenalectomy');
    }
  };

  const handleNext = () => {
    determineAnswer()
    setStep(step + 1)
  };

  return (
    <div className="h-screen w-screen flex  pt-32 px-10  pb-32">
      {step === 1 &&
        <div>
          <h2>Step 1: Hounsfield Units</h2>
          <form>
            <div>
              <div className="flex flex-col gap-5 pt-10">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="<10 HU"
                    onChange={() => setHu(false)}
                  />
                  Under 10 HU
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value=">10 HU   "
                    onChange={() => setHu(true)}
                  />
                  Over or Equal to 10 HU
                </label>
              </div>
              
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={() => handleNext()}>
              Next
            </button>
          </form>
        </div>
      }
      {step === 2 &&
        <div>
          <h2>Step 2: Functionality</h2>
          <form>
            <div>
              <div className="flex flex-col gap-5 pt-10">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Yes"
                    onChange={() => {
                      setFunctional(true)
                    }}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Indeterminate"
                    onChange={() =>  {
                      setFunctional(true)
                    }
                    }

                  />
                  Indeterminate
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="No"
                    onChange={() => setFunctional(false)}
                  />
                  No
                </label>
              </div>

            </div>


            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={() => handleNext()}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 3 &&
        <div>
          <h2>Step 3: Size</h2>
          <form>
            <div>
              <div className="flex flex-col gap-5 pt-10">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="<4cm"
                    onChange={() => setSize(false)}
                  />
                  Under 4cm
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value=">10 HU   "
                    onChange={() => setSize(false)}
                  />
                  Over or Equal to 4cm
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={() => handleNext()}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 4 &&
        <div>
          <h2>Step 4: Second-line Imaging - Contrast-enhanced washout CT</h2>
          <form>
            <div>
              <div className="flex flex-col gap-5 pt-10">
              <label>
                  <input
                    type="radio"
                    name="gender"
                    value="n/a"
                    onChange={() => setSuspected('Benign')}
                  />
                  Not Applicable
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Benign"
                    onChange={() => setSuspected('Benign')}
                  />
                  Relative washout ≥ 40% with absolute washout ≥ 60% (Benign)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Suggestive of other"
                    onChange={() => setSuspected('Other')}
                  />
                  Relative washout ≤ 40% with absolute washout ≤ 60% (Suggestive of other)                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Cancer History"
                    onChange={() => setSuspected('Metastasis')}
                  />
                  Relative washout ≤40% with absolute washout ≤60% (Suggestive of
                  50 points
                  metastasis with history of cancer)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ACC  "
                    onChange={() => setSuspected('ACC')}
                  />
                  Relative washout ≤40% with absolute washout ≤60% (Suggestive of ACC)
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={() => handleNext()}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 5 &&
        <div>
          <h2>Step 5: Second-line Imaging - Chemical shift MRI</h2>
          <form>
            <div>
              <div className="flex flex-col gap-5 pt-10">
              <label>
                  <input
                    type="radio"
                    name="gender"
                    value="n/a"
                    onChange={() => setSuspected('Benign')}
                  />
                  Not Applicable
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Benign"
                    onChange={() => setSuspected('Benign')}
                  />
                  Microscopic fat with homogenous signal intensity drop (Benign)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Suggestive of other"
                    onChange={() => setSuspected('Other')}
                  />
                  Heterogenous signal intensity dropout (Suggestive of other)</label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Cancer History"
                    onChange={() => setSuspected('Metastasis')}
                  />
                  Heterogenous signal intensity dropout (Suggestive of metastasis with history of cancer)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ACC  "
                    onChange={() => setSuspected('ACC')}
                  />
                  Heterogenous signal intensity dropout (Suggestive of ACC)
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={() => handleNext()}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 6 &&
        <div className="h-screen w-screen justify-center items-center">
          <h1>Based on your answers:</h1>
          <h1>{answer}</h1>
          <button className="border bg-slate-200 px-5" onClick={() => window.location.reload()}>Continue</button>
        </div>
      }
    </div>

  );
}

export default Nhamogram;