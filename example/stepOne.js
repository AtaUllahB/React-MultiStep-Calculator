import React, { Component } from "react";
import logo from "./pic.gif";
import DonutChart from "react-donut-chart";
import { BarChart } from "react-charts-d3";
import Chart from "react-google-charts";
import axios from "axios";
import CountUp from "react-countup";
import { MdMarkunreadMailbox } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { GiTakeMyMoney, GiFamilyHouse, GiMailbox } from "react-icons/gi";
import { IoIosHome, IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

class MortgaeCalculate extends Component {
  state = {
    loanType: "",
    homeDesc: "",
    propUse: "",
    loanTerm: "",
    firstTime: "",
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    apidata: [
      {
        program: "",
        rate: "",
        apr: "",
        points: "",
        assumptions: "",
      },
      {
        program: "",
        rate: "",
        apr: "",
        points: "",
        assumptions: "",
      },
      {
        program: "",
        price: "",
        rate: "",
        margin: "",
        lockPeriod: "",
        apr: "",
      },
    ],
  };

  test(event) {
    // async test = (event) => {
    event.preventDefault();
    var data = {
      userId: "REVM",
      scenarios: {
        FHA_REFI_15: {
          loanTypeKeyword: "FHA/TITLE II",
          optionKeyword: "203B",
          amortizationType: 102,
          amortizationTerm: 15,
          loanTerm: 180,
          propertyTypeKeyword: "SFR",
          occupancy: 1,
          baseAmount: 510400,
          loanAmount: 510400,
          ltv: 50,
          cltv: 50,
          nonTradCredit: false,
          fico: 740,
          interestOnly: false,
          lockPeriod: 45,
          originationTypeCode: "A10",
          leadSource: "INBOUNDNONPC",
          loanPurposeKeyword: "FULL DOCS REFI",
          expectedProduct: "SO11S01F00",
        },
        VA_REFI_15: {
          loanTypeKeyword: "VA",
          amortizationType: 102,
          amortizationTerm: 15,
          loanTerm: 180,
          propertyTypeKeyword: "SFR",
          occupancy: 1,
          baseAmount: 510400,
          loanAmount: 510400,
          ltv: 50,
          cltv: 50,
          nonTradCredit: false,
          fico: 740,
          interestOnly: false,
          lockPeriod: 45,
          originationTypeCode: "A10",
          leadSource: "INBOUNDNONPC",
          loanPurposeKeyword: "CASH OUT REFI",
        },
        CONV_REFI_15: {
          loanTypeKeyword: "CONVENTIONAL",
          amortizationType: 102,
          amortizationTerm: 15,
          loanTerm: 180,
          propertyTypeKeyword: "SFR",
          occupancy: 1,
          baseAmount: 510400,
          loanAmount: 510400,
          ltv: 50,
          cltv: 50,
          nonTradCredit: false,
          fico: 740,
          escrow: false,
          interestOnly: false,
          lockPeriod: 45,
          originationTypeCode: "A10",
          leadSource: "INBOUNDPC",
          loanPurposeKeyword: "LIMITED CO",
          expectedProduct: "SO22S00F00",
        },
      },
    };
    
    axios
      .post("https://pricing.reversesoftonline.com/SunsoftAPI/public/price-scenario", { data }) //CHANGE API LINK
      .then((res) => {
        this.setState({ apidata: res });
        this.forceUpdate();
         var next_fs = $("#sup");
        next_fs.show();
        var current_fs = $("#secc");
        current_fs.hide();
        var pg = $("#progressbar");
        pg.hide()
        //     console.log(res);
        //     console.log(res.data);
        // window.location = "/results" //This line of code will redirect you once the submission is succeed
      })
      .catch(error => {
    console.log(error.response)
      });
  }

  renderTableData() {
    return this.state.apidata.map((student, index) => {
      const { program, rate, apr, points, assumptions } = student; //destructuring
      return (
        <tr key={program}>
          <td>{program}</td>
          <td>{rate}</td>
          <td>{apr}</td>
          <td>{points}</td>
          <td>{assumptions}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.apidata[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <ul id="progressbar">
          <li className="active">Type of Loan</li>
          <li>Home Description</li>
          <li>Property Use</li>
          <li>Loan Term</li>
          <li>Home-Buyer</li>
        </ul>
        <form id="msform">
          <fieldset>
            <img className="imm" src={logo}></img>
            <h3 className="fs-subtitle">Type of Loan</h3>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanType: "HomeRefinance",
                  step1: "Home Refinance",
                }); //AASIGN VARIABLE ID HERE TO 'loanType'
                 $("#stepp1").show();
              }}
            >
              <div className="iconn">
                {" "}
                <RiExchangeDollarLine size="7rem" />
              </div>
              <p className="pp">
                Home
                <br />
                Refinance
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanType: "HomePurchase",
                  step1: "Home Purchase",
                }); //AASIGN VARIABLE ID HERE TO 'loanType'
                 $("#stepp1").show();
              }}
            >
              <div className="iconn">
                <IoIosHome size="7rem" />
              </div>
              <p className="pp">
                Home
                <br />
                Purchase
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanType: "CashOutRefinance",
                  step1: "Cash-Out Refinance",
                }); //AASIGN VARIABLE ID HERE TO 'loanType'
                 $("#stepp1").show();
              }}
            >
              <div className="iconn">
                {" "}
                <GiTakeMyMoney size="7rem" />
              </div>
              <p className="pp">
                Cash-Out
                <br />
                Refinance
              </p>
            </div>
            <br />
            <br />
            <br />
            <br /> <p className="final">{this.state.step1}</p>
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              hidden
              id="stepp1"
            />
          </fieldset>
          <fieldset>
            <img className="imm" src={logo}></img>
            <h3 className="fs-subtitle">Home Description</h3>
            <br />
            <br />
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  homeDesc: "SingleFamily",
                  step2: "Single Family",
                }); //AASIGN VARIABLE ID HERE TO 'homeDesc'
                 $("#stepp2").show();
              }}
            >
              <div className="iconn">
                <GoHome size="7rem" />
              </div>
              <p className="pp">
                Single
                <br />
                Family
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  homeDesc: "MultiFamily",
                  step2: "Multi Family",
                }); //AASIGN VARIABLE ID HERE TO 'homeDesc'
                 $("#stepp2").show();
              }}
            >
              <div className="iconn">
                <GiFamilyHouse size="7rem" />
              </div>
              <p className="pp">
                Multi
                <br />
                Family
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({ homeDesc: "Condo", step2: "Condominium" }); //AASIGN VARIABLE ID HERE TO 'homeDesc'
                 $("#stepp2").show();
              }}
            >
              <div className="iconn">
                <FaRegBuilding size="7rem" />
              </div>
              <p className="pp">Condominium</p>
              <br />
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({ homeDesc: "TownHouse", step2: "Town House" }); //AASIGN VARIABLE ID HERE TO 'homeDesc'
                 $("#stepp2").show();
              }}
            >
              <div className="iconn">
                <BsBuilding size="7rem" />
              </div>
              <p className="pp">TownHouse</p>
              <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className="final">{this.state.step2}</p>
            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
            />
            <input
            id="stepp2"
              type="button"
              name="next"
              className="next action-button"
              hidden
              value="Next"
            />
          </fieldset>
          <fieldset>
            <img className="imm" src={logo}></img>
            <h3 className="fs-subtitle">Property Use</h3>
            <br />
            <br />
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  propUse: "Primary",
                  step3: "Primary Residence",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                 $("#stepp3").show();
              }}
            >
              <div className="iconn">
                <GiMailbox size="7rem" />
              </div>
              <p className="pp">
                Primary
                <br />
                Residence
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  propUse: "Secondary",
                  step3: "Secondary Home",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                 $("#stepp3").show();
              }}
            >
              <div className="iconn">
                <IoIosHome size="7rem" />
              </div>
              <p className="pp">
                Secondary
                <br />
                Home
              </p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  propUse: "Investment",
                  step3: "Investment Property",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                 $("#stepp3").show();
              }}
            >
              <div className="iconn">
                <GiTakeMyMoney size="7rem" />
              </div>
              <p className="pp">
                Investment
                <br />
                Property
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className="final">{this.state.step3}</p>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
            />
            <input
            id="stepp3"
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              hidden
            />
          </fieldset>











          <fieldset>
            <img className="imm" src={logo}></img>
            <h3 className="fs-subtitle">How Long of a term?</h3>
            <br />
            <br />
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanTerm: "30",
                  step4: "30-YEAR FIXED",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                 $("#stepp4").show();
              }}
            >
              <div className="iconn">
                <div className="looo">30-YEAR FIXED</div>
              </div>
              {/* <p className="pp">
                Primary
                <br />
                Residence
              </p> */}
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanTerm: "20",
                  step4: "20-YEAR FIXED",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                 $("#stepp4").show();
              }}
            >
              <div className="iconn">
                <div className="looo">20-YEAR FIXED</div>
              </div>
              {/* <p className="pp">
                Secondary
                <br />
                Home
              </p> */}
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanTerm: "15",
                  step4: "15-YEAR FIXED",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                ;
                $("#stepp4").show(); 
              }}
            >
              <div className="iconn">
                <div className="looo">15-YEAR FIXED</div>
              </div>
              {/* <p className="pp">
                Investment
                <br />
                Property
              </p> */}
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanTerm: "10",
                  step4: "10-YEAR FIXED",
                }); //AASIGN VARIABLE ID HERE TO 'propUse'
                $("#stepp4").show(); 
              }}
            >
              <div className="iconn">
                <div className="looo">10-YEAR FIXED</div>
              </div>
              {/* <p className="pp">
                Primary
                <br />
                Residence
              </p> */}
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({
                  loanTerm: "all",
                  step4: "See All",
                });
                $("#stepp4").show(); //AASIGN VARIABLE ID HERE TO 'propUse'
              }}
            >
              <div className="iconn">
                <div className="looo">See ALL</div>
              </div>
              {/* <p className="pp">
                Primary
                <br />
                Residence
              </p> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className="final">{this.state.step4}</p>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
            />
            <input
              id="stepp4"
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              hidden
            />
          </fieldset>












          <fieldset id="secc">
            <img className="imm" src={logo}></img>
            <h3 className="fs-subtitle">Are you a first-time home buyer?</h3>
            <br />
            <br />
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({ firstTime: "yes", step5: "Yes" }); //AASIGN VARIABLE ID HERE TO 'firstTime'
                $("#subb").show();
              }}
            >
              <div className="iconn">
                <AiFillCheckCircle size="7rem" />
              </div>
              <p className="pp">Yes</p>
            </div>
            <div
              className="reicon"
              onClick={(e) => {
                this.setState({ firstTime: "no", step5: "No" }); //AASIGN VARIABLE ID HERE TO 'firstTime'
                 $("#subb").show();
              }}
            >
              <div className="iconn">
                <IoIosCloseCircleOutline size="7rem" />
              </div>
              <p className="pp">No</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className="final">{this.state.step5}</p>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
            />
            <input
              className=""
              type="submit"
              name="submit"
              className="submit action-button"
              value="Submit"
              onClick={this.test}
              hidden
              id="subb"
            />
            {/* <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          /> */}
          </fieldset>
          {/* <fieldset id="sup">
          <img className="immm" src={logo}></img>
          <div>
            <h1 id="title">Results</h1>
            <table id="apidata">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
              </tbody>
            </table>
          </div>
        </fieldset> */}
        </form>
        <div id="sup">
          <h1 id="title">Results</h1>
          <br />
          <table id="apidata">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MortgaeCalculate;
