import React from "react";
export default function Menu() {
  // const [showOptions, setShowOptions] = useState(false);
  // const [status, setStatus] = useState(1);
  return (
    <Draggable>
      <div className="second-form" id="form2">
        <div className="form2Head" id="form2Head">
          Click and drag
        </div>
        {!showOptions && (
          <div>
            {(() => {
              switch (status) {
                case 1:
                  return (
                    <div>
                      <p className="formMessage">Select a title</p>
                      <p className="formContent">{title}</p>
                    </div>
                  );
                case 2:
                  return (
                    <div>
                      <p className="formMessage">Select a summary (optional)</p>
                      <p className="formContent">{summary}</p>
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <p className="formMessage">Select an image</p>
                      <img
                        src={image}
                        style={{ width: 100, height: 100 }}
                        alt="scraped"
                      ></img>
                    </div>
                  );
                case 4:
                  return (
                    <div>
                      <p className="formMessage">Select a link</p>
                      <p className="formContent">{link}</p>
                    </div>
                  );
                case 5:
                  return (
                    <div>
                      <h4>click SUBMIT to add your feed.</h4>
                    </div>
                  );
                default:
                  return null;
              }
            })()}
            <div className="action-buttons__container">
              {status < 6 && status > 1 && (
                <Button
                  size="small"
                  variant="contained"
                  onClick={changeStatusBack}
                >
                  Back
                </Button>
              )}
              {status < 5 && (
                <Button size="small" variant="contained" onClick={changeStatus}>
                  Next
                </Button>
              )}
              <Button size="small" variant="contained" onClick={submit}>
                Submit
              </Button>
              <Button size="small" variant="contained" onClick={deepSearch}>
                Not what you are looking for?
              </Button>
              <Button size="small" variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>
        )}
        {showOptions && (
          <div>
            <div>
              <div className="formMessage">
                Option {currentOption} out of {arrayOfOptions.length}
              </div>
              <div>
                {status !== 3 && <div>{arrayOfOptions[currentOption - 1]}</div>}
                {status === 3 && (
                  <img
                    src={arrayOfOptions[currentOption - 1]}
                    style={{ height: 100 }}
                    alt="scraped"
                  ></img>
                )}
              </div>
            </div>
            <Button size="small" variant="contained" onClick={previousOption}>
              Previous
            </Button>
            <Button size="small" variant="contained" onClick={selectOption}>
              Select
            </Button>
            <Button size="small" variant="contained" onClick={nextOption}>
              Next
            </Button>
          </div>
        )}
      </div>
    </Draggable>
  );
}
