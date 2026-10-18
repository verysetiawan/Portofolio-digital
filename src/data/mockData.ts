import { Project, Article, Video } from '../types';

export const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Cybersecurity Audit Tool',
    category: 'Cybersecurity',
    summary: 'Automated vulnerability scanner for internal networks.',
    technologies: ['Python', 'Nmap', 'Bash'],
    imageUrl: '/src/assets/images/portfolio_cyber_1_1792340192090.jpg',
  },
  {
    id: '2',
    title: 'Enterprise Network Setup',
    category: 'Networking',
    summary: 'Design and implementation of a redundant office network.',
    technologies: ['MikroTik', 'OSPF', 'VLAN'],
    imageUrl: '/src/assets/images/portfolio_net_1_1792340192345.jpg',
  },
  {
    id: '3',
    title: 'LMS AlbeeTech Integration',
    category: 'Software Development',
    summary: 'Custom plugin development for existing LMS platform.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: '/src/assets/images/portfolio_soft_1_1792340192271.jpg',
  },
];

export const expertiseAreas = [
  { title: 'Cybersecurity', description: 'Hardening systems against modern threats.' },
  { title: 'Network Engineering', description: 'Robust, scalable infrastructure design.' },
  { title: 'Software Development', description: 'Custom tools and platform integration.' },
  { title: 'Education Technology', description: 'Building engaging learning experiences.' },
];

export const recentArticles: Article[] = [
  {
    id: '1',
    title: 'Memahami TCP Three-Way Handshake Menggunakan Wireshark',
    category: 'Networking',
    excerpt: 'Panduan mendalam untuk menganalisis jabat tangan TCP.',
    imageUrl: '/src/assets/images/article_featured_1_1792340192813.jpg',
    publishedAt: '2026-10-15',
    readingTime: '5 min',
  },
];

export const featuredVideos: Video[] = [
  {
    id: '1',
    title: 'Pengenalan Docker untuk Cybersecurity',
    description: 'Bagaimana kontainerisasi mempercepat pengujian keamanan.',
    thumbnailUrl: '/src/assets/images/video_thumb_1_1792340192563.jpg',
    category: 'Cybersecurity',
  },
];
