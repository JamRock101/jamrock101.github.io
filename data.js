/*
 * GIORGIO PORTFOLIO — ALL EDITABLE CONTENT
 * Edit labels, text, images and links here. No build tools required.
 * The six featured projects have image: "" and github/demo: "" until you add URLs.
 * Never publish confidential employer or research information.
 */
window.PORTFOLIO = {
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
  /* Add your images (e.g. image: "assets/projects/socket-face-tracker.jpg") and live URLs here. */
  projects: [
    {
      id: "face-tracker", number: "01", title: "Socket Face-Tracker", year: "Fall 2025", category: "embedded", type: "Embedded vision / RTOS",
      teaser: "A Linux computer finds the faces. A microcontroller displays what it sees.",
      overview: "Developed a distributed embedded-vision platform that separates heavy computer-vision processing from deterministic microcontroller control. A BeagleBone Black runs OpenCV face detection, then passes tracking information through sockets to a Tiva TM4C123GH6PM running a custom RTOS.",
      bullets: ["Split processing across Linux-based vision and real-time firmware.", "Implemented network socket communication between the two processors.", "Displayed face-tracking results on an ST7789 color LCD."],
      tags: ["OpenCV", "BeagleBone Black", "C", "Sockets", "Tiva", "RTOS"],
      icon: "◉", image: "", github: "", demo: "", status: "completed"
    },
    {
      id: "bop-it", number: "02", title: "Tiva 'Bop-It'", year: "Fall 2025", category: "embedded", type: "Embedded game / real-time OS",
      teaser: "Buttons, joystick, accelerometer, LCD, speaker—and one very busy microcontroller.",
      overview: "Built a single-player Bop-It-inspired game on the TI TM4C123GH6PM with a custom real-time operating system called G8RTOS. Players respond to randomized actions using multiple physical input methods while real-time tasks coordinate scoring and feedback.",
      bullets: ["Ran gameplay logic, input sensing, display updates and audio feedback as concurrent RTOS tasks.", "Integrated GPIO, ADC-based joystick inputs, accelerometer, PWM audio, hardware interrupts and semaphores.", "Used the LCD to display player status and scores."],
      tags: ["TM4C123", "G8RTOS", "C", "ADC / PWM", "Accelerometer"],
      icon: "✳", image: "", github: "", demo: "", status: "completed"
    },
    {
      id: "pong", number: "03", title: "Two-Player Pong", year: "Spring 2026", category: "fpga", type: "FPGA / arcade game",
      teaser: "Classic Pong, but it's actual digital hardware—not a software game loop.",
      overview: "Designed a two-player Pong game entirely in synthesizable VHDL for the Terasic DE10 FPGA platform. Implemented two independent paddles, moving ball behavior and gameplay state in digital logic, using the FPGA's clocked and combinational resources.",
      bullets: ["Created paddle control, ball movement, and interactive game-state logic in RTL.", "Used clocked sequential logic alongside combinational datapath/control behavior.", "Built and synthesized the project using Intel Quartus Prime."],
      tags: ["VHDL", "DE10 FPGA", "Quartus", "RTL", "Games"],
      icon: "↔", image: "", github: "", demo: "", status: "completed"
    },
    {
      id: "sram", number: "04", title: "4×2 SRAM Design", year: "Spring 2026", category: "silicon", type: "VLSI / custom memory",
      teaser: "From individual CMOS transistors to a functional 4×2 SRAM array.",
      overview: "Designed, simulated, laid out and verified a complete 4×2 SRAM block in Cadence Virtuoso using a 45 nm CMOS process as part of a four-person team. Built and integrated transistor-level memory cells, decoders, bitline circuitry, precharge and differential sensing.",
      bullets: ["Designed 6T cells, NAND/NOR/inverter building blocks, row/column decoders and a differential sense amplifier.", "Integrated read/write controls, precharged differential bitlines and addressing across the eight cells.", "Verified schematic and physical layout as a functioning memory subsystem."],
      tags: ["Cadence Virtuoso", "45 nm CMOS", "6T SRAM", "Sense Amplifier", "Layout"],
      icon: "▦", image: "", github: "", demo: "", status: "completed"
    },
    {
      id: "quant", number: "05", title: "Gator Quant Hacks", year: "Fall 2026", category: "fpga", type: "FPGA / hackathon architecture",
      teaser: "Designed the hardware track that asked teams to trade in logic gates, not buzzwords.",
      overview: "Designed the FPGA hardware track for the October 2026 Gator Quant Hacks competition, supported by the UF IoT Students Club and the Warren B. Nelms Institute. The challenge tasked participants with processing encoded price data on a Tang Nano 20K, generating trading decisions, and returning a strict UART packet.",
      bullets: ["Defined the trading-data architecture, encoded UART packet interfaces, hardware evaluation and reference testing.", "Built scoring around correctness, output latency and FPGA LUT usage.", "Documented Gowin EDA, RTL design, Questa simulation, programming and debugging workflows for participants."],
      tags: ["Tang Nano 20K", "FPGA", "UART", "VHDL", "Questa", "Hackathon"],
      icon: "⌁", image: "", github: "", demo: "", status: "completed"
    },
    {
      id: "guitar", number: "06", title: "Pocket Guitar Hero", year: "Fall 2026", category: "fpga", type: "Embedded + FPGA / rhythm game",
      teaser: "A tiny PCB rhythm game, six buttons, one joystick, and a whole lot of parallel logic.",
      overview: "Coming soon: an EE Design I final project built around a hybrid processor/programmable-logic architecture. The planned system combines a Raspberry Pi Pico running FreeRTOS with a Tang Nano 20K FPGA, using the Pico for game-state logic and scoring while the FPGA handles HDMI video and on-screen graphics.",
      bullets: ["Planned input system: six pushbuttons plus a joystick for strumming.", "Proposed software/hardware split: FreeRTOS on Pico and video rendering in programmable logic.", "Target: compact, custom Altium-designed PCB with a Guitar Hero-inspired single-player experience."],
      tags: ["COMING SOON", "RP2040", "FreeRTOS", "Tang Nano 20K", "HDMI", "Altium"],
      icon: "♫", image: "", github: "", demo: "", status: "coming-soon"
    }
  ],
  otherProjects: [
    { title: "Innovation for Defense · Team NEXUS", year: "2026", text: "Modular, low-cost small-UAS training concept with ArduPilot, Raspberry Pi and stakeholder-led prototyping.", tag: "Prototype / systems" },
    { title: "SubJugator #9", year: "2024", text: "Power Merge and Battery Monitor Board documentation for an autonomous submarine.", tag: "Marine robotics" },
    { title: "GatorLoop · Medium Pod", year: "2024", text: "SolidWorks propulsion-attachment concepts and LIM controller evaluation.", tag: "Powertrain" },
    { title: "GatorLoop · TinyTiny Pod", year: "2023", text: "A smaller SolidWorks model for hyperloop demos, expos and outreach.", tag: "CAD" },
    { title: "AutoMower", year: "2023", text: "Arduino-powered obstacle detection and 3D-printed parts for an autonomous lawnmower prototype.", tag: "Arduino" },
    { title: "iPoduino 2.0", year: "2023", text: "Arduino jukebox with extra song, playback button, LCD and LED feedback.", tag: "Embedded audio" },
    { title: "Binary Digital Dice", year: "2024", text: "Microcontroller-free pseudorandom dice made from discrete logic ICs and an LFSR.", tag: "Digital logic" },
    { title: "Microprocessors I Labs", year: "2025", text: "Eight AVR labs spanning assembly, interrupts, buses, SPI/UART, ADC/DAC and DMA.", tag: "Low-level firmware" }
  ],
  // Inspiration placeholders; edit these to reflect your actual personal bucket list.
  bucket: [
    { no: "01", icon: "🌊", title: "Dive somewhere unforgettable", caption: "New reefs, different waters, bigger adventures.", kind: "Adventure" },
    { no: "02", icon: "⛵", title: "Sail somewhere new", caption: "Follow the wind beyond the places I already know.", kind: "Adventure" },
    { no: "03", icon: "🎓", title: "Start the graduate chapter", caption: "More electronics, new ideas, new people.", kind: "Learning" },
    { no: "04", icon: "🛠️", title: "Open-source a complete build", caption: "Share every schematic, line of code, and lesson learned.", kind: "Making" },
    { no: "05", icon: "🌍", title: "Live in a new country", caption: "Get uncomfortable in the best possible way.", kind: "Exploration" },
    { no: "06", icon: "🤝", title: "Help someone build their first circuit", caption: "Pass the curiosity forward.", kind: "People" }
  ]
};
