import CourseCard from './CourseCard'
export default function CourseSection({ title, courses, pending, onSelect }) {
  return <section className="course-section">
    <h2>{title}</h2>
    <div className="course-row">
      {courses.map(course => <CourseCard key={course.id} course={course} pending={pending} onSelect={onSelect} />)}
    </div>
  </section>
}
