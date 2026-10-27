export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'web' | 'data' | 'tool'
  tags: string[]
  description: string
  bulletPoints: string[]
  githubUrl?: string
  liveDemoUrl?: string
  featuredMetric?: string
  highlight?: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  bullets: string[]
  technologies: string[]
  badge?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  period: string
  gradeOrDetail?: string
  category: 'cloud' | 'programming' | 'web' | 'specialized'
  iconName: string
}

export interface Achievement {
  id: string
  title: string
  subtitle: string
  year: string
  description: string
  badge: string
  highlight: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: {
    name: string
    level: string
    tags?: string
  }[]
}
