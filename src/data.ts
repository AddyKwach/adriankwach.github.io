import { Certification, BlogPost, Project } from './types';

export const CertificationsData: Certification[] = [
  {
    id: 'ccna',
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco Systems',
    issueDate: 'October 2024',
    expiryDate: 'October 2027',
    status: 'active',
    credentialId: 'CSCO14482091',
    badgeColor: 'from-blue-600 to-indigo-600',
    description: 'Establishes fundamental routing and switching foundations critical for industrial networking and resilient infrastructure networks.',
    topics: ['Routing & Switching', 'Subnetting & VLANs', 'OSPF Dynamic Paths', 'Port Security', 'Automation Basics']
  },
  {
    id: 'nse3',
    name: 'Fortinet Network Security Associate (NSE 3 - OT)',
    issuer: 'Fortinet',
    issueDate: 'June 2026',
    expiryDate: 'June 2028',
    status: 'active',
    credentialId: 'FT-NSE3-8829471',
    badgeColor: 'from-amber-600 to-amber-700',
    description: 'Validates basic proficiency in operational technology (OT) parameters, SCADA environments, and critical assets security.',
    topics: ['Industrial Security Fabric', 'OT Firewall Rugged series', 'Protocol Security', 'SCADA vulnerability shield']
  },
  {
    id: 'ccnp-scor',
    name: 'CCNP Security Core (SCOR)',
    issuer: 'Cisco Systems',
    issueDate: 'In Progress (Target: Aug 2026)',
    status: 'in-progress',
    badgeColor: 'from-purple-600 to-pink-600',
    description: 'Evaluating secure networks architecture, identity protection, and digital endpoints boundaries.',
    topics: ['Core Threat Protections', 'IEEE 802.1X Access Control', 'Identity Services Engine (ISE)', 'VPN Tunnel Systems']
  }
];

export const ProjectsData: Project[] = [
  {
    id: 'project-substation-segmentation',
    title: 'Micro-Segmentation of Power Substation Networks',
    category: 'OT & Critical Infrastructure Security',
    description: 'A project designed to segregate critical energy substation terminals. It secures communications between outstation field RTUs and intelligent electronic devices, preventing unauthorized or stray lateral telemetry signals using Cisco technology.',
    duration: 'April - May 2026',
    role: 'Student Engineer',
    technologies: ['Cisco ISE', 'Industrial Ethernet Switches', '802.1X', 'IEC 61850 VLAN Segregation'],
    objectives: [
      'Isolate high-voltage monitoring devices to custom virtual local loops.',
      'Enforce role-based access so only authenticated technicians can update register files.',
      'Establish MAC Authentication Bypass (MAB) with certificate-based EAP-TLS as a fallback.'
    ],
    architecture: 'Substation star topology linking outstation engineering switch terminals. Authenticated equipment connects to custom security-mapped VLAN segments while unverified hardware is immediately put into a restricted quarantine segment.',
    configSnippets: [
      {
        title: 'Cisco Industrial Switch Access Configuration',
        description: 'Binds a SCADA telemetry terminal interface to 802.1X security templates with automated dynamic backup authentication.',
        language: 'ios',
        code: `! Enable port-based identity control
aaa system-auth-control
dot1x system-auth-control

interface FastEthernet1/1
 description Substation_Control_Terminal
 switchport mode access
 dot1x pae authenticator
 authentication fallback mab
 authentication host-mode multi-auth
 authentication port-control auto
 mab`
      }
    ],
    verificationSteps: [
      'Check active terminal clearance with CLI: "show authentication sessions".',
      'Verify appropriate separation of operational segments using "show vlan brief".'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-ot-fabric',
    title: 'Fortinet OT Security Fabric Implementation',
    category: 'Smart Grid Networks',
    description: 'Designed a security mesh layout to protect outstation power sensors. This introduces localized deep packet inspection to analyze protocol transactions, ensuring only authorized parameters can write to electrical grid controllers.',
    duration: 'May - June 2026',
    role: 'OT Security designer',
    technologies: ['FortiGate-Rugged', 'Modbus TCP Filter', 'DNP3 Application Control', 'OT Security Fabric'],
    objectives: [
      'Block unauthorized Modbus write commands while allowing routine monitoring checks.',
      'Protect remote generation controllers from malicious load taps or remote outages.',
      'Provide clean centralized event feedback via telemetry analytics dashboards.'
    ],
    configSnippets: [
      {
        title: 'FortiOS Application Control Custom Rule',
        description: 'Defines an inspection signature to drop malicious and unauthorized write commands on ports running Modbus registries.',
        language: 'fortios',
        code: `config application custom
    edit "Modbus_Read_Only_Restriction"
        set signature "F-SBID( --attack_id 801122; --name \"Modbus.Write.Block\"; --protocol tcp; --service MODBUS; --pattern \"|01 05|\" --context payload; )"
        set action block
    next
end`
      }
    ],
    verificationSteps: [
      'Send raw write test commands to Modbus controllers and confirm automatic blocks.',
      'Review operational status markers inside the central security monitoring portal.'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
  }
];

export const BlogsData: BlogPost[] = [
  {
    id: 'grid-security-basics',
    title: 'Securing the Smart Grid: Bridges Between EEE and Cybersecurity',
    category: 'Smart Grid & Cyber-Security',
    date: 'June 18, 2026',
    readingTime: '5 min read',
    summary: 'A friendly look into how modern electrical power networks intersect with networks security, explaining how electrical engineering students can easily approach industrial security standards.',
    tags: ['Smart Grid', 'Electrical Engineering', 'SCADA', 'Critical Infrastructure'],
    difficulty: 'Beginner',
    content: `### Checking out my journey in Critical Infrastructure Security

Hey, welcome to my blog page! If you are studying **Electrical and Electronic Engineering** or working around power networks, you might have noticed how digital they have become. Today, we do not just manage massive high-voltage lines, circuit breakers, and transformers with physical switches; we operate them using smart digital terminals, remote remote terminal units (RTUs), and SCADA platforms.

This digital upgrade makes our electric grid incredibly versatile, allowing smart automated power redistribution, grid integration of wind and solar sources, and lightning-fast fault isolation. But it also means **we need to secure the digital conduits** running these power systems!

---

### Connecting the Bits and the Volts

When I first started exploring this path at the University of Nairobi, I realized how critical dynamic networks are. If a communication line fails, or if a rogue signal tricks a transformer into tripping, it can cause physical blackouts. 

Here are the key points where electrical engineering and networking overlap:

1. **Path Redundancy (OSPF)**: If a physical line or overhead control fiber breaks, the network must failover immediately so remote dispatchers do not lose situational awareness.
2. **Layer-2 Integrity (Spanning Tree)**: Keeping redundant industrial substation rings free of loop storms.
3. **Deep Inspection (SCADA Protection)**: Ensuring firewalls understand protocols like Modbus or DNP3 to block unauthorized actions while allowing safe, real-time measurements to stream through.

It is crucial for us to bridge the classic power systems world with modern operational security practices to keep our critical infrastructures safe and always available!`
  },
  {
    id: 'about-substation-8021x',
    title: 'Simplifying Substation Segmentation with Cisco ISE',
    category: 'Network Security',
    date: 'June 10, 2026',
    readingTime: '4 min read',
    summary: 'How port-based authentication (802.1X) secures access to important controllers inside energy networks, keeping stray laptops isolated.',
    tags: ['Cisco ISE', '802.1X', 'OT Security', 'Substation Networks'],
    difficulty: 'Intermediate',
    content: `### Hey, check out my quick breakdown of substation port security!

Securing physical connection ports inside an electrical substation yards is quite different from securing a corporate office:
* Industrial PLCs and grid meters cannot sign in with a pop-up username and password.
* We cannot afford system downtimes because a security profile was misconfigured.

Instead, we use **MAC Authentication Bypass (MAB)** and certificate-based **802.1X EAP-TLS**. When a device connects to a switch port, the port requests authorization. Cisco ISE validates the device fingerprints (such as expected communication patterns and network vendor signatures) and dynamically assigns it to the appropriate logical segment.

If an unauthorized device (like an engineer's infected personal laptop) plugs into the switch, it is immediately quarantined, keeping our high-voltage control lines isolated from threats!`
  }
];

export const AboutMeContent = {
  headline: "Electrical Engineer & Smart Grid OT Security Specialist",
  aboutHeading: "Electrical and Electronic Engineering Student, Network Engineering and Security Professional",
  avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  academicText: "Hi, I am Adrian Kwach! Welcome to my tech and engineering journey. I am currently pursuing an Electrical and Electronic Engineering degree at the University of Nairobi, with a deep interest in securing cyber-physical systems, electrical grids, and critical industrial network pipelines.",
  cybersecText: "My core focus centers on the intersection of Operational Technology (OT) and core industrial security. I enjoy configuring Cisco systems, routing configurations, and Fortinet cybersecurity maps. My path is driven by understanding how standards like IEC 62443 can keep physical power infrastructure safe from digital anomalies.",
  socialText: "Between laboratory sessions and technical write-ups, I advocate for simplified, resilient engineering methods. I actively write friendly articles to help students and professionals understand SCADA security, remote control networks, and smart utility design."
};
