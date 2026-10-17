/*
 * GIORGIO PORTFOLIO — ALL EDITABLE CONTENT
 * Edit labels, text, images and links here. No build tools required.
 * The six featured projects have image: "" and github/demo: "" until you add URLs.
 * Never publish confidential employer or research information.
 */
window.PORTFOLIO = {
  // ABOUT PHOTOS: place your own photos inside assets/about/, then set image below.
  // Leave image: "" to display an attractive editable photo placeholder.
  aboutPhotos: [
    { label: "YOUR PORTRAIT", hint: "assets/about/portrait.jpg", image: "" },
    { label: "ON THE WATER", hint: "assets/about/swimming.jpg", image: "" },
    { label: "OUTSIDE THE LAB", hint: "assets/about/sailing.jpg", image: "" }
  ],
  skills: [
    { title: "Programming", items: ["Python", "C / C++", "VHDL", "MATLAB", "Arduino", "SystemVerilog concepts"] },
    { title: "FPGA & digital design", items: ["Intel Quartus", "Gowin EDA", "Questa", "FSMs + datapaths", "RTL simulation", "Synthesis + timing"] },
    { title: "Circuits & PCB", items: ["Cadence Virtuoso", "Siemens EDA", "KiCad", "Altium exposure", "SPICE", "45 nm CMOS layout"] },
    { title: "Embedded systems", items: ["RP2040 / Raspberry Pi Pico", "TI Tiva / AVR", "BeagleBone", "RTOS", "ADC / DAC / PWM", "Interrupts + DMA"] },
    { title: "Data & communication", items: ["pandas / NumPy", "NetworkX", "Power BI", "SPI / UART / CAN / I²C", "Socket programming", "openpyxl / matplotlib"] },
    { title: "Lab & design", items: ["Oscilloscopes", "VNAs / S-parameters", "TDR", "Logic analyzers", "SolidWorks / Onshape", "Soldering + prototyping"] }
  ],
  certifications: [
    "PADI Rescue Diver",
    "Emergency Medical Responder (EMR) + CPR",
    "Adobe Certified Associate — Visual Design / Photoshop",
    "LMS Yellow Belt (NextEra Energy)"
  ],
  awards: [
    "HWCOE Dean's List — Spring 2024",
    "AP Scholar with Distinction",
    "AP International Diploma + AICE Diploma",
    "Broward County Silver Cord Distinction",
    "Most Outstanding AP Physics 1 Student"
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Italian", level: "Fluent" },
    { name: "Spanish", level: "Fluent" },
    { name: "Portuguese", level: "Learning" }
  ],
  experience: [
    {
      date: "Fall 2026 — Present", role: "Undergraduate Peer Instructor · Electronic Circuits I",
      company: "University of Florida · Electrical & Computer Engineering", location: "Gainesville, FL", category: "Teaching",
      description: "Helping students turn circuit theory into intuition in EEE 3308C labs.",
      bullets: ["Guide breadboard and PCB troubleshooting for diode, op-amp, BJT, MOSFET, current-mirror and differential-amplifier labs.", "Support SPICE modeling and hands-on measurements using oscilloscopes, waveform generators, DMMs and bench supplies."]
    },
    {
      date: "Summer 2026", role: "Electrical Engineering Intern",
      company: "Ford Motor Company", location: "Sunrise, FL", category: "Automotive hardware",
      description: "Hands-on hardware validation for high-performance computing controllers supporting vehicle infotainment and ADAS.",
      bullets: ["Debugged and characterized complex PCBs with oscilloscopes, programmable supplies and electrical lab instrumentation.", "Used VNAs for S-parameters and TDR to study high-speed signal integrity, interconnects and impedance discontinuities; supported analysis using Siemens EDA tools."]
    },
    {
      date: "Spring 2026 — Present", role: "Teaching Assistant · Engineering Design & Society",
      company: "University of Florida · Engineering Education", location: "Gainesville, FL", category: "Teaching",
      description: "Mentoring multidisciplinary EGN 2020C teams through the process of building functional prototypes.",
      bullets: ["Support Arduino, circuits, sensors, CAD and human-centered engineering design.", "Coach students through iterative testing and debugging without taking away the problem-solving process."]
    },
    {
      date: "Summer 2025", role: "Engineering Intern · Wind Electrical Fleet",
      company: "NextEra Energy · Power Generation Division", location: "West Palm Beach, FL", category: "Energy systems",
      description: "Improved understanding and documentation of wind generator failures across utility-scale sites.",
      bullets: ["Analyzed GE, Hitachi and ABB generator data with Python, pandas, NumPy, Power BI and Maximo to investigate recurring electrical failures.", "Contributed to the GE Generator Troubleshooting Procedure and a streamlined fault-diagnostic workflow; presented findings to electrical and IT teams."]
    },
    {
      date: "Summer 2024", role: "Engineering Intern · Wind Reliability",
      company: "NextEra Energy · Power Generation Division", location: "West Palm Beach, FL", category: "Energy systems",
      description: "Connected SCADA fault events with turbine downtime and megawatt losses.",
      bullets: ["Built Python and spreadsheet analysis of GE wind-turbine reliability data, including a Javelina Wind Site fault-loss investigation.", "Presented results to Power Generation Division executives and the Wind Electrical team; supported NERC GADS classification work."]
    },
    {
      date: "2022 — 2023 · Seasonal", role: "Intern Beach Attendant & Diver",
      company: "ScubaCaribe", location: "Montego Bay, Jamaica", category: "Marine operations",
      description: "My earliest professional experience was hands-on, outdoors, and very far from a cubicle.",
      bullets: ["Helped divers and guests prepare for excursions; supported equipment handling, watersports operations and safety procedures.", "Maintained scuba gear and compressors and assisted with basic boat, engine and battery upkeep."]
    }
  ],
  research: [
    {
      icon: "◎", date: "Fall 2026 — Present", type: "BIOMEDICAL ELECTRONICS", role: "Undergraduate Researcher",
      lab: "Wireless Intelligent Sensor Electronics (WISE) Lab", mentor: "Dr. Baibhab Chatterjee",
      body: "Working on a portable power transmitter for battery-free injectable electroceuticals and body-coupled wireless electronics.",
      details: ["Investigating a microcontroller-controlled direct digital synthesizer for wireless power and bidirectional communication.", "Contributing to a redesign from rigid FR-4 toward a flexible PCB for better wearability."],
      tags: ["Wireless power", "PCB design", "Biomedical electronics"]
    },
    {
      icon: "⌘", date: "Fall 2025 — Present", type: "HARDWARE SECURITY", role: "Undergraduate Researcher",
      lab: "Florida Institute for National Security", mentor: "Dr. Domenic Forte",
      body: "Exploring hardware reverse engineering, circuit camouflage, and graph-based representations of digital circuitry.",
      details: ["Built Python/NetworkX workflows to generate and visualize randomized Verilog circuit topologies.", "Developed a synthesis pipeline for parameterized circuit benchmarks and contributed to research documentation."],
      tags: ["Verilog", "Python / NetworkX", "Hardware security"]
    },
    {
      icon: "▧", date: "Fall 2026 — Present", type: "ENGINEERING EDUCATION", role: "Undergraduate Research Assistant",
      lab: "Makerspace Peer Mentor Handbook · UF MAE", mentor: "Dr. Pamela Dickrell",
      body: "Helping evaluate an open-source training resource for new peer mentors in Engineering Design & Society.",
      details: ["Participate in weekly group research sessions on mentoring scenarios and training modules.", "Review case studies, interactive materials and structured reflections to inform improvements."],
      tags: ["Mentorship", "Engineering education", "User feedback"]
    },
    {
      icon: "≋", date: "Spring 2024", type: "AUTONOMOUS SYSTEMS", role: "Electrical Team Researcher",
      lab: "Machine Intelligence Laboratory", mentor: "University of Florida",
      body: "Supported SubJugator autonomous-submarine electrical documentation and power-system work.",
      details: ["Helped document the Power Merge Board and Battery Monitor Board.", "Worked with information on 24 V-to-3 V / 5 V regulation and interdisciplinary embedded systems."],
      tags: ["Power distribution", "SubJugator #9", "Technical documentation"]
    }
  ],
  leadership: [
    { date: "Fall 2026 — Present", title: "Technical Chair", org: "UF IoT Students Club", body: "Lead workshops, hackathons, hands-on IoT projects, and training in sensors, wireless devices and embedded systems." },
    { date: "Fall 2025 — Spring 2026", title: "Electrical Technical Director", org: "NSBE Trailblazers Program", body: "Created beginner-friendly engineering curriculum and mentored approximately 30 first-year students in circuits, logic, embedded systems and lab skills." },
    { date: "Spring 2024 — Spring 2025", title: "Electrical Subteam Lead", org: "UF GatorLoop", body: "Led five engineers building AlliCruiser Hyperloop pod sensing, firmware and inter-device links with SPI, CAN, UART, Raspberry Pi and KiCad PCBs." },
    { date: "Fall 2023", title: "Athletics Director", org: "UF Society of Hispanic Professional Engineers", body: "Organized community-building sports events: soccer, volleyball, kayaking, running and more." }
  ],
  university: [
    { date: "Fall 2023 — Present", title: "First Year LeaderSHPE", org: "SHPE · Mentee", body: "Leadership development, networking, community-building and professional workshops." },
    { date: "Fall 2023 — Present", title: "Trailblazers Program", org: "NSBE · Mentee", body: "Participated in the program's inaugural cohort before later helping lead its technical curriculum." },
    { date: "Summer 2023", title: "STEPUP Program", org: "University of Florida · Mentee", body: "Selected as one of 26 students; co-authored a 5,000-word paper on IoT/water-based air pollution reduction in South Asian cities." },
    { date: "Fall 2023", title: "IEEE Open Project Space", org: "IEEE UF · Mentee", body: "Early hands-on program in circuits, microcontrollers, soldering, communication and PCB fundamentals." }
  ],
  sports: [
    { date: "2023 — Present", title: "Florida Club Swim", org: "University of Florida", body: "Continuing a long-standing interest in competitive swimming." },
    { date: "2023 — Present", title: "Sailing Club", org: "University of Florida", body: "Keeping up a lifelong love of sailing developed in Jamaica." },
    { date: "2019 — 2023", title: "Competitive Swimmer", org: "South Florida Aquatic Club", body: "Qualified for multiple FGC and South Zone meets, including Junior Olympics and Sectionals competitions." },
    { date: "2019 — 2023", title: "Varsity Swimmer", org: "Somerset Academy High School", body: "Qualified for the 2021 FHSAA State Championships and was a 2022 state finalist." },
    { date: "Ongoing", title: "Scuba Diving", org: "PADI Rescue Diver", body: "Love the ocean; previously assisted with professional dive and watersports operations in Montego Bay." }
  ],
  service: [
    { date: "2021 — 2023", title: "Science National Honor Society", org: "Somerset Academy", body: "Science-focused academic and service involvement." },
    { date: "2021 — 2023", title: "National Honor Society", org: "Somerset Academy", body: "Academic, leadership and community service activities." },
    { date: "2021 — 2023", title: "Key Club", org: "Somerset Academy", body: "Student-led volunteering and community activities." },
    { date: "2021 — 2023", title: "Class of 2023 Board", org: "Somerset Academy", body: "Class planning, school events and communication with student leadership." }
  ],
  // PROJECTS: edit descriptions, dates, pictures and GitHub links for each entry.
  // images is an array of local file paths or HTTPS URLs; blank means a visible photo slot.
  // illustration: true labels generated concept visuals, never actual project photographs.
  projects: [
    {
        "id": "guitar",
        "title": "Pocket Guitar Hero",
        "year": "Fall 2026",
        "sortKey": "2026-09-20",
        "category": "fpga",
        "type": "FPGA + embedded / rhythm game",
        "teaser": "A Guitar Hero-inspired game on a custom board.",
        "overview": "COMING SOON — My EE Design I final project is a planned compact single-player rhythm game combining a Raspberry Pi Pico running FreeRTOS with a Tang Nano 20K FPGA. The microcontroller manages game logic and scoring, while programmable logic generates the HDMI video output and on-screen animation. The entire design is intended to come together on a custom Altium PCB.",
        "bullets": [
            "Six buttons and a joystick provide player inputs, including fret controls and strumming.",
            "A processor/programmable-logic split keeps responsive graphics separate from software gameplay decisions.",
            "The final system is intended to demonstrate hardware/software co-design, communication between processors, video generation and real-time game mechanics."
        ],
        "tags": [
            "Coming soon",
            "RP2040",
            "FreeRTOS",
            "Tang Nano 20K",
            "HDMI",
            "Altium"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "coming-soon",
        "featured": true
    },
    {
        "id": "quant",
        "title": "Gator Quant Hacks — FPGA Hardware Track Designer",
        "year": "Fall 2026",
        "sortKey": "2026-09-10",
        "category": "fpga",
        "type": "FPGA / hackathon design",
        "teaser": "An FPGA trading challenge built to test accuracy, latency and efficient hardware design.",
        "overview": "Designed the hardware challenge for the October 2026 Gator Quant Hacks hackathon, organized with the UF IoT Students Club and the Warren B. Nelms Institute. Participants developed FPGA trading-signal pipelines on the Tang Nano 20K and exchanged strictly formatted price/action packets with a judge through UART. The track combined digital-system design with reproducible hardware evaluation.",
        "bullets": [
            "Specified encoded item identifiers, the packet layout, moving-average based trade decisions and the UART interface.",
            "Developed a testing and scoring methodology that considered correct decisions, packet latency and LUT utilization.",
            "Prepared participant guides for Gowin EDA, RTL simulation in Questa, FPGA programming, timing, constraints and troubleshooting."
        ],
        "tags": [
            "Tang Nano 20K",
            "UART",
            "VHDL",
            "Gowin",
            "Questa",
            "Hackathon"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": true
    },
    {
        "id": "sram",
        "title": "4×2 SRAM Design — VLSI EEE 4310",
        "year": "Spring 2026",
        "sortKey": "2026-04-20",
        "category": "silicon",
        "type": "VLSI / CMOS memory",
        "teaser": "A complete transistor-level static RAM block, through schematic and layout.",
        "overview": "Worked with a four-person team to design, simulate, lay out and verify a functional 4×2 SRAM array in Cadence Virtuoso using a 45 nm CMOS process. The memory integrated six-transistor bitcells with row and column decoding, differential bitlines, precharge, sensing and control to implement a working read/write datapath.",
        "bullets": [
            "Designed CMOS gates, a 6T SRAM bitcell, decoding circuitry and a differential sense amplifier.",
            "Coordinated precharge and read/write operations so selected wordlines and bitline pairs behaved correctly.",
            "Integrated the subcircuits into a full memory schematic and physical layout and performed functional verification."
        ],
        "tags": [
            "Cadence Virtuoso",
            "45 nm CMOS",
            "6T SRAM",
            "Physical layout",
            "Sense amplifier"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": true
    },
    {
        "id": "pong",
        "title": "Two-Player Pong — DE10 FPGA",
        "year": "Spring 2026",
        "sortKey": "2026-04-15",
        "category": "fpga",
        "type": "VHDL / retro arcade",
        "teaser": "Two-player Pong implemented as synchronous logic, not a software game loop.",
        "overview": "Implemented a two-player version of Pong directly in synthesizable VHDL on a Terasic DE10 FPGA. Paddle movement, ball position, collisions and game-state updates were mapped into clock-driven sequential behavior and combinational logic instead of conventional application code.",
        "bullets": [
            "Created independent paddle controls and the logic to coordinate a moving ball with gameplay rules.",
            "Separated sequential state updates from combinational decisions to build a synthesizable hardware game.",
            "Compiled and synthesized the design in Intel Quartus Prime and deployed it to the DE10 platform."
        ],
        "tags": [
            "VHDL",
            "Terasic DE10",
            "Quartus",
            "Synchronous design",
            "FSM"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": true
    },
    {
        "id": "nexus",
        "title": "Innovation for Defense — Team NEXUS",
        "year": "Spring 2026",
        "sortKey": "2026-03-20",
        "category": "systems",
        "type": "Systems engineering / UAS",
        "teaser": "An affordable modular small-UAS training platform shaped by end-user interviews.",
        "overview": "Collaborated with the 628th Air Base Wing at Joint Base Charleston to explore a low-cost, repairable and expendable small-uncrewed-aircraft training platform for counter-UAS exercises. The team used structured stakeholder discovery to define operational constraints and prototyped a modular concept with adaptable onboard hardware.",
        "bullets": [
            "Conducted more than ten stakeholder interviews to understand training needs, budget limits and repair-time requirements.",
            "Built and evaluated a prototype integrating Raspberry Pi 4, ArduPilot, wireless communications and flight-control hardware.",
            "Considered modularity, component sourcing, maintainability and realism while refining the system concept."
        ],
        "tags": [
            "ArduPilot",
            "Raspberry Pi 4",
            "Prototyping",
            "Stakeholder research"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": false
    },
    {
        "id": "bop-it",
        "title": "Tiva TM4C123GH6PM “Bop-It”",
        "year": "Fall 2025",
        "sortKey": "2025-10-20",
        "category": "embedded",
        "type": "Microcontrollers / real-time game",
        "teaser": "A fast-reaction game built around inputs, sensors and a custom RTOS.",
        "overview": "Created a single-player Bop-It-inspired game around a Texas Instruments TM4C123GH6PM microcontroller running the custom G8RTOS real-time operating system. Players follow randomized prompts using buttons, joystick gestures and an accelerometer while the LCD and speaker provide real-time feedback.",
        "bullets": [
            "Scheduled concurrent tasks for prompt generation, inputs, scoring, display updates and audio feedback.",
            "Integrated GPIO, ADC joystick sensing, accelerometer input, interrupts, semaphores and PWM-driven sound.",
            "Combined multiple peripherals into a responsive, interactive embedded system programmed in C."
        ],
        "tags": [
            "TM4C123",
            "G8RTOS",
            "C",
            "GPIO / ADC / PWM",
            "Accelerometer"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": true
    },
    {
        "id": "face-tracker",
        "title": "Socket Face-Tracker",
        "year": "Fall 2025",
        "sortKey": "2025-10-10",
        "category": "embedded",
        "type": "Embedded vision / networking",
        "teaser": "OpenCV on Linux connected to a Tiva microcontroller through network sockets.",
        "overview": "Built a distributed computer-vision application that separates image processing on a BeagleBone Black from display and responsive embedded tasks on a TM4C123GH6PM microcontroller. OpenCV detects faces on the Linux system and sends the tracking information through a network socket to the microcontroller, which presents the results on an ST7789 color LCD.",
        "bullets": [
            "Used the BeagleBone Black for computationally demanding OpenCV face detection and tracking.",
            "Implemented socket communications between Linux-side processing and a custom RTOS running on the Tiva.",
            "Displayed the resulting tracking data on a dedicated color LCD while keeping embedded tasks responsive."
        ],
        "tags": [
            "OpenCV",
            "BeagleBone Black",
            "Sockets",
            "Tiva TM4C123",
            "RTOS"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": true
    },
    {
        "id": "avr-labs",
        "title": "Microprocessors I — AVR Laboratory Series",
        "year": "Spring 2025",
        "sortKey": "2025-04-10",
        "category": "embedded",
        "type": "Embedded systems / lab series",
        "teaser": "Eight labs on register-level programming, communications and peripherals.",
        "overview": "Completed the Microprocessors I laboratory sequence covering core AVR architecture and low-level firmware. The labs progressed from assembly and general-purpose input/output through timers, interrupts, memory interfaces, serial communications, conversion and direct memory access.",
        "bullets": [
            "Developed AVR assembly and register-level firmware for timing, digital I/O and interrupts.",
            "Practiced external bus interfacing and asynchronous and synchronous serial protocols.",
            "Integrated ADC, DAC, event-system and DMA functionality while debugging hardware behavior."
        ],
        "tags": [
            "AVR",
            "Assembly",
            "SPI / UART",
            "ADC / DAC",
            "DMA"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": false
    },
    {
        "id": "digital-dice",
        "title": "Binary Digital Dice",
        "year": "Fall 2024",
        "sortKey": "2024-10-10",
        "category": "digital",
        "type": "Discrete digital logic",
        "teaser": "A pseudorandom electronic die made with logic ICs, not a microcontroller.",
        "overview": "Designed and breadboarded an electronic dice circuit that outputs values from one to six using discrete logic ICs. A linear-feedback shift register produces a pseudorandom sequence, and the remaining logic interprets it into the familiar six-sided dice range. The build was a way to explore real digital circuitry without relying on software.",
        "bullets": [
            "Designed an LFSR-based pseudorandom source using sequential digital building blocks.",
            "Assembled the circuit on a breadboard with separate logic ICs, wiring and decoding.",
            "Debugged timing and output behavior to produce the range of dice results."
        ],
        "tags": [
            "LFSR",
            "Discrete ICs",
            "Breadboarding",
            "Sequential logic"
        ],
        "github": "",
        "demo": "",
        "images": [
            "assets/projects/binary-digital-dice-concept.svg"
        ],
        "status": "completed",
        "featured": true,
        "illustration": true
    },
    {
        "id": "subjugator",
        "title": "SubJugator #9 — Machine Intelligence Lab",
        "year": "Spring 2024",
        "sortKey": "2024-04-20",
        "category": "systems",
        "type": "Autonomous marine robotics",
        "teaser": "Electrical support and documentation for an autonomous underwater vehicle.",
        "overview": "Worked with the Machine Intelligence Laboratory on supporting documentation and electrical power-system tasks for the SubJugator autonomous submarine. The team’s system integrated distributed power, sensing, embedded control and interdisciplinary mechanical/electronic design.",
        "bullets": [
            "Documented Power Merge Board and Battery Monitor Board functions and interfaces.",
            "Supported electrical documentation involving 24 V-to-3 V and 24 V-to-5 V power conversion.",
            "Gained hands-on exposure to marine robotics design integration and engineering documentation."
        ],
        "tags": [
            "Power distribution",
            "Autonomous submarine",
            "Documentation"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": false
    },
    {
        "id": "medium-pod",
        "title": "GatorLoop — Medium Pod Powertrain",
        "year": "Spring 2024",
        "sortKey": "2024-04-10",
        "category": "systems",
        "type": "Hyperloop / powertrain",
        "teaser": "Propulsion integration and controller selection for a student pod.",
        "overview": "Contributed to UF GatorLoop’s Medium Pod powertrain work, focusing on mechanical/electrical propulsion integration. The work involved evaluating motor-to-wheel attachment concepts and selecting a controller for the pod’s linear-induction-motor propulsion system.",
        "bullets": [
            "Modeled propulsion-attachment ideas in SolidWorks with mechanical fit and integration in mind.",
            "Evaluated a controller for the onboard Linear Induction Motor system.",
            "Collaborated across mechanical, electrical and propulsion subsystems."
        ],
        "tags": [
            "SolidWorks",
            "Powertrain",
            "LIM"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": false
    },
    {
        "id": "tiny-pod",
        "title": "GatorLoop — TinyTiny Pod",
        "year": "Fall 2023",
        "sortKey": "2023-10-20",
        "category": "systems",
        "type": "CAD / technical outreach",
        "teaser": "A scaled-down hyperloop pod model for demos and recruitment.",
        "overview": "Created a simplified small-scale SolidWorks model of the GatorLoop pod concept for tabling, expos and educational demonstrations. The design translated a complex engineering platform into an approachable object that could help explain hyperloop technology to visitors.",
        "bullets": [
            "Modeled a simplified pod concept in SolidWorks.",
            "Designed the model to make technical outreach and demonstration easier."
        ],
        "tags": [
            "SolidWorks",
            "CAD",
            "Outreach"
        ],
        "github": "",
        "demo": "",
        "images": [],
        "status": "completed",
        "featured": false
    },
    {
        "id": "ipoduino",
        "title": "iPoduino 2.0 — IEEE Open Project Space",
        "year": "Fall 2023",
        "sortKey": "2023-10-10",
        "category": "embedded",
        "type": "Arduino / interactive audio",
        "teaser": "A programmable miniature jukebox with an LCD, button and LEDs.",
        "overview": "Expanded an Arduino-based musical jukebox built in the IEEE Open Project Space program. The earlier design selected between tunes using resistor positions and LEDs; my version added an additional song, a dedicated playback button and an LCD to identify the current track, improving feedback and user interaction.",
        "bullets": [
            "Added an extra melody and a button to start playback.",
            "Integrated an LCD to identify the active selection alongside existing LED feedback.",
            "Improved the wiring and embedded logic to make the system more intuitive to use."
        ],
        "tags": [
            "Arduino",
            "LCD",
            "LEDs",
            "Audio playback"
        ],
        "github": "",
        "demo": "",
        "images": [
            "assets/projects/ipoduino-concept.svg"
        ],
        "status": "completed",
        "featured": true,
        "illustration": true
    },
    {
        "id": "automower",
        "title": "AutoMower — Engineering Design & Society",
        "year": "Summer 2023",
        "sortKey": "2023-07-10",
        "category": "embedded",
        "type": "Arduino / early-stage prototype",
        "teaser": "A prototype lawn mower with basic automated obstacle detection.",
        "overview": "Collaborated on an introductory engineering design project to prototype an autonomous lawn-mower concept. Arduino-based sensing was used to detect obstacles and stop the device, while mechanical elements were modeled in Onshape and fabricated for the prototype.",
        "bullets": [
            "Built an Arduino-based system to recognize obstacles and stop movement as an initial safety behavior.",
            "Designed and prototyped supporting mechanical components with Onshape and 3D printing.",
            "Used iterative team-based prototyping to explore future steering and navigation improvements."
        ],
        "tags": [
            "Arduino",
            "Obstacle sensing",
            "Onshape",
            "3D printing"
        ],
        "github": "",
        "demo": "",
        "images": [
            "assets/projects/automower-concept.svg"
        ],
        "status": "completed",
        "featured": true,
        "illustration": true
    }
],
  // BUCKET LIST: Add unlimited goals. Publish progress by changing completed to true.
  // The entries below are examples and blank slots, NOT asserted personal achievements.
  bucket: [
    {
        "title": "Dive somewhere unforgettable",
        "caption": "New reefs, different waters, bigger adventures.",
        "kind": "Adventure",
        "completed": false
    },
    {
        "title": "Sail somewhere new",
        "caption": "Follow the wind beyond the places I already know.",
        "kind": "Adventure",
        "completed": false
    },
    {
        "title": "Start the graduate chapter",
        "caption": "More electronics, new ideas, new people.",
        "kind": "Learning",
        "completed": false
    },
    {
        "title": "Open-source a complete build",
        "caption": "Share schematics, code, and lessons learned.",
        "kind": "Making",
        "completed": false
    },
    {
        "title": "Live in a new country",
        "caption": "Get comfortable trying something unfamiliar.",
        "kind": "Exploration",
        "completed": false
    },
    {
        "title": "Help someone build their first circuit",
        "caption": "Pass the curiosity forward.",
        "kind": "People",
        "completed": false
    },
    {
        "title": "Your bucket-list goal #07",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #08",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #09",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #10",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #11",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #12",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #13",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #14",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #15",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #16",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #17",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #18",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #19",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #20",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #21",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #22",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #23",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #24",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #25",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #26",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #27",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #28",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #29",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #30",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #31",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #32",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #33",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #34",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #35",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #36",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #37",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #38",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #39",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    },
    {
        "title": "Your bucket-list goal #40",
        "caption": "Replace this space with a real goal, destination, or life milestone.",
        "kind": "Your idea",
        "completed": false,
        "placeholder": true
    }
]
};
