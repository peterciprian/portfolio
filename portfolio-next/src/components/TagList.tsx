type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}