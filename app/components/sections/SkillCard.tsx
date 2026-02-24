import type { Skill } from "@/types/skills";

interface SkillCardProps {
  skill: Skill;
  isCarousel?: boolean;
}

export default function SkillCard({ skill, isCarousel = false }: SkillCardProps) {
  const { categoryColor } = skill;

  // Get the color class for non-hex colors
  const getColorClass = (color: string): string => {
    if (color.startsWith('#')) return 'red';
    
    const colorMap: Record<string, string> = {
      'indigo': 'indigo',
       'fuchsia': 'fuchsia',
       'purple': 'purple',
        'orange': 'orange',
         'emerald': 'emerald',
      'cyan': 'cyan',
      'pink': 'pink',
      'amber': 'amber',
      'violet': 'violet',
      'green': 'green',
      'rose': 'rose',
      'blue': 'blue',
      'teal': 'teal',
      'lime': 'lime',
      'sky': 'sky'
    };
    return colorMap[color] || 'indigo';
  };

  // Get the skill pill class
  const getSkillPillClass = (color: string): string => {
    if (color.startsWith('#')) {
      return 'skill-red'; // Map hex to red class
    }
    
    const classMap: Record<string, string> = {
        'indigo': 'laravel-developer-skill-indigo',
      'fuchsia': 'laravel-developer-skill-fuchsia',      
      'orange': 'laravel-developer-skill-orange',
      'emerald': 'laravel-developer-skill-emerald',
      'purple': 'laravel-developer-skill-purple',
      'cyan': 'laravel-developer-skill-cyan',      
      'pink': 'laravel-developer-skill-pink',
      'amber': 'laravel-developer-skill-amber',
      'violet': 'laravel-developer-skill-violet',
      'green': 'laravel-developer-skill-green',
      'rose': 'laravel-developer-skill-rose',
      'blue': 'laravel-developer-skill-blue',
      'teal': 'laravel-developer-skill-teal',
      'lime': 'laravel-developer-skill-lime',
      'sky': 'laravel-developer-skill-sky'
      // 'indigo': 'skill-indigo',
      // 'fuchsia': 'skill-fuchsia',      
      // 'orange': 'skill-orange',
      // 'emerald': 'skill-emerald',
      // 'purple': 'skill-purple',
      // 'cyan': 'skill-cyan',      
      // 'pink': 'skill-pink',
      // 'amber': 'skill-amber',
      // 'violet': 'skill-violet',
      // 'green': 'skill-green',
      // 'rose': 'skill-rose',
      // 'blue': 'skill-blue',
      // 'teal': 'skill-teal',
      // 'lime': 'skill-lime',
      // 'sky': 'skill-sky'
    };
    
    return classMap[color] || 'laravel-developer-skill-indigo';
  };

  // Get the hover border class for grid mode
  const getHoverBorderClass = (color: string): string => {
    if (color.startsWith('#')) {
      return 'hex-hover-border';
    }
    
    const classMap: Record<string, string> = {
      'indigo': 'hover:border-indigo-500/50',
      'fuchsia': 'hover:border-fuchsia-500/50',
      'orange': 'hover:border-orange-500/50',
      'emerald': 'hover:border-emerald-300/50',
      'purple': 'hover:border-purple-500/50',
      'cyan': 'hover:border-cyan-500/50',
      'pink': 'hover:border-pink-500/50',
      'amber': 'hover:border-amber-500/50',
      'violet': 'hover:border-violet-500/50',
      'green': 'hover:border-green-500/50',
      'rose': 'hover:border-rose-500/50',
      'blue': 'hover:border-blue-500/50',
      'teal': 'hover:border-teal-500/50',
      'lime': 'hover:border-lime-500/50',
      'sky': 'hover:border-sky-500/50'
    };
    
    return classMap[color] || 'hover:border-white/50';
  };

  // Get carousel border class
  const getCarouselBorderClass = (color: string): string => {
    if (color.startsWith('#')) {
      return 'hex-carousel-card';
    }
    
    const classMap: Record<string, string> = {
      // 'indigo': 'indigo-carousel-card',
      // 'fuchsia': 'fuchsia-carousel-card',      
      // 'purple': 'purple-carousel-card',
      // 'cyan': 'cyan-carousel-card',
      // 'emerald': 'emerald-carousel-card',
      // 'orange': 'orange-carousel-card',
      // 'pink': 'pink-carousel-card',
      // 'amber': 'amber-carousel-card',
      // 'violet': 'violet-carousel-card',
      // 'green': 'green-carousel-card',
      // 'rose': 'rose-carousel-card',
      // 'blue': 'blue-carousel-card',
      // 'teal': 'teal-carousel-card',
      // 'lime': 'lime-carousel-card',
      // 'sky': 'sky-carousel-card'
       'indigo': 'laravel-developer-indigo-carousel-card',
      'fuchsia': 'laravel-developer-fuchsia-carousel-card',      
      'purple': 'laravel-developer-purple-carousel-card',
      'cyan': 'laravel-developer-cyan-carousel-card',
      'emerald': 'laravel-developer-emerald-carousel-card',
      'orange': 'laravel-developer-orange-carousel-card',
      'pink': 'laravel-developer-pink-carousel-card',
      'amber': 'laravel-developer-amber-carousel-card',
      'violet': 'laravel-developer-violet-carousel-card',
      'green': 'laravel-developer-green-carousel-card',
      'rose': 'laravel-developer-rose-carousel-card',
      'blue': 'laravel-developer-blue-carousel-card',
      'teal': 'laravel-developer-teal-carousel-card',
      'lime': 'laravel-developer-lime-carousel-card',
      'sky': 'laravel-developer-sky-carousel-card'
    };
    
    return classMap[color] || 'carousel-card';
  };

  const colorClass = getColorClass(categoryColor);
  const skillPillClass = getSkillPillClass(categoryColor);
  const hoverBorderClass = getHoverBorderClass(categoryColor);
  const carouselBorderClass = getCarouselBorderClass(categoryColor);
  const isHexColor = categoryColor.startsWith('#');

  // Build card classes
  const cardClasses = [
    'glass-panel',
    'p-8',
    'rounded-2xl',
    'border',
    'transition-all',
    'duration-500',
  ];

  if (isCarousel) {
    // Carousel mode - always show colored border
    cardClasses.push(carouselBorderClass);
  } else {
    // Grid mode - white border with hover effect
    cardClasses.push('border-white/10');
    cardClasses.push(hoverBorderClass);
  }

  // Style for hex colors
  const hexStyle: React.CSSProperties = isHexColor ? {
    '--category-color': categoryColor
  } as React.CSSProperties : {};

  return (
    <div 
      className={cardClasses.join(' ')}
      style={hexStyle}
      data-hex-color={isHexColor ? categoryColor : undefined}
    >
      <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
      <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
        {skill.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skill.skillsList.map((item, index) => (
          <span
            key={index}
            className={skillPillClass}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}