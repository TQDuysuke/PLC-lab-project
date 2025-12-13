export interface LabEquipment {
  id: string;
  name: string;
  description: string;
  quantity: number;
  imagePrompt: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  code?: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Corporate';
  description: string;
}

export interface ResearchDirection {
  id: string;
  title: string;
  description: string;
  imagePrompt: string;
}
