// This file would contain all the data for the dashboard

export const satisfactionData = [
    { year: '2022', Workshops: 94.8, Counseling: 90.4, CallCenter: 75.0, Website: 82.7, Overall: 85.7 },
    { year: '2023', Workshops: 90.9, Counseling: 90.6, CallCenter: 75.1, Website: 82.1, Overall: 84.7 },
    { year: '2024', Workshops: 98.3, Counseling: 90.2, CallCenter: 72.2, Website: 80.6, Overall: 85.3 },
    { year: '2025', Workshops: 87.9, Counseling: 99.6, CallCenter: 71.8, Website: 83.8, Overall: 85.8 }
  ];
  
  export const dissatisfactionData = [
    { year: '2022', Workshops: 1.3, Counseling: 6.8, CallCenter: 9.3, Website: 9.0, Overall: 6.6 },
    { year: '2023', Workshops: 2.0, Counseling: 9.2, CallCenter: 9.4, Website: 9.6, Overall: 7.6 },
    { year: '2024', Workshops: 0.0, Counseling: 0.3, CallCenter: 10.4, Website: 10.9, Overall: 5.4 },
    { year: '2025', Workshops: 5.0, Counseling: 0.4, CallCenter: 16.8, Website: 16.2, Overall: 9.6 }
  ];
  
  export const benchmarkData = [
    { channel: 'Workshops', satisfied: 87.9, green: 90.0, red: 88.2, status: 'Below Red' },
    { channel: 'Counseling', satisfied: 99.6, green: 93.3, red: 92.0, status: 'Above Green' },
    { channel: 'Call Center', satisfied: 71.8, green: 76.1, red: 73.9, status: 'Below Red' },
    { channel: 'Website', satisfied: 83.8, green: 83.2, red: 81.7, status: 'Above Green' }
  ];
  
  export const complaintData = [
    { year: '2022', totalComplaints: 301, 'Communication Problems': 162, 'Service Delays': 64, 'Website Issues': 55, 'Staff Behavior': 30, 'Process Confusion': 26, 'Financial Issues': 26, 'Technical Issues': 22, 'Policy Concerns': 22 },
    { year: '2023', totalComplaints: 542, 'Communication Problems': 310, 'Service Delays': 130, 'Website Issues': 82, 'Staff Behavior': 61, 'Process Confusion': 47, 'Financial Issues': 37, 'Technical Issues': 48, 'Policy Concerns': 50 },
    { year: '2024', totalComplaints: 578, 'Communication Problems': 304, 'Service Delays': 123, 'Website Issues': 116, 'Staff Behavior': 51, 'Process Confusion': 64, 'Financial Issues': 60, 'Technical Issues': 64, 'Policy Concerns': 57 },
    { year: '2025', totalComplaints: 133, 'Communication Problems': 70, 'Service Delays': 39, 'Website Issues': 23, 'Staff Behavior': 10, 'Process Confusion': 11, 'Financial Issues': 16, 'Technical Issues': 17, 'Policy Concerns': 14 }
  ];
  
  export const topThemes = [
    { theme: 'Communication Problems', count: 846 },
    { theme: 'Service Delays', count: 356 },
    { theme: 'Website Issues', count: 276 },
    { theme: 'Staff Behavior', count: 152 },
    { theme: 'Technical Issues', count: 151 },
    { theme: 'Process Confusion', count: 148 },
    { theme: 'Policy Concerns', count: 143 },
    { theme: 'Financial Issues', count: 139 }
  ];
  
  export const tierData = [
    { year: '2022', tier1: 241, tier2: 60, total: 301 },
    { year: '2023', tier1: 416, tier2: 126, total: 542 },
    { year: '2024', tier1: 452, tier2: 126, total: 578 },
    { year: '2025', tier1: 106, tier2: 27, total: 133 }
  ];
  
  export const tierComplaintTypes = [
    { type: 'Communication Problems', tier1: 678, tier2: 168 },
    { type: 'Service Delays', tier1: 295, tier2: 61 },
    { type: 'Website Issues', tier1: 214, tier2: 62 },
    { type: 'Technical Issues', tier1: 124, tier2: 27 },
    { type: 'Staff Behavior', tier1: 116, tier2: 36 },
    { type: 'Process Confusion', tier1: 103, tier2: 45 },
    { type: 'Policy Concerns', tier1: 89, tier2: 54 },
    { type: 'Financial Issues', tier1: 92, tier2: 47 }
  ];
  