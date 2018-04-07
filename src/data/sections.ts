import { Section } from '../models/section';

export const SECTIONS: Section[] = [
  {
    domainId: 0,
    objectives: [
      {sectionNumber: 1.1, title: 'Given a scenario, configure settings and use BIOS/UEFI tools on a PC.'},
      {sectionNumber: 1.2, title: 'Explain the importance of motherboard components, \n' +
        'their purpose and properties.'},
      {sectionNumber: 1.3, title: 'Compare and contrast various RAM types and their features.'},
      {sectionNumber: 1.4, title: 'Install and configure PC expansion cards.'},
      {sectionNumber: 1.5, title: 'Install and configure storage devices and use appropriate media.'},
      {sectionNumber: 1.6, title: 'Install various types of CPUs and apply the appropriate \n' +
        'cooling methods.'},
      {sectionNumber: 1.7, title: 'Compare and contrast various PC connection interfaces, \n' +
        'their characteristics and purpose.'},
      {sectionNumber: 1.8, title: 'Install a power supply based on given specifications.'},
      {sectionNumber: 1.9, title: 'Given a scenario, select the appropriate components for a custom PC configuration to meet customer specifications or needs.'},
      {sectionNumber: '1.10', title: 'Compare and contrast types of display devices and their features.'},
      {sectionNumber: 1.11, title: 'Identify common PC connector types and associated cables.'},
      {sectionNumber: 1.12, title: 'Install and configure common peripheral devices.'},
      {sectionNumber: 1.13, title: 'Install SOHO multifunction device/printers and configure appropriate settings.'},
      {sectionNumber: 1.14, title: 'Compare and contrast differences between the various print technologies and the associated imaging process.'},
      {sectionNumber: 1.15, title: 'Given a scenario, perform appropriate printer maintenance.'},
    ]
  },
  {
    domainId: 1,
    objectives: [
      {sectionNumber: 2.1, title: 'Identify the various types of network cables and connectors.'},
      {sectionNumber: 2.2, title: 'Compare and contrast the characteristics of connectors and cabling.'},
      {sectionNumber: 2.3, title: 'Explain the properties and characteristics of TCP/IP.'},
      {sectionNumber: 2.4, title: 'Explain common TCP and UDP ports, protocols and their purpose.'},
      {sectionNumber: 2.5, title: 'Compare and contrast various WiFi networking \n' +
        'standards and encryption types.'},
      {sectionNumber: 2.6, title: 'Given a scenario, install and configure SOHO wireless/\n' +
        'wired router and apply appropriate settings.'},
      {sectionNumber: 2.7, title: 'Compare and contrast Internet connection types, \n' +
        'network types and their features.'},
      {sectionNumber: 2.8, title: 'Compare and contrast network architecture \n' +
        'devices, their functions and features.'},
      {sectionNumber: 2.9, title: 'Given a scenario, use appropriate networking tools.'},
    ]
  },
  {
    domainId: 2,
    objectives: [
      {sectionNumber: 3.1, title: 'Install and configure laptop hardware and components.'},
      {sectionNumber: 3.2, title: 'Explain the function of components within the display of a laptop.'},
      {sectionNumber: 3.3, title: 'Given a scenario, use appropriate laptop features.'},
      {sectionNumber: 3.4, title: 'Explain the characteristics of various types of other mobile devices.'},
      {sectionNumber: 3.5, title: 'Compare and contrast accessories and ports of other mobile devices.'}
    ]
  },
  {
    domainId: 3,
    objectives: [
      {sectionNumber: 4.1, title: 'Given a scenario, troubleshoot common problems related to \n' +
        'motherboards, RAM, CPU and power with appropriate tools.'},
      {sectionNumber: 4.2, title: 'Given a scenario, troubleshoot hard drives and \n' +
        'RAID arrays with appropriate tools.'},
      {sectionNumber: 4.3, title: 'Given a scenario, troubleshoot common video, \n' +
        'projector and display issues.'},
      {sectionNumber: 4.4, title: 'Given a scenario, troubleshoot wired and wireless \n' +
        'networks with appropriate tools.'},
      {sectionNumber: 4.5, title: 'Given a scenario, troubleshoot and repair common mobile \n' +
        'device issues while adhering to the appropriate procedures.'},
      {sectionNumber: 4.6, title: 'Given a scenario, troubleshoot printers with appropriate tools.'},
    ]
  }
];
