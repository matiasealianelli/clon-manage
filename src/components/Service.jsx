import "/src/styles/Service.css";

export default function Service() {
  return (
    <>
      <section className="service" id="service">
        <div className="contLeftService">
          <h1 className="titleService">What´s different about Manage?</h1>
          <p className="descriptionService">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="contRightService">
          <div className="contService1">
            <div className="contNumberService">
              <p className="numberService">01</p>
              <h3 className="subTitleService">Track company-wide progress</h3>
            </div>
            <p className="textService">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="contService2">
            <div className="contNumberService paddingSubTitle">
              <p className="numberService">02</p>
              <h3 className="subTitleService">Advanced built-in reports</h3>
            </div>
            <p className="textService">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="contService3">
            <div className="contNumberService">
              <p className="numberService">03</p>
              <h3 className="subTitleService">
                Everything you need in one place
              </h3>
            </div>
            <p className="textService">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
