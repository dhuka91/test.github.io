import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start space-x-4">
        {Icon && <div className="text-blue-600 dark:text-blue-400"><Icon size={24} /></div>}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600">
            Use Tool
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;