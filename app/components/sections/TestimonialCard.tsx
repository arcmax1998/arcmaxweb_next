import type { Testimonial } from "@/types/testimonial";

interface TestimonialTheme {
  text: string;
  gradient: string;
  borderHover: string;
}

export default function TestimonialCard({ t }: { t: Testimonial }) {
  // Parse the theme if it's stored as a JSON string
  const theme: TestimonialTheme = typeof t.theme === 'string' 
    ? JSON.parse(t.theme) 
    : t.theme;

  return (
    <div
      className={`laravel-developer-testimonial-card ${theme.borderHover}`}
    >
      <div className="laravel-developer-testimonial-header">
        <div
          className={`laravel-developer-testimonial-avatar bg-gradient-to-br ${theme.gradient}`}
        >
          <span className={`laravel-developer-testimonial-initials ${theme.text}`}>
            {t.initials}
          </span>
        </div>

        <div className="laravel-developer-testimonial-info">
          <h4 className="laravel-developer-testimonial-name">{t.name}</h4>
          <p className="laravel-developer-testimonial-role">{t.role}</p>
        </div>
      </div>

      <p className="laravel-developer-testimonial-text">
        “{t.text}”
      </p>

      <div className="laravel-developer-testimonial-footer">
        <span className="laravel-developer-testimonial-meta">
          {t.footer}
        </span>
      </div>
    </div>
  );
}