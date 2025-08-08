import React from "react";
import { Link } from "react-router-dom";
import "./H13.css";

export default function H13() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> H13 / 2344</h2>
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
            Ventura Alloy and Steels supplies and stocks H13 steel in flat,
            square and round bar. We provide steel in all sizes as your
            requirements. Consult our team who will assist you for any query
            related to H13 steel.
          </p>
          <p>
            SAE/ AISI H13 tool steel equivalent with JIS SKD61, GB 4Cr5MoSiV1
            and DIN 1.2344 Tool Steel. AISI H13 steel consists of chromium,
            molybdenum and vanadium and is known for its high hardenability and
            great toughness.
          </p>
          <p>
            The molybdenum and vanadium act as strengthening agents while the
            chromium content helps the AISI H13 steel to withstand softening
            when used at high temperatures. It also combines shock and abrasion
            resistance, has good red hardness, can resist rapid cooling and
            withstand premature heat checking.
          </p>
          <p>
            H13 Tool Steel has high hot-wear resistance abilities along with
            great strength, heat conductivity and invulnerability to hot
            cracking. It has good resistance to abrasion at each low and high
            temperature. It displays high level of toughness and ductility. The
            H13 steel has Uniform and high level of machinability and polish
            ability. It has high-temperature strength and resistance to thermal
            fatigue, glorious through-hardening properties and shows very
            limited distortion during hardening.
          </p>
          <p>H3 ESR is the most purified material with the conventional VD route. The nature of material increase the strength, exceptionally increase the micro-cleanness level. H13 ESR tool steel is most refined, has greater homogeneity and an exceptionally fine structure, resulting in improved machinability, polishing & high temperature tensile strength. Exceptionally suggest the use of AISI-H13 ESR grade for Aluminium Pressure Die Casting and other part subjected to high working temperatures and high weight quality. H13 steel is completely ultrasonic examined with 100% positive outcomes according to NDT standards.</p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
            alt="DB6 Image"
            width={400}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="chemical-composition">
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

          <div className="name-table">
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

      {/* process routes */}
      <section className="process-route">
        <h3>Process Route</h3>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD</div>
          <span className="arrow">→</span>
          <div className="step">UPSET</div>
          <span className="arrow">→</span>
          <div className="step">FORGED</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
          <span className="arrow">→</span>
          <div className="step">OIL QUENCHED</div>
          <span className="arrow">→</span>
          <div className="step">DOUBLE TEMPERED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
        </div>
      </section>

    {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <p>
          The exceptional hot work pre-solidified tool steel has great toughness
          and high wear resistance. DB6 die steel is generally provided in hard,
          quenched, tempered, and annealed condition, and in strengthened
          condition in exceptional cases. Normally its working hardness is
          <strong> 360–430 BHN</strong>. This steel grade is the updated type of
          DIN 2713 for higher efficiency and performance.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Dies for specially drop and close die forgings for hammers &
          mechanical presses, die moulds, shoe blocks, die holder, piston rods,
          bolster, cranks, cassettes, plastic moulds, shearing blades, tools,
          etc.
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
                    <td>12.1</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>13.1</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>13.2</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>13.5</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>14.3</td>
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
                    <th>W / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>35.0</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>39.0</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>36.0</td>
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
                    <td>650-710</td>
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
                    <th>Hardening °C</th>
                    <td>840-880 / 860-900</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil / Air</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>57 / 55</td>
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
                    <th>In Oil – HRC</th>
                    <th>In Air – HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>56</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>54</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>52</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>49</td>
                    <td>47</td>
                  </tr>
                  <tr>
                    <td>450</td>
                    <td>47</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>46</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>43</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>38</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>34</td>
                    <td>32</td>
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
            We keep the materials from <strong>Germany</strong>,
            <strong> Japan</strong> and <strong>China</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/german-flag.jpg"
              alt="Germany"
              className="flag-img mx-3"
            />
            <img
              src="/image/japan-flag.jpeg"
              alt="Japan"
              className="flag-img mx-3"
            />
            <img
              src="/image/china-flag.png"
              alt="China"
              className="flag-img mx-3"
            />
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
