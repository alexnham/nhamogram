import { useEffect, useState } from "react";

const Nhamogram = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [answer, setAnswer] = useState("");
  const [ancillary, setAncillary] = useState(false)

  useEffect(() => {
    switch (true) {
      case count === 0:
      setAnswer("No Follow Up")
      break;
      case count === 10:
        setAnswer("Repeat CT in 6-12 months")
        break;
      case count >= 20 && count <= 40:
        setAnswer("Repeat imaging in 3-6 months vs. consider adrenalectomy")
        break;
      case count >= 50 && count <= 70:
        setAnswer("Consider biopsy or PET/CT")
        break;
      case count >= 80:
        // Handle count 80 or more
        setAnswer("Adrenalectomy")
        break;
      default:
        break;
    }
  },[count])

  const handleNext = (amount) => () => {
    setCount(prevCount => prevCount + amount)
    setIncrement(0)
    setStep(step + 1);
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
                    onChange={() => setIncrement(0)}
                  />
                  Under 10 HU
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value=">10 HU   "
                    onChange={() => setIncrement(10)}
                  />
                  Over or Equal to 10 HU
                </label>
              </div>
              
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={handleNext(increment)}>
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
                    onChange={() => setIncrement(80)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Indeterminate"
                    onChange={() => setAncillary(true)}
                  />
                  Indeterminate
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="No"
                    onChange={() => setIncrement(0)}
                  />
                  No
                </label>
              </div>

            </div>


            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={handleNext(increment)}>
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
                    onChange={() => setIncrement(0)}
                  />
                  Under 4cm
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value=">10 HU   "
                    onChange={() => setIncrement(10)}
                  />
                  Over or Equal to 4cm
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={handleNext(increment)}>
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
                    onChange={() => setIncrement(0)}
                  />
                  Not Applicable
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Benign"
                    onChange={() => setIncrement(0)}
                  />
                  Relative washout ≥ 40% with absolute washout ≥ 60% (Benign)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Suggestive of other"
                    onChange={() => setIncrement(20)}
                  />
                  Relative washout ≤ 40% with absolute washout ≤ 60% (Suggestive of other)                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Cancer History"
                    onChange={() => setIncrement(50)}
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
                    onChange={() => setIncrement(80)}
                  />
                  Relative washout ≤40% with absolute washout ≤60% (Suggestive of ACC)
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={handleNext(increment)}>
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
                    onChange={() => setIncrement(0)}
                  />
                  Not Applicable
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Benign"
                    onChange={() => setIncrement(0)}
                  />
                  Microscopic fat with homogenous signal intensity drop (Benign)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Suggestive of other"
                    onChange={() => setIncrement(20)}
                  />
                  Heterogenous signal intensity dropout (Suggestive of other)</label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Cancer History"
                    onChange={() => setIncrement(50)}
                  />
                  Heterogenous signal intensity dropout (Suggestive of metastasis with history of cancer)
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ACC  "
                    onChange={() => setIncrement(80)}
                  />
                  Heterogenous signal intensity dropout (Suggestive of ACC)
                </label>
              </div>
            </div>
            <button className="bg-slate-200 border p-3 rounded-lg mt-10 " type="button" onClick={handleNext(increment)}>
              Next
            </button>
          </form>
        </div>
      }

      {step === 6 &&
        <div className="h-screen w-screen justify-center items-center">
          <h1></h1>
          <h1>{answer}</h1>
          {ancillary && <h1>Ancillary tests recommended</h1>}
        </div>
      }
    </div>

  );
}

export default Nhamogram;