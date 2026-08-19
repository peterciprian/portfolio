import type { ExperienceItem } from "@/content/experience";
import { TagList } from "@/components/TagList";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  showResponsibilities?: boolean;
};

export function ExperienceTimeline({ items, showResponsibilities = false }: ExperienceTimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.company}-${item.period}`}>
          <div className="timeline-date">{item.period}</div>
          <div className="timeline-content">
            <h3>{item.role}</h3>
            <p>
              {item.company} / {item.product}
            </p>
            <b>{item.summary}</b>
        {showResponsibilities && item.responsibilities && (
          <ul>
            {item.responsibilities.map((resp) => (
              <li key={resp.slice(0, 10)}><p>{resp}</p></li>
            ))}
          </ul>
        )}
            <TagList items={item.stack} />
          </div>
        </article>
      ))}
    </div>
  );
}