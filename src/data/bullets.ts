import { Bullet } from '../models/bullet';

/**
 * DOMAIN: 1.0 Hardware
 */
const DOMAIN_ONE: Bullet[] = [
  {
    objectiveNumber: 1.1,
    bullets: [
      {
        "title": "• Firmware upgrades/flash BIOS",
        "subBullets": []
      },
      {
        "title": "• BIOS component information",
        "subBullets": [
          "- RAM",
          "- Hard drive",
          "- Optical drive",
          "- CPU"
        ]
      },
      {
        "title": "• BIOS configurations",
        "subBullets": [
          "- Boot sequence",
          "- Enabling and disabling devices",
          "- Date/time",
          "- Clock speeds",
          "- Virtualization support",
          "- BIOS security (passwords, drive     "
        ]
      },
      {
        "title": "  encryption: TPM, LoJack, secure boot)",
        "subBullets": []
      },
      {
        "title": "• Built-in diagnostics",
        "subBullets": []
      },
      {
        "title": "• Monitoring",
        "subBullets": [
          "- Temperature monitoring",
          "- Fan speeds",
          "- Intrusion detection/notification",
          "- Voltage",
          "- Clock",
          "- Bus speed"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.2,
    bullets: [
      {
        "title": "• Sizes",
        "subBullets": [
          "- ATX",
          "- Micro-ATX",
          "- Mini-ITX",
          "- ITX"
        ]
      },
      {
        "title": "• Expansion slots",
        "subBullets": [
          "- PCI",
          "- PCI-X",
          "- PCIe",
          "- miniPCI"
        ]
      },
      {
        "title": "• RAM slots",
        "subBullets": []
      },
      {
        "title": "• CPU sockets",
        "subBullets": []
      },
      {
        "title": "• Chipsets",
        "subBullets": [
          "- Northbridge",
          "- Southbridge"
        ]
      },
      {
        "title": "• CMOS battery",
        "subBullets": []
      },
      {
        "title": "• Power connections and types",
        "subBullets": []
      },
      {
        "title": "• Fan connectors",
        "subBullets": []
      },
      {
        "title": "• Front/top panel connectors",
        "subBullets": [
          "- USB",
          "- Audio",
          "- Power button",
          "- Power light",
          "- Drive activity lights"
        ]
      },
      {
        "title": "• Bus speeds",
        "subBullets": []
      },
      {
        "title": "• Reset button",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 1.3,
    bullets: [
      {
        "title": "• Types",
        "subBullets": [
          "- DDR DDR2 DDR3",
          "- SODIMM DIMM",
          "- Parity vs. non-parity",
          "- ECC vs. non-ECC",
          "- RAM configurations",
          "- Single. Dual. Triple channel",
          "- Single sided vs. double sided",
          "- Buffered vs. unbuffered"
        ]
      },
      {
        "title": "• RAM compatibility",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 1.4,
    bullets: [
      {
        "title": "• Sound cards"
      },
      {
        "title": "• Video cards"
      },
      {
        "title": "• Network cards"
      },
      {
        "title": "• USB cards"
      },
      {
        "title": "• Firewire cards"
      },
      {
        "title": "• Thunderbolt cards",
        "subBullets": []
      },
      {
        "title": "• Storage cards"
      },
      {
        "title": "• Modem cards"
      },
      {
        "title": "• Wireless/cellular cards"
      },
      {
        "title": "• TV tuner cards"
      },
      {
        "title": "• Video capture cards"
      },
      {
        "title": "• Riser cards"
      }
    ]
  },
  {
    objectiveNumber: 1.5,
    bullets: [
      {
        "title": "• Optical drives",
        "subBullets": [
          "- CD-ROM/CD-RW",
          "- DVD-ROM/DVD-RW/DVD-RW DL",
          "- Blu-ray",
          "- BD-R, BD-RE",
        ]
      },
      {
        "title": "• Magnetic hard disk drives",
        "subBullets": [
          "- 5400 rpm",
          "- 7200 rpm",
          "- 10,000 rpm"
        ]
      },
      {
        "title": "• Hot swappable drives",
      },
      {
        "title": "• Solid state/flash drives",
        "subBullets": [
          "- Compact flash",
          "- SD",
          "- MicroSD",
          "- MiniSD",
          "- xD",
          "- SSD",
          "- Hybrid",
          "- eMMC"
        ]
      },
      {
        "title": "• RAID types ",
        "subBullets": [
          "- 0",
          "- 1",
          "- 5",
          "- 10"
        ]
      },
      {
        "title": "• Tape drive",
        "subBullets": []
      },
      {
        "title": "• Media capacity",
        "subBullets": [
          "- CD",
          "- CD-RW",
          "- DVD-RW",
          "- DVD",
          "- Blu-ray",
          "- Tape",
          "- DVD DL"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.6,
    bullets: [
      {
        "title": "• Socket types",
        "subBullets": [
          "- Intel: 775, 1155, 1156, 1366, 1150, 2011",
          "- AMD: AM3, AM3+, FM1, FM2, FM2+"
        ]
      },
      {
        "title": "• Characteristics",
        "subBullets": [
          "- Speeds",
          "- Cores",
          "- Cache size/type",
          "- Hyperthreading",
          "- Virtualization support",
          "- Architecture (32-bit vs. 64-bit)",
          "- Integrated GPU",
          "- Disable execute bit"
        ]
      },
      {
        "title": "• Cooling",
        "subBullets": [
          "- Heat sink",
          "- Fans",
          "- Thermal paste",
          "- Liquid-based",
          "- Fanless/passive"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.7,
    bullets: [
      {
        "title": "• Physical connections",
        "subBullets": [
          "- USB 1.1 vs. 2.0 vs. 3.0",
          "- Connector types: A, B, mini, micro",
          "- Firewire 400 vs. Firewire 800",
          "- SATA1 vs. SATA2 vs. SATA3, eSATA"
        ]
      },
      {
        "title": "• Other connector types",
        "subBullets": [
          "- VGA, HDMI, DVI",
          "- Audio, Analog"
        ]
      },
      {
        "title": "• Digital (Optical connector)",
        "subBullets": [
          "- RJ-45, RJ-11",
          "- Thunderbolt"
        ]
      },
      {
        "title": "• Wireless connections",
        "subBullets": [
          "- Bluetooth",
          "- RF",
          "- IR ",
          "- NFC"
        ]
      },
      {
        "title": "• Characteristics",
        "subBullets": [
          "- Analog",
          "- Digital",
          "- Distance limitations",
          "- Data transfer speeds",
          "- Quality",
          "- Frequencies"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.8,
    bullets: [
      {
        "title": "• Connector types and their voltages",
        "subBullets": [
          "- SATA, Molex",
          "- 4/8-pin 12v",
          "- PCIe 6/8-pin",
          "- 20-pin, 24-pin"
        ]
      },
      {
        "title": "• Specifications",
        "subBullets": [
          "- Wattage",
          "- Dual rail",
          "- Size",
          "- Number of connectors",
          "- ATX, MicroATX",
          "- Dual voltage options"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.9,
    bullets: [
      {
        "title": "• Graphic/CAD/CAM design workstation",
        "subBullets": [
          "- Multicore processor",
          "- High-end video",
          "- Maximum RAM"
        ]
      },
      {
        "title": "• Audio/video editing workstation",
        "subBullets": [
          "- Specialized audio and video card",
          "- Large fast hard drive",
          "- Dual monitors"
        ]
      },
      {
        "title": "• Virtualization workstation",
        "subBullets": [
          "- Maximum RAM and CPU cores"
        ]
      },
      {
        "title": "• Gaming PC",
        "subBullets": [
          "- Multicore processor",
          "- High-end video/specialized GPU",
          "- High-definition sound card",
          "- High-end cooling"
        ]
      },
      {
        "title": "• Home theater PC",
        "subBullets": [
          "- Surround sound audio",
          "- HDMI output",
          "- HTPC compact form factor",
          "- TV tuner"
        ]
      },
      {
        "title": "• Standard thick client",
        "subBullets": [
          "- Desktop applications",
          "- Meets recommended requirements for selected OS"
        ]
      },
      {
        "title": "• Thin client",
        "subBullets": [
          "- Basic applications",
          "- Meets minimum requirements for selected OS",
          "- Network connectivity"
        ]
      },
      {
        "title": "• Home server PC",
        "subBullets": [
          "- Media streaming",
          "- File sharing",
          "- Print sharing",
          "- Gigabit NIC",
          "- RAID array"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.10,
    bullets: [
      {
        "title": "• Types",
        "subBullets": [
          "- LCD",
          "- TN vs. IPS",
          "- Fluorescent vs. LED backlighting",
          "- Plasma",
          "- Projector",
          "- OLED"
        ]
      },
      {
        "title": "• Refresh/frame rates",
        "subBullets": []
      },
      {
        "title": "• Resolution",
        "subBullets": []
      },
      {
        "title": "• Native resolution",
        "subBullets": []
      },
      {
        "title": "• Brightness/lumens",
        "subBullets": []
      },
      {
        "title": "• Analog vs. digital",
        "subBullets": []
      },
      {
        "title": "• Privacy/antiglare filters",
        "subBullets": []
      },
      {
        "title": "• Multiple displays",
        "subBullets": []
      },
      {
        "title": "• Aspect ratios",
        "subBullets": [
          "- 16:9, 16:10, 4:3"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.11,
    bullets: [
      {
        "title": "• Display connector types",
        "subBullets": [
          "- DVI-D, DVI-I, DVI-A",
          "- DisplayPort",
          "- RCA",
          "- HD15 (i.e., DE15 or DB15)",
          "- BNC",
          "- miniHDMI, miniDin-6"
        ]
      },
      {
        "title": "• Display cable types",
        "subBullets": [
          "- HDMI, DVI, VGA",
          "- Component",
          "- Composite",
          "- Coaxial"
        ]
      },
      {
        "title": "• Device cables and connectors",
        "subBullets": [
          "- SATA, eSATA",
          "- USB",
          "- Firewire (IEEE1394)",
          "- PS/2",
          "- Audio"
        ]
      },
      {
        "title": "• Adapters and convertors",
        "subBullets": [
          "- DVI to HDMI ",
          "- USB A to USB B",
          "- USB to Ethernet",
          "- DVI to VGA",
          "- Thunderbolt to DVI",
          "- PS/2 to USB",
          "- HDMI to VGA"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.12,
    bullets: [
      {
        "title": "• Input devices",
        "subBullets": [
          "- Mouse",
          "- Keyboard",
          "- Scanner",
          "- Barcode reader",
          "- Biometric devices",
          "- Game pads",
          "- Joysticks",
          "- Digitizer",
          "- Motion sensor",
          "- Touchpads",
          "- Smart card readers",
          "- Digital cameras",
          "- Microphone",
          "- Webcam",
          "- Camcorder"
        ]
      },
      {
        "title": "• Output devices",
        "subBullets": [
          "- Printers",
          "- Speakers",
          "- Display devices"
        ]
      },
      {
        "title": "• Input & output devices",
        "subBullets": [
          "- Touch screen",
          "- KVM",
          "- Smart TV",
          "- Set-top box",
          "- MIDI-enabled devices"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.13,
    bullets: [
      {
        "title": "• Use appropriate drivers for a given operating system",
        "subBullets": []
      },
      {
        "title": "• Configuration settings",
        "subBullets": [
          "- Duplex",
          "- Collate",
          "- Orientation",
          "- Quality"
        ]
      },
      {
        "title": "• Device sharing (Wired)",
        "subBullets": [
          "- USB",
          "- Serial",
          "- Ethernet"
        ]
      },
      {
        "title": "• Device sharing (Wireless)",
        "subBullets": [
          "- Bluetooth",
          "- 802.11 (a/b/g/n/ac)",
          "- Infrastructure vs. ad hoc",
          "- Integrated print server (hardware)",
          "- Cloud printing/remote printing"
        ]
      },
      {
        "title": "• Public/shared devices",
        "subBullets": [
          "- Sharing local/networked ",
          "- TCP/Bonjour/AirPrint",
          "- Data privacy",
          "- User auth on the device",
          "- Hard drive caching"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.14,
    bullets: [
      {
        "title": "• Laser",
        "subBullets": [
          "- Imaging drum, fuser assembly, ",
          "- transfer belt, transfer roller ",
          "- pickup rollers, separate pads, ",
          "- duplexing assembly"
        ]
      },
      {
        "title": "• Imaging process",
        "subBullets": [
          "- processing, charging, exposing",
          "- developing, transferring ",
          "- fusing and cleaning"
        ]
      },
      {
        "title": "• Inkjet",
        "subBullets": [
          "- Ink cartridge, print head",
          "- roller, feeder ",
          "- duplexing assembly, carriage and belt",
          "- Calibration"
        ]
      },
      {
        "title": "• Thermal",
        "subBullets": [
          "- Feed assembly, heating element",
          "- Special thermal paper"
        ]
      },
      {
        "title": "• Impact",
        "subBullets": [
          "- Print head, ribbon, tractor feed",
          "- Impact paper"
        ]
      },
      {
        "title": "• Virtual",
        "subBullets": [
          "- Print to file",
          "- Print to PDF",
          "- Print to XPS",
          "- Print to image"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.15,
    bullets: [
      {
        "title": "• Laser",
        "subBullets": [
          "- Replacing toner, applying",
          "- Maintenance kit, calibration",
          "- Cleaning"
        ]
      },
      {
        "title": "• Thermal",
        "subBullets": [
          "- Replace paper,",
          "- Clean heating element",
          "- Remove debris"
        ]
      },
      {
        "title": "• Impact",
        "subBullets": [
          "- Replace ribbon, replace",
          "- Print head, Replace paper"
        ]
      },
      {
        "title": "• Inkjet",
        "subBullets": [
          "- Clean heads",
          "- Replace cartridges",
          "- Calibration, clear jams"
        ]
      }
    ]
  }
  ];

/**
 * DOMAIN: 2.0 Networking
 */
const DOMAIN_TWO: Bullet[] = [
  {
    objectiveNumber: 2.1,
    bullets: [
      {
        "title": "• Fiber",
        "subBullets": [
          "- Connectors: SC, ST and LC"
        ]
      },
      {
        "title": "• Twisted Pair",
        "subBullets": [
          "- Connectors: RJ-11, RJ-45",
          "- Wiring standards: T568A, T568B"
        ]
      },
      {
        "title": "• Coaxial",
        "subBullets": [
          "- Connectors: BNC, F-connector"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.2,
    bullets: [
      {
        "title": "• Fiber",
        "subBullets": [
          "- Types (single-mode vs. multi-mode)",
          "- Speed and transmission limitations"
        ]
      },
      {
        "title": "• Twisted pair Types",
        "subBullets": [
          "- STP, UTP, Cat 3,",
          "- Cat 5, Cat 5e  ",
          "- Cat 6, Cat 6e, Cat 7",
          "- Plenum, PVC ",
          "- Speed and transmission limitations",
          "- Splitters and effects on signal quality"
        ]
      },
      {
        "title": "• Coaxial",
        "subBullets": [
          "- Types: RG-6, RG-59",
          "- Speed and transmission limitations",
          "- Splitters and effects on signal quality"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.3,
    bullets: [
      {
        "title": "• IPv4 vs. IPv6",
        "subBullets": []
      },
      {
        "title": "• Public vs. private vs. APIPA/link local",
        "subBullets": []
      },
      {
        "title": "• Static vs. dynamic",
        "subBullets": []
      },
      {
        "title": "• Client-side DNS settings",
        "subBullets": []
      },
      {
        "title": "• Client-side DHCP",
        "subBullets": []
      },
      {
        "title": "• Subnet mask vs. CIDR",
        "subBullets": []
      },
      {
        "title": "• Gateway",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.4,
    bullets: [
      {
        "title": "• Ports",
        "subBullets": [
          "- 21 – FTP, 22 – SSH, 23 – TELNET",
          "- 25 – SMTP, 53 – DNS, 80 – HTTP",
          "- 110 – POP3, 143 – IMAP, 443 – HTTPS",
          "- 3389 – RDP 137-139 – NetBIOS/NetBT",
          "- 445 – SMB/CIFS 427 – SLP 548 – AFP"
        ]
      },
      {
        "title": "• Protocols",
        "subBullets": [
          "- DHCP, DNS, LDAP",
          "- SNMP, SMB, CIFS",
          "- SSH, AFP"
        ]
      },
      {
        "title": "• TCP vs. UDP",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.5,
    bullets: [
      {
        "title": "• Standards",
        "subBullets": [
          "- 802.11 (a/b/g/n/ac)",
          "- Speeds, distances and frequencies"
        ]
      },
      {
        "title": "• Encryption types",
        "subBullets": [
          "- WEP, WPA, WPA2, TKIP, AES"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.6,
    bullets: [
      {
        "title": "• Channels",
        "subBullets": []
      },
      {
        "title": "• Port forwarding, port triggering",
        "subBullets": []
      },
      {
        "title": "• DHCP (on/off)",
        "subBullets": []
      },
      {
        "title": "• DMZ",
        "subBullets": []
      },
      {
        "title": "• NAT/DNAT",
        "subBullets": []
      },
      {
        "title": "• Basic QoS",
        "subBullets": []
      },
      {
        "title": "• Firmware",
        "subBullets": []
      },
      {
        "title": "• UPnP",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.7,
    bullets: [
      {
        "title": "• Internet connection types",
        "subBullets": [
          "- Cable, DSL, Dial-up",
          "- Fiber, Satellite",
          "- ISDN, Cellular",
          "- Tethering",
          "- Mobile hotspot",
          "- Line-of-sight wireless Internet service"
        ]
      },
      {
        "title": "• Network Types",
        "subBullets": [
          "- LAN, WAN",
          "- PAN, MAN"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.8,
    bullets: [
      {
        "title": "• Hub",
        "subBullets": []
      },
      {
        "title": "• Switch",
        "subBullets": []
      },
      {
        "title": "• Router",
        "subBullets": []
      },
      {
        "title": "• Access point",
        "subBullets": []
      },
      {
        "title": "• Bridge",
        "subBullets": []
      },
      {
        "title": "• Modem",
        "subBullets": []
      },
      {
        "title": "• Firewall",
        "subBullets": []
      },
      {
        "title": "• Patch panel",
        "subBullets": []
      },
      {
        "title": "• Repeaters/extenders",
        "subBullets": []
      },
      {
        "title": "• Ethernet over Power",
        "subBullets": []
      },
      {
        "title": "• Power over Ethernet injector",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.9,
    bullets: [
      {
        "title": "• Crimper",
        "subBullets": []
      },
      {
        "title": "• Cable stripper",
        "subBullets": []
      },
      {
        "title": "• Multimeter",
        "subBullets": []
      },
      {
        "title": "• Tone generator and probe",
        "subBullets": []
      },
      {
        "title": "• Cable tester",
        "subBullets": []
      },
      {
        "title": "• Loopback plug",
        "subBullets": []
      },
      {
        "title": "• Punchdown tool",
        "subBullets": []
      },
      {
        "title": "• WiFi analyzer",
        "subBullets": []
      }
    ]
  }
];

/**
 * DOMAIN: 3.0 Mobile Devices
 */
const DOMAIN_THREE: Bullet[] = [
  {
    objectiveNumber: 3.1,
    bullets: [
      {
        "title": "• Expansion options",
        "subBullets": [
          "- Expresscard /34 ",
          "- Expresscard /54",
          "- SODIMM, Flash"
        ]
      },
      {
        "title": "•Ports/Adapters",
        "subBullets": [
          "- Thunderbolt, DisplayPort",
          "- USB to RJ-45 dongle",
          "- USB to WiFi dongle",
          "- USB to Bluetooth",
          "- USB optical drive"
        ]
      },
      {
        "title": "• Hardware/device replacement",
        "subBullets": [
          "- Keyboard, Hard drive",
          "- SSD vs. hybrid vs. magnetic disk",
          "- 1.8in vs. 2.5in",
          "- Memory, Smart card reader",
          "- Optical drive, Wireless card",
          "- Mini-PCIe, Screen",
          "- DC jack, Battery",
          "- Touchpad, Plastics/frames",
          "- Speaker, System board, CPU"
        ]
      }
    ]
  },
  {
    objectiveNumber: 3.2,
    bullets: [
      {
        "title": "• Types",
        "subBullets": [
          "- LCD",
          "- TN vs. IPS",
          "- Fluorescent vs. LED backlighting",
          "- OLED"
        ]
      },
      {
        "title": "• WiFi antenna connector/placement",
        "subBullets": []
      },
      {
        "title": "• Webcam",
        "subBullets": []
      },
      {
        "title": "• Microphone",
        "subBullets": []
      },
      {
        "title": "• Inverter",
        "subBullets": []
      },
      {
        "title": "• Digitizer",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.3,
    bullets: [
      {
        "title": "• Special function keys",
        "subBullets": [
          "- Dual displays",
          "- Wireless (on/off)",
          "- Cellular (on/off)",
          "- Volume settings",
          "- Screen brightness",
          "- Bluetooth (on/off)",
          "- Keyboard backlight",
          "- Touchpad (on/off)",
          "- Screen orientation",
          "- Media options (fast forward/rewind)",
          "- GPS (on/off)",
          "- Airplane mode "
        ]
      },
      {
        "title": "• Docking station",
        "subBullets": []
      },
      {
        "title": "• Physical laptop lock and cable lock",
        "subBullets": []
      },
      {
        "title": "• Rotating/removable screens",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.4,
    bullets: [
      {
        "title": "• Tablets",
        "subBullets": []
      },
      {
        "title": "• Smartphones",
        "subBullets": []
      },
      {
        "title": "• Wearable technology devices",
        "subBullets": [
          "- Smart watches",
          "- Fitness monitors",
          "- Glasses and headsets"
        ]
      },
      {
        "title": "• Phablets",
        "subBullets": []
      },
      {
        "title": "• e-readers",
        "subBullets": []
      },
      {
        "title": "• Smart camera",
        "subBullets": []
      },
      {
        "title": "• GPS",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.5,
    bullets: [
      {
        "title": "• Connection types",
        "subBullets": [
          "- NFC, MicroUSB/miniUSB",
          "- Lightning",
          "- Bluetooth, IR",
          "- Hotspot/tethering"
        ]
      },
      {
        "title": "• Accessories",
        "subBullets": [
          "- Headsets, Speakers",
          "- Game pads",
          "- Docking stations",
          "- Extra battery packs/battery chargers",
          "- Protective covers/water proofing",
          "- Credit card readers",
          "- Memory/MicroSD"
        ]
      },
      {
        "title": "• Proprietary vendor-specific ports",
        "subBullets": []
      }
    ]
  }
];

/**
 * DOMAIN: 4.0 Mobile Devices
 */
const DOMAIN_FOUR: Bullet[] = [
  {
    objectiveNumber: 4.1,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Unexpected shutdowns",
          "- System lockups",
          "- POST code beeps",
          "- Blank screen on bootup",
          "- BIOS time and settings resets",
          "- Attempts to boot to incorrect device",
          "- Continuous reboots",
          "- No power",
          "- Overheating",
          "- Loud noise",
          "- Intermittent device failure",
          "- Fans spin – no power to other devices",
          "- Indicator lights",
          "- Smoke ",
          "- Burning smell",
          "- Proprietary crash screens "
        ]
      },
      {
        "title": "  (BSOD/pin wheel)",
        "subBullets": [
          "- Distended capacitors"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Multimeter",
          "- Power supply tester",
          "- Loopback plugs",
          "- POST card/USB"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.2,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Read/write failure",
          "- Slow performance",
          "- Loud clicking noise",
          "- Failure to boot",
          "- Drive not recognized",
          "- OS not found",
          "- RAID not found",
          "- RAID stops working",
          "- Proprietary crash screens (BSOD)",
          "- S.M.A.R.T. errors"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Screwdriver",
          "- External enclosures",
          "- CHKDSK",
          "- FORMAT",
          "- File recovery software",
          "- Bootrec",
          "- DiskPart",
          "- Defragmentation tool"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.3,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- VGA mode",
          "- No image on screen",
          "- Overheat shutdown",
          "- Dead pixels",
          "- Artifacts",
          "- Color patterns incorrect",
          "- Dim image",
          "- Flickering image",
          "- Distorted image",
          "- Distorted geometry",
          "- Burn-in",
          "- Oversized images and icons"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.4,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- No connectivity",
          "- APIPA/link local address",
          "- Limited connectivity",
          "- Local connectivity",
          "- Intermittent connectivity",
          "- IP conflict",
          "- Slow transfer speeds ",
          "- Low RF signal",
          "- SSID not found"
        ]
      },
      {
        "title": "• Hardware tools",
        "subBullets": [
          "- Cable tester",
          "- Loopback plug",
          "- Punchdown tools",
          "- Tone generator and probe",
          "- Wire strippers",
          "- Crimper",
          "- Wireless locator"
        ]
      },
      {
        "title": "• Command line tools",
        "subBullets": [
          "- PING",
          "- IPCONFIG/IFCONFIG",
          "- TRACERT",
          "- NETSTAT",
          "- NBTSTAT",
          "- NET",
          "- NETDOM",
          "- NSLOOKUP"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.5,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- No display",
          "- Dim display",
          "- Flickering display",
          "- Sticking keys",
          "- Intermittent wireless",
          "- Battery not charging",
          "- Ghost cursor/pointer drift",
          "- No power",
          "- Num lock indicator lights",
          "- No wireless connectivity",
          "- No Bluetooth connectivity",
          "- Cannot display to external monitor",
          "- Touchscreen non-responsive",
          "- Apps not loading",
          "- Slow performance",
          "- Unable to decrypt email",
          "- Extremely short battery life",
          "- Overheating",
          "- Frozen system",
          "- No sound from speakers",
          "- GPS not functioning",
          "- Swollen battery"
        ]
      },
      {
        "title": "• Disassembling processes for proper re-assembly",
        "subBullets": [
          "- Document/label cable and screw locations",
          "- Organize parts",
          "- Refer to manufacturer resources",
          "- Use appropriate hand tools"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.6,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Streaks",
          "- Faded prints ",
          "- Ghost images",
          "- Toner not fused to the paper",
          "- Creased paper",
          "- Paper not feeding",
          "- Paper jam",
          "- No connectivity",
          "- Garbled characters on paper",
          "- Vertical lines on page",
          "- Backed up print queue",
          "- Low memory errors",
          "- Access denied",
          "- Printer will not print",
          "- Color prints in wrong print color",
          "- Unable to install printer",
          "- Error codes",
          "- Printing blank pages",
          "- No image on printer display"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Maintenance kit",
          "- Toner vacuum",
          "- Compressed air",
          "- Printer spooler"
        ]
      }
    ]
  }
];

export const BULLETS: Bullet[] = [
  ...DOMAIN_ONE, ...DOMAIN_TWO, ...DOMAIN_THREE, ...DOMAIN_FOUR
];


