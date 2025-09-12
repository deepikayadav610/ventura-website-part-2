import React from "react";
import { Link } from "react-router-dom";
import "./H13.css";

export default function H13() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        {" "}
        <strong>H13 </strong> / AISI H13 / DIN 2344{" "}
      </h2>
      <p className="subtitle text-center">
        Premium Hot Work Tool Steel with high toughness & wear resistance.
      </p>
      {/* standards  */}
      <div className="standards-scroll-wrapper mb-4">
        <div className="standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>STANDARDS</strong>
                </td>
                <td>X40CrMoV5</td>
                <td>DB6</td>
                <td>H13</td>
                <td>DIN 2344</td>
                <td>AISI H13</td>
                <td>AFNOR Z40CDV5</td>
                <td>JIS SKD61</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5">
        <div className="overview-content">
          <p>
            SAE/AISI H13 is a high-performance tool steel that is comparable to
            DIN 1.2344, GB 4Cr5MoSiV1, and JIS SKD61. It has outstanding
            toughness, heat resistance, and hardenability due to the presence of
            chromium, molybdenum, and vanadium.
          </p>
          <h4>Important attributes:</h4>
          <ul>
            <li>
              High-temperature performance: Prevents thermal fatigue, hot
              cracking, and softening.
            </li>
            <li>
              Durability: combines high wear resistance, abrasion resistance,
              and shock resistance.
            </li>
            <li>
              Machinability and polishability: Easy machining and finishing due
              to uniform structure.
            </li>
            <li>
              ESR grade (H13 ESR): A refined, uniform steel with outstanding
              micro-cleanliness that is perfect for high-temperature and
              aluminum pressure die casting applications.
            </li>
            <li>
              100% ultrasonic testing in accordance with NDT standards ensures
              quality.
            </li>
          </ul>
          <p>
            Applications needing strength, heat resistance, toughness, and exact
            dimensional stability are best suited for H13 steel.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
            alt="DB6 Image"
            width={300}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="h13-composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="h13-chemical-composition">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C</td>
                  <td>0.35-0.45</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.90-1.20</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.30-0.50</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td> 0.03</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.004</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>4.90-5.40</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>1.20-1.75</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.90-1.20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h13-name-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Standards</th>
                  <th>Grades's Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>USA</td>
                  <td>AISI / SAE</td>
                  <td>H13</td>
                </tr>
                <tr>
                  <td>Europe</td>
                  <td>En</td>
                  <td>X40CrMoV5-1</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>X40CrMoV5-1</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>GB</td>
                  <td>4Cr5MoSiV1 </td>
                </tr>
                <tr>
                  <td>Japan </td>
                  <td>JIS</td>
                  <td>SKD61</td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>IS</td>
                  <td>XT35Cr5MoV1</td>
                </tr>
                <tr>
                  <td>R. of Korea</td>
                  <td>KS</td>
                  <td>STD 61</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>GOST</td>
                  <td>4Ch4VMFS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* size-range */}
      <section className="size-range">
        <h3>Size Range</h3>
        <table className="size-table">
          <thead>
            <tr>
              <th>Shape</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ROUNDS </td>
              <td>10 to 500 MM DIA</td>
            </tr>
            <tr>
              <td>FLATS </td>
              <td>
                Thickness: 20 - 400 MM MAX
                <br />
                Width: 40 - 700 MM MAX
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* process route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process Route</h3>
        <p className="text-muted text-center">
          Applicable for <strong>H13 / AISI H13 / DIN 2344</strong>
        </p>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD</div>
          <span className="arrow">→</span>
          <div className="step">ESR</div>
          <span className="arrow">→</span>
          <div className="step">FORGED</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS</div>
          <span className="arrow">→</span>
          <div className="step">OIL / AIR QUENCHED</div>
          <span className="arrow">→</span>
          <div className="step">DOUBLE TEMPERED</div>
          <span className="arrow">→</span>
          <div className="step">MACHINED TO SIZE</div>
        </div>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>Great toughness</li>
          <li>Thermal conductivity</li>
          <li>High hot-wear resistance</li>
          <li>Hot tensile strength</li>
          <li>Insusceptible for hot cracking (Hot Crack resistant)</li>
          <li>Can be water-cooled to a restricted degree</li>
          <li>High Hardenability</li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          This steel is especially used for ejector pins, tool holders and
          shrink work chucks. It is majorly widely utilized for manufacture of
          hot forging die & inserts, hot gripper dies, hot nut tools, hot header
          dies, brass forging and pressing dies, hot forging aluminium base
          dies, aluminium casting and extrusion dies, zinc die casting dies,
          extrusion mandrels, cores, die holder blocks, hot press dies, hot work
          punches, etc.
        </p>
      </section>

      {/* Thermal properties */}
      <section className="thermal-properties">
        <h2 className="thermal-section-title">Thermal Properties</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Coefficient of Thermal Expansion</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>10¯⁶ m / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-100</td>
                    <td>10.8</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>12.4</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>12.7</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>13.1</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>13.3</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>13.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Thermal Conductivity</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>W / (m*K) Annealed</th>
                    <th>W / (m*K) Quenched & Tempered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>27.1</td>
                    <td>25.4</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>30.4</td>
                    <td>27.7</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>33.2</td>
                    <td>30.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* heat treatment */}
      <section className="heat-treatment">
        <h2 className="section-title">Heat Treatment</h2>

        <div className="row">
          {/* Basic Heat Treatment Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Heat Treatment Steps</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Soft Annealing °C</th>
                    <td>760-810</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 240</td>
                  </tr>
                  <tr>
                    <th>Stress-Relief Annealing °C</th>
                    <td>approx. 610-660</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1030-1060</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Air, Oil, Salt Bath 500-550°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tempering Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Tempering (°C after quenching)</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Temp (°C)</th>
                    <th>HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>55</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>56</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>34</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* stocking partner */}
      <section className="stocking-partners py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>Europe</strong> and{" "}
            <strong>China</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/europe-flag.jpeg"
              alt="Europe Flag"
              className="flag-img mx-3"
            />
            <img
              src="/image/china-flag.png"
              alt="China Flag"
              className="flag-img mx-3"
            />
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability</h4>
          <p>
            <strong>Grades in Bold (e.g. H13)</strong> are kept in stock and supplied on a
            regular basis. <br />
            For other grades, we accept <strong>advance orders</strong> on
            MOQ basis as per size requirements.
          </p>
          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              We also source forgings as per the required grades, size, and
              supply specifications. Additionally, we have an in-house cutting
              facility to meet customized requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        {/* <span>MOQ: 200 kg | Price: ₹135/kg*</span> */}
      </div>
    </div>
  );
}
