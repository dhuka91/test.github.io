import { FileText, Image, Key, Palette, Bot, DivideIcon as LucideIcon } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const textTools: Tool[] = [
  {
    id: 'text-1',
    title: 'Text Editor',
    description: 'A powerful text editor with syntax highlighting and formatting options.',
    icon: FileText
  },
  {
    id: 'text-2',
    title: 'Format Converter',
    description: 'Convert between different text formats including markdown, HTML, and plain text.',
    icon: FileText
  }
];

export const aiTools: Tool[] = [
  {
    id: 'ai-1',
    title: 'AI Writer',
    description: 'Generate high-quality content using advanced AI technology.',
    icon: Bot
  },
  {
    id: 'ai-2',
    title: 'Text Summarizer',
    description: 'Automatically summarize long texts while keeping key information.',
    icon: Bot
  }
];

export const designTools: Tool[] = [
  {
    id: 'design-1',
    title: 'Logo Maker',
    description: 'Create professional logos with our easy-to-use design tool.',
    icon: Palette
  },
  {
    id: 'design-2',
    title: 'Color Palette',
    description: 'Generate beautiful color combinations for your designs.',
    icon: Palette
  }
];

export const imageTools: Tool[] = [
  {
    id: 'image-1',
    title: 'Image Converter',
    description: 'Convert images between different formats (PNG, JPG, WebP, etc.).',
    icon: Image
  },
  {
    id: 'image-2',
    title: 'Image Compressor',
    description: 'Reduce image file size while maintaining quality.',
    icon: Image
  }
];

export const keywordTools: Tool[] = [
  {
    id: 'keyword-1',
    title: 'Keyword Research',
    description: 'Find the best keywords for your content and SEO strategy.',
    icon: Key
  },
  {
    id: 'keyword-2',
    title: 'Keyword Density',
    description: 'Analyze keyword usage and optimize content for SEO.',
    icon: Key
  }
];