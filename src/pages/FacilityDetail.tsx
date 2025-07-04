import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FacilityDetail = () => {
  const { facilityId } = useParams();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const facilityData: Record<string, any> = {
    'field-investigation': {
      title: "Field Investigation",
      icon: "🔍",
      color: "from-vge-blue-light to-vge-blue-sky",
      description: "Our field investigation services provide comprehensive site characterization using state-of-the-art equipment and methodologies. We deliver accurate, reliable data essential for informed decision-making in geotechnical projects.",
      subcategories: [
        {
          name: "Geological",
          shortDescription: "Geological field investigations provide essential information about subsurface conditions at construction sites. These investigations help engineers understand geological and geotechnical properties vital for safe and stable structure design.",
          fullDescription: "Geological field investigations are a critical component of geotechnical engineering, as they provide essential information about the subsurface conditions at a construction site. These investigations help engineers and geologists understand the geological and geotechnical properties of the site, which is vital for designing and constructing structures that are safe and stable. Here are the key aspects of geological field investigations in geotechnical engineering:\n\nSite Reconnaissance: The process typically begins with a site reconnaissance, where engineers and geologists visit the site to get a general understanding of the terrain, access, and any potential geological hazards. This initial assessment helps in planning the more detailed investigations.\n\nGeological Mapping: Geologists create geological maps of the area, identifying the types of rocks, soils, and formations present. This information helps in understanding the geological history and context of the site.\n\nGeophysical Surveys: Geophysical surveys use various techniques, such as seismic refraction, electrical resistivity, and ground-penetrating radar, to investigate subsurface conditions and identify geological features, such as bedrock, water tables, and potential anomalies.\n\nSite Characterization: The culmination of these investigations results in a detailed site characterization, which includes a 3D model of subsurface conditions. This characterization is essential for engineers to design foundations, excavations, and other construction elements that consider the site's unique geological and geotechnical properties.\n\nRisk Assessment: Geological field investigations also help in identifying potential geohazards, such as landslides, subsidence, and liquefaction, which can impact the safety and stability of structures. Engineers can then develop strategies to mitigate these risks.\n\nEnvironmental Considerations: Field investigations may also include assessments of environmental impacts, such as soil contamination, which can affect the design and construction of facilities.\n\nGeological and Geotechnical Reports: Based on the data collected during field investigations, geologists and geotechnical engineers prepare comprehensive reports. These reports include geological descriptions, soil profiles, laboratory test results, and recommendations for foundation design, slope stability, and other geotechnical considerations.\n\nIn summary, geological field investigations play a crucial role in geotechnical engineering by providing critical data and insights that inform the design and construction of infrastructure projects. These investigations help ensure that structures are built safely and are capable of withstanding the unique geological challenges of each site.",
          features: ["Site Reconnaissance", "Geological Mapping", "Geophysical Surveys", "Site Characterization", "Risk Assessment", "Environmental Considerations"]
        },
        {
          name: "Geophysical",
          shortDescription: "Geophysical field investigations assess subsurface conditions without extensive drilling or excavation. These investigations employ various geophysical methods for site characterization, foundation design, and risk assessment.",
          fullDescription: "Geophysical field investigations are an integral part of geotechnical engineering and are used to assess subsurface conditions and properties without the need for extensive drilling or excavation. These investigations employ various geophysical methods to provide valuable information for site characterization, foundation design, and risk assessment. Here are some of the key aspects of geophysical field investigations in geotechnical engineering:\n\nSite Characterization: Geophysical surveys are conducted to gain insights into the subsurface geological and geotechnical conditions. This includes identifying the depth and nature of soil and rock layers, detecting underground anomalies, and mapping geological features.\n\nSoil Sampling: Soil sampling involves taking soil samples from various locations and depths on the site. These samples are then analyzed in a laboratory to determine their physical and chemical properties, such as grain size, moisture content, density, and shear strength.\n\nBoreholes and Test Pits: Boreholes are drilled into the ground to collect samples at specific depths and to log geological and geotechnical information. Test pits are excavations made at the surface to examine soil and rock conditions.\n\nRock Core Sampling: In areas with significant rock formations, rock core samples are taken to assess the strength, durability, and weathering characteristics of the rock.\n\nGeotechnical Instrumentation: Geotechnical instrumentation, such as inclinometers, settlement gauges, and strain gauges, may be installed to monitor ground movements and other geotechnical parameters during and after construction.\n\nGround-Penetrating Radar (GPR): GPR uses electromagnetic waves to create subsurface images. It is effective for locating buried objects, utilities, and voids, as well as delineating soil stratigraphy.\n\nData Interpretation: Geophysical data is collected and processed to create subsurface models. These models can provide information on layer thickness, depth to bedrock, and the presence of any anomalies or geohazards.\n\nComplementary to Boreholes: Geophysical surveys are often used in conjunction with traditional borehole data. The geophysical results can guide the selection of drilling locations and depths, optimizing the efficiency of borehole investigations.\n\nIn summary, geophysical field investigations are a valuable tool in geotechnical engineering. They help engineers and geologists assess subsurface conditions, identify geological features, and make informed decisions about foundation design, construction methods, and risk mitigation. These non-invasive methods contribute to safer and more cost-effective construction and development projects.",
          features: ["Site Characterization", "Soil Sampling", "Boreholes and Test Pits", "Rock Core Sampling", "Geotechnical Instrumentation", "Ground-Penetrating Radar (GPR)"]
        },
        {
          name: "Geotechnical",
          shortDescription: "Geotechnical field investigations focus on collecting data about subsurface conditions and geological properties. These investigations are critical for informed decisions in civil engineering project design and construction.",
          fullDescription: "Geotechnical field investigations are a fundamental aspect of geotechnical engineering, focusing on the collection of data and information about the subsurface conditions and geological properties of a site. These investigations are critical for making informed decisions in the design and construction of civil engineering projects, including buildings, bridges, dams, roads, and tunnels. Here are the key components of geotechnical field investigations:\n\nSite Reconnaissance: Engineers and geologists conduct an initial site visit to assess the general conditions, accessibility, and potential geological hazards of the area. This preliminary assessment helps in planning more detailed investigations.\n\nGeological Mapping: Geologists create geological maps to identify rock formations, soil types, and any other relevant geological features. This information provides insights into the site's geological history and context.\n\nSubsurface Exploration: Various techniques are employed to investigate the subsurface conditions:\n\nBoreholes: Drilling boreholes allows for the collection of soil and rock samples from different depths. These samples are analyzed in a laboratory to determine their physical and engineering properties.\n\nTest Pits: Excavated test pits provide visual and physical examination of soil and rock layers at shallow depths.\n\nCone Penetration Testing (CPT): CPT involves pushing a cone-shaped penetrometer into the ground to measure soil resistance and provide data on soil properties at various depths.\n\nSounding Tests: Dynamic sounding tests, such as the Standard Penetration Test (SPT), involve driving a split-barrel sampler into the ground to assess soil density and penetration resistance.\n\nIn-situ Testing: In-situ tests are performed to assess soil and rock properties without removing samples from the ground:\n\nIn summary, geotechnical field investigations are a critical part of geotechnical engineering, providing essential data and insights for safe and efficient construction and infrastructure development. These investigations help ensure that engineering projects are designed and executed with a thorough understanding of the site's geological and geotechnical conditions.",
          features: ["Site Reconnaissance", "Geological Mapping", "Subsurface Exploration", "Boreholes", "Test Pits", "Cone Penetration Testing (CPT)"]
        },
        {
          name: "Seismic",
          shortDescription: "Seismic field investigations assess seismic hazard and ground response at sites. These investigations provide essential information for designing earthquake-resistant structures, foundations, and engineering projects.",
          fullDescription: "Seismic field investigations in geotechnical engineering are crucial for assessing the seismic hazard and ground response at a site. These investigations provide essential information for the design of structures, foundations, and other engineering projects in earthquake-prone areas. Here are the key aspects of seismic field investigations in geotechnical engineering:\n\nSite Characterization: Seismic field investigations begin with a comprehensive site characterization to understand the geological and geotechnical conditions. This includes identifying soil types, rock layers, groundwater levels, and any potential geological hazards that may affect ground shaking.\n\nSeismic Hazard Assessment: Engineers assess the seismic hazard at the site by studying historical earthquake records, regional tectonics, and seismic source characteristics. This information is used to estimate the maximum ground shaking that the site may experience during a seismic event.\n\nGround Motion Measurements: Seismic sensors, such as accelerometers and seismometers, are installed at various locations across the site to record ground motions during earthquakes. These sensors capture data on ground acceleration, velocity, and displacement.\n\nArray Installations: Seismic arrays may be deployed to collect data simultaneously at multiple locations within the site. Array installations help in understanding the spatial variation of ground motion and provide valuable information for structural design.\n\nDownhole Measurements: Downhole seismometers and accelerometers are placed in boreholes to measure ground motion at various depths below the ground surface. This allows engineers to assess the amplification and damping of seismic waves as they travel through different soil and rock layers.\n\nSurface Wave Testing: Surface wave methods, such as seismic refraction and seismic surface wave analysis (e.g., SASW, MASW), are used to determine the shear wave velocity profiles of subsurface materials. These profiles are essential for estimating ground response characteristics.\n\nCone Penetration Testing (CPT) and Seismic CPT: CPT is often combined with seismic CPT to measure soil properties and assess soil liquefaction potential. Seismic CPT provides additional data on shear wave velocity profiles.\n\nCross-Hole and Downhole Seismic Testing: Cross-hole and downhole seismic tests involve drilling boreholes and deploying geophones and seismic sources at different depths. These tests provide detailed information on seismic wave velocities and material properties at depth.\n\nData Analysis: Seismic data collected from the field investigations are analyzed to determine the site-specific ground response spectra, which are essential for structural design. Engineers use software and modeling techniques to process and interpret the data.\n\nSite-Specific Response Analysis: Engineers perform site-specific response analyses to estimate how the site will behave during different levels of seismic shaking. This analysis helps in designing appropriate foundations and ensuring the safety of structures.\n\nLiquefaction Potential Assessment: Seismic investigations also assess the potential for soil liquefaction, a phenomenon in which saturated granular soils lose strength and become temporarily unstable during an earthquake.\n\nSeismic Design Parameters: The results of seismic field investigations provide crucial input parameters for seismic design codes and standards. These parameters include spectral accelerations, response spectra, and damping ratios.\n\nMitigation Measures: Based on the findings from seismic field investigations, engineers can recommend mitigation measures, such as foundation design modifications, ground improvement techniques, or seismic retrofitting, to enhance the seismic resilience of structures.\n\nIn summary, seismic field investigations in geotechnical engineering are essential for assessing the seismic hazard, characterizing site-specific ground conditions, and informing the design and construction of earthquake-resistant structures. These investigations help ensure the safety and stability of infrastructure in regions prone to seismic activity.",
          features: ["Site Characterization", "Seismic Hazard Assessment", "Ground Motion Measurements", "Array Installations", "Downhole Measurements", "Surface Wave Testing"]
        }
      ]
    },
    'field-monitoring': {
      title: "Field Monitoring",
      icon: "📊",
      color: "from-vge-orange to-vge-orange-light",
      description: "Advanced monitoring solutions that provide real-time data collection and analysis for construction projects, ensuring safety and performance optimization throughout the project lifecycle.",
      subcategories: [
        {
          name: "Real-time Monitoring",
          shortDescription: "Continuous monitoring systems provide 24/7 data collection with automated alerts and remote access capabilities for construction safety and performance optimization.",
          fullDescription: "Real-time monitoring systems are essential for maintaining safety and performance standards during construction projects. These systems provide continuous data collection, automated alert mechanisms, and remote access capabilities that enable immediate response to changing conditions. Our real-time monitoring solutions include advanced sensor networks, data transmission systems, and cloud-based platforms for comprehensive project oversight.",
          features: ["24/7 continuous monitoring", "Automated alert systems", "Remote data access", "Cloud-based data storage"]
        },
        {
          name: "Instrumentation",
          shortDescription: "Advanced instrumentation deployment including inclinometers, piezometers, settlement monitoring systems, and strain gauge networks for comprehensive site monitoring.",
          fullDescription: "Our instrumentation services involve the strategic deployment of advanced monitoring equipment to track various geotechnical parameters. We install and maintain sophisticated sensor networks including inclinometer systems for slope stability monitoring, piezometer networks for groundwater monitoring, settlement monitoring systems for foundation performance, and strain gauge systems for structural health monitoring. Each installation is customized to meet specific project requirements and environmental conditions.",
          features: ["Inclinometer installations", "Piezometer networks", "Settlement monitoring", "Strain gauge systems"]
        },
        {
          name: "Data Analysis",
          shortDescription: "Comprehensive data interpretation services including statistical analysis, trend identification, predictive modeling, and automated report generation for informed decision-making.",
          fullDescription: "Our data analysis services transform raw monitoring data into actionable insights through advanced statistical analysis, trend identification algorithms, and predictive modeling techniques. We provide comprehensive interpretation of monitoring data, identify critical trends and patterns, develop predictive models for future behavior assessment, and generate automated reports for stakeholders. Our analysis helps project teams make informed decisions based on reliable data interpretation.",
          features: ["Statistical analysis", "Trend identification", "Predictive modeling", "Report generation"]
        }
      ]
    },
    'laboratory-testing': {
      title: "Laboratory Testing",
      icon: "🧪",
      color: "from-vge-brown to-vge-brown-light",
      description: "State-of-the-art laboratory facilities equipped with advanced testing equipment for comprehensive material characterization and quality assurance testing.",
      subcategories: [
       
        {
          name: "Soil Testing",
          shortDescription: "Essential laboratory testing for soil characterization, supporting safe foundation and earthwork design in construction and geotechnical projects.",
          fullDescription: "Laboratory tests on soils are essential in engineering to determine the physical and mechanical properties of soil materials. These tests help engineers and geotechnical professionals make informed decisions when designing foundations, earthworks, and other construction projects. Here is a list of some common laboratory tests on soils in engineering:\n\n1. Moisture Content Test: Determines the water content of a soil sample, which is crucial for other test results.\n2. Specific Gravity Test: It measures the density of soil solids compared to the density of water.\n3. Particle Size Analysis (Sieve Analysis): This test determines the distribution of soil particles into different size fractions, including gravel, sand, silt, and clay.\n4. Atterberg Limits Test: This includes tests for the liquid limit, plastic limit, and shrinkage limit to assess the soil's plasticity and compressibility characteristics.\n5. Soil Classification Tests: Use various classification systems, such as the Unified Soil Classification System (USCS) or the AASHTO classification, to categorize soil types.\n6. Density and Unit Weight Tests: These tests measure the soil's dry unit weight, bulk density, and void ratio, which are important for calculating bearing capacity and settlement.\n7. Consolidation Test: Measures how much a soil sample settles under a constant load over time, helping determine settlement and consolidation characteristics.\n8. Permeability Test: Determines the rate at which water can flow through a soil sample, which is crucial for assessing drainage and seepage issues.\n9. Triaxial Compression Test: Evaluates the shear strength and stress-strain behavior of soil under different stress conditions, including drained and undrained conditions.\n10. Direct Shear Test: Measures the shear strength of soil along a specified plane under controlled conditions.\n11. Unconfined Compression Test: Determines the unconfined compressive strength of cohesive soils, primarily used for soft clay materials.\n12. California Bearing Ratio (CBR) Test: Evaluates the strength of subgrade soils for pavement design and construction.\n13. Proctor Compaction Test: Determines the maximum dry density and optimum moisture content of a soil for compaction purposes.\n14. Swell, Shrink, and Swell Pressure Test: Measures the potential volume increase and pressure exerted by expansive soils when wetted.\n15. Freeze-Thaw Test: Assesses the frost susceptibility of soils by subjecting them to repeated freezing and thawing cycles.\n16. Organic Content Test: Determines the percentage of organic matter in soil, which can impact its engineering properties.\n17. Vane Shear Test: Measures the soil's stiffness.\n\nThese are some of the key laboratory tests conducted on soils in engineering. The selection of tests depends on the specific project requirements and the characteristics of the soil being studied.",
          features: [
            "Moisture Content Test",
            "Particle Size Analysis (Sieve Analysis)",
            "Atterberg Limits Test",
            "Proctor Compaction Test",
            "Direct Shear Test",
            "Unconfined Compression Test"
          ]
        },
        {
          name: "Laboratory Testing of Rock Samples",
          shortDescription: "Essential tests to determine the physical and mechanical properties of rocks for geotechnical, geological, and civil engineering applications.",
          fullDescription: "Laboratory tests on rock samples are crucial for evaluating the physical and mechanical properties of rocks, which is essential in geological, geotechnical, and civil engineering applications. Here is a list of common laboratory tests conducted on rock samples:\n\n1. Point Load Index Test (PLI): Provides a rapid estimate of the uniaxial compressive strength of rock samples by applying a concentrated load at the center.\n2. Brazilian Tensile Strength Test: Determines the tensile strength of a cylindrical rock specimen by applying a diametral load.\n3. Density and Specific Gravity Tests: Measure the density and specific gravity of the rock material.\n4. Sonic Velocity Test: Measures the velocity of seismic waves (P-wave and S-wave) through rock samples to determine their elastic properties.\n5. Durability and Weathering Tests: Assess the resistance of rock samples to environmental factors, including freeze-thaw cycles and chemical weathering.\n6. Uniaxial Compressive Strength Test (UCS): Measures the maximum axial compressive stress that a rock specimen can withstand without failure.\n7. Porosity and Permeability Tests: Determine the volume fraction of voids and the ability of rock to transmit fluids, respectively.\n8. Triaxial Compression Test: Evaluates the shear strength and stress-strain behavior of rock under different stress conditions, including drained and undrained conditions.\n9. Rock Hardness Tests: These include the Mohs Scale, Vickers Hardness Test, and Rockwell Hardness Test, which measure the relative hardness or resistance to abrasion of rocks.\n10. Petrographic Examination: Involves the study of thin sections of rock samples under a microscope to identify mineral composition, texture, and fabric.\n11. Shear Strength Tests: Include direct shear tests and triaxial shear tests to determine the shear strength parameters of rocks.\n12. Acid Sensitivity Test: Determines the susceptibility of rocks to dissolution when exposed to acidic fluids.\n13. Thermal Conductivity Test: Measures the ability of rocks to conduct heat.\n14. Water Absorption Test: Evaluates the capacity of rocks to absorb water, which can affect their durability.\n15. Slake Durability Test: Assesses the disintegration or weakening of rocks when exposed to repeated wetting and drying cycles.\n16. Los Angeles Abrasion Test: Measures the resistance of rocks to abrasion and wear, which is important for aggregates used in concrete and road construction.\n17. Swelling and Shrinkage Tests: Assess the volume change characteristics of rock samples, especially in the case of clay-rich rocks.\n\nThese laboratory tests help geologists, geotechnical engineers, and researchers gain valuable insights into the properties and behavior of rocks, which is essential for geological mapping, rock mechanics analysis, and engineering projects involving rock materials. The choice of tests depends on the specific objectives and requirements of the study.",
          features: [
            "Uniaxial Compressive Strength (UCS)",
            "Brazilian Tensile Strength Test",
            "Porosity and Permeability Tests",
            "Triaxial Compression Test",
            "Slake Durability Test",
            "Los Angeles Abrasion Test"
          ]
        },
      ]
    },
    'analysis-design': {
      title: "Analysis and Design",
      icon: "📐",
      color: "from-vge-blue-deep to-vge-blue-dark",
      description: "Advanced analytical and design services utilizing cutting-edge software and methodologies for complex geotechnical engineering problems.",
      subcategories: [
        {
          name: "Kinematic Analysis",
          shortDescription: "Critical site investigations that gather subsurface data to guide safe and effective civil engineering design and construction.",
          fullDescription: "Geotechnical field investigations are a fundamental aspect of geotechnical engineering, focusing on the collection of data and information about the subsurface conditions and geological properties of a site. These investigations are critical for making informed decisions in the design and construction of civil engineering projects, including buildings, bridges, dams, roads, and tunnels. \n\nSite Reconnaissance: Engineers and geologists conduct an initial site visit to assess the general conditions, accessibility, and potential geological hazards of the area. This preliminary assessment helps in planning more detailed investigations.\n\nGeological Mapping: Geologists create geological maps to identify rock formations, soil types, and any other relevant geological features. This information provides insights into the site's geological history and context.\n\nSubsurface Exploration: Various techniques are employed to investigate the subsurface conditions:\nBoreholes: Drilling boreholes allows for the collection of soil and rock samples from different depths. These samples are analyzed in a laboratory to determine their physical and engineering properties.\nTest Pits: Excavated test pits provide visual and physical examination of soil and rock layers at shallow depths.\nCone Penetration Testing (CPT): CPT involves pushing a cone-shaped penetrometer into the ground to measure soil resistance and provide data on soil properties at various depths.\nSounding Tests: Dynamic sounding tests, such as the Standard Penetration Test (SPT), involve driving a split-barrel sampler into the ground to assess soil density and penetration resistance.\n\nIn-situ Testing: In-situ tests are performed to assess soil and rock properties without removing samples from the ground:\nVane Shear Testing: Measures the shear strength of soft soils.\nPressuremeter Testing: Evaluates soil stiffness and deformation properties.\nSeismic Piezocone Testing: Combines CPT with seismic measurements to determine soil properties and assess liquefaction potential.",
          features: [
            "Site Reconnaissance",
            "Geological Mapping",
            "Boreholes",
            "Cone Penetration Testing (CPT)",
            "Standard Penetration Test (SPT)",
            "Vane Shear Testing"
          ]
        },
        
        {
          name: "Analytical Analysis",
          shortDescription: "Mathematical modeling and predictive techniques to assess soil behavior, foundation stability, and structural safety in geotechnical engineering.",
          fullDescription: "Analytical analysis in geotechnical engineering refers to the use of mathematical and analytical methods to understand, predict, and solve problems related to soil and rock mechanics, foundation design, slope stability, and other geotechnical aspects. Analytical techniques are often used in conjunction with experimental data and field investigations to provide insights into the behavior of soils and rocks under various conditions.  \n\nFoundation Design\nSlope Stability Analysis\nRetaining Wall Design\nSettlement Analysis\nPile Design\nDeep Excavation Analysis\nSeepage Analysis\nConsolidation Analysis\nBearing Capacity Analysis\nLateral Load Analysis\n\nAnalytical analysis in geotechnical engineering relies on mathematical equations and models that describe the behavior of soils and rocks. These methods are essential for making informed decisions in geotechnical design and construction, ensuring the safety and stability of infrastructure projects.",
          features: [
            "Foundation Design",
            "Slope Stability Analysis",
            "Retaining Wall Design",
            "Settlement Analysis",
            "Pile Design",
            "Bearing Capacity Analysis"
          ]
        },
        
        {
          name: "Numerical Methods",
          shortDescription: "Computational modeling techniques for simulating complex soil–structure interactions and geotechnical behavior in real-world conditions.",
          fullDescription: "Numerical methods in geotechnical engineering refer to computational techniques used to analyze and solve complex problems related to the behavior of soils, rocks, and geotechnical structures. These methods are particularly valuable when analytical solutions are impractical or when simulating real-world geotechnical scenarios. Numerical methods allow engineers to model and understand complex interactions between soil, water, structures, and various environmental factors.",
          features: [
            "Finite Element Method (FEM)",
            "Finite Difference Method (FDM)",
            "Boundary Element Method (BEM)",
            "Stress-Strain Modeling",
            "Soil-Structure Interaction Analysis",
            "Seepage and Consolidation Simulation"
          ]
        },
        
      ]
    },
    'research-training': {
      title: "Research and Training",
      icon: "🎓",
      color: "from-vge-blue-light to-vge-blue-deep",
      description: "Comprehensive research and professional development programs designed to advance knowledge and skills in geotechnical engineering.",
      subcategories: [
        {
          name: "Short Courses in Geotechnical Engineering",
          shortDescription: "Focused training programs that equip professionals with updated knowledge, advanced tools, and practical skills in geotechnical engineering.",
          fullDescription: "Short courses in geotechnical engineering play a crucial role in the professional development and ongoing education of engineers, geologists, and other professionals in the field. These short courses offer numerous benefits and serve important purposes, including:\n\nContinued Professional Development (CPD): Short courses provide opportunities for geotechnical engineers and professionals to stay up-to-date with the latest developments, research findings, and best practices in the field. CPD is essential for maintaining professional competence and keeping abreast of industry advancements.\n\nSpecialized Knowledge and Skills: Geotechnical engineering is a diverse field with various sub-disciplines, including soil mechanics, foundation engineering, rock mechanics, and geosynthetics. Short courses offer specialized training in these areas, allowing professionals to acquire in-depth knowledge and skills.\n\nAdaptation to Evolving Challenges: The geotechnical engineering field constantly evolves in response to emerging challenges, such as climate change, urbanization, and new construction methods. Short courses help professionals adapt to these challenges by providing training in areas like climate-resilient design and sustainable geotechnics.\n\nAdvanced Tools and Techniques: Short courses often cover advanced tools and numerical modeling techniques used in geotechnical analysis and design. These courses help professionals leverage technology to improve their work, including finite element analysis (FEA), slope stability software, and geotechnical instrumentation.\n\nNetworking Opportunities: Attending short courses allows professionals to network with peers, instructors, and experts in the field. These connections can lead to collaborations, knowledge sharing, and access to resources that may not be readily available elsewhere.\n\nProblem Solving and Troubleshooting: Short courses often include practical case studies and real-world problem-solving exercises. This hands-on experience helps professionals develop critical thinking skills and the ability to address complex geotechnical issues.\n\nCareer Advancement: Acquiring specialized skills and knowledge through short courses can enhance career prospects. It may open up opportunities for higher-level positions, project management roles, or consulting work.\n\nCross-Disciplinary Understanding: Geotechnical engineers often work alongside professionals from other fields, such as structural engineering, environmental science, and construction management. Short courses that cover related disciplines can help bridge knowledge gaps and improve collaboration.\n\nCompliance with Regulations: In many regions, geotechnical engineers are required to meet specific continuing education requirements to maintain their professional licenses. Short courses can contribute to meeting these requirements and ensure compliance with professional regulations.\n\nEnhanced Safety and Risk Management: Knowledge gained from short courses can contribute to better safety practices in geotechnical projects. Understanding risk factors, hazard assessments, and mitigation strategies is crucial for preventing accidents and ensuring project safety.\n\nGlobal Perspectives: Short courses often draw participants from around the world, offering diverse perspectives and experiences. This international exposure can broaden one's understanding of geotechnical engineering challenges and solutions.\n\nResearch Opportunities: Short courses sometimes provide insights into ongoing research in the field, fostering collaboration between industry professionals and academia. This can lead to applied research projects that benefit both sectors.\n\nIn summary, short courses in geotechnical engineering are a valuable resource for professionals seeking to expand their knowledge, skills, and expertise. They serve as a means of staying current in a rapidly evolving field, enhancing career opportunities, and contributing to the safe and effective execution of geotechnical projects.",
          features: [
            "Continued Professional Development (CPD)",
            "Advanced Tools and Numerical Techniques",
            "Specialized Skills and Certifications",
            "Problem Solving and Case Studies",
            "Cross-Disciplinary Collaboration",
            "Compliance and Safety Training"
          ]
        },
        
        {
          name: "Workshops in Geotechnical Engineering",
          shortDescription: "Practical training events that enhance technical skills, hands-on experience, and collaboration in geotechnical engineering.",
          fullDescription: "Workshops in geotechnical engineering are important for various reasons as they provide unique learning and professional development opportunities for engineers, geologists, researchers, and students in the field. Here are some key reasons why workshops are valuable:\n\nHands-On Learning: Workshops often involve practical exercises, fieldwork, and hands-on demonstrations. Participants get the chance to apply theoretical knowledge to real-world scenarios, improving their problem-solving skills.\n\nInteractive Learning: Workshops foster interaction and collaboration among participants. They encourage discussions, group activities, and knowledge sharing, which can lead to a deeper understanding of geotechnical concepts and challenges.\n\nExposure to Advanced Technologies: Workshops may introduce participants to the latest geotechnical tools, software, and equipment. This exposure helps engineers and researchers stay current with technological advancements in the field.\n\nField Experience: Some workshops include field trips to actual construction sites or geological formations. These experiences provide firsthand exposure to geological and geotechnical conditions, enhancing participants' understanding of site-specific challenges.\n\nNetworking Opportunities: Workshops often bring together professionals and experts from various sectors of geotechnical engineering. Participants can establish valuable professional connections, share experiences, and build a network of contacts for future collaborations.\n\nProblem-Solving Skills: Workshops typically involve solving practical geotechnical problems. Participants learn how to analyze and address real engineering challenges, improving their ability to make informed decisions in their work.\n\nContinuing Education: Workshops contribute to ongoing professional development and continuing education. They provide opportunities to acquire new skills, deepen existing ones, and fulfill continuing education requirements for maintaining professional licenses.\n\nExposure to Case Studies: Workshops often include presentations and discussions of case studies from actual geotechnical projects. This exposure allows participants to learn from real-world successes and failures.\n\nMultidisciplinary Understanding: Geotechnical engineering often intersects with other engineering disciplines, such as structural engineering and environmental engineering. Workshops that cover multidisciplinary topics help participants gain a broader perspective on complex projects.\n\nResearch Opportunities: Workshops may introduce participants to ongoing research projects, research findings, and academic experts in geotechnical engineering. This exposure can lead to research collaborations and applied research opportunities.\n\nInnovative Solutions: Workshops can showcase innovative and sustainable solutions for geotechnical challenges. Participants learn about new technologies and techniques that can be applied to their projects.\n\nCompliance and Regulation: Workshops often address changes in geotechnical codes, standards, and regulations. This information helps professionals stay compliant with industry requirements and ensures their work aligns with the latest guidelines.\n\nEnhanced Safety: Participants gain insights into safety practices and risk management strategies in geotechnical engineering. This knowledge is crucial for preventing accidents and ensuring the safety of construction and excavation projects.\n\nIn summary, workshops in geotechnical engineering are essential for enhancing skills, knowledge, and practical experience in the field. They provide opportunities for interactive learning, networking, exposure to new technologies, and a deeper understanding of geotechnical challenges. These workshops contribute to the professional growth and success of individuals and help ensure the safe and efficient execution of geotechnical projects.",
          features: [
            "Hands-On Learning and Fieldwork",
            "Exposure to Advanced Technologies",
            "Problem Solving and Case Studies",
            "Compliance and Safety Awareness",
            "Networking and Collaboration",
            "Multidisciplinary and Research Insights"
          ]
        },
        
        {
          name: "Seminars in Geotechnical Engineering",
          shortDescription: "Educational platforms for sharing innovations, case studies, and professional insights across the geotechnical community.",
          fullDescription: "Seminars in geotechnical engineering serve as valuable platforms for knowledge dissemination, professional development, and collaboration in the field. These events bring together geotechnical engineers, researchers, academics, and industry experts to discuss, present, and exchange information related to geotechnical challenges, solutions, and advancements. Here are several key reasons highlighting the importance of seminars in geotechnical engineering:\n\nKnowledge Dissemination: Seminars provide a means of sharing the latest research findings, best practices, and innovative solutions in geotechnical engineering. Attendees can gain insights into cutting-edge technologies and methodologies.\n\nProfessional Development: Seminars offer opportunities for professionals to enhance their knowledge and skills. Attendees can learn from experts in the field and gain a deeper understanding of specific geotechnical topics.\n\nContinuing Education: Many seminars offer continuing education units (CEUs) or professional development hours (PDHs) to attendees. These credits help geotechnical engineers meet their continuing education requirements for maintaining professional licenses.\n\nNetworking: Seminars facilitate networking among participants, including engineers, researchers, academics, and industry representatives. These connections can lead to collaborations, job opportunities, and partnerships in the field.\n\nExposure to Case Studies: Seminars often feature presentations of real-world case studies from geotechnical projects. These case studies provide valuable lessons from both successful and challenging projects, helping attendees learn from practical experiences.\n\nInterdisciplinary Learning: Geotechnical engineering often intersects with other engineering disciplines, such as structural engineering, environmental engineering, and hydrology. Seminars that cover multidisciplinary topics promote a holistic understanding of complex engineering projects.\n\nDiscussion and Debate: Seminars encourage discussions, debates, and the exchange of ideas. Attendees can engage in meaningful conversations with peers and experts, leading to a deeper understanding of various viewpoints and approaches.\n\nExhibition of Products and Services: Many seminars feature exhibitions where companies and organizations showcase geotechnical products, services, and technologies. This provides attendees with insights into the latest industry offerings.\n\nResearch Collaboration: Seminars bring together researchers and practitioners, fostering potential collaborations on research projects. Attendees can learn about ongoing research initiatives and identify opportunities for joint research efforts.\n\nRegulatory Updates: Seminars often include sessions on regulatory changes, updates, and compliance requirements relevant to geotechnical engineering. Staying informed about regulations is crucial for ensuring project compliance and safety.\n\nGlobal Perspectives: International seminars and conferences provide a platform for professionals to learn about geotechnical engineering practices and challenges from around the world. This exposure can broaden one's perspective and encourage the adoption of global best practices.\n\nInspiration and Motivation: Attending seminars can inspire professionals by showcasing successful projects, groundbreaking research, and the potential for positive impacts in geotechnical engineering. This motivation can drive innovation and excellence in the field.\n\nProblem Solving: Seminars often address practical geotechnical challenges and provide insights into problem-solving approaches. Engineers can gain valuable strategies for addressing complex issues they may encounter in their work.\n\nIn summary, seminars in geotechnical engineering are essential for the dissemination of knowledge, professional development, networking, and collaboration within the geotechnical community. They contribute to the growth and advancement of the field, empower professionals to make informed decisions, and foster a culture of continuous learning and improvement in geotechnical engineering practice.",
          features: [
            "Knowledge Dissemination",
            "Professional Development",
            "Case Study Presentations",
            "Research & Industry Collaboration",
            "Regulatory and Global Updates",
            "Networking Opportunities"
          ]
        }
        
      ]
    },
    'project-reports': {
      title: "Project Reports (DPR)",
      icon: "📋",
      color: "from-vge-orange to-vge-brown",
      description: "Comprehensive project documentation and detailed project reports that provide thorough analysis and recommendations for successful project implementation.",
      subcategories: [
        {
          name: "Detailed Project Report (DPR)",
          shortDescription: "A comprehensive document detailing geotechnical investigations, analyses, and recommendations for safe and efficient infrastructure development.",
          fullDescription: "A detailed project report (DPR) in geotechnical engineering is a comprehensive document that provides in-depth information and analysis of various geotechnical aspects relevant to a specific construction or infrastructure project. The importance of a detailed project report in geotechnical engineering cannot be overstated, as it serves several critical purposes:\n\nRisk Assessment: A DPR helps identify and assess geotechnical risks associated with the project. It evaluates factors such as soil and rock properties, groundwater conditions, slope stability, and seismic considerations. By understanding these risks, project stakeholders can develop mitigation strategies and make informed decisions to minimize potential hazards.\n\nFoundation Design: Geotechnical engineering plays a crucial role in designing the foundations of structures. A DPR provides data on soil bearing capacity, settlement potential, and foundation design parameters. This information is essential for selecting the appropriate foundation type (e.g., shallow, deep, pile) and ensuring the long-term stability of the structure.\n\nSlope Stability Analysis: For projects involving excavations, embankments, or slopes, a DPR includes slope stability analysis. It assesses the stability of slopes and recommends measures to prevent landslides or slope failures, ensuring safety during construction and throughout the project's lifespan.\n\nGround Improvement Techniques: In cases where the natural soil conditions are inadequate for construction, a DPR outlines ground improvement techniques. These may include methods like soil compaction, grouting, or the installation of geosynthetics to enhance soil properties and support structures.\n\nGeotechnical Site Characterization: A DPR provides a detailed characterization of the site's geotechnical conditions. It describes soil profiles, stratigraphy, geologic formations, and groundwater levels. This information guides foundation design, excavation planning, and other geotechnical considerations.\n\nMaterial Selection: The choice of construction materials, such as backfill, embankment materials, and retaining wall components, is influenced by geotechnical properties. A DPR specifies suitable materials and construction methods to ensure the project's integrity.\n\nConstruction Methods: Geotechnical considerations can impact construction methods and sequencing. The DPR provides recommendations on excavation techniques, shoring and support systems, and dewatering methods to optimize construction processes.\n\nEnvironmental Impact Assessment: Geotechnical engineering can have environmental implications, such as potential soil erosion or groundwater contamination. A DPR assesses these impacts and suggests measures for environmental protection and compliance with regulations.\n\nCost Estimation: Accurate cost estimation is crucial for project planning and budgeting. A DPR helps project managers estimate the costs associated with geotechnical investigations, site preparation, foundation construction, and any required mitigation measures.\n\nRegulatory Compliance: Many regions have regulations and codes governing geotechnical aspects of construction projects. A well-prepared DPR ensures that the project aligns with these requirements, reducing the risk of legal and regulatory issues.\n\nSafety and Long-Term Durability: Geotechnical engineering is fundamental to ensuring the safety and long-term durability of infrastructure. A DPR addresses safety concerns during construction and provides guidance for design and construction practices that enhance the project's lifespan.\n\nProject Feasibility: The geotechnical findings in a DPR can impact the overall feasibility of a project. If significant geotechnical challenges or risks are identified, stakeholders can decide whether the project is viable or if modifications are needed.\n\nIn summary, a detailed project report in geotechnical engineering is indispensable for ensuring the successful planning, design, and execution of construction and infrastructure projects. It provides essential data, analyses, and recommendations to manage geotechnical risks, optimize design and construction, and ensure the safety, durability, and environmental sustainability of the project.",
          features: [
            "Geotechnical Risk Assessment",
            "Foundation Design Parameters",
            "Slope Stability Analysis",
            "Ground Improvement Techniques",
            "Geotechnical Site Characterization",
            "Construction & Material Recommendations"
          ]
        },
        
        {
          name: "Feasibility Studies",
          shortDescription: "Project viability analysis including economic analysis, technical feasibility assessment, comprehensive risk assessment, and evaluation of alternative solutions.",
          fullDescription: "Our feasibility studies provide comprehensive evaluation of project viability from technical, economic, and risk perspectives. We conduct thorough economic analysis including cost-benefit assessments and life-cycle cost evaluation, perform detailed technical feasibility studies assessing engineering challenges and solutions, execute comprehensive risk assessment identifying potential issues and mitigation strategies, and evaluate alternative solutions to optimize project outcomes. These studies enable informed decision-making during project planning and help ensure successful project implementation.",
          features: ["Economic analysis", "Technical feasibility", "Risk assessment", "Alternative solutions"]
        },
        {
          name: "Risk Assessment",
          shortDescription: "Comprehensive risk evaluation including hazard identification, risk quantification, mitigation strategies development, and ongoing monitoring recommendations.",
          fullDescription: "Our risk assessment services provide systematic evaluation of potential hazards and their impacts on project success. We conduct thorough hazard identification covering geological, geotechnical, environmental, and construction-related risks, perform quantitative risk analysis to assess probability and consequences of identified hazards, develop comprehensive mitigation strategies to reduce risk levels to acceptable limits, and provide monitoring recommendations for ongoing risk management throughout project lifecycle. These assessments ensure that potential risks are properly identified, evaluated, and managed to protect project objectives and stakeholder interests.",
          features: ["Hazard identification", "Risk quantification", "Mitigation strategies", "Monitoring recommendations"]
        }
      ]
    }
  };

  const facility = facilityData[facilityId as string];

  if (!facility) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-4xl font-display font-bold text-vge-blue-dark mb-4">Facility Not Found</h1>
          <Link to="/facilities" className="text-vge-orange hover:underline">Back to Facilities</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/facilities"
            className="inline-flex items-center gap-2 text-vge-blue-dark hover:text-vge-orange transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Facilities
          </Link>

          {/* Hero Section */}
          <div className={`bg-gradient-to-r ${facility.color} text-white p-12 rounded-3xl shadow-2xl mb-12`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">{facility.icon}</div>
              <h1 className="text-5xl font-display font-bold mb-6">{facility.title}</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>

          {/* Subcategories */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-vge-blue-dark mb-12 text-center">
              Our {facility.title} Services
            </h2>
            
            <div className="space-y-8">
              {facility.subcategories.map((sub: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${facility.color} p-6`}>
                    <h3 className="text-2xl font-display font-bold text-white">{sub.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    {/* Short Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {sub.shortDescription}
                    </p>
                    
                    {/* Read More Button */}
                    <button 
                      onClick={() => toggleSection(`${facilityId}-${index}`)}
                      className="inline-flex items-center gap-2 text-vge-orange hover:text-vge-orange-light font-medium mb-4 transition-colors"
                    >
                      {expandedSections[`${facilityId}-${index}`] ? 'Read Less' : 'Read More'}
                      {expandedSections[`${facilityId}-${index}`] ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                    
                    {/* Full Description - Expandable */}
                    {expandedSections[`${facilityId}-${index}`] && (
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                          {sub.fullDescription}
                        </p>
                      </div>
                    )}
                    
                    {/* Key Features */}
                    <h4 className="text-xl font-semibold text-vge-blue-dark mb-4">Key Features & Services:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sub.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <CheckCircle className="w-5 h-5 text-vge-orange flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-vge-blue-dark to-vge-blue-deep text-white p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contact our team to discuss your {facility.title.toLowerCase()} requirements
              </p>
              <button className="bg-gradient-to-r from-vge-orange to-vge-orange-light hover:from-vge-orange-light hover:to-vge-orange text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FacilityDetail;
