export default function CourseCard({ course, pending = false, onSelect }) {
  return <button className="course-card" onClick={() => onSelect(course)} aria-label={`Abrir curso ${course.title}`}>
    <img src={course.image} alt="" loading="lazy" />
    <div className="card-caption">{course.title}</div>
    {pending && <div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div>}
  </button>
}
